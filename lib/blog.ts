export interface TreeNode {
    name: string;
    fullName: string;
    partialUrl: string;
    fullUrl: string;
    extension?: string;
    children?: TreeNode[];
}

export function listArchives(tree: TreeNode, extension: string) {
    const archives: TreeNode[] = [];

    if (tree && tree.extension === extension) {
        archives.push(tree);
    }

    if (tree && tree.children && tree.children.length > 0) {
        for (const child of tree.children) {
            archives.push(...listArchives(child, extension));
        }
    }

    return archives;
}

export function convertToFriendlyURL(input: string) {
    // Convert to lowercase
    input = input.toLowerCase();

    // Replace spaces with hyphens
    input = input.replace(/ /g, '-');

    // Replace special characters with their friendly equivalents
    const charMap = {
        'ç': 'c',
        'ã': 'a',
        'á': 'a',
        'à': 'a',
        'â': 'a',
        'é': 'e',
        'è': 'e',
        'ê': 'e',
        'í': 'i',
        'ì': 'i',
        'î': 'i',
        'ó': 'o',
        'ò': 'o',
        'ô': 'o',
        'õ': 'o',
        'ú': 'u',
        'ù': 'u',
        'û': 'u',
        'ñ': 'n',
    };

    for (const key in charMap) {
        const regex = new RegExp(key, 'g');
        //@ts-ignore
        input = input.replace(regex, charMap[key]);
    }

    // Remove any remaining special or non-alphanumeric characters
    input = input.replace(/[^a-z0-9-]/g, '');

    // Remove consecutive hyphens
    input = input.replace(/-+/g, '-');

    // Remove leading and trailing hyphens
    input = input.replace(/^-+|-+$/g, '');

    return input;
}

export function buildTree(paths: string[]): TreeNode {
    const root: TreeNode = { name: "", fullName: "", partialUrl: "", fullUrl: "" };
    let currentNode = root;

    for (const path of paths) {
        const segments = process.env.NODE_ENV == 'development' ? path.split("\\") : path.split("/");
        for (const segment of segments) {
            if (segment === "") continue; // Handle leading/trailing slashes

            const lastDotIndex = segment.lastIndexOf('.');
            const name = lastDotIndex !== -1 ? segment.slice(0, lastDotIndex) : segment;
            const extension = lastDotIndex !== -1 ? segment.slice(lastDotIndex + 1) : undefined;

            if (!currentNode.children) {
                currentNode.children = [];
            }

            const existingNode = currentNode.children.find((node) => node.name === name && !node.extension);

            if (existingNode) {
                currentNode = existingNode;
            } else {
                const newNode = {
                    name,
                    fullName: currentNode.fullName === "/" ? `/${name}` : `${currentNode.fullName}/${name}${extension ? `.${extension}` : ''}`,
                    partialUrl: `/${convertToFriendlyURL(name)}`,
                    extension,
                } as TreeNode;

                newNode.fullName = newNode.fullName.replace('/D:/Obsidian/cjfswd', '')
                newNode.fullUrl = `${currentNode.fullUrl || currentNode.partialUrl}/${convertToFriendlyURL(name)}`.replace('/d/obsidian/cjfswd/obsidian/', '/').replace('/var/task/obsidian', '').replace('/path0', '');

                currentNode.children.push(newNode);
                currentNode = newNode;
            }
        }

        currentNode = root; // Reset to the root for the next path
    }

    return root;
}

export function deepCopyTreeNode(treeNode: TreeNode): TreeNode {
    const copy: TreeNode = { ...treeNode };
    if (treeNode.children) {
        copy.children = treeNode.children.map((child) => deepCopyTreeNode(child));
    }
    return copy;
}

export function removeFilesWithSameNameAsDirectory(treeNode: TreeNode) {
    const copiedTree = deepCopyTreeNode(treeNode);

    function removeFilesRecursive(node: TreeNode) {
        if (node.children) {
            node.children = node.children.filter((child) => {
                if (child.extension && node.name == child.name) {
                    return false; // Keep files
                } else {
                    removeFilesRecursive(child); // Recursively check child directories
                    return true; // Keep directories
                }
            });
        }
    }

    removeFilesRecursive(copiedTree);

    return copiedTree;
}

export function removeNodesWithEmptyChildren(tree: TreeNode): TreeNode | undefined {
    const copiedTree = deepCopyTreeNode(tree);

    function removeEmptyNodes(node: TreeNode): TreeNode | undefined {
        if (node.children) {
            node.children = node.children
                .map((child) => removeEmptyNodes(child))
                .filter((child) => child !== undefined) as TreeNode[];
        }

        if (node.children && node.children.length === 0) {
            return undefined;
        }

        return node;
    }

    return removeEmptyNodes(copiedTree);
}

export function findNodeByFullUrl(root: TreeNode, fullUrlToFind: string): TreeNode | undefined {
    // Check if the current node's fullUrl matches the one we're looking for
    if (root.fullUrl === fullUrlToFind) {
        return root;
    }

    // If the current node has children, recursively search in each child
    if (root.children) {
        for (const child of root.children) {
            const foundNode = findNodeByFullUrl(child, fullUrlToFind);
            if (foundNode) {
                return foundNode; // If found in a child, return the result
            }
        }
    }

    // If the node is not found in the current node or its children, return undefined
    return undefined;
}

export function findNodeByPartialUrl(root: TreeNode, partialUrlToFind: string): TreeNode | undefined {
    // Check if the current node's fullUrl matches the one we're looking for
    if (root.partialUrl === partialUrlToFind) {
        return root;
    }

    // If the current node has children, recursively search in each child
    if (root.children) {
        for (const child of root.children) {
            const foundNode = findNodeByPartialUrl(child, partialUrlToFind);
            if (foundNode) {
                return foundNode; // If found in a child, return the result
            }
        }
    }

    // If the node is not found in the current node or its children, return undefined
    return undefined;
}

export function filterTreeNodesByExtension(node: TreeNode, extensionToFilter: string): TreeNode | undefined {
    // If the current node has the desired extension, keep it, otherwise, exclude it
    if (node.extension === extensionToFilter) {
        return node;
    }

    // Recursively process child nodes and build a new TreeNode with filtered children
    if (node.children) {
        const filteredChildren: TreeNode[] = [];
        for (const child of node.children) {
            const filteredChild = filterTreeNodesByExtension(child, extensionToFilter);
            if (filteredChild) {
                filteredChildren.push(filteredChild);
            }
        }

        // If there are filtered children, return a new node with those children
        if (filteredChildren.length > 0) {
            return { ...node, children: filteredChildren };
        }
    }

    // If the current node and its children don't have the desired extension, return undefined
    return undefined;
}

export function countFiles(treeNode: TreeNode): number {
    let fileCount = 0;

    if (treeNode.children) {
        for (const child of treeNode.children) {
            if (child.extension) {
                fileCount++; // Increment the count for each file
            } else {
                fileCount += countFiles(child); // Recursively count files in child directories
            }
        }
    }

    return fileCount;
}

export function removePathsFromTree(tree: TreeNode, fullUrlsToRemove: string[]): TreeNode | undefined {
    // Check if the current node's fullUrl is in the list of full URLs to remove
    if (fullUrlsToRemove.includes(tree.fullUrl)) {
        return undefined; // Return undefined to remove this node
    }

    // If the current node has children, recursively process them
    if (tree.children) {
        const newChildren: TreeNode[] = [];
        for (const child of tree.children) {
            const updatedChild = removePathsFromTree(child, fullUrlsToRemove);
            if (updatedChild) {
                newChildren.push(updatedChild);
            }
        }

        // If there are updated children, return a new node with those children
        if (newChildren.length > 0) {
            return { ...tree, children: newChildren };
        }
    }

    // If the current node and its children are not in the list of full URLs to remove, return the node as is
    return tree;
}





