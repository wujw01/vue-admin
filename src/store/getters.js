const getters = {
  // user
  token: state => state.user.token,
  status: state => state.user.status,
  userinfo: state => state.user.userinfo,
  usermenu: state => state.user.usermenu,
  PermissionList: state => state.user.PermissionList
};

export default getters;
