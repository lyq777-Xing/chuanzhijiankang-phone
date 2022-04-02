<template>
  <div>
    <van-nav-bar title="传智健康"></van-nav-bar>
    <div class="contentBox">
      <div class="notice-article">
        <div class="info-title">
          <span class="name">体检预约成功</span>
        </div>
        <div class="notice-item">
          <div class="item-title">预约信息</div>
          <div class="item-content">
            <p>体检人：{{orderInfo.name}}</p>
            <p>体检套餐：{{orderInfo.setmeal}}</p>
            <p>体检日期：{{orderInfo.orderDate}}</p>
            <p>预约类型：{{orderInfo.orderType}}</p>
          </div>
        </div>
        <div class="notice-item">
          <div class="item-title">注意事项</div>
          <div class="item-content">
            <p>1、体检前三天饮食不宜有太大变化，尽量保证清淡饮食，避免油腻、过甜、过咸的食物，避免饮食不均暴饮暴食，以免影响检查结果。</p>
            <p>2、体检前要注意好好休息，尽量不要做剧烈运动以及情绪也不宜激动，要保证充足的睡眠时间，调整好自己的身体状态。</p>
            <p>3、体检前不要饮酒，酒精会影响到检查的准确性，如导致甘油三酯、转氨酶等检查结果出现异常，干扰到很多检查项目。</p>
            <p>4、体检当天应该保证穿着轻便、简单，另外女士要注意不要穿连裙、连裤袜，以及不要佩戴饰品等，以免影响检查。</p>
            <p>5、女士朋友要注意避开经期，以防经期影响到相关的检查项目。</p>
            <p>6、如果有前列腺或妇科B超检查，需要憋尿，检前可以适当饮水，以保证膀胱充盈后再进行检查。</p>
            <p>7、如果有妇科检查，要注意检前不宜进行夫妻生活，夫妻生活会影响到阴道检查，干扰检查的结果。</p>
            <p>8、做妇科检查前也不宜过度清洁，不宜使用阴道药物，避免过度清洁或是药物干扰，影响到检查的结果。</p>
            <p>9、积极配合医师的检查，保持良好的心态，告知医师自己的真实情况，有助于医师帮助判断身体健康状况。</p>
            </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      orderInfo:[],
    }
  },
  created(){
    this.getOrderInfo();
  },
  methods:{
    async getOrderInfo(){
      const{data:res} = await this.$http.get('/order/findbyid?id='+ this.$route.query.id)
      console.log(res);
      if(res.flag != true){
        return this.$message.error('获取预约数据失败')
      }
      this.orderInfo = res.data
      this.$message.success('获取预约信息成功')
    }
  }
}
</script>

<style lang="less" scoped>
  .van-nav-bar{
    background-color: #000;
  }
  /deep/.van-nav-bar__title{
    color: #fff;
  }
  /*
 * colors variables
 */
.top-header {
  background-color: #000;
  color: #fff;
  text-align: center;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  padding: 0 10px;
}

/*
 * colors variables
 */
.notice-article {
  padding-left: 5px;
  padding-right: 5px;
  background-color: #fff;
}

.notice-article .info-title {
  font-size: 14px;
  color: #333;
  line-height: 1;
  position: relative;
  padding: 3.5% 3.5% 5px;
  background-color: #fff;
}

.notice-article .info-title:before {
  content: '';
  width: 5px;
  height: 24px;
  border-radius: 6px;
  background-image: linear-gradient(90deg, #26acff, #0088dc);
  display: table-cell;
}

.notice-article .info-title .name {
  display: table-cell;
  vertical-align: middle;
  padding-left: 10px;
  font-size: 16px;
}

.notice-article .notice-item {
  border-bottom: 1px solid #e7e7e7;
}

.notice-article .notice-item .item-title {
  font-size: 14px;
  color: #333;
  line-height: 1;
  padding: 3.5%;
}

.notice-article .notice-item .item-subtitle {
  font-size: 13px;
  padding: 2.5% 3.5% 5px;
}

.notice-article .notice-item .item-content {
  padding-bottom: 2%;
}

.notice-article .notice-item .item-content p {
  font-size: 12px;
  color: #888;
  line-height: 2;
  padding: 0 3.5%;
}

</style>