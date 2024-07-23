import React from 'react'
import { Box, Container, Stack, Link as MuiLink } from '@mui/material'
import { ROUTE_LIST } from './routes'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'
export interface HedarDesktopProps {}
export function HeaderDesktop(props: HedarDesktopProps) {
  const router = useRouter()
  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            <Link href={route.path} key={route.label}>
              <MuiLink
                sx={{ ml: 2, fontWeight: 'medium' }}
                className={clsx({ active: router.pathname === route.path })}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
