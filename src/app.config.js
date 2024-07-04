export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/logs/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: "#141B22",
    selectedColor: "#141B22",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    custom: true,
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: "assets/imgs/index.png",
        selectedIconPath: "assets/imgs/indexSelect.png",
      },
      {
        pagePath: 'pages/logs/index',
        text: '日志',
        iconPath: "assets/imgs/chat.png",
        selectedIconPath: "assets/imgs/chatSelect.png",
      }
    ]
  },

  requiredPrivateInfos: ["getLocation","chooseLocation"],
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于向您推荐附近的活动",
    },
  },
})
