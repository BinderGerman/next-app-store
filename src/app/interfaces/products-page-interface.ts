export interface IPropsToProductsPage {
  products: Array<{
    id: number
    title: string
    price: number
    image: string
    description: string
    category: string
    weight: string
    size: string
    material: string
  }>
}
