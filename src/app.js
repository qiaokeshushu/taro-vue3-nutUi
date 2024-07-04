import { createApp } from 'vue'
import './app.scss'
import { createPinia } from "pinia";
import Taro from '@tarojs/taro'

const App = createApp({
  onLaunch () {
    Taro.login({
      success: (res) => {
        console.log(res)
      }
    })
    Taro.getLocation({
      type: "gcj02",
      success: (res) => {
        console.log(res)
      }
    })

  },
  onShow (options) {
    console.log('App onShow.')
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(createPinia());

export default App
