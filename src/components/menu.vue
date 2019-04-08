<template>
  <el-menu
    :default-active="currentPath"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#304156"
    text-color="#BFCBD9"
    active-text-color="#409EFF"
    :collapse="isCollapse"
    @select="handleSelect"
    router
  >
    <!--<div style="text-align: center;">LOGO</div>-->
    <template v-for="(item, index) in menu">
      <el-menu-item  v-if="item.hidden" :index="item.componentName" :key="item.id">
        <i :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
      <el-submenu v-else :index="item.id" :key="item.id">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item v-if="typeof item1.shield == 'undefined'" :index="item1.componentName" v-for="(item1, index1) in item.sub" :key="item1.id">
          {{item1.name}}
        </el-menu-item>
        <el-submenu v-else :index="item1.id">
          <template slot="title">{{item1.name}}</template>
          <el-menu-item v-for="(item2, index2) in item1.grandson" :index="item2.componentName" :key="item2.id">{{item2.name}}</el-menu-item>
        </el-submenu>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
import menu from '@/filters/menus'
import bus from '../utils/bus'
export default {
  name: "Menu",
  data () {
    return {
      menu: menu,
      currentPath: this.$route.path,
      isCollapse: false,
      screenWidth: document.body.clientWidth
    }
  },
  watch: {
    '$route' (to, from) {
      this.currentPath = to.path
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log (key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log (key, keyPath)
    },
    handleSelect () {
      if (this.screenWidth < 767.98) {
        this.isCollapse = true
        bus.$emit('cs', true, '测试点击隐藏')
      } else {
      }
    }
  },
  mounted () {
    bus.$on('handleClick', function (e) {
      this.isCollapse = e
    }.bind(this))
  },
  created () {
    console.log(this.screenWidth)
    if (this.screenWidth < 767.98) {
      console.log(this.isCollapse)
      this.isCollapse = true
    } else {
      // this.isCollapse = e
      console.log(this.isCollapse)
    }
  }
}
</script>

<style scoped lang="less">
  @import '../styles/theme';
  .el-menu {
    border: 0;
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-submenu__title i {
    color: @viceMenuBgIcon;
  }
  .el-menu-item:hover {
    background-color: @viceMenuBgHover !important;
  }
</style>
