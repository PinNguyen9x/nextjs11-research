import authApi from '@/api/auth-api'
import { LoginPayload, UserProfile } from '@/models'
import useSWR, { SWRConfiguration } from 'swr'
// Auth -> protected page
// <Auth>{children}</Auth>
export function useAuth(options?: Partial<SWRConfiguration>) {
  // profile
  const {
    data: profile,
    error,
    mutate,
  } = useSWR<UserProfile | null>('/profile', {
    dedupingInterval: 60 * 60 * 1000, // 1hr
    revalidateOnFocus: false,
    ...options,
  })
  console.log({ profile, error })

  const firstLoading = profile === undefined && error === undefined
  // khong su dung try catch o day de cho cho nao su dung thi handle
  async function login(data: LoginPayload) {
    await authApi.login(data)
    await mutate()
  }
  async function logout() {
    await authApi.logout()
    await mutate(null, false)
  }
  return { profile, error, login, logout, firstLoading }
}
