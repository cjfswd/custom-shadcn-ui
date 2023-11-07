import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownLoader = async ({ filePath }: { filePath: string }) => {
    const response = await fetch(filePath);
    const text = await response.text();

    return <ReactMarkdown>{text}</ReactMarkdown>;
};

export default MarkdownLoader;