import { createApp } from 'vue'
import '@/assets/iconfont/font.css'
import './style.css'
import './styles/common.scss'
import '@/assets/font/font.scss'
import App from './App.vue'
import router from './router/index'
// svg 相关
import 'virtual:svg-icons-register'
import SvgIcon from './components/svgicon/index.vue'

createApp(App)
  .component('svg-icon', SvgIcon)
  .use(router)
  .mount('#app')
