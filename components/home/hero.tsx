import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'
import avatar from '@/images/avatar.png'

export function HeroSection() {
  return (
    <Box component={'section'} sx={{ paddingTop: 18, paddingBottom: 9 }}>
      <Container>
        <Stack spacing={8} direction="row" justifyContent="left-start">
          <Box>
            <Typography component="h1" variant="h3" fontWeight={'bold'} mb={5}>
              Hi, I am John,
              <br />
              Creative Technologist
            </Typography>
            <Typography mb={5}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>
            <Button variant="contained" size="large">
              Download Resume
            </Button>
          </Box>
          <Box
            sx={{
              minWidth: '240px',
              boxShadow: '-5px 13px',
              color: 'secondary.light',
              borderRadius: '60%',
            }}
          >
            <Image src={avatar} layout="responsive" alt="hero image" />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
