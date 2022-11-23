<template>
  <div class="Header">
    <el-button class="openbutton" @click="changeMenuStyle" type="text">
      <i class="iconfont icon-caidan1"></i>
    </el-button>
    <el-dropdown
      class="el-menu-Header"
      trigger="click"
      @command="handleCommand"
    >
      <span class="font-style"
        >{{ "超级管理员" }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item :command="1"
          ><i class="iconfont icon-tuichu1"></i> 退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuStyle: true
    };
  },
  methods: {
    changeMenuStyle() {
      this.menuStyle = !this.menuStyle;
      this.$emit("update", this.menuStyle);
    },
    handleCommand() {
      this.$router.push("login");
    }
  }
};
</script>

<style lang="scss" scoped>
.Header {
  width: 100%;
  height: 60px;
  background-color: #fff;
  .el-menu-Header {
    height: 60px;
    line-height: 60px;
    float: right;
    margin-right: 50px;
    .font-style {
      cursor: pointer;
      color: #409eff;
    }
  }
  .openbutton {
    position: absolute;
    height: 60px;
    padding: 0 0.5rem;
    margin-left: 1rem;
    i {
      color: #304156;
      font-size: 1.2rem;
      line-height: 2.2rem;
    }
  }
}
</style>
