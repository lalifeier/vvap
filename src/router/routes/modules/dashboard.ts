import type { AppRouteModule } from '@/router/types'
import { DEFAULT_LAYOUT } from '../constant'

export const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  meta: {
    title: 'Dashboard'
  },
  component: DEFAULT_LAYOUT,
  redirect: '/dashboard/index',
  children: [
    {
      path: 'index',
      name: 'Index',
      meta: {
        title: 'Dashboard'
      },
      component: () => import('@/views/dashboard/index.vue')
    }
  ]
}

export default dashboard
