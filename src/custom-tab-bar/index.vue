<template>
  <view  class="zxTabBar" :style="{ paddingBottom: bottomDis + 'px' }">
    <view
      class="customTabBar_part"
      v-for="(item, index) in tabBar"
      :key="item.id"
      @tap="handleTab(item, index)"
    >
      <image
        v-show="currentTabIndex != index"
        class="customTabBar_part_img"
        :src="item.icon"
        :class="{ big: item.id == 3 }"
      ></image>
      <image
        v-show="currentTabIndex == index"
        class="customTabBar_part_img"
        :src="item.selectIcon"
        :class="{ big: item.id == 3 }"
      ></image>
      <text class="customTabBar_part_name">{{ item.name }}</text>
    </view>
  </view>
</template>
<script setup>
import { onMounted, ref } from "vue";
import './index.scss'
import { globaStore } from "@/store/index";
import Taro from "@tarojs/taro";
import indexImg from "@/assets/imgs/index.png";
import indexSelectImg from "@/assets/imgs/indexSelect.png";
import chatImg from "@/assets/imgs/chat.png";
import chatSelectImg from "@/assets/imgs/chatSelect.png";
const bottomDis = ref(0);
const globa = globaStore()
const tabBar = ref([
  {
    id: 1,
    name: "首页",
    icon: indexImg,
    selectIcon: indexSelectImg,
    current: "/pages/index/index",
  },
  {
    id: 2,
    name: "日志",
    icon: chatImg,
    selectIcon: chatSelectImg,
    current: "/pages/logs/index",
  },
]);
function handleTab(item, index) {
  Taro.switchTab({
    url: item.current,
  });
}
onMounted(() => {
  const deviceInfo = Taro.getWindowInfo();
  bottomDis.value = deviceInfo.screenHeight - deviceInfo.safeArea.bottom;
  globa.setSafeArea(bottomDis.value + 50);
})
</script>