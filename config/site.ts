export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "CJ",
  description:
    "Castillo Junior Fullstack Web Developer.",
  mainNav: [
    {
      title: "Ínicio",
      href: '/'
    },
    {
      title: "Privacidade",
      href: '/privacidade'
    },
    {
      title: "Contato",
    },
    // {
    //   title: "Portfólio",
    //   href: "/portfolio",
    // },
    // {
    //   title: "Códigos",
    //   href: "/snippets",
    // },
  ],
  links: {
    github: "https://github.com/cjfswd/",
    docs: "https://ui.shadcn.com",
  },
}
