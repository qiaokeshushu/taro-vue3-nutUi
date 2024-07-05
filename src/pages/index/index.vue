<template>
  <view class="index" :style="{ paddingTop: navHeight + 5+  'px'}">
    <customNavigation title="首页" :isArrow="false" bgc="#f5f6f7"></customNavigation>
    <view>{{ msg }}</view>
    <view>
      环境：{{ getEnv() }}
    </view>
    <button open-type="getPhoneNumber" size="small" @getPhoneNumber="getPhoneNumber">获取手机号</button>
    <button open-type="share" size="small" data-title="分享">分享</button>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import Taro,{useShareAppMessage} from '@tarojs/taro'
import customNavigation from '@/components/customNavigation/index.vue'
import { globaStore } from '@/store' 
import { storeToRefs } from "pinia";
import { getEnv } from '@/utils/env'
import './index.scss';
const msg = ref('Hello Taro')
const globa = globaStore()
const { navHeight } = storeToRefs(globa)
const getPhoneNumber = (e) => {
  console.log(e);
}
useShareAppMessage((res) => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
      return {
      title: res.target.dataset.title,
      path: '/page/index',
    }
    }
    return {
      title: '自定义转发标题',
      path: '/page/index',
    }
  })
</script>
