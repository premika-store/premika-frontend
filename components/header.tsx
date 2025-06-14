import Link from "next/link"
import { Search, ShoppingBag, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import Image from "next/image";

export async function Header() {

  const categories = await getCategories();

  return (
    <header className="bg-background border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between min-h-[80px] py-2">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
        <MainNav data={categories} />
        </nav>

        {/* Logo */}
        <div className="flex-1 flex justify-center md:flex-none">
        <Link href="/" className="text-2xl font-bold tracking-wider flex items-center">
          <Image 
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="h-16 w-auto md:h-20 md:w-auto object-contain"
          priority
          />
        </Link>
        </div>

        {/* Desktop Right Menu */}
        <div className="hidden md:flex items-center space-x-4">
        {/* <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button> */}
        <Button variant="ghost" size="icon">
          <NavbarActions />
        </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <ShoppingBag className="h-5 w-5" />
        </Button>
        <Sheet>
          <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
          </SheetTrigger>
          <SheetContent>
          <div className="flex flex-col space-y-4 mt-8">
            <Link href="#" className="text-lg font-medium">
            МАГАЗИН
            </Link>
            <Link href="#" className="text-lg font-medium">
            КОЛЛЕКЦИИ
            </Link>
            <Link href="#" className="text-lg font-medium">
            О БРЕНДЕ
            </Link>
            <Link href="#" className="text-lg font-medium">
            ПОИСК
            </Link>
            <Link href="#" className="text-lg font-medium">
            КОНТАКТЫ
            </Link>
          </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
      </div>
    </header>
  )
}
