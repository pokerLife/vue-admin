<template>
  <div class="toolbar">
  <UserInfo/>
  <ul class="tool">
    <li class="tool-item icon-message"></li>
    <li class="tool-item icon-skin"></li>
    <li class="tool-item icon-opinion"></li>
    <li class="tool-item icon-question"></li>
    <li class="tool-item icon-qrcode"></li>
  </ul>
  </div>
</template>

<script>
import UserInfo from '@/components/home/UserInfo'
export default {
  name: 'Toolbar',
  components: {
    UserInfo
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .toolbar {
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  .tool {
    width: 220px;
    display: flex;
    justify-content: space-between;
  }

  .tool-item {
    list-style: none;
    height: 20px;
    width: 20px;
    cursor: pointer;
  }

  // 工具栏图标
  @each $item in message, skin, opinion, question, qrcode {
    .icon-#{$item}{
      background-image: url('../../assets/home/icon/icon-#{$item}.png');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
</style>
