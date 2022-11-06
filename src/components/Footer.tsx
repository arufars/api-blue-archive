import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='bg-gray-800 text-gray-400 text-center py-10'>
        <p className='underline italic mb-2'>
          <Link href='https://github.com/arufars'>Github</Link>
        </p>
        <p className='text-sm'>Made with ❤️ by arufars {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
