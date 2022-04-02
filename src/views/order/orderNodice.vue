<template>
  <div>
    <van-nav-bar title="传智健康"></van-nav-bar>
    <div class="contentBox">
      <div class="notice-article">
        <div class="info-title">
          <span class="name">预约须知</span>
        </div>
        <div class="notice-item">
          <div class="item-title">体检报告：体检报告将于体检后5-7个工作日出具。</div>
          <div class="item-content">
            <p>A、纸质报告可在接到体检中心电话通知后自取，或于体检当日前台登记要求邮寄（邮费自理）</p>
          </div>
        </div>
        <div class="notice-item">
          <div class="item-subtitle">体检前：</div>
          <div class="item-content">
            <p>1、体检前一天请您清淡饮食,勿饮酒、勿劳累。体检当天请空腹,禁食。</p>
            <p>2、体检前一天要注意休息，晚上8点后不再进食。避免剧烈运动和情绪激动，保证充足睡眠，以免影响体检结果。</p>
            <p>3、例假期间不宜做妇科、尿液检查。</p>
          </div>
        </div>
        <div class="notice-item">
          <div class="item-subtitle">体检中：</div>
          <div class="item-content">
            <p>1、需空腹检查的项目为抽血、腹部B超、数字胃肠，胃镜及其它标注的体检项目。</p>
            <p>2、做膀胱、子宫、附件B超时请勿排尿，如无尿需饮水至膀胱充盈。做妇科检查前应排空尿。</p>
            <p>3、未婚女性不做妇科检查；怀孕的女性请预先告知医护人员,不安排做放射及其他有影响的检查。</p>
            <p>4、做放射线检查前,请您除去身上佩戴的金银、玉器等饰物。</p>
            <p>5、核磁共振检查，应禁止佩带首饰、手表、传呼、手机等金属物品，磁卡也不应带入检查室，以防消磁。</p>
          </div>
        </div>
        <div class="notice-item">
          <div class="item-subtitle">体检后：</div>
          <div class="item-content">
            <p>1、全部项目完毕后请您务必将体检单交到前台。</p>
            <p>2、请您认真听取医生的建议,及时复查.随诊或进一步检查治疗。</p>
            <p>3、请您保存好体检结果，以便和下次体检结果作对照，也可作为您就医时的资料。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>

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