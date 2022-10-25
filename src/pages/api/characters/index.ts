import type { NextApiRequest, NextApiResponse } from "next"
import dbConnect from "lib/dbConnect"
import Character from "model/Character"
import NextCors from "nextjs-cors"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, {
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  })

  await dbConnect()

  const { method } = req

  switch (method) {
    case "GET":
      try {
        const { page = 1, perPage = 20 } = req.query
        let query = {}
        for (let key in req.query) {
          if (req.query[key] !== "") {
            //@ts-ignore
            query[key] = req.query[key]
          }
        }
        const characters = await Character.find(query)
          .skip(+perPage * (+page - 1))
          .select("name photoUrl school image imageSchool birthday damageType ")
          .lean()
          .limit(+perPage)
        res.status(200).json({ message: "success", data: characters })
      } catch (error) {
        res.status(400).json({  message: "error", data: error })
      }
      break
  }
}
