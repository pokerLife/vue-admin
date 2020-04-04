<template>
   <el-aside width="270px" class="aside">
      <header  @click="showAll = !showAll" class="system">
        <img class="system-icon" src="../../assets/home/img/system/sys-flow.png" alt="">
        <span class="system-title">系统管理</span>
        <i class="system-list"></i>
        <transition name="el-fade-in-linear">
          <AllSystem v-if="showAll"/>
        </transition>
      </header>
      <ul class="menu">
        <li class="menu-item has-treeview" v-for="menu in menuList" :key="menu.id" :class="{menu_open : menu.isOpen}">
          <a class="menu-link" href="javascript:;" @click="toggle(menu)">
            <i class="fa fa-arrow-circle-right menu-icon" aria-hidden="true"></i>
            <p v-text="menu.name"></p>
            <i class="menu-right"></i>
          </a>
          <el-collapse-transition>
            <ul class="menu-treeview" v-show="menu.isOpen">
              <li class="treeview-item" :class="{ active: treeview.isActive }" v-for="treeview in menu.treeview" :key="treeview.id">
                <a @click="forward(treeview)" class="menu-link">
                  <i class="fa fa-bars menu-icon" aria-hidden="true"></i>
                  <p v-text="treeview.name"></p>
                </a>
              </li>
            </ul>
          </el-collapse-transition>
        </li>
      </ul>
   </el-aside>
</template>

<script>
import AllSystem from '@/components/admin/AllSystem'
export default {
  name: 'Aside',
  components: {
    AllSystem
  },
  data () {
    return {
      showAll: false,
      menuList: [
        {
          id: '1',
          name: '基础信息管理',
          isOpen: false,
          treeview: [
            {
              id: '1-1',
              name: '系统用户管理',
              isActive: false,
              path: '/admin/test',
              pId: '1'
            },
            {
              id: '1-2',
              name: '行政机构管理管理',
              isActive: false,
              path: '/admin/test2',
              pId: '1'
            }
          ]
        },
        {
          id: '2',
          name: '通知公告管理',
          isOpen: false,
          treeview: [
            {
              id: '2-1',
              name: '首页通知公告',
              isActive: false,
              path: '/admin/test3',
              pId: '2'
            },
            {
              id: '2-2',
              name: '系统通知公告',
              isActive: false,
              path: '/admin/test4',
              pId: '2'
            }
          ]
        },
        {
          id: '3',
          name: '系统权限管理',
          isOpen: false,
          treeview: []
        }
      ]
    }
  },
  computed: {
    tagsList () {
      return this.$store.getters['tags/tags']
    }
  },
  watch: {
    tagsList: {
      handler (newVal, oldVal) {
        const current = newVal.find(v => v.isActive === true)
        const parent = this.menuList.find(v => v.id === current.pId)
        if (parent.isOpen !== true) {
          this.menuList.forEach(v => {
            v.isOpen = false
          })
          parent.isOpen = true
        }
      },
      deep: true
    }
  },
  mounted () {
    this.openDefault()
  },
  methods: {
    /**
     * 菜单切换
     * @param {Object} 当前父级菜单
     */
    toggle (menu) {
      const vm = this
      menu.isOpen = !menu.isOpen
      vm.menuList.forEach(item => {
        if (item.id !== menu.id) {
          item.isOpen = false
        }
      })
    },
    /**
     * 跳转页面
     * @param {Object} 当前子菜单
     */
    forward (treeview) {
      if (!treeview.path) return
      this.$store.dispatch('tags/addTags', treeview)
      this.$router.push({ path: treeview.path })
    },
    /**
     * 默认页面
     */
    openDefault () {
      const first = this.menuList[0].treeview[0]
      this.$store.dispatch('tags/addTags', first)
      this.$router.push({ path: first.path })
    }
  }
}
</script>

<style lang="scss" scoped>
  .aside {
    height: 100%;
    padding: 0;
    background: rgba(1,1,1,0.4);
    overflow-y: auto;
  }

  .system {
    height: 60px;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    cursor: pointer;
    &-icon {
      width: 45px;
      height: 45px;
      margin-left: 15px;
    }
    &-title {
      margin-left: 10px;
      font-size: 16px;
      color: #fff;
    }
    &-list {
      position: relative;
      width: 16px;
      height: 16px;
      margin-left: auto;
      margin-right: 15px;
      background: url('../../assets/admin/icon/aside-header-icon.png') no-repeat center;
    }
  }

  .menu {
    &-item {
      margin-bottom: 1px;
    }
    &-link {
      display: flex;
      align-items: center;
      height: 60px;
      font-weight: bold;
      color: #fff;
      background-color: rgb(255, 255, 255,0.1);
      animation: fadeIn ease 1s;
    }
    &-icon {
      margin-left: 30px;
      margin-right: 15px;
      font-size: 24px;
    }
    &-right {
      width: 16px;
      height: 16px;
      margin-left: auto;
      margin-right: 15px;
      background: url('../../assets/admin/icon/icon-spread.png') no-repeat center;
      transform:rotate(360deg);
    }
    // 菜单展开
    &_open {
      background: none;
      >.menu-link {
        color: rgba(0, 255, 150, 1);
      }
      .menu-right {
        background: url('../../assets/admin/icon/icon-spread-active.png') no-repeat center;
      }
    }
  }

  .menu-treeview {
    .treeview-item {
      padding-left: 20px;
      border-top: 1px solid rgb(255, 255, 255,0.1);
      cursor: pointer;
    }
    .menu-link {
      height: 40px;
      font-size: 15px;
      font-weight: normal;
      background: none;
    }
    .menu-icon {
      font-size: 15px;
    }
    // 子菜单激活
    .active {
      background: linear-gradient(90deg, #296dd8, #2fc8ad);
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.21);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
</style>
