import type { IPropsToProductPage } from '@/app/interfaces/product-page-interface'

async function getProduct(id: number) {
  const res = await fetch(`http://localhost:5000/data/${id}`)
  const data = await res.json()

  return data
}

async function ProductPage({ params }: IPropsToProductPage) {
  const product = await getProduct(params.id)
  return (
    <div>
      <h1>Hola que hace</h1>
      {product.title}
    </div>
  )
}

export default ProductPage
