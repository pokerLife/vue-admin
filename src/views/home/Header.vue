<template>
  <div class="header">
    <router-link to="/"  class="header-logo">
      {{ appName }}
    </router-link>
    <span class="header-split"></span>
    <slot name="optional">
      <Weather/>
      <DateTime/>
    </slot>
    <Toolbar/>
  </div>
</template>

<script>

import Weather from '@/components/home/Weather'
import DateTime from '@/components/home/DateTime'
import Toolbar from '@/components/home/Toolbar'

export default {
  name: 'Header',
  components: {
    Weather,
    DateTime,
    Toolbar
  },
  data () {
    return {
      appName: process.env.VUE_APP_NAME
    }
  },
  created () {
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  // 定义左右内边距
  @mixin pdlr($value) {
    box-sizing: border-box;
    padding-left: $value;
    padding-right: $value;
  }

  // 定义左右外边距
  @mixin mglr($value) {
    margin-left: $value;
    margin-right: $value;
  }

  .header {
    height: 80px;
    width: 100%;
    @include pdlr(30px);
    background: rgba(40, 123, 226, 0.9);
    display: flex;
    flex-direction: row;
    align-items: center;
    &-logo {
      font-size: 30px;
      color: #fff;
    }
    &-split {
      min-width: 2px;
      height: 44px;
      @include mglr(35px);
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
</style>
