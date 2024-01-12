import Link from 'next/link'

export default function Navbar(): JSX.Element {
  return (
    <nav className='navbar bg-base-100 shadow-xl mb-8'>
      <Link href='/' className='btn btn-ghost text-xl'>
        Nenes.io | Store
      </Link>
    </nav>
  )
}
