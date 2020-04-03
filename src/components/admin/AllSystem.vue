<template>
  <ul class="sys-box">
    <li class="box-item">
      <img class="box-item-icon" src="../../assets/home/img/system/sys-guankong.png" alt="">
      <span>系统管理</span>
    </li>
     <li class="box-item">
      <img class="box-item-icon" src="../../assets/home/img/system/sys-houqin.png" alt="">
      <span>教师信息</span>
    </li>
     <li class="box-item">
      <img class="box-item-icon" src="../../assets/home/img/system/sys-investment.png" alt="">
      <span>培训管理</span>
    </li>
    <li class="box-item">
      <img class="box-item-icon" src="../../assets/home/img/system/sys-hr.png" alt="">
      <span>师德管理</span>
    </li>
     <li class="box-item">
      <img class="box-item-icon" src="../../assets/home/img/system/sys-pxxx.png" alt="">
      <span>轮岗管理</span>
    </li>
     <li class="box-item">
      <img class="box-item-icon" src="../../assets/home/img/system/sys-project.png" alt="">
      <span>年终管理</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AllSystem'
}
</script>

<style lang="scss" scoped>
  .sys-box {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    position: absolute;
    top: 90px;
    left: 280px;
    min-height: 160px;
    width: 600px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.3);
    background: #fff;
    z-index: 999999999;
  }

  .sys-box::before {
    content: "";
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: transparent #fff transparent transparent;
    position: absolute;
    top: 12px;
    left: -20px;
    z-index: -10;
    // opacity: 0;
    transition: all 0.2s;
  }

  .box-item {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 140px;
    height: 140px;
    &-icon {
      width: 68px;
      height: 68px;
    }
  }

  .box-item:hover {
    background: rgba(243, 247, 253, 1);
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  }
</style>
