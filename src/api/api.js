/*
* m--->模块
* 系统管理
* ./System/
* CMS 系统
* ./CmsSystem/
* 会员系统
* ./MemberSystem/
* 数据统计
* ./DataStatistics/
* 财务管理
* ./FinancialManagement/
* 订单管理
* ./OrderManagement/
* 酒店系统
* ./HotelSystem/
* 智能设备
* ./SmartDevice/
* 电商系统
* ./EmallSystem/
* */

/*
* c--->控制器
* Index 控制器
* Index
* */

/*
* a--->操作
* api_index
* 获取可调用的 api 索引
* api_list
* 获取数据模型的列表页数据
* api_add
* 向数据模型新增一条数据
* api_edit
* 修改数据模型中的一条数据
* api_row
* 获取数据模型中的一条数据
* api_status
* 修改数据模型中多条数据的状态字段
* api_fake_delete
* 软删除数据模型中的多条数
* api_delete
* 删除数据模型中的多条数据
* api_upload
* 上传文件
* api_return
* 返回 [多模型数据接口] 的执行结果
* api_truncate
* 清空数据表, 重置数据表索引
* */

/*
* model--->模型
* side
* 端
* role
* 角色
* auth
* 权限
* api
* 接口
* menu
* 菜单
* admin
* 管理员
* */

/*
* lang--->语言
* zh_cn
* 中文
* en_us
* 英文
* */
const urls = {
  base: 'http://zhjd.youlangg.com/index.php',
  getBase: '?m=System&c=Index&a=api_list&model=admin',

  login: '/login',
};
module.exports = urls;
