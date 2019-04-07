<template>
  <div class="head">
    <div class="head_left">
      <!--<div class="head_logo">
        <img src="../assets/logo.png" />
        <span>LOGO</span>
      </div>-->
      <div @click="handleClick" :class="isLog ? 'guan' : 'open'">
        <i class="el-icon-more"></i>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">{{currentPath}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="head_right">
      <div class="head_info">
        <el-dropdown trigger="click">
          <div class="el-dropdown-link">
            <span>用户名</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-service" @click.native="command">个人信息</el-dropdown-item>
            <el-dropdown-item icon="el-icon-setting">设置</el-dropdown-item>
            <el-dropdown-item divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../utils/bus'
export default {
  name: "Head",
  data () {
    return {
      currentPath: this.$route.name,
      isLog: false,
    }
  },
  methods: {
    handleClick () {
      bus.$emit('handleClick', this.isLog = !this.isLog)
    },
    command () {
      console.log('command')
    }
  },
  watch: {
    '$route' (to, from) {
      this.currentPath = to.name;
    }
  },
  mounted () {
    console.log(this.$route.matched.filter(item => item.name))
  }
}
</script>

<style scoped lang="less">
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .head_left{
      display: flex;
      align-items: center;
      .head_logo {
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          display: block;
          width: 30px;
          height: 30px;
        }
      }
      .guan {
        transform:rotate(90deg);
        transition: 0.5s;
      }
      .open {
        transform:rotate(0deg);
        transition: 0.5s;
      }
      i {
        padding: 15px;
      }
    }
    .head_right {
      padding-right: 20px;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
