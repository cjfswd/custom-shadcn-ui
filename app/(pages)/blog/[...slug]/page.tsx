import * as yaml from 'js-yaml';
import { notFound } from 'next/navigation'
import fs from 'fs';
import React from "react";
import { removeNodesWithEmptyChildren, removeFilesWithSameNameAsDirectory, buildTree, findNodeByFullUrl, TreeNode, convertToFriendlyURL, findNodeByPartialUrl } from '@/lib/blog';
import { CustomMarkdown, MarkdownWithCustomHighlighter } from '@/components/index';
import { Metadata, ResolvingMetadata } from 'next';
import { getFiles } from '@/lib/file-system';
import path from 'path';

const obsidianLinkRegex = /\[\[([^\]]+?)(?:\|([^\]]+?))?\]\]/g;

interface FrontmatterData {
  [key: string]: any;
}

interface SeparatedText {
  frontmatter: FrontmatterData;
  content: string;
}

function extractFrontmatter(text: string): SeparatedText {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n*/;
  const match = text.match(frontmatterRegex);

  if (match) {
    const frontmatterContent = match[1];
    const content = text.substring(match[0].length);

    try {
      const frontmatterData = yaml.load(frontmatterContent) as FrontmatterData;
      return {
        frontmatter: frontmatterData,
        content,
      };
    } catch (error) {
      throw new Error("Error parsing frontmatter YAML");
    }
  }

  // If there's no frontmatter, return an empty object for frontmatter and the entire text as content.
  return {
    frontmatter: {},
    content: text,
  };
}

type Props = {
  params: { slug: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const mypath = slug.join('/').toString()
  const files = getFiles(path.resolve(process.cwd(), 'obsidian')).filter(file => file.includes('.md'))
  const tree = removeNodesWithEmptyChildren(removeFilesWithSameNameAsDirectory(buildTree(files))) as TreeNode
  const actualTree = findNodeByPartialUrl(tree, process.env.NODE_ENV == 'development' ? `/${mypath}` : `/obsidian/${mypath}`)
  console.log({ mypath, files, tree, actualTree, URI: process.env.NODE_ENV == 'development' ? `/obsidian/${mypath}` : `/vercel/path0/obsidian/${mypath}` })
  let readTest = actualTree && fs.readFileSync(process.env.NODE_ENV == 'development' ? actualTree.fullName.replace('/', '') : actualTree.fullName).toString('utf-8')
  const post = readTest && extractFrontmatter(readTest)

  return {
    title: actualTree?.name,
    description: post && post.frontmatter.description,
    keywords: post && post.frontmatter.keywords,
    openGraph: {
      title: actualTree?.name,
      description: post && post.frontmatter.description,
      countryName: 'Brazil',
      tags: post && post.frontmatter.keywords,
      authors: 'Antonio Carlos Del Castillo Junior',
      siteName: 'CJFSWD',
      locale: 'pt_BR',
      type: 'article',
      url: `https://cjfswd.vercel.app/${actualTree?.partialUrl}`,
      images: [`https://dynamic-og-image-generator.vercel.app//api/generate?title=${actualTree?.name}&author=Antonio%20Carlos%20Del%20Castillo%20Junior&websiteUrl=https://cjfswd.vercel.app&theme=Default`],
    },
  }
}

export default async function Page({ params: { slug } }: { params: { slug: string[] } }) {
  const mypath = slug.join('/').toString()
  const files = getFiles(path.resolve(process.cwd(), 'obsidian')).filter(file => file.includes('.md'))
  const tree = removeNodesWithEmptyChildren(removeFilesWithSameNameAsDirectory(buildTree(files))) as TreeNode
  // const actualTree = findNodeByPartialUrl(tree, process.env.NODE_ENV == 'development' ? `/${mypath}` : `/obsidian/${mypath}`)
  const actualTree = findNodeByPartialUrl(tree, process.env.NODE_ENV == 'development' ? `/${mypath}` : `/${mypath}`)
  console.log({ mypath, files, tree, actualTree, URI: process.env.NODE_ENV == 'development' ? `/obsidian/${mypath}` : `/vercel/path0/obsidian/${mypath}` })
  let readTest = actualTree && fs.readFileSync(process.env.NODE_ENV == 'development' ? actualTree.fullName.replace('/', '') : actualTree.fullName).toString('utf-8')
  const post = readTest && extractFrontmatter(readTest)
  readTest = post && `# ${actualTree?.name}\n${post?.content}`.replace(
    /(!?)\[\[([^\]]*)\]\](?=\s*|\))/g,
    (match, exclamation, linkUrl) => {
      if (linkUrl.startsWith("http") || linkUrl.startsWith("https")) {
        return /\.(png|jpg|jpeg|gif|bmp|svg)$/i.test(linkUrl) ? `![${linkUrl}](${linkUrl})` : `[${linkUrl}](${linkUrl}){:target="_blank"}`
      } else if (exclamation && /\.(png|jpg|jpeg|gif|bmp|svg)$/i.test(linkUrl)) {
        // Internal image link
        return `![${linkUrl}](/static/${encodeURI(linkUrl)})`;
      } else {
        // Internal link
        const target = linkUrl.replace(".md", "");
        const file = files.find((file) => file.includes(target));
        if (file) {
          return `[${linkUrl}](/blog${file.replace(".md", "")})`;
        } else {
          return match;
        }
      }
    }
  )
  if (readTest == undefined) notFound()

  return (<MarkdownWithCustomHighlighter>
    {/* {readTest ? readTest : JSON.stringify({ mypath, files, tree, actualTree, URI: `/obsidian/${mypath}` })} */}
    {/* {JSON.stringify(tree, null, 2)} */}
    {/* {`/vercel/path0/obsidian/${mypath}`} */}
    {readTest ? readTest : ''}
  </MarkdownWithCustomHighlighter>);
}