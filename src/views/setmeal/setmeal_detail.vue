<template>
  <div>
    <van-nav-bar title="传智健康"></van-nav-bar>
    <div class="contentBox">
        <div class="card">
            <div class="project-img">
                <img :src="imgUrl" width="100%" height="100%" />
            </div>
            <div class="project-text">
                <h4 class="tit">{{setmeal.name}}</h4>
                <p class="subtit">{{setmeal.remark}}</p>
                <p class="keywords">
                    <span>{{setmeal.sex == '0' ? '性别不限' : setmeal.sex == '1' ? '男':'女'}}</span>
                    <span>{{setmeal.age}}</span>
                </p>
            </div>
            <!--<div class="project-know">
                <a href="orderNotice.html" class="link-page">
                    <i class="icon-ask-circle"><span class="path1"></span><span class="path2"></span></i>
                    <span class="word">预约须知</span>
                    <span class="arrow"><i class="icon-rit-arrow"></i></span>
                </a>
            </div>-->
        </div>
        <div class="table-listbox">
            <div class="box-title">
                <i class="icon-zhen"><span class="path1"></span><span class="path2"></span></i>
                <span>套餐详情</span>
            </div>
            <div class="box-table">
                <div class="table-title">
                    <div class="tit-item flex2">项目名称</div>
                    <div class="tit-item  flex3">项目内容</div>
                    <div class="tit-item  flex3">项目解读</div>
                </div>
                <div class="table-content">
                    <ul class="table-list">
                        <li :key="checkgroup.id" class="table-item" v-for="checkgroup in setmeal.checkGroups">
                            <div class="item flex2">{{checkgroup.name}}</div>
                            <div class="item flex3">
                                <label :key="checkitem.id" v-for="checkitem in checkgroup.checkItems">
                                    {{checkitem.name}}
                                </label>
                            </div>
                            <div class="item flex3">{{checkgroup.remark}}</div>
                        </li>
                    </ul>
                </div>
                <van-button @click="toOrderInfo()" size="large" type="info">立即预约</van-button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl:null,
      setmeal:{},
      checkgroup:[]
    };
  },
  created(){
    this.getSetMealById();
  },
  methods: {
    async getSetMealById(){
      const {data:res} = await this.$http.get(`setmeal/findbyid?id=${this.$route.query.id}`)
      if(res.flag != true){
        return this.$message.error('查询失败')
      }
      this.setmeal = res.data
      // console.log(res.img);
      this.imgUrl = "http://r96pit9s3.hd-bkt.clouddn.com/"+res.data.img
      this.checkgroup = res.checkGroups
      console.log(res);
      // console.log(this.setmeal);
    },
    toOrderInfo(){
      this.$router.push({path:"/orderInfo",query:{id:this.$route.query.id}})
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
  /*
 * colors variables
 */
.table-listbox .box-title {
  position: relative;
  padding: 3.3%;
  font-size: 14px;
  background-color: #fff;
  margin: 2% 0;
  color: #666;
}

.table-listbox i {
  font-size: 16px;
  vertical-align: middle;
}

.table-listbox .box-table {
  background-color: #fff;
}

.table-listbox .box-table .flex2 {
  flex: 2;
}

.table-listbox .box-table .flex3 {
  flex: 3;
}

.table-listbox .box-table .table-title {
  display: flex;
  padding: 2% 0;
  border-bottom: 1px solid #f3f2f7;
}

.table-listbox .box-table .table-title .tit-item {
  border-right: 1px solid #dbdbdb;
  line-height: 2;
  font-size: 14px;
  color: #333;
  text-align: center;
}

.table-listbox .box-table .table-content .table-list {
  padding: 0 2.7% 0 0;
}

.table-listbox .box-table .table-content .table-list .table-item {
  display: flex;
  padding: 3.3% 0;
  border-bottom: 1px solid #E3E3E3;
}

.table-listbox .box-table .table-content .table-list .table-item .item {
  font-size: 12px;
  color: #666;
  line-height: 1.6;
  padding-left: 7px;
}

.table-listbox .box-table .table-content .table-list .table-item .item:first-child {
  text-align: center;
}

.table-listbox .box-button .order-btn {
  width: 100%;
  display: block;
  text-align: center;
  font-size: 18px;
  color: #fff;
  border-radius: 0;
  padding: 3.5% 0;
  background-image: linear-gradient(90deg, #26acff, #0088dc);
}
/*
 * colors variables
 */
.card {
  background-color: #fff;
}

.card i {
  font-size: 16px;
  vertical-align: middle;
}

.card .project-text {
  padding: 3.3%;
}

.card .project-text p {
  margin-bottom: 10px;
}

.card .project-text .tit {
  font-weight: normal;
  font-size: 16px;
  color: #333;
  line-height: 1.2;
}

.card .project-text .subtit {
  font-size: 14px;
  color: #818181;
  line-height: 2;
}

.card .project-text .keywords {
  font-size: 12px;
  color: #ea5504;
}

.card .project-text .keywords span {
  padding: 5px 2%;
  border: 1px solid #ffb891;
  border-radius: 6px;
  margin-right: 1.3%;
}

.card .project-know {
  border-top: 1px solid #e3e3e3;
  padding: 0 3.3%;
  font-size: 14px;
  line-height: 3;
  position: relative;
}

.card .project-know .word {
  color: #666;
}

.card .project-know .arrow {
  float: right;
}

.card .project-know .arrow .icon-rit-arrow {
  font-weight: bold;
}


</style>