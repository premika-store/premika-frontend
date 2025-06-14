import { Button } from "@/components/ui/button"

export function BrandStatement() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">
          БРЕНД HUKH - ЭТО О<br />
          ЛЮБВИ К СЕБЕ. КАЖДАЯ
          <br />
          МОДЕЛЬ ЯВЛЯЕТСЯ
          <br />
          РАЗУМНОЙ <span className="text-amber-600">ИНВЕСТИЦИЕЙ</span>
          <br />В СВОЙ ГАРДЕРОБ
        </h2>
        <Button variant="outline" className="mt-8">
          ХИТЫ ПРОДАЖ
        </Button>
      </div>
    </section>
  )
}
