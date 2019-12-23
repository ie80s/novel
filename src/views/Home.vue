<template>
  <div id="base">
      <div class="search">
        <van-search
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
    </div><br>
    <div class="Notic">
      <van-notice-bar text="通知内容XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" left-icon="volume-o"/>
    </div>
    <div class="BOOK" v-for="item in List" :key="item.name">
      <van-card
        :price="item.stutas"
        :desc="item.author"
        :title="item.name"
        :thumb="item.image"
      >
      <div slot="num">
          {{item.time}}
      </div>
      </van-card>
    </div>
    <van-tabbar v-model="active"
      active-color="#07c160" inactive-color="#000">
      <van-tabbar-item icon="send-gift">书架</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart">商城</van-tabbar-item>
      <van-tabbar-item icon="star">收藏</van-tabbar-item>
      <van-tabbar-item icon="friends">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  data() {
    return {
      active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      },
      List:[
        {
          image:'./assets/1.jpg',
          author:'xx',
          name:'Vue前端框架',
          status:'已读',
          time:'2019-10-01',
        },
        {
          image:'./assets/1.jpg',
          author:'xx',
          name:'Vue前端框架',
          status:'已读',
          time:'2019-10-01',
        },
        {
          image:'./assets/1.jpg',
          author:'xx',
          name:'Vue前端框架',
          status:'已读',
          time:'2019-10-01',
        },
        {
          image:'./assets/1.jpg',
          author:'xx',
          name:'Vue前端框架',
          status:'已读',
          time:'2019-10-01',
        },
        {
          image:'./assets/1.jpg',
          author:'xx',
          name:'Vue前端框架',
          status:'已读',
          time:'2019-10-01',
        },
        {
          image:'./assets/1.jpg',
          author:'xx',
          name:'Vue前端框架',
          status:'已读',
          time:'2019-10-01',
        },
      ]   
    }
  }
}

</script>
<style scoped lang="scss">
#base{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  .search{
    width: 100%;
    height: 30%;
  }
  .Notic{
    width: 100%;
    height: 30%;
  }
 
 
}

</style>