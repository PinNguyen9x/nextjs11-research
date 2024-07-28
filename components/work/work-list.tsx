import { Work } from '@/models'
import { Box, Divider } from '@mui/material'
import { Fragment } from 'react'
import { WorkItem } from './work-item'

export interface WorkListProps {
  workList: Work[]
}

export function WorkList({ workList }: WorkListProps) {
  if (!workList) return null
  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <WorkItem work={work} />
          <Divider sx={{ my: 3 }} />
        </Fragment>
      ))}
    </Box>
  )
}
