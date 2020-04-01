<template>
  <div class="date">
      <div class="current-time">
        {{ currentTime }}
      </div>
      <div class="current-day">
        {{ currentDay }}
      </div>
  </div>
</template>

<script>

import dayjs from 'dayjs'
export default {
  name: 'DateTime',
  data () {
    return {
      currentTime: '',
      currentDay: ''
    }
  },
  created () {
    this.updateTime()
    this.day()
  },
  methods: {
    updateTime () {
      const me = this
      me.currentTime = dayjs().format('A HH:mm:ss')
      setTimeout(() => {
        me.updateTime()
      }, 1000)
    },
    day () {
      const day = dayjs()
      const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      this.currentDay = `${day.format('YYYY-MM-DD')} ${week[day.day()]}`
    }
  }
}
</script>

<style scoped lang="scss">
  .date {
    height: 40px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    .current-time {
      font-size: 20px;
    }
    .current-day {
      font-size: 14px;
    }
  }
</style>
