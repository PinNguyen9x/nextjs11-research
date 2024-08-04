import workApi from '@/api-client/work-api'
import { MainLayout } from '@/components/layouts'
import React, { useEffect } from 'react'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  useEffect(() => {
    ;(async () => {
      try {
        const workList = await workApi.getAll({})
        console.log('worklist: ', workList)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return <div>Works Page</div>
}

export function getStaticProps() {
  return {
    props: {},
  }
}

WorksPage.Layout = MainLayout
