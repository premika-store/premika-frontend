"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import { Color, Size } from "@/types";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return <>
    <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
    </Button>

    <Dialog open={open} onClose={onClose} className="relative z-40 lg:hidden" as="div" >
        {/* Background */}
        <div className="fixed inset-0 bg-black bg-opacity-25"/>

        {/* dialog position */}
        <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className="relative ml-auto flex size-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                
                {/* close button */}
                <div className="flex justify-end items-center px-4">
                    <IconButton icon={<X size={15} onClick={onClose} />} />
                </div>

                {/* render the filter */}
                <div className="p-4">
                <Filter
                    valueKey="sizeId"
                    name="Sizes"
                    data={sizes}
                     />
                    <Filter
                    valueKey="colorId"
                    name="Colors"
                    data={colors}
                     />
                </div>
            </Dialog.Panel>
        </div>
    </Dialog>
    </>;
};

export default MobileFilters;
