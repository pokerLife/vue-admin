<template>
  <div class="tag-nav">
    <div class="nav-wrap">
      <div class="nav-prev">
        <i class="el-icon-d-arrow-left nav-icon"></i>
      </div>
      <ul class="nav-main">
        <li class="nav-item" @click="forward(tag)" :class="{active: tag.isActive}" v-for="tag in tagList" :key="tag.id">
          <i class="fa fa-file-o" aria-hidden="true"></i>
          <span class="nav-item-text" v-text="tag.name"></span>
          <i class="fa fa-times remove" aria-hidden="true" @click.stop="removeTag(tag)"></i>
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
  },
  methods: {
    /**
     * 关闭当前标签
     * @param {Object} tag 当前标签
     */
    removeTag (tag) {
      const vm = this
      const tagList = vm.tagList
      const pos = tagList.findIndex(item => item.id === tag.id)
      const length = tagList.length

      if (length < 2) return
      // 默认删除后一个标签
      if (pos === length - 1) {
        this.$router.push({ path: tagList[pos - 1].path })
        vm.$store.dispatch('app/delTarget', tag)
        return
      }
      // 末尾标签删除前一个
      this.$router.push({ path: tagList[pos + 1].path })
      vm.$store.dispatch('app/delTarget', tag)
    },

    /**
     * 跳转页面
     * @param {Object} 当前子菜单
     */
    forward (tag) {
      if (!tag.path) return
      this.$store.dispatch('app/addTarget', tag)
      this.$router.push({ path: tag.path })
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

  .remove:hover {
    transform: scale(1.3);
  }
</style>
