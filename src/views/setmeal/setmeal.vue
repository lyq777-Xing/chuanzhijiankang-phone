<template>
  <div class="back">
    <van-nav-bar title="传智健康"></van-nav-bar>
    <div class="contentBox">
        <div class="list-column1">
            <ul class="list">
                <li class="list-item" v-for="setmeal in setmealList" :key="setmeal.id">
                    <a class="link-page" @click="getDetailPage(setmeal.id)">
                    <img class="img-object f-left" :src="'http://r96pit9s3.hd-bkt.clouddn.com/'+setmeal.img" alt="">
                    <div class="item-body">
                        <h4 class="ellipsis item-title">{{setmeal.name}}</h4>
                        <p class="ellipsis-more item-desc">{{setmeal.remark}}</p>
                        <p class="item-keywords">
                            <span>{{setmeal.sex == '0' ? '性别不限' : setmeal.sex == '1' ? '男':'女'}}</span>
                            <span>{{setmeal.age}}</span>
                        </p>
                    </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setmealList:[]
    };
  },
  created(){
    this.getSetMeal();
  },
  methods: {
    async getSetMeal(){
      console.log(res);
      const {data:res} = await this.$http.get('setmeal/findall')
      if(res.flag == false){
        return this.$message.error('获取数据失败')
      }
      this.setmealList = res.data
      console.log(res);
    },
    getDetailPage(id){
      this.$router.push({path:"/setmeal_detail" ,query:{id:id}} )
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
/*
 * colors variables
 */
.list-column1 .list {
  padding: 0 5.3%;
  overflow: hidden;
  background-color: #fff;
}

.list-column1 .list .list-item {
  padding: 5.3% 0;
  border-bottom: 1px solid #e3e3e3;
}

.list-column1 .list .list-item a {
  display: flex;
  align-items: center;
}

.list-column1 .list .list-item .img-object {
  max-width: 28%;
  height: auto;
  margin-right: 4.6%;
}

.list-column1 .list .list-item .item-body {
  overflow: hidden;
}

.list-column1 .list .list-item .item-body .ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.list-column1 .list .list-item .item-body .ellipsis-more {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
}

.list-column1 .list .list-item .item-body .item-title {
  margin-top: 0;
  font-weight: normal;
  color: #333;
}

.list-column1 .list .list-item .item-body .item-desc {
  line-height: 1.5;
  color: #999;
}

.list-column1 .list .list-item .item-body .item-keywords {
  margin-top: 2%;
  overflow: hidden;
}

.list-column1 .list .list-item .item-body .item-keywords span {
  padding: 2px 8px;
  color: #ea5504;
  margin-right: 3.3%;
  border: 1px solid #ffb891;
  border-radius: 2px;
}

.list-column1 .list .list-item .item-body .item-link {
  text-align: right;
  margin-top: -1.3%;
  overflow: hidden;
}

.list-column1 .list .list-item .item-body .item-link span {
  background-image: linear-gradient(90deg, #24aafd, #0088dc);
  color: #fff;
  padding: 2% 5.9%;
  border-radius: 5px;
  font-size: 13px;
}
</style>