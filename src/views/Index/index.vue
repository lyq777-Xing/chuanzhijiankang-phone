<template>
  <div class="back">
    <van-nav-bar title="传智健康"></van-nav-bar>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="http://r96pit9s3.hd-bkt.clouddn.com/widget-banner_01.png">
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://r96pit9s3.hd-bkt.clouddn.com/widget-banner_02.png">
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://r96pit9s3.hd-bkt.clouddn.com/widget-banner_03.png">
      </van-swipe-item>
    </van-swipe> -->
    <van-row type="flex" justify="space-around"  class="row_one">
      <van-col span="10">
        <van-button @click="handleBtnOne" icon="https://img01.yzcdn.cn/vant/user-active.png" class="btn_one" size="large" round>体检预约</van-button>
      </van-col>
      <van-col span="10">
        <van-button icon="https://img01.yzcdn.cn/vant/user-active.png" class="btn_one" size="large" round>报告查询</van-button>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around"  class="row_one">
      <van-col span="10">
        <van-button icon="https://img01.yzcdn.cn/vant/user-active.png" class="btn_one" size="large" round>健康评估</van-button>
      </van-col>
      <van-col span="10">
        <van-button icon="https://img01.yzcdn.cn/vant/user-active.png" class="btn_one" size="large" round>健康干预</van-button>
      </van-col>
    </van-row>    
    <van-row type="flex" justify="space-around"  class="row_one">
      <van-col span="10">
        <van-button icon="https://img01.yzcdn.cn/vant/user-active.png" class="btn_one" size="large" round>健康档案</van-button>
      </van-col>
      <van-col span="10">
        <van-button icon="https://img01.yzcdn.cn/vant/user-active.png" class="btn_one" size="large" round>健康咨询</van-button>
      </van-col>
    </van-row>
    <van-image
      width="100%"
      :src="require('../../assets/asset-ad.png')"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
export default {
  data() {
    return {
      images: [
        'http://r96pit9s3.hd-bkt.clouddn.com/widget-banner_01.png',
        'http://r96pit9s3.hd-bkt.clouddn.com/widget-banner_02.png',
        'http://r96pit9s3.hd-bkt.clouddn.com/widget-banner_03.png',
      ],
    };
  },
  methods: {
    handleBtnOne(){
      this.$router.push({path:"/setmeal"})
    }
  },
}
</script>

<style lang="less" scoped>
  .van-nav-bar{
    background-color: #000;
  }
  /deep/.van-nav-bar__title{
    color: #fff;
  }
  .btn_one{
    width: 160px;
    height: 85px;
  }
  .row_one{
    margin-top: 15px;
  }
  .back{
    background-color: rgb(241, 241, 241);
  }
</style>