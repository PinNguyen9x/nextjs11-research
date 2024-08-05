import { MainLayout } from '@/components/layouts'
import { WorkList } from '@/components/work'
import { useWorkList } from '@/hooks'
import { ListParams } from '@/models'
import { WheelchairPickup } from '@mui/icons-material'
import { Box, Button, Container, Typography } from '@mui/material'
import { useState } from 'react'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  const [filter, setFilter] = useState<Partial<ListParams>>({
    _page: 1,
    _limit: 10,
  })
  const { data, isLoading } = useWorkList({
    params: filter,
  })

  return (
    <Box>
      <Container>
        <Typography component="h1" variant="h5" mt={8} mb={4}>
          Work
        </Typography>
        <WorkList workList={data?.data || []} isLoading={isLoading} />
        <Button
          variant="contained"
          onClick={() => setFilter({ ...filter, _page: (filter?._page || 0) + 1 })}
        >
          Next Page
        </Button>
      </Container>
    </Box>
  )
}

export function getStaticProps() {
  return {
    props: {},
  }
}

WorksPage.Layout = MainLayout
