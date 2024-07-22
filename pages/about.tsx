// import Header from "@/components/common/Header";
import { AdminLayout } from '@/components/layouts'
import { Box, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/common/Header'), {
  ssr: false,
})

export interface AboutPageProps {}
AboutPage.Layout = AdminLayout

export default function AboutPage(props: AboutPageProps) {
  return (
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
        About Page
      </Typography>
      <h1>About Page</h1>
      <Header />
    </Box>
  )
}
