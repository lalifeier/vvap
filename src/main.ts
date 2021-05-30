import 'virtual:windi-devtools'
import 'virtual:windi.css'
import { createApp } from 'vue'
import App from './App.vue'
import { setupComponent } from './components'
import { setupDirective } from './directive'
import router, { setupRouter } from './router'
import { setupRouterGuard } from './router/guard'
import { setupStore } from './store'
import './styles/index.scss'
;(async () => {
  const app = createApp(App)

  setupStore(app)

  setupComponent(app)

  setupRouter(app)

  setupRouterGuard()

  setupDirective(app)

  await router.isReady()

  app.mount('#app')
})()
