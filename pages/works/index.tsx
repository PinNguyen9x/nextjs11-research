import { MainLayout } from '@/components/layouts'
import { useWorkList } from '@/hooks'
import { ListParams } from '@/models'
import { Box, Button } from '@mui/material'
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
  // useEffect(() => {
  //   ;(async () => {
  //     try {
  //       const workList = await workApi.getAll({})
  //       console.log('worklist: ', workList)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })()
  // }, [])
  console.log({ data, isLoading })
  return (
    <Box>
      Works Page
      <Button
        variant="contained"
        onClick={() => setFilter({ ...filter, _page: (filter?._page || 0) + 1 })}
      >
        Next Page
      </Button>
    </Box>
  )
}

export function getStaticProps() {
  return {
    props: {},
  }
}

WorksPage.Layout = MainLayout
