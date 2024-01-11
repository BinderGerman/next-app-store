import Link from 'next/link'

export default function Navbar(): JSX.Element {
  return (
    <nav className='bg-slate-400 mb-4 flex justify-between items-center px-20 p-3 font-bold text-black'>
      <Link href='/'>Nenes.io Store</Link>
      <ul>
        <li>
          <Link href={'/'}>Product List</Link>
        </li>
      </ul>
    </nav>
  )
}
