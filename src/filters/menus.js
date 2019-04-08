module.exports = [
  {
    id: '0',
    name: '首页',
    icon: 'el-icon-more',
    componentName: '/home',
    hidden: true
  },
  {
    id: '1',
    icon: 'el-icon-menu',
    name: '系统管理',
    hidden: false,
    sub: [
      {
        id: '1-1',
        name: '权限管理',
        componentName: '/administrators',
        shield: 'true',
        grandson: [
          {
            id: '1-1-1',
            name: '管理员',
            componentName: '/administrators',
          },
          {
            id: '1-1-2',
            name: '角色',
            componentName: '/index1'
          },
          {
            id: '1-1-3',
            name: '权限菜单',
            componentName: '/index1'
          },
          {
            id: '1-1-4',
            name: '操作日记',
            componentName: '/index1'
          }
        ]
      },
      {
        id: '1-2',
        name: '系统设置',
        componentName: '/index1'
      }
    ]
  },
  {
    id: '2',
    name: 'cms系统',
    icon: 'el-icon-warning',
    hidden: false,
    sub: [
      {
        id: '2-2',
        name: '文章管理',
        componentName: '/index1'
      },
      {
        id: '2-3',
        name: '文章分类',
        componentName: '/index1'
      },
      {
        id: '2-4',
        name: '单页管理',
        componentName: '/index1'
      },
      {
        id: '2-5',
        name: '广告管理',
        componentName: '/index1'
      }
    ]
  },
  {
    id: '3',
    name: '会员系统',
    icon: 'el-icon-loading',
    hidden: false,
    sub: [
      {
        id: '3-2',
        name: '会员列表',
        componentName: '/index1'
      },
      {
        id: '3-3',
        name: 'VIP会员卡',
        componentName: '/index1'
      },
      {
        id: '3-4',
        name: '会员等级',
        componentName: '/index1'
      },
      {
        id: '3-5',
        name: '会员分类',
        componentName: '/index1',
        shield: 'true',
        grandson: [
          {
            id: '3-5-1',
            name: '酒店会员',
            componentName: '/index1'
          },
          {
            id: '3-5-2',
            name: '酒店商户',
            componentName: '/index1'
          },
          {
            id: '3-5-3',
            name: '电商会员',
            componentName: '/index1'
          },
          {
            id: '3-5-4',
            name: '电商商家',
            componentName: '/index1'
          },
          {
            id: '3-5-5',
            name: '智能设备供应商',
            componentName: '/index1'
          }
        ]
      },
      {
        id: '3-6',
        name: '会员分组',
        componentName: '/index1'
      },
      {
        id: '3-7',
        name: '会员权限',
        componentName: '/index1'
      },
      {
        id: '3-8',
        name: '会员信息',
        componentName: '/index1'
      },
      {
        id: '3-9',
        name: '会员造作日记',
        componentName: '/index1'
      }
    ]
  }
]
