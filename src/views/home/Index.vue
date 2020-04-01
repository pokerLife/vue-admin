<template>
  <el-container class="home">
    <img src="../../assets/skin/img/bg.png" class="home-bg">
    <el-header>
      <Header/>
    </el-header>
    <el-main>
      <Main/>
    </el-main>
    <el-footer :style="{ marginBottom : postion}">
      <Footer v-on:fold="show = !show"/>
    </el-footer>
  </el-container>
</template>

<script>
import Header from '@/views/home/Header'
import Main from '@/views/home/Main'
import Footer from '@/views/home/Footer'

export default {
  name: 'Home',
  data () {
    return {
      show: true
    }
  },
  components: {
    Header,
    Main,
    Footer
  },
  computed: {
    // 打开关闭底部
    postion (value) {
      var result = '-120px'
      if (this.show) {
        result = '0'
      }
      return result
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
 .home {
  //  align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    height: 100%;
    justify-content: space-between;
    &-bg {
      position: fixed;
      z-index: -999;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }

  .el-header, .el-footer {
    padding: 0;
  }

  .el-header {
    flex: 0 0 80px;
  }

  .el-main {
    flex: 1 1 auto;
    transition: all 0.5s;
  }

  .el-footer {
    flex: 0 0 120px;
    transition: all 0.5s;
  }

  .btn {
    position: fixed;
    bottom: 0;
  }
</style>
