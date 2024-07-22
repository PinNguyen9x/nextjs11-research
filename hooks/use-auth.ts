import authApi from '@/api/auth-api'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'
// Auth -> protected page
// <Auth>{children}</Auth>
export function useAuth(options?: Partial<PublicConfiguration>) {
  // profile
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: 60 * 60 * 1000, // 1hr
    revalidateOnFocus: false,
    ...options,
  })
  // khong su dung try catch o day de cho cho nao su dung thi handle
  async function login() {
    await authApi.login({
      username: 'admin',
      password: 'admin12312',
    })
    await mutate()
  }
  async function logout() {
    await authApi.logout()
    await mutate({}, false)
  }
  return { profile, error, login, logout }
}
