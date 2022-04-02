<template>
  <div>
    <van-nav-bar title="传智健康-登录页面"></van-nav-bar>
    <van-form ref="loginDateRef" validate-first @submit="onSubmit">
        <van-field
          v-model="login.phoneNumber"
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
        v-model="login.code"
        name="验证码"
        label="验证码"
        :rules="[{ required: true, message: '请输入验证码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      login:{
        phoneNumber:'',
        code:'',
      },
      Btn:false
    }
  },
  methods:{
    validator(val){
      return /^[1][3,4,5,7,8][0-9]{9}$/.test(val);
    },
    async sendValidateCode(){
      if(!this.validator){
        return this.$message.error('请输入正确的手机号')
      }
      const {data:res} = await this.$http.get('/validateCode/sendLoginCode?phone='+this.login.phoneNumber)
      if(res.flag != true){
        return this.$message.error('验证码获取失败')
      }
      this.$message.success('验证码发送成功')
      this.$refs.countDown.start();
      this.Btn = true
    },
    finish(){
      this.$refs.countDown.reset();
      this.Btn = false;
    },
    async onSubmit(){
      console.log(this.login);
      const {data:res} = await this.$http.post('/member/login',this.login)
      console.log(res);
      if(res.flag != true){
        return this.$message.error('登录失败')
      }
      this.$message.success('登录成功')
      // 将表单内容重置
      this.$refs.loginDateRef.resetValidation();
      this.$router.push({path:"/member"})
      // console.log("a");
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
  .van-form {
    margin-top: 15px;
  }
</style>