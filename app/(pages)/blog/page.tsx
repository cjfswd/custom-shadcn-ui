import { removePathsFromTree, filterTreeNodesByExtension, removeNodesWithEmptyChildren, removeFilesWithSameNameAsDirectory, buildTree, TreeNode, listArchives } from "@/lib/blog"
import { getFiles, getLastModifiedDateSync } from "@/lib/file-system"
import Link from "next/link"

export default async function Page() {
    const files = getFiles(process.cwd() + '/obsidian')
        .filter(file => file.includes('.md'))
    const tree = removePathsFromTree(filterTreeNodesByExtension(removeNodesWithEmptyChildren(removeFilesWithSameNameAsDirectory(buildTree(files))) as TreeNode, 'md') as TreeNode, ['/obsidian/oculto'])

    return (<div className="flex flex-col items-center gap-4 sm:container">
        <h1 className="w-full text-center text-xl font-semibold">Aqui estão todos os Posts do meu Blog.</h1>
        {/* <pre>{JSON.stringify(tree, null, 2)}</pre> */}
        <div className="flex max-w-[600px] flex-col justify-center gap-4 text-base">{
            listArchives(tree as TreeNode, 'md')
                .map((item, key) => <Link
                    href={`/blog${process.env.NODE_ENV == 'development' ? item.partialUrl : item.partialUrl.replace('/vercel/obsidian', '')}`}
                    className="flex w-full flex-col gap-2 rounded border px-3 pb-3 pt-2"
                    key={key}
                >
                    <div className="font-medium">{item.name}</div>
                    <div className="flex flex-row gap-2">
                        <div className="text-xs">
                            <span>Data:</span>
                            &nbsp;
                            <code
                                className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono font-semibold"
                            >
                                {process.env.NODE_ENV == "development" && getLastModifiedDateSync(item.fullName.replace('/', ''))?.toLocaleDateString('en-GB')}
                                {process.env.NODE_ENV == "production" && getLastModifiedDateSync(item.fullName)?.toLocaleDateString('en-GB')}
                            </code>
                        </div>
                        <div className="text-xs">
                            <span>Categoria:</span>
                            &nbsp;
                            <code
                                className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono font-semibold"
                            >
                                {item.fullName.split('/').splice(-2)[0]}
                            </code>
                        </div>
                    </div>
                </Link>)
        }</div>
    </div>)
}

