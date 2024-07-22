import { LayoutProps } from '@/models/common'
import { Box, Container, Stack } from '@mui/material'
import Link from 'next/link'
import { Header } from '../common/header'
import { Footer } from '../common/footer'

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight={'100vh'}>
      <Header />
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/works">Work</Link>
      <Box flexGrow={1} component="main">
        <Container maxWidth="sm" sx={{ bgcolor: 'primary.main' }}>
          SM Container
        </Container>
        <Container sx={{ bgcolor: 'primary.main' }}>DM Container</Container>
        {children}
      </Box>
      <Footer />
    </Stack>
  )
}
