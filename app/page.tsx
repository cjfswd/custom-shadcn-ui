/* eslint-disable react/jsx-no-target-blank */
import fs from 'fs';
import React from "react";
import Link from "next/link"
import { Button, buttonVariants, ContactModal, Icons } from "@/components/index"
import { TreeNode, removeNodesWithEmptyChildren, removeFilesWithSameNameAsDirectory, buildTree, filterTreeNodesByExtension, listArchives, removePathsFromTree } from "@/lib/blog";

const obsidianLinkRegex = /\[\[([^\]]+?)(?:\|([^\]]+?))?\]\]/g;

interface BreadcrumbProps {
  node: TreeNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ node }) => {
  if (!node) {
    return null;
  }

  const breadcrumbs: any[] = [];

  function buildBreadcrumbs(node: TreeNode) {
    if (node) {
      breadcrumbs.push(node);
      if (node.children && node.children.length > 0) {
        buildBreadcrumbs(node.children[0]);
      }
    }
  }

  buildBreadcrumbs(node);

  return (<div>
    {breadcrumbs.map((crumb, index) => (
      <span key={index}>
        {index > 0 && ' / '}
        {crumb.name}
      </span>
    ))}
  </div>);
};

// Recursive function to get files
function getFiles(dir: string, files: string[] = []) {
  // Get an array of all files and directories in the passed directory using fs.readdirSync
  const fileList = fs.readdirSync(dir);
  // Create the full path of the file/directory by concatenating the passed directory and file/directory name
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    // Check if the current file/directory is a directory using fs.statSync
    if (fs.statSync(name).isDirectory()) {
      // If it is a directory, recursively call the getFiles function with the directory path and the files array
      getFiles(name, files);
    } else {
      // If it is a file, push the full path to the files array
      files.push(name);
    }
  }
  return files;
}

export default async function IndexPage() {
  return (
    <section className="grid items-center gap-6 px-4 pb-8 pt-6 sm:container md:px-3 md:py-10" suppressHydrationWarning>
      {/* <pre>{JSON.stringify(files, null, 2)}</pre> */}
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="m:text-4.5xl ml:text-5xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl">Castillo Junior</span><br />
        </h1>
        <p className="text-muted-foreground max-w-[700px] text-base sm:text-xl">
          Seja bem-vindo ao meu espaço digital onde escrevo sobre tecnologia, desenvolvimento de software, games e design.
        </p>
      </div>
      <div className="flex w-fit flex-col flex-wrap justify-start gap-3 text-xl font-bold sm:gap-4 sm:text-2xl [&>*]:flex [&>*]:cursor-pointer [&>*]:items-center [&>*]:gap-2">
        <Link className="flex" href='https://developer.castillojr.com.br/' rel="noopener noreferrer" target="_blank" prefetch={false}>
          <Icons.braces />desenvolvimento de software
        </Link>
        <Link className="flex" href='https://designer.castillojr.com.br/' rel="noopener noreferrer" target="_blank" prefetch={false}>
          <Icons.compass className="w-[24px]" />designing gráfico/audiovisual
        </Link>
        <Link className="flex" href='https://player.castillojr.com.br/' rel="noopener noreferrer" target="_blank" prefetch={false}>
          <Icons.gamepad className="w-[24px]" />conteúdo sobre games
        </Link>
      </div>
      <div className="mt-4 max-w-[700px] text-lg">
        <ContactModal>
          <h2 className="mb-1 w-fit cursor-pointer text-lg font-semibold leading-6">contato</h2>
        </ContactModal>
        <p className="text-[15px] leading-[22px]">
          Tem alguma dúvida? estou aqui para tornar a comunicação o mais simples possível. Se você tem perguntas, feedback, parcerias em mente ou apenas deseja dizer olá, não hesite em entrar em contato. Estou pronto para receber suas mensagens e responder o mais rápido possível. Juntos, podemos construir uma conexão sólida e colaborativa.
        </p>
        <div className="flex flex-col gap-2 pt-2 lg:flex-row">
          <Link href='https://t.me/cjfswd' className="w-full" target="_blank" rel="noreferrer" prefetch={false}><Button variant={"outline"} className="ml:flex-row ml:gap-2 flex h-full w-full flex-col"><Icons.telegram className="h-4" /><div>telegram</div><div className="ml:block hidden">-</div><div>Username: @cjfswd</div></Button></Link>
          <Link href='https://discordapp.com/users/120199416597577732' className="w-full" target="_blank" rel="noreferrer" prefetch={false}><Button variant={"outline"} className="ml:flex-row ml:gap-2 flex h-full w-full flex-col"><Icons.discord className="h-4" /><div>discord</div><div className="ml:block hidden">-</div><div>ID: 120199416597577732</div></Button></Link>
        </div>
      </div>
      <div className="mt-4 max-w-[700px] text-lg">
        <Link className="inline-block w-auto" href='/privacidade' rel="noopener noreferrer" target="_blank" prefetch={false}>
          <h2 className="mb-1 w-fit text-lg font-semibold leading-6">privacidade</h2>
        </Link>
        <p className="text-[15px] leading-[22px]">
          A página de <Link className="underline" href='/privacidade' rel="noopener noreferrer" target="_blank" prefetch={false}>privacidade</Link> é o meu compromisso com a segurança e confidencialidade das suas informações. Aqui, explico de forma transparente como coleto, uso e protejo seus dados pessoais, bem como seus direitos e opções de controle sobre essas informações. Sua <Link className="underline" href='/privacidade' rel="noopener noreferrer" target="_blank" prefetch={false}>privacidade</Link> é importante para mim, e esta página serve como um guia abrangente para garantir que você saiba como seus dados são tratados no meu site.
        </p>
      </div>
    </section>
  )
}
