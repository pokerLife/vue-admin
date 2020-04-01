<template>
  <div class="wheel">
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide  v-for="item in list" :key="item.id">
        <a class="slide-item" :href="item.href">
          <img class="slide-item-img" :src="item.icon" srcset="">
          <span class="slide-item-des" v-text="item.name"></span>
        </a>
      </swiper-slide>
    </swiper>
    <div class="swiper-ctrl swiper-prev"></div>
    <div class="swiper-ctrl swiper-next"></div>
  </div>
</template>

<script>
export default {
  name: 'SysWheel',
  props: ['sysList'],
  data () {
    return {
      list: this.sysList,
      swiperOptions: {
        slidesPerView: 9,
        slidesPerGroup: 1,
        // loop: true,
        autoplay: false,
        navigation: {
          prevEl: '.swiper-prev',
          nextEl: '.swiper-next'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  watch: {
    sysList: {
      deep: true,
      handler (newVal, oldVal) {
        this.list = newVal
      }
    }
  },
  mounted () {
    console.log(this.sysList)
    this.swiper.slideTo(4, 1000, false)
  }
}
</script>

<style lang="scss" scoped>
  .wheel {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 10%;
    right: 10%;
    height: 80px;
    font-size: 50px;
    color: #fff;
    background-image: url('../../assets/home/img/footer-bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .swiper {
    margin-top: -38px;
  }

  .swiper-slide {
    height: 86px;
    width: 121.111px;
  }

  .slide-item {
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    text-decoration: none;
  }

  .slide-item-img {
    height: 65px;
    width: 65px;
  }

  .slide-item-des {
    color: #333;
    font-size: 15px;
  }

  .swiper-ctrl {
    position: absolute;
    top: -20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-size: 100% 100%;
    cursor: pointer;
    outline: 0;
  }

  .swiper-ctrl:hover {
    outline: 0;
    border: 0;
  }

  $ctrl: -5%;

  .swiper-next {
    right: #{$ctrl};
    background: url('../../assets/home/icon/swiper-next.png') no-repeat;
  }

  .swiper-prev {
    left: #{$ctrl};
    background: url('../../assets/home/icon/swiper-prev.png') no-repeat;
  }
</style>
