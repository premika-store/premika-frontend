import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  title: string
  price: string
  image: string
}

export function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] mb-4">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-lg" />
        </div>
        <h4 className="font-medium text-sm mb-2">{title}</h4>
        <p className="text-lg font-semibold mb-4">{price}</p>
        <Button variant="outline" className="w-full">
          СМОТРЕТЬ БОЛЬШЕ
        </Button>
      </CardContent>
    </Card>
  )
}
