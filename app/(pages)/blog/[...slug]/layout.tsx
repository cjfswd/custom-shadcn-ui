import { Metadata } from "next"
import { GoBack } from "@/components/index"
import { siteConfig } from "@/config/site"

export default function CategoryLayout({ children, params }: { children: React.ReactNode, params: { slug: string } }) {
    return (<>
        <section>
            {children}
        </section>
    </>)
}
