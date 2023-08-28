import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
//引入自定义插件对象:注册整个项目全局组件
import gloalComponent from '@/components/index'
import '@/styles/index.scss'

const app = createApp(App)  

app.use(ElementPlus,{
    locale:zhCn
})
//安装自定义插件
app.use(gloalComponent)
app.mount('#app')
