<template>
  <div class="menu">
    <el-menu
      :default-active="currentPath"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#41474F"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      router
    >
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
          <el-submenu v-else index="1-4">
            <template slot="title">{{item1.name}}</template>
            <el-menu-item v-for="(item2, index2) in item1.grandson" :index="item2.componentName" :key="item2.id">{{item2.name}}</el-menu-item>
          </el-submenu>
        </el-submenu>
      </template>
    </el-menu>
  </div>
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
  },
  mounted () {
    bus.$on('handleClick', function (e) {
      this.isCollapse = e
    }.bind(this))
  }
}
</script>

<style scoped lang="less">
  .menu {
    height: 100%;
    .el-menu {
      border: 0;
      height: 100%;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
    }
  }
</style>
