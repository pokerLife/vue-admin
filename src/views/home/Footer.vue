<template>
  <div class="footer">
    <SysWheel :sysList="sysList"/>
    <span class="btn" @click="$emit('fold')"></span>
  </div>
</template>

<script>
import SysWheel from '@/components/home/SysWheel'
import { homeApi } from '@/api/index'
export default {
  name: 'Footer',
  components: {
    SysWheel
  },
  data () {
    return {
      sysList: []
    }
  },
  beforeCreate () {
    const vm = this
    homeApi.querySysList().then(result => {
      vm.sysList = [
        {
          id: '1',
          name: '系统管理',
          href: '/admin/mananger',
          icon: 'https://s1.ax1x.com/2020/03/28/GAOwjI.png'
        },
        {
          id: '2',
          name: '年终管理',
          href: '/admin/yearEnd',
          icon: 'https://s1.ax1x.com/2020/03/28/GAODDP.png'
        },
        {
          id: '3',
          name: '交流轮岗管理',
          href: '/admin/exchange',
          icon: 'https://s1.ax1x.com/2020/03/28/GAOa3d.png'
        },
        {
          id: '4',
          name: '师讯通APP',
          href: '/',
          icon: 'https://s1.ax1x.com/2020/03/28/GAOdgA.png'
        },
        {
          id: '5',
          name: '师德管理',
          href: '/',
          icon: 'https://s1.ax1x.com/2020/03/28/GAOBut.png'
        },
        {
          id: '6',
          name: '学分管理',
          href: '/',
          icon: 'https://s1.ax1x.com/2020/03/28/GAOrHf.png'
        },
        {
          id: '7',
          name: '培训过程管理',
          href: '/',
          icon: 'https://s1.ax1x.com/2020/03/28/GAOyE8.png'
        },
        {
          id: '8',
          name: '教师信息',
          href: '/',
          icon: 'https://s1.ax1x.com/2020/03/28/GAOR3j.png'
        }
      ]
    })
  },
  methods: {
    querySysList () {
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    box-sizing: border-box;
    position: relative;
    height: 100%;
    width: 100%;
    padding: 0 10%;
  }
  .btn {
    display: block;
    width: 55px;
    height: 28px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 3000;
    background-image: url('../../assets/home/icon/footer-icon-fold.png');
    background-size: cover;
    cursor: pointer;
  }
</style>
