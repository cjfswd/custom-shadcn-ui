"use client"
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkImages from 'remark-images';
import Markdown from 'markdown-to-jsx'
import { CodeHighlighter } from './highlight'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export const CustomMarkdown = ({ children }: { children: string }) => {
    //@ts-ignore
    return (<Markdown options={{
        wrapper: React.Fragment,
        overrides: {
            a: {
                props: {
                    target: '_self'
                }
            },
            code: {
                component: CodeHighlighter
            }
        },
    }}>
        {children}
    </Markdown>)
}

export const MarkdownWithCustomHighlighter = ({ children }: { children: string }) => {

    const renderers = {
        code({ children, className }: { children: string, className: string }) {
            const match = /language-(\w+)/.exec(className || '')
            return match != null ? <CodeHighlighter language={match[1]} value={children} /> : <code>{children}</code>
        },
        img({ src, alt }: { node: string, src: string, alt: string, title: string }) {
            return <picture className='flex flex-col items-center'>
                <Image
                    src={src}
                    alt={alt.split('.')[0].split(',')[0]}
                    width={Number(alt.split('.')[0].split(',')[1].split('x')[0])}
                    height={Number(alt.split('.')[0].split(',')[1].split('x')[1])}
                    className='rounded-md bg-white w-full'
                />
            </picture>
        },

    };

    return (
        <ReactMarkdown
            className="blog max-w-[900px]"
            remarkPlugins={[remarkGfm, remarkImages]}
            //@ts-ignore
            components={{
                ...renderers, a(props) {
                    return <Link href={props.href as string} target={'_blank'}>{props.children}</Link>
                }
            }}

        >
            {children}
        </ReactMarkdown>
    );
};