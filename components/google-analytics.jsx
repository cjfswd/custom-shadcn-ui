"use client"
import { useEffect } from "react";

export function GoogleAnalytics(){
  useEffect(() => {
    if (window) {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', 'G-SH18NPYVPZ');
    }
  }, [])

    return <></>
}