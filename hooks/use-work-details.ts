import workApi from '@/api-client/work-api'
import { QueryKeys } from '@/constants'
import useSWR, { SWRConfiguration } from 'swr'
export interface UseWorkDetailsProps {
  workId: string
  options?: SWRConfiguration
  enabled?: boolean
}
export function useWorkDetails({ enabled = true, workId, options }: UseWorkDetailsProps) {
  return useSWR(enabled ? [QueryKeys.GET_WORK_DETAILS, workId] : null, () => workApi.get(workId), {
    dedupingInterval: 30 * 1000, // 30s
    keepPreviousData: true,
    fallbackData: null,
    ...options,
  })
}
