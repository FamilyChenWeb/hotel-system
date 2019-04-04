<template>
  <el-container>
    <el-scrollbar>
      <el-aside>
        <Menu></Menu>
      </el-aside>
    </el-scrollbar>
    <el-container>
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
export default {
  name: "index",
  components: {
    Head: Head,
    Menu: Menu
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
  }
</style>
