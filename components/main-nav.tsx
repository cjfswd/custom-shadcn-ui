import * as React from 'react'
import Link from "next/link"

import { NavItem } from "../types/nav"
import { cn } from "../lib/utils"

import { ContactModal } from './contact-modal'

export interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items, name }: MainNavProps & { name: string }) {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">{name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map((item, index) =>
            item.href && item.href != undefined ? (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium text-muted-foreground",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            ) : (<ContactModal key={index} />)
          )}
        </nav>
      ) : null}
    </div>
  )
}
