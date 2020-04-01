<template>
  <div class="user-info">
    <img class="user-photo" src="../../assets/home/img/boy.png" alt="">
    <span class="user-name">系统管理员</span>
    <i class="user-select"></i>
  </div>
</template>

<script>

export default {
  name: 'UserInfo',
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
  .user-info {
    width: 160px;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: flex-end;
    color: #fff;
    cursor: pointer;
  }

  .user-photo {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .user-select {
    display: inline-block;
    width: 11px;
    height: 7px;
    background-image: url('../../assets/home/icon/icon-down.png');
  }
</style>
