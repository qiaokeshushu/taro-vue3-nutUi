<template>
  <view class="index" :style="{ paddingTop: navHeight + 5+  'px'}">
    <customNavigation title="首页" :isArrow="false" bgc="#f5f6f7"></customNavigation>
    <view>{{ msg }}</view>
    <view>
      环境：{{ getEnv() }}
    </view>
    <button open-type="getPhoneNumber" size="small" @getPhoneNumber="getPhoneNumber">获取手机号</button>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import Taro from '@tarojs/taro'
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
</script>
