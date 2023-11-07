import { MainNav, MainNavProps } from "./main-nav"
import { ThemeToggle } from "./theme-toggle"
import { MobileNav } from './mobile-nav';
import { DocsConfig } from "../config/docs";
import { SiteConfig } from "../config/site";

export function SiteHeader({ items, name, docs, site }: { items: MainNavProps['items'], name: string, docs: DocsConfig, site: SiteConfig; }) {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="ml:px-3 flex h-14 items-center px-2 sm:container sm:justify-between sm:space-x-0">
        <MainNav items={items} name={name} />
        <MobileNav docs={docs} site={site} />
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
