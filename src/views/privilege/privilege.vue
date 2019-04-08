<template>
  <div class="privilege">
    <el-row :xs="4" :gutter="20">
      <el-col :sm="6" :xs="24">
        <div class="privilege_search">
          <span>登录名</span>
          <el-input
            placeholder="请输入内容"
            v-model="input10"
            clearable>
          </el-input>
        </div>
      </el-col>
      <el-col :sm="6" :xs="24">
        <div class="privilege_search">
          <span>登录名</span>
          <el-input
            placeholder="请输入内容"
            v-model="input10"
            clearable>
          </el-input>
        </div>
      </el-col>
      <el-col :sm="6" :xs="24">
        <div class="privilege_search">
          <span>登录名</span>
          <el-input
            placeholder="请输入内容"
            v-model="input10"
            clearable>
          </el-input>
        </div>
      </el-col>
      <el-col :sm="6" :xs="24">
        <div class="privilege_search">
          <span>登录名</span>
          <el-input
            placeholder="请输入内容"
            v-model="input10"
            clearable>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="end">
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "privilege",
  data () {
    return {
      input10: ''
    }
  }
}
</script>

<style scoped lang="less">
  .privilege {
    background-color: #fff;
    padding: 0 15px;
    .privilege_search {
      display: flex;
      align-items: center;
      padding: 5px 0;
      span {
        margin-right: 10px;
        width: 100px;
      }
    }
  }
</style>
