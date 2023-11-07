
import { getFiles, getLastModifiedDateSync } from "@/lib/file-system";
import { TreeNode, buildTree, filterTreeNodesByExtension, listArchives, removeFilesWithSameNameAsDirectory, removeNodesWithEmptyChildren, removePathsFromTree } from "@/lib/blog";

const URL = "https://desenvolvedor-web-fullstack.castillojr.com.br";

export default async function sitemap() {
    const files = getFiles('obsidian').filter(file => file.includes('.md'))
    const tree = removePathsFromTree(filterTreeNodesByExtension(removeNodesWithEmptyChildren(removeFilesWithSameNameAsDirectory(buildTree(files))) as TreeNode, 'md') as TreeNode, ['/obsidian/oculto']) as TreeNode
    const arquives = listArchives(tree, 'md')

    const posts = arquives.map(({ partialUrl, fullName }) => ({
        url: `${URL}/blog${process.env.NODE_ENV == "development" ? partialUrl.replace('/obsidian/', '') : partialUrl.replace('/vercel/obsidian/','')}`,
        lastModified: getLastModifiedDateSync(fullName.replace("/", ""))?.toISOString(),
        changeFrequency: 'monthly',
        priority: 0.30
    }));

    const routes = ["", "/blog", "/curriculo_antonio_carlos_del_castillo_junior.pdf"]
        .map((route) => ({
            url: `${URL}${route}`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: route == "" ? 1 : 0.5
        }));

    return [...routes, ...posts];
}
