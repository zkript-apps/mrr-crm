"use client"

import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface NavProps {
  setSelectedItem: Function
  selectedItem: string
  links: {
    title: string
    label?: string
    icon?: LucideIcon
  }[]
}

export function SideNav({ links, setSelectedItem, selectedItem }: NavProps) {
  return (
    <div
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          (
            <div
              key={index}
              onClick={() => setSelectedItem(link.title)}
              className={cn(
                buttonVariants({ variant: link.title === selectedItem ? "default" : "ghost", size: "sm" }),
                link.title === selectedItem &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start hover:cursor-pointer"
              )}
            >
              {link.icon ? <link.icon className="mr-2 h-4 w-4" /> : null}
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.title === selectedItem &&
                      "text-background dark:text-white"
                  )}
                >
                  {link.label}
                </span>
              )}
            </div>
          )
        )}
      </nav>
    </div>
  )
}