import { MainLayout } from '@/components/layouts'
import { Box } from '@mui/material'
import { NextPageWithLayout } from '../models'
import { HeroSection } from '@/components/home'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
