import { MainLayout } from '@/components/layouts'
import { Box } from '@mui/material'
import { NextPageWithLayout } from '../models'
import { HeroSection, RecentPost } from '@/components/home'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPost />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
