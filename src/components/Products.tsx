import Link from 'next/link'
import type { IPropsToProductsPage } from '@/app/interfaces/products-page-interface'

export default function ProductsPage({
  products,
}: IPropsToProductsPage): JSX.Element {
  return (
    <div className='w-full bg-emerald-400 flex flex-wrap gap-4 justify-around mt-5'>
      {products.map(product => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <div className='w-80 bg-slate-400 rounded-md drop-shadow-lg'>
            <img src={product.image} />
            <h2>{product.title}</h2>
            <h3>{product.description}</h3>
            <p>Price: {product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
