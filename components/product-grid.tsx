import { ProductCard } from "./product-card"

const products = [
  {
    title: "ЖЕНСКИЙ КОМБИНЕЗОН",
    price: "2 500 ₽",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    title: "ЖЕНСКИЙ КОМБИНЕЗОН",
    price: "2 500 ₽",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    title: "ЖЕНСКИЙ КОМБИНЕЗОН ПРЕМИУМ",
    price: "3 500 ₽",
    image: "/placeholder.svg?height=600&width=400",
  },
]

export function ProductGrid() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-medium text-center mb-12">ХИТЫ ПРОДАЖ</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} title={product.title} price={product.price} image={product.image} />
          ))}
        </div>
      </div>
    </section>
  )
}
