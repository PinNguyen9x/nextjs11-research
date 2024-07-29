import { SeoData } from '@/models'
import Head from 'next/head'
import React from 'react'

export interface SeoProps {
  data: SeoData
}

export function Seo({ data }: SeoProps) {
  const { title, description, thumbnailUrl, url } = data
  return (
    <Head>
      <title>Nextjs Tutorial | Pin Nguyen</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content="Nextjs Tutorial | Pin Nguyen" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnailUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content="Nextjs Tutorial | Pin Nguyen" />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={thumbnailUrl} />
    </Head>
  )
}
