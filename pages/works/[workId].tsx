import { MainLayout } from '@/components/layouts'
import { useWorkDetails } from '@/hooks'
import { Box, Container, Typography } from '@mui/material'
import { useRouter } from 'next/router'

export interface AddEditWorkPageProps {}

export default function AddEditWorkPage(props: AddEditWorkPageProps) {
  const router = useRouter()
  const { workId } = router.query || {}
  const isAddMode = workId === 'add'
  const { data, isLoading } = useWorkDetails({
    workId: (workId as string) || '',
    enabled: router.isReady && !isAddMode,
  })
  return (
    <Box>
      <Container>
        <Typography component="h1" variant="h5" mt={8} mb={4}>
          {isAddMode ? 'Add new work' : `Edit work #${workId}`}
        </Typography>
        <Box>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus porro amet quam sequi
          quia, delectus error voluptas voluptatem explicabo. Laborum molestiae modi similique,
          nostrum voluptates sit blanditiis adipisci nobis. Ipsa?
        </Box>
      </Container>
    </Box>
  )
}

AddEditWorkPage.Layout = MainLayout
