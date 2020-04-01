<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body,html,#app {
  height: 100%;
  width: 100%;
}

*, ::after, ::before {
    box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul>li {
  list-style: none;
}

ul,li {
  margin: 0;
  padding: 0;
}

/** 窗口进度条样式修改 */
#nprogress .bar {
  background: #2fc8ad !important;
  height: 3px !important;
}
</style>
