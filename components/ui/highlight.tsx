'use client'
import React, { useEffect, useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash'
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css'

export const CodeHighlighter = ({ language, value }: { language: string, value: string }) => {
  const [isClient, setIsClient] = useState(false);
  SyntaxHighlighter.registerLanguage('css', css)
  SyntaxHighlighter.registerLanguage('bash', bash)
  SyntaxHighlighter.registerLanguage('javascript', js)
  SyntaxHighlighter.registerLanguage('typescript', ts)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    isClient ? (
        <SyntaxHighlighter language={language} style={atomOneDark} showLineNumbers={true} >
          {value}
        </SyntaxHighlighter>
    ) : (
      <>{value}</>
    )
  );
};