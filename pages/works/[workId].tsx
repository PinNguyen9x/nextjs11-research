import { MainLayout } from '@/components/layouts'
import { WorkForm } from '@/components/work'
import { useWorkDetails } from '@/hooks'
import { Box, Container, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Script from 'next/script'

export interface AddEditWorkPageProps {}

export default function AddEditWorkPage(props: AddEditWorkPageProps) {
  const router = useRouter()
  const { workId } = router.query || {}
  const isAddMode = workId === 'add'
  const { data: workDetails, isLoading } = useWorkDetails({
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
        <Box>
          {(isAddMode || !!workDetails) && (
            <WorkForm initialValues={workDetails} onSubmit={() => {}} />
          )}
        </Box>
      </Container>
      <Script src="https://widget.cloudinary.com/v2.0/global/all.js" strategy="afterInteractive" />
    </Box>
  )
}

AddEditWorkPage.Layout = MainLayout
