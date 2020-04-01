<template>
  <el-main>
    <TagNav/>
    <div class="main-body">
      <router-view></router-view>
    </div>
  </el-main>
</template>

<script>
import TagNav from '@/components/admin/TagNav'
export default {
  components: {
    TagNav
  }
}
</script>

<style lang="scss" scoped>
  .el-main {
    box-sizing: border-box;
    padding: 0;
    overflow: hidden;
    color: #000;
  }

  .main-body {
    height: calc(100% - 60px);
    padding: 12px;
    overflow-y: scroll;
    background-color: #fff;
  }
</style>
