import type { IPropsToProductPage } from '@/app/interfaces/product-page-interface'

async function getProduct(id: number) {
  const res = await fetch(`http://localhost:5000/data/${id}`)
  const data = await res.json()

  return data
}

async function ProductPage({ params }: IPropsToProductPage) {
  const product = await getProduct(params.id)
  return (
    <div className='flex justify-around gap-5 flex-wrap'>
      <div className='card lg:card-side w-11/12  md:w-1/2 mx-5 bg-base-100 shadow-xl animate-fade-up animate-once animate-duration-[1500ms] animate-ease-linear'>
        <img className='bg-cover' src={product.image} alt={product.title} />
        <div className='card-body'>
          <h2 className='card-title'>{product.title}</h2>
          <p>{product.description}</p>
          <div className='card-actions justify-end items-center'>
            <span className='text-xl font-bold mr-4 text-red-500'>$ {product.price}</span>
            <button className='btn btn-primary btn-success'>Buy Now</button>
          </div>
        </div>
      </div>
      <div className='overflow-x-auto w-11/12 md:w-1/2 shadow-xl mx-5 animate-fade-up animate-once animate-duration-[1500ms] animate-ease-linear'>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <th className='text-2xl'>Characteristic</th>
              <th className='text-2xl'>Value</th>
            </tr>
          </thead>
          <tbody className='text-lg'>
            <tr>
              <td>Category</td>
              <td>{product.category}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{product.weight}</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>{product.size}</td>
            </tr>
            <tr>
              <td>Material</td>
              <td>{product.material}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductPage
