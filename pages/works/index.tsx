import { MainLayout } from '@/components/layouts'
import { WorkList } from '@/components/work'
import { useWorkList } from '@/hooks'
import { ListParams } from '@/models'
import { WheelchairPickup } from '@mui/icons-material'
import { Box, Button, Container, Pagination, Stack, Typography } from '@mui/material'
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

  const { _page, _totalRows, _limit } = data?.pagination || {}
  const totalPage = !!_totalRows ? Math.ceil(_totalRows / _limit) : 0

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setFilter((_prev) => ({ ..._prev, _page: value }))
  }

  return (
    <Box>
      <Container>
        <Typography component="h1" variant="h5" mt={8} mb={4}>
          Work
        </Typography>
        <WorkList workList={data?.data || []} isLoading={isLoading} />
        {totalPage > 1 && (
          <Stack alignItems="center">
            <Pagination count={totalPage} page={_page} onChange={handlePageChange} />
          </Stack>
        )}
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
