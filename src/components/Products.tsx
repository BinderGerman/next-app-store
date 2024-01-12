import Link from 'next/link'
import type { IPropsToProductsPage } from '@/app/interfaces/products-page-interface'

export default function ProductsPage({
  products,
}: IPropsToProductsPage): JSX.Element {
  return (
    <div className='w-full flex flex-wrap gap-5 justify-around mt-5 animate-fade-up animate-once animate-duration-[1500ms] animate-ease-linear'>
      {products.map(product => (
        <div className='card w-96 shadow-xl bg-base-100' key={product.id}>
          <img
            className='bg-cover max-h-52'
            src={product.image}
            alt={product.title}
          />
          <div className='card-body'>
            <h2 className='card-title'>{product.title}</h2>
            <p>{product.description}</p>
            <div className='card-actions justify-end'>
              <Link href={`/product/${product.id}`}>
                <button className='btn btn-outline btn-info'>More Info</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
