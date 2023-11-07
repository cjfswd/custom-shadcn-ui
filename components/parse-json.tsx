"use client"
import JsxParser from 'react-jsx-parser';

//@ts-ignore
export const A = ({ jsx, component }: { jsx: string, component: any }) => (<JsxParser jsx={jsx} components={component} />)