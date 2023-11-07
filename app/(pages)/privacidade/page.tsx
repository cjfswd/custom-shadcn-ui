import * as yaml from 'js-yaml';
import Markdown from 'markdown-to-jsx'
import fs from 'fs';
import React from "react";
import { removeNodesWithEmptyChildren, removeFilesWithSameNameAsDirectory, buildTree, findNodeByFullUrl, TreeNode, convertToFriendlyURL } from '@/lib/blog';
import { CustomMarkdown, MarkdownWithCustomHighlighter } from '@/components/ui/markdown';
import { Metadata, ResolvingMetadata } from 'next';
import { getFiles } from '@/lib/file-system';
import path from 'path';
import Link from 'next/link';


export const metadata: Metadata = {
    title: {
        default: 'Política de Privacidade',
        template: `%s - CJFSWD`,
    },
    description: 'Descubra como protegemos suas informações pessoais e respeitamos sua privacidade. Nossa política de privacidade detalha como coletamos, usamos e protegemos seus dados.',
}

export default async function Page() {

    return (<section className='blog container py-6 md:px-3 md:py-10'>
        <header className='mb-6'>
            <h1>Política de Privacidade</h1>
        </header>
        <section className='mb-6'>
            <h2>Coleta de Dados</h2>
            <p>
                Eu, Antonio Carlos Del Castillo Junior, como proprietário desse site/domínio (castillojr.com.br), utilizo o Google Analytics para coletar informações anônimas sobre o uso do mesmo. O Google Analytics é uma ferramenta de análise da web que me ajuda a entender como os visitantes interagem com o meu conteúdo. Isso inclui informações como o tipo de dispositivo, navegador, localização geográfica e páginas visitadas. Todas essas informações são coletadas de forma anônima e não identifico pessoalmente os visitantes.
            </p>
        </section>
        <section className='mb-6'>
            <h2>Uso de Cookies</h2>
            <p>
                O Google Analytics utiliza cookies para rastrear informações de uso do site. Cookies são pequenos arquivos de texto armazenados no seu dispositivo. Eles não contêm informações pessoais e não são usados para identificá-lo. Você pode optar por desativar os cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.
            </p>
        </section>
        <section className='mb-6'>
            <h2>Compartilhamento de Dados</h2>
            <p>
                Os dados coletados pelo Google Analytics não são compartilhados com terceiros, a menos que exigido por lei. Eu não vendo, alugo ou compartilho informações pessoais dos visitantes do meu blog.
            </p>
        </section>
        <section className='mb-6'>
            <h2>Seus Direitos</h2>
            <p>
                Como visitante do meu blog, você tem o direito de solicitar informações sobre os dados que coletamos, atualizar ou corrigir suas informações, ou solicitar a exclusão dos seus dados. Para exercer esses direitos ou fazer perguntas sobre nossa política de privacidade, entre em contato comigo através do telegram: @cjfswd .
            </p>
        </section>
        <section className='mb-6'>
            <h2>Alterações na Política de Privacidade</h2>
            <p>
                Eu me reservo o direito de atualizar ou modificar esta política de privacidade a qualquer momento. Quaisquer alterações serão publicadas nesta página, e a data da última modificação será atualizada no topo. É recomendável revisar esta política periodicamente para se manter informado sobre como seus dados estão sendo protegidos e usados.
            </p>
        </section>
        <footer>
            <p><strong>Última atualização:</strong> 24/10/2023</p>
        </footer>
    </section>);
}