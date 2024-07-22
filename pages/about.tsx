// import Header from "@/components/common/Header";
import { AdminLayout } from '@/components/layouts'
import dynamic from 'next/dynamic'
import * as React from 'react'
const Header = dynamic(() => import('@/components/common/Header'), {
  ssr: false,
})

export interface AboutPageProps {}
AboutPage.Layout = AdminLayout

export default function AboutPage(props: AboutPageProps) {
  return (
    <div>
      <h1>About Page</h1>
      <Header />
    </div>
  )
}
