"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {Button} from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart()

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => router.push('/cart') } className="flex items-center rounded-full bg-background px-4 py-2">
        <ShoppingBag
          size={20}
          className="text-foreground"
        />
        <span className="ml-2 text-sm font-medium text-foreground" >
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
