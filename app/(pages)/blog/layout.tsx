import { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { GoBack } from "@/components/index";

export const metadata: Metadata = {
    title: {
        default: 'Blog',
        template: `%s - Tecnologia da Informação - CJFSWD`,
    },
    description: 'Explore o mundo da Tecnologia da Informação. Fique por dentro das últimas tendências, dicas e insights sobre TI, inovação e transformação digital com foco na Web e Typescript.',
}

export default function CategoryLayout({ children, params }: { children: React.ReactNode, params: { slug: string } }) {
    return (<>
        <section className="m:px-3 ml:px-4 grid grid-cols-1 items-center gap-4 pb-8 pl-2 pt-6 sm:container md:py-10">
            <GoBack />
            {children}
        </section>
    </>)
}
