<template>
  <div class="role">
    <el-row>
      <el-col :sm="12" :xs="24">
        <div class="administrators_search">
          <span>角色筛选</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
    <div class="home_but">
      <el-button type="primary" @click="homeAdd">添加</el-button>
      <el-button type="primary">删除</el-button>
    </div>
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
    <el-dialog title="添加新角色" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="选择" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="角色">
            <el-option label="管理员" value="shanghai"></el-option>
            <el-option label="超级管理员" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限范围" :label-width="formLabelWidth">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 A"></el-checkbox>
        </el-form-item>
        <el-form-item label="权限范围" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "role",
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
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
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      textarea: ''
    }
  },
  methods: {
    homeAdd () {
      this.dialogFormVisible = true;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
  mounted () {

  }
}
</script>

<style scoped lang="less">
  .role {
    background-color: #fff;
    padding: 15px;
    .administrators_search {
      display: flex;
      align-items: center;
      padding: 5px 0;
      span {
        margin-right: 10px;
        width: 100px;
      }
    }
    .home_but, .block {
      padding: 15px 0;
    }
  }
</style>
