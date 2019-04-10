<template>
  <div class="administrators">
    <el-row :gutter="20">
      <el-col :sm="6" :xs="24">
        <div class="administrators_search">
          <span>登录名</span>
          <el-input
            placeholder="请输入"
            v-model="input10"
            clearable>
          </el-input>
        </div>
      </el-col>
      <el-col :sm="6" :xs="24">
        <div class="administrators_search">
          <span>手机号</span>
          <el-input
            placeholder="请输入"
            v-model="input10"
            clearable>
          </el-input>
        </div>
      </el-col>
      <el-col :sm="6" :xs="24">
        <div class="administrators_search">
          <span>邮箱</span>
          <el-input
            placeholder="请输入"
            v-model="input10"
            clearable>
          </el-input>
        </div>
      </el-col>
      <el-col :sm="6" :xs="24">
        <div class="administrators_search">
          <span>角色</span>
          <el-input
            placeholder="请输入"
            v-model="input10"
            clearable>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="end">
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </el-row>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="日期"
        prop="date"
        sortable
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "administrators",
  data () {
    return {
      input10: '',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
  mounted () {

  }
}
</script>

<style scoped lang="less">
  .administrators {
    background-color: #fff;
    padding: 15px;
    .administrators_search {
      display: flex;
      align-items: center;
      padding: 5px 0;
      span {
        margin-right: 10px;
        width: 100px;
        text-align: right;
      }
    }
  }
</style>
