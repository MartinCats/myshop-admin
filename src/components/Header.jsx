import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="flex-center p-8 bg-white">
      <Link to={'/'} className='font-bold text-[24px] flex absolute -top-6 left-0 right-0 w-full flex-center'>
        <h4 className='bg-white shadow-sm text-blue-500 flex-center h-28 w-28 rounded-full'>Logo</h4>
      </Link>
    </header>
  )
}

export default Header