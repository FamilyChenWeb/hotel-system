<template>
  <div class="head">
    <div class="head_left">
      <div class="head_logo">
        <img src="../assets/logo.png" />
        <span>LOGO</span>
      </div>
      <div @click="handleClick" :class="isLog ? 'guan' : 'open'">
        <i class="el-icon-more"></i>
      </div>
    </div>
    <div class="head_right">
      <div class="head_info">
        用户信息
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
      isLog: false,
    }
  },
  methods: {
    handleClick () {
      bus.$emit('handleClick', this.isLog = !this.isLog)
    }
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
    }
    .head_right {
      padding-right: 20px;
    }
  }
</style>
