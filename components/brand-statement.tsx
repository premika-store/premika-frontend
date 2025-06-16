import { Button } from "@/components/ui/button"

export function BrandStatement() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">
          Lorem Ipsum is simply dummy text<br />
         of the printing and typesetting industry. 
          <br />
          Lorem Ipsum has been the industry's  
          <br />
          standard <span className="text-amber-600">dummy text</span>
          <br />ever since the 1500s
        </h2>
        <Button variant="outline" className="mt-8">
          Button
        </Button>
      </div>
    </section>
  )
}
