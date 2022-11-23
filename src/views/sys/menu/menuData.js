export default {
  nenuData: () => {
    return [
      {
        id: "10001",
        icon: "icon",
        name: "系统管理",
        num: "1",
        children: [
          {
            id: "10002",
            name: "菜单管理",
            icon: "icon",
            num: "1",
            url: "/sys/menu"
          },
          {
            id: "10003",
            name: "用户管理",
            icon: "icon",
            num: "2",
            url: "/sys/user"
          },
          {
            id: "10004",
            name: "角色管理",
            num: "3",
            icon: "icon",
            url: "/sys/role"
          },
          {
            id: "10005",
            name: "部门管理",
            num: "4",
            icon: "icon",
            url: "/sys/menu"
          }
        ]
      }
    ];
  }
};
