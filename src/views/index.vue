<template>
  <el-container>
    <el-scrollbar>
      <el-aside>
        <!--<el-aside :class="isCollapse ? 'onOff' : 'onOff1'">-->
        <Menu></Menu>
      </el-aside>
    </el-scrollbar>
    <el-container :class="isCollapse ? 'onOff' : 'onOff1'">
      <el-header>
        <Head></Head>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Head from '@/components/head'
import Menu from '@/components/menu'
import bus from '../utils/bus'
export default {
  name: "index",
  data () {
    return {
      isCollapse: false,
      screenWidth: document.body.clientWidth
    }
  },
  components: {
    Head: Head,
    Menu: Menu,
  },
  methods: {
  },
  mounted () {
    bus.$on('handleClick', function (e) {
      this.isCollapse = e;
      console.log(123, this.isCollapse)
    }.bind(this))
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
  @import '../styles/theme.less';
  .el-container {
    height: 100%;
  }
  .el-header { //header栏样式
    background-color: @white;
    color: @mainColor;
    line-height: 60px;
    padding: 0;
  }
  .el-aside { //菜单栏样式
    width: auto !important;
    color: @mainColor;
  }
  .el-main { //内容样式
    background-color: @background;
    color: @mainColor;
    padding: 15px;
  }
  .onOff {
    position: fixed;
    left: 64px;
    right: 0;
    transition: left .25s linear;
  }
  .onOff1 {
    position: fixed;
    left: 200px;
    right: 0;
    transition: left .25s linear;
  }
</style>
