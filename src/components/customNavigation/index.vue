<template>
  <view class="custom-navigation" :style="{ backgroundColor: bgc }">
    <view class="customBar_top" :style="{ height: stateHeight + 'px' }"></view>
    <view class="custom-navigation-content" :style="{ height: navHeight + 'px', lineHeight: navHeight + 'px' }">
      <view class="custom-navigation-left-item" @click="onClickLeft" v-if="isArrow">
        <image
          v-if="navLength >= 2"
          @tap="handleArrow"
          class="customBar_cont_arrow"
          :src="arrowImg"
        ></image>
        <image
          v-else
          @tap="handleArrow"
          class="customBar_cont_arrow"
          :src="arrowHomeImg"
        ></image>
        <slot name="left"></slot>
      </view>
      <view class="custom-navigation-center">
        {{ title }}
      </view>
      <view class="custom-navigation-left-item" v-if="isArrow"></view>
    </view>
  </view>
</template>
<script setup>
import { ref, defineProps, } from "vue";
import './index.scss'
import Taro, { useLoad, getCurrentPages, useReady } from "@tarojs/taro";
import { globaStore } from '@/store' 
import whiteArrowBackImg from "@/assets/imgs/arrow-back.png";
import whiteArrowHomeImg from "@/assets/imgs/arrow-home.png";
const props = defineProps({
  isArrow: {
    //是否展示左边的箭头
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "标题"
  },
  isSlotLeft: {
    type: Boolean,
    default: false
  },
  arrowImg: {
    //左边箭头的图片， 默认白色 如果需要切换arrowImg，arrowHomeImg两者都需要切换
    default: whiteArrowBackImg,
  },
  opacity: {
    type: Number,
    default: 1,
  },
  arrowHomeImg: {
    //左边箭头的图片， 默认白色
    default: whiteArrowHomeImg,
  },
  bgc:{
    type:String,
    default:""
  }
})
const stateHeight = ref(0);
const navHeight = ref(0);
const navLength = ref(2)
const globa = globaStore()
useReady(() => {
  let rect = Taro.getMenuButtonBoundingClientRect
    ? Taro.getMenuButtonBoundingClientRect()
    : null; //胶囊按钮位置信息
  stateHeight.value = rect.top;
  navHeight.value = rect.height;
  globa.setNavHeight(rect.top + rect.height + 6); //获取自定义头部的高度 +6 是因为胶囊与底部有一个12rpx的padding 三者相加得出来的结果就是内容区域需要的padding高度
  navLength.value = getCurrentPages().length || 2;
})
</script>