<template>
  <view class="index" :style="{ paddingTop: navHeight + 5+  'px'}">
    <customNavigation title="首页" :isArrow="false" bgc="#f5f6f7"></customNavigation>
    <text>{{ msg }}</text>
    <nut-button type="primary" size="small">测试</nut-button>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import Taro from '@tarojs/taro'
import customNavigation from '@/components/customNavigation/index.vue'
import { globaStore } from '@/store' 
import { storeToRefs } from "pinia";
import './index.scss';
const msg = ref('Hello Taro')
const globa = globaStore()
const { navHeight } = storeToRefs(globa)

</script>
