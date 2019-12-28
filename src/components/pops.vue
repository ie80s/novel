<template>
    <div>
      <van-tabbar
      active-color="#07c160" inactive-color="#000">
      <van-tabbar-item icon="send-gift"><router-link to="/">书架</router-link></van-tabbar-item>
      <van-tabbar-item icon="shopping-cart">商城</van-tabbar-item>
      <van-tabbar-item icon="star">收藏</van-tabbar-item>
      <van-tabbar-item icon="friends"><router-link to="mine">我的</router-link></van-tabbar-item>
    </van-tabbar>
    </div>
</template>