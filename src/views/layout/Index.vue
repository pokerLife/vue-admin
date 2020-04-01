<template>
  <el-container>
    <img src="../../assets/skin/img/bg.png" class="home-bg">
    <el-header height="80px">
        <Header v-slot:optional>
          待办信息
        </Header>
    </el-header>
    <el-container>
      <Aside/>
      <Main/>
    </el-container>
  </el-container>
</template>

<script>
import Header from '@/views/home/Header'
import Aside from '@/views/layout/Aside'
import Main from '@/views/layout/Main'
export default {
  name: 'admin-index',
  components: {
    Header,
    Aside,
    Main
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .el-container {
    height: 100%;
    overflow: hidden;
  }

  .el-header {
      height: 80px;
  }

  .el-header, .el-footer {
    padding: 0;
  }

  .home-bg {
      position: fixed;
      z-index: -999;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
</style>
