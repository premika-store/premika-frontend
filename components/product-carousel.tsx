"use client"

import ProductGrid from "./product-grid"

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

interface ProductCarouselProps {
  products: Product[]
  autoPlayInterval?: number
}

export default function ProductCarousel({ products, autoPlayInterval = 3000 }: ProductCarouselProps) {
  return <ProductGrid products={products} autoPlayInterval={autoPlayInterval} />
}
