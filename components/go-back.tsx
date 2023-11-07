"use client"
import { useRouter, } from 'next/navigation'

export function GoBack({ children }: { children?: React.ReactNode } = { children: [] }) {
    const router = useRouter()

    return (<>
        <div
            className="w-fit cursor-pointer whitespace-nowrap text-lg font-bold"
            onClick={() => {
                router.back()
                router.push('/blog')
            }}>{"<--"}</div>
        {children}
    </>)
}