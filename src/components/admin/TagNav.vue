<template>
  <div class="tag-nav">
    <div class="nav-wrap">
      <div class="nav-prev">
        <i class="el-icon-d-arrow-left nav-icon"></i>
      </div>
      <ul class="nav-main">
        <li class="nav-item" :class="{active: tag.isActive}" v-for="tag in tagList" :key="tag.id">
          <i class="el-icon-document-checked"></i>
          <span class="nav-item-text" v-text="tag.name"></span>
          <font-awesome-icon class="nav-item-right" :icon="['fas', 'times']" />
        </li>
      </ul>
      <div class="nav-next">
        <i class="el-icon-d-arrow-right nav-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagNav',
  data () {
    return {
    }
  },
  computed: {
    tagList () {
      return this.$store.getters['app/queryTarget']
    }
  }
}
</script>

<style lang="scss" scoped>
  .tag-nav {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    padding: 0 15px;
    background: rgba(0, 0, 0, 0.1);
  }

  .nav{
    &-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    &-icon {
      font-size: 24px;
      color: #fff;
    }
    &-main {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      padding: 0 10px;
    }
    &-item {
      display: flex;
      align-items: center;
      height: 30px;
      padding: 0 10px;
      margin-right: 10px;
      border-radius: 15px;
      font-size: 14px;
      background: #fff;
      cursor: pointer;
      &-right {
        font-size: 12px;
      }
      &-text {
        margin: 5px;
      }
    }
  }

  .active {
    background: linear-gradient(90deg, #296dd8, #2fc8ad);
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.21);
    color: #fff;
  }
</style>
