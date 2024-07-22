import { LayoutProps } from '@/models/common'
import { Box, Stack } from '@mui/material'
import Link from 'next/link'
import { Footer, Header } from '../common'

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight={'100vh'}>
      <Header />
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/works">Work</Link>
      <Box flexGrow={1} component="main">
        {children}
      </Box>
      <Footer />
    </Stack>
  )
}
