import Image from "next/image"
import Link from "next/link"
import type { NextPage } from "next"
import { Seo, Footer } from "components"

const names: string[] = ["Arius", "Asuna", "Hibiki"]

const Home: NextPage = () => {
  return (
    <div className='font-noto'>
      <Seo />
      <div className='relative top-0 left-0 w-full h-screen after:bg-black after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-50'>
        <Image
          src='/Blue-Archive-Cover.jpg'
          layout='fill'
          objectFit='cover'
          alt='blue-archive'
          className='blur-sm'
        />
      </div>

      <h1 className='absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-80%] tracking-wide text-white text-7xl uppercase'>
        Blue Archive Api
      </h1>

      {/* Component Start */}
      <main>
        <article className='h-screen bg-gray-800 py-10'>
          <table className='w-[90%] mx-auto text-sm text-gray-400'>
            <thead className='bg-gray-800 text-xs uppercase font-medium'>
              <tr>
                <th scope='col' className='px-6 py-10 text-center tracking-wider text-4xl'>
                  Routes and Query
                </th>
                <th scope='col' className='px-6 py-103 text-center tracking-wider text-4xl'>
                  How to use
                </th>
              </tr>
            </thead>
            <tbody className='bg-gray-800  text-xl '>
              <tr className='bg-black bg-opacity-20 '>
                <td className='px-6 py-4 whitespace-nowrap table-cell align-middle'>
                  <span className='font-bold'>GET</span>
                  <Link href='/api/characters'>
                    <span className='ml-2 font-medium cursor-pointer'>/api/characters</span>
                  </Link>
                </td>
                <td className='px-6 py-6 whitespace-nowrap text-right'>
                  Get all characters Blue Archive ( By default 20 )
                </td>
              </tr>
              <tr className='bg-black bg-opacity-10'>
                <td className='table-cell align-middle px-6 py-6 whitespace-nowrap '>
                  <span className='font-bold'>GET</span>
                  <Link href='/api/characters?page=3&perPage=20'>
                    <span className='ml-2 font-medium cursor-pointer'>
                      /api/characters?page=NUMBER&perPage=NUMBER
                    </span>
                  </Link>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-right'>
                  Get all characters pagination,
                </td>
              </tr>
              <tr className='bg-black bg-opacity-20'>
                <td className='px-6 py-4 whitespace-nowrap table-cell align-middle '>
                  <span className='font-bold'>GET</span>
                  <Link href='/api/characters?name=Hibiki'>
                    <span className='ml-2 font-medium cursor-pointer'>
                      /api/characters?name=NAME
                    </span>
                  </Link>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-right'>
                  Get characters with a specific <span className='font-bold'>name</span> choices
                  {names.map((name: string, index: number) => (
                    <span key={index} className='text-blue-500 ml-2'>
                      {name}
                    </span>
                  ))}
                  <br />
                  <span className='font-bold'>Example</span>:{" "}
                  <span>GET /api/characters?name=Hibiki</span>
                </td>
              </tr>
              <tr className=''>
                <td className='px-6 py-4 whitespace-nowrap table-cell align-middle '>
                  <span className='font-bold'>GET</span>
                  <Link href='/api/characters?school=Millenium'>
                    <span className='ml-2 font-medium cursor-pointer'>
                      /api/characters?school=SCHOOL
                    </span>
                  </Link>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-right'>
                  Get characters that are <span className='font-bold'>school</span> of a specific
                  character
                  <br />
                  <span className='font-bold'>Example</span>:{" "}
                  <span>GET /api/characters?school=Millenium</span>
                </td>
              </tr>
              <tr className='bg-black bg-opacity-20'>
                <td className='px-6 py-4 table-cell align-middle'>
                  <span className='font-bold'>GET</span>
                  <Link href='/api/character/random'>
                    <span className='ml-2 font-medium cursor-pointer'>/api/character/random</span>
                  </Link>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-right'>
                  Get one random character / use query count to get more than 1 character
                  <br />
                  <span className='font-bold'>Example</span>: <span>GET /api/character/random</span>
                </td>
              </tr>
              <tr className=''>
                <td className='px-6 py-4 table-cell align-middle'>
                  <span className='font-bold'>GET</span>
                  <Link href='/api/characters/students'>
                    <span className='ml-2 font-medium cursor-pointer'>
                      /api/characters/students
                    </span>
                  </Link>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-right'>
                  Get all students Specific
                  <br />
                  <span className='font-bold'>Example</span>:{" "}
                  <span>GET /api/characters/students</span>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </main>

      <Footer />
    </div>
  )
}

export default Home
