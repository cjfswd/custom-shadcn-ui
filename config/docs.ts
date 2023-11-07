import { MainNavItem, SidebarNavItem } from "../types/nav"

export interface DocsConfig {
    mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Ínicio",
            href: "/",
        },
        // {
        //     title: "Blog",
        //     href: "/blog",
        // },
        {
            title: "Contato",
        },
        {
            title: "Privacidade",
            href: "/privacidade"
        },
        // {
        //     title: "Portfólio",
        //     href: "/portfolio",
        // },
        // {
        //     title: "Códigos",
        //     href: "/snippets",
        // },
    ],
    sidebarNav: [],
}