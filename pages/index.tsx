import { HeroSection, RecentPost } from '@/components/home'
import { MainLayout } from '@/components/layouts'
import { FeatureWork } from '@/components/work/feature-work'
import { Box } from '@mui/material'
import { NextPageWithLayout } from '../models'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPost />
      <FeatureWork />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
