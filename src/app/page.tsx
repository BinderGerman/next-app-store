import ProductsPage from '@/components/Products'
import type { IProduct } from '@/app/interfaces/product-interface'

async function fecthData() {
  const res = await fetch('http://localhost:5000/data')
  const data = await res.json()

  return data
}

async function ProductList() {
  const products: IProduct[] = await fecthData()

  return <ProductsPage products={products} />
}

export default ProductList
