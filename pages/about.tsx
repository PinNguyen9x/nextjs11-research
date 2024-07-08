// import Header from "@/components/common/Header";
import dynamic from 'next/dynamic';
import * as React from 'react';
const Header = dynamic(() => import('@/components/common/Header'), {
  ssr: false,
});

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  return (
    <div>
      <h1>About Page</h1>
      <Header />
    </div>
  );
}
