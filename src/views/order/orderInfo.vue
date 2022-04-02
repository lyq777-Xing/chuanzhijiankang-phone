<template>
  <div>
    <van-nav-bar title="传智健康"></van-nav-bar>
    <div class="contentBox">
      <div class="card">
        <div class="">
          <img :src="'http://r96pit9s3.hd-bkt.clouddn.com/'+setmeal.img" width="100%" height="100%" />
        </div>
        <div class="project-text">
          <h4 class="tit">{{setmeal.name}}</h4>
          <p class="subtit">{{setmeal.remark}}</p>
          <p class="keywords">
            <span>{{setmeal.sex == '0' ? '性别不限' : setmeal.sex == '1' ? '男':'女'}}</span>
            <span>{{setmeal.age}}</span>
          </p>
        </div>
        <van-button type="default" @click="HanleBtn">预约须知</van-button>
      </div>
      <van-row  class="info-title name">体检人信息</van-row>
      <van-form :model="orderInfo" ref="orderInfo"  class="info-form" @submit="onSubmit">
        <van-field
          v-model="orderInfo.name"
          name="姓名"
          label="姓名"
          :rules="[{ required: true, message: '请输入姓名' }]"
        />
        <van-field name="radio" label="性别">
          <template #input>
            <van-radio-group  class="radio-list" direction="horizontal" v-model="orderInfo.sex">
              <van-radio name="1">男</van-radio>
              <van-radio name="2">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          v-model="orderInfo.telephone"
          center
          clearable
          label="手机号"
          name="validator "
          type=tel
          :rules="[{required: true,message: '请输入正确手机号'},{validator ,message: '请输入正确手机号'}]"
        >
          <template #button>
            <van-button size="small"  native-type="button" :disabled="Btn" type="primary"  @click="sendValidateCode">发送验证码</van-button>
            <van-count-down
              ref="countDown"
              millisecond
              :time="30000"
              :auto-start="false"
              @finish="finish"
            />
          </template>
        </van-field>
        <van-field
          v-model="orderInfo.validateCode"
          name="验证码"
          label="验证码"
          :rules="[{ required: true, message: '请输入验证码' }]"
        />
        <van-field
          v-model="orderInfo.idCard"
          name="pattern"
          label="身份证号"
          :rules="[{ required: true, message: '请输入身份证号'},{pattern ,message: '请输入正确身份证号'}]"
        />
        <van-field
          readonly
          clickable
          name="calendar"
          :value="value"
          label="日期"
          @click="showCalendar = true"
          :rules="[{ required: true, message: '请选择日期' }]"
        />
        <van-calendar v-model="showCalendar" :min-date="minDate" :max-date="maxDate" @confirm="onConfirm" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">点击预约</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      setmeal:{},
      orderInfo:{
        sex:'0',
        telephone:'',
        validateCode:'',
        idCard:'',
        date:'',
        setmealId:''
      },
      pattern : /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
      value: '',
      showCalendar: false,
      Btn:false,
      minDate:new Date(),
      maxDate:new Date((new Date()).getFullYear(),(new Date()).getMonth()+1,(new Date()).getDate()),
    }
  },
  created(){
    this.getSetMealById();
  },
  methods:{
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
      // console.log(new Date((new Date()).getFullYear(),(new Date()).getMonth()+2,(new Date()).getDate()));
    },
    submitOrder(){
      // console.log(this.$refs.orderInfo.validate());
      // if(this.$refs.orderInfo.validate())
    },
    async sendValidateCode(){
      if(!this.validator){
        return this.$message.error('请输入正确的手机号')
      }
      const {data:res} = await this.$http.get('/validateCode/sendOderCode?phone='+this.orderInfo.telephone)
      if(res.flag != true){
        return this.$message.error('验证码获取失败')
      }
      this.$message.success('验证码发送成功')
      this.$refs.countDown.start();
      this.Btn = true
    },
    HanleBtn(){
      this.$router.push({path:"/ordernodice"})
      this.show = true
    },
    onConfirm(date) {
      this.value = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      this.orderInfo.date = this.value
      this.showCalendar = false;
    },
    validator(val){
      return /^[1][3,4,5,7,8][0-9]{9}$/.test(val);
    },
    finish(){
      this.$refs.countDown.reset();
      this.Btn = false;
    },
    async onSubmit(){
      this.orderInfo.setmealId = this.$route.query.id
      const {data:res} = await this.$http.post('/order/submit',this.orderInfo)
      console.log(res);
      if(res.flag != true){
        return this.$message.error('预约失败')
      }
      this.$message.success('预约成功')
      this.$router.push({path:"/ordersuccess",query:{id:res.data.id}})
      // console.log("a");
      console.log(this.orderInfo);
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

/*
 * colors variables
 */
.form-info {
  margin: 2% 0 0;
}

.info-title {
  font-size: 16px;
  color: #333;
  line-height: 1;
  position: relative;
  padding: 3.5%;
  background-color: #fff;
}

.form-info .info-title:before {
  content: '';
  width: 8px;
  height: 26px;
  border-radius: 6px;
  background-image: linear-gradient(90deg, #26acff, #0088dc);
  display: table-cell;
}

.form-info .info-title .name {
  display: table-cell;
  vertical-align: middle;
  text-indent: 12px;
}

.form-info .info-form {
  position: relative;
}

.form-info .info-form .input-row {
  padding: 3.5%;
  position: relative;
  height: auto;
  border-bottom: 1px solid #f3f2f7;
  background-color: #fff;
  display: flex;
}

.form-info .info-form .input-row label {
  color: #555;
  flex: 1;
  font-size: 14px;
}

.form-info .info-form .input-row .radio-list {
  flex: 3;
}

.form-info .info-form .input-row input[type=text] {
  flex: 3;
  line-height: 1.1;
  height: auto;
  border: none;
  font-size: 14px;
}

.form-info .info-form .input-row .radio {
  position: relative;
  display: inline-block;
}

.form-info .info-form .input-row .radio label {
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid #ddd;
}

.form-info .info-form .input-row .radio input {
  width: 16px;
  height: 16px;
  opacity: 0;
}

.form-info .info-form .input-row .radio input:checked + label {
  border: 3px solid #038bdf;
}

.form-info .info-form .input-row .radio span {
  padding-left: 10px;
  color: #777;
  font-size: 14px;
}

.form-info .info-form .date {
  background-color: #fff;
  margin: 2% 0 6.7%;
  padding: 4% 3.7%;
  font-size: 14px;
  position: relative;
  line-height: 1;
  color: #555;
}

.form-info .info-form .date i {
  position: absolute;
  right: 6%;
  line-height: 1;
  top: 23px;
}

.form-info .info-form .date input {
  width: 75%;
  line-height: 26px;
  text-indent: 10px;
  cursor: pointer;
  background-color: transparent;
  position: relative;
  padding: 0;
  border: 0;
}

.form-info .box-button .order-btn {
  width: 100%;
  font-size: 18px;
  color: #fff;
  border-radius: 0;
  padding: 3.6% 0;
  border: none;
  background-image: linear-gradient(90deg, #26acff, #0088dc);
}

.date_ctrl {
  background-color: #fff !important;
}

.date_btn {
  font-weight: normal !important;
}
</style>