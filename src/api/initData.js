export default {
  menuData: () => {
    return [
      {
        id: "10001",
        icon: "iconfont icon-xitong1",
        name: "系统管理",
        num: "1",
        children: [
          {
            id: "10002",
            name: "菜单管理",
            num: "1",
            url: "sysMenu"
          },
          {
            id: "10003",
            name: "用户管理",
            num: "2",
            url: "sysUsers"
          },
          {
            id: "10004",
            name: "角色管理",
            num: "3",
            url: "/sys/role"
          },
          {
            id: "10005",
            name: "部门管理",
            num: "4",
            url: "/sys/menu"
          }
        ]
      }
    ];
  }
};
