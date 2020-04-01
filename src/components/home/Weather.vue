<template>
  <div class="weather">
    <img class="weather-img" v-bind:src="weather.dayPictureUrl" alt="" srcset="">
    <div class="weather-detail">
      <div class="weather-status">
        {{ weather.weather }}
      </div>
      <div class="weather-temperature">
        {{ weather.temperature }}
      </div>
    </div>
  </div>
</template>

<script>

import { homeApi } from '@/api/index'

export default {
  name: 'Weather',
  data () {
    return {
      weather: {}
    }
  },
  created () {
    this.queryAddress()
  },
  methods: {
    /**
     * 获取当前地理位置
     */
    queryAddress () {
      const me = this
      homeApi.queryAddress({}).then(result => {
        let city = '南昌市'
        if (result.status === '0') {
          city = result.content.address
        }
        return city
      }).then(city => {
        me.queryWeather(city)
      })
    },
    /**
     * 根据城市获取天气信息
     * @param {string} city 城市名称【北京市】
     */
    queryWeather (city) {
      const me = this
      homeApi.queryWeather(city).then(result => {
        me.weather = result.results[0].weather_data[0]
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .weather {
    min-width: 160px;
    height: 42px;
    display: flex;
    justify-content: space-evenly;
    font-size: 15px;
    color:#fff;
    &-img {
      display: block;
      width: 52px;
      height: 40px;
    }
    &-detail {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  }
</style>
