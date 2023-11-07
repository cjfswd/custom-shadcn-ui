/* eslint-disable @next/next/no-head-element */
import "../styles/global.css"
import { Metadata } from "next"
import Script from 'next/script'

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { GoogleAds, GoogleAnalytics, SiteHeader, ThemeProvider, SiteFooter, TailwindIndicator } from "@/components/index"
import { siteConfig } from '@/config/site';
import { docsConfig } from '@/config/docs';

export const metadata: Metadata = {
  title: {
    default: 'Desenvolvedor Web Fullstack - Castillo Junior',
    template: `%s - Castillo Junior`,
  },
  description: 'Bem-vindo ao mundo da inovação e tecnologia! Eu sou um desenvolvedor web fullstack especializado em TypeScript, e estou pronto para ajudar a transformar suas ideias em realidade. Se você está em busca de serviços de desenvolvimento de sistemas, você está no lugar certo.',
  other: {
    "google-adsense-account": "ca-pub-3387478136548772",
    "google-site-verification": "chfj9KPA4wDyXFEs",
    "msvalidate.01": "D5F338BC4E36FB9970820298CB6E63DD",
    "yandex-verification": "731ce19dd90d9828"
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (<>
    <html lang="pt-br">
      <head>
        <GoogleAds />
      </head>
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable
        )}
        suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader docs={docsConfig} items={docsConfig.mainNav} name={siteConfig.name} site={siteConfig} />
            <div className="flex-1">{children}</div>
            <SiteFooter github={siteConfig.links.github} />
          </div>
          {/* <TailwindIndicator /> */}
        </ThemeProvider>
      </body>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SH18NPYVPZ" />
      <GoogleAnalytics />
    </html>
  </>
  )
}
