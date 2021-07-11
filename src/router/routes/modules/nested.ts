import { AppRouteModule } from '../../types'

const nested: AppRouteModule = {
  path: '/nested',
  redirect: '/nested/menu1/menu1-1',
  name: 'Nested',
  meta: {
    title: '多级菜单',
    icon: 'nested'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('/@/views/nested/menu1/index.vue'),
      name: 'Menu1',
      meta: { title: '菜单 1' },
      redirect: '/nested/menu1/menu1-1',
      children: [
        {
          path: 'menu1-1',
          component: () => import('/@/views/nested/menu1/menu1-1/index.vue'),
          name: 'Menu1-1',
          meta: { title: '菜单 1-1' }
        },
        {
          path: 'menu1-2',
          component: () => import('/@/views/nested/menu1/menu1-2/index.vue'),
          name: 'Menu1-2',
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          meta: { title: '菜单 1-2' },
          children: [
            {
              path: 'menu1-2-1',
              component: () => import('/@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
              name: 'Menu1-2-1',
              meta: { title: '菜单 1-2-1', affix: false }
            },
            {
              path: 'menu1-2-2',
              component: () => import('/@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
              name: 'Menu1-2-2',
              meta: { title: '菜单 1-2-2' }
            }
          ]
        },
        {
          path: 'menu1-3',
          component: () => import('/@/views/nested/menu1/menu1-3/index.vue'),
          name: 'Menu1-3',
          meta: { title: '菜单 1-3' }
        }
      ]
    },
    {
      path: 'menu2',
      name: 'Menu2',
      component: () => import('/@/views/nested/menu2/index.vue'),
      meta: { title: '菜单 2' }
    }
  ]
}

export default nested
