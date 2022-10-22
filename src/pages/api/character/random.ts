import type { NextApiRequest, NextApiResponse } from "next"
import dbConnect from "lib/dbConnect"
import Character from "model/Character"
import NextCors from "nextjs-cors"
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, { methods: ["GET", "HEAD"], origin: "*", optionsSuccessStatus: 200 })
  await dbConnect()
  const { method } = req
  switch (method) {
    case "GET":
      try {
        const { count = 1 } = req.query
        const characters = await Character.aggregate([
          { $sample: { size: +count } },
          {
            $project: {
              name: 1,
              _id: 1,
              names: 1,
              age: 1,
              school: 1,
              photoUrl: 1,
              imageSchool: 1,
              birthday: 1,
            },
          },
        ])
        res.status(200).json({ message: "success", data: characters })
      } catch (error) {
        res.status(400).json({ message: "error", data: error })
      }
      break
  }
}
