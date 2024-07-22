// import Header from "@/components/common/Header";
import { AdminLayout } from '@/components/layouts'
import { Box, Typography } from '@mui/material'
export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  return (
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
        About Page
      </Typography>
      <h1>About Page</h1>
    </Box>
  )
}

AboutPage.Layout = AdminLayout
