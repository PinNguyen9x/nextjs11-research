import { Box, Container, Link as MuiLink, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { PostCard } from './post-card'
import { Post } from '@/models'

export function RecentPost() {
  const postList: Post[] = [
    {
      id: '1',
      title: 'Making a design system from scratch',
      tagList: ['Design', 'Patterns'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      publishedDate: '1722091716231',
    },
    {
      id: '2',
      title: 'Creating pixel perfect icons in Figma',
      tagList: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      publishedDate: '1722091716231',
    },
  ]
  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems="center"
        >
          <Typography variant="h5">Recent Posts</Typography>
          <Link passHref href="/posts/">
            <MuiLink
              sx={{
                display: {
                  xs: 'none',
                  md: 'inline',
                },
              }}
            >
              View All
            </MuiLink>
          </Link>
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          sx={{
            '& > div': {
              width: {
                sx: '100%',
                md: '50%',
              },
            },
          }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
