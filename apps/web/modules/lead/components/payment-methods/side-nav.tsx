"use client"

import { useEffect } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface NavProps {
  setSelectedItem: Function;
  selectedItem: string;
  links: {
    title: string;
    _id: string
  }[];
}

export function SideNav({ links, setSelectedItem, selectedItem }: NavProps) {
  useEffect(() => {
    if (!selectedItem && links.length > 0) {
      setSelectedItem(links[0]?._id);
    }
    console.log(selectedItem)
  }, [selectedItem, links, setSelectedItem]);
  
  return (
    <div className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links?.map((link, index) => (
          <div
            key={index}
            onClick={() => setSelectedItem(link._id)}
            className={cn(
              buttonVariants({ variant: link._id === selectedItem ? "default" : "ghost", size: "sm" }),
              link._id === selectedItem &&
                "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
              "justify-start hover:cursor-pointer"
            )}
          >
            {link.title}
          </div>
        ))}
      </nav>
    </div>
  );
}
