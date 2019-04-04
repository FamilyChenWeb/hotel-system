<template>
    <el-container>
      <!--头部-->
      <el-header>
        <Head></Head>
      </el-header>
      <el-container>
        <!--菜单栏-->
        <el-aside>
          <Menu></Menu>
        </el-aside>
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
  .el-container {
    height: 100%;
  }
  .el-header { //header栏样式
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    padding: 0;
  }
  .el-aside { //菜单栏样式
    width: auto !important;
    overflow: overlay;
    color: #333;
  }
  .el-main { //内容样式
    background-color: #E9EEF3;
    color: #333;
    line-height: 160px;
  }
</style>
