<template>
  <el-container class="Admin">
    <Menu :menuStyle="menuStyle" />
    <el-container>
      <el-header><Header @update="updated"/></el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Header from "./header";
import Menu from "./menu";
export default {
  data() {
    return {
      menuStyle: true
    };
  },
  components: {
    Header,
    Menu
  },
  methods: {
    updated(val) {
      console.log(val);

      this.menuStyle = val;
    }
  }
};
</script>

<style lang="scss" scoped>
.Admin {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .el-header {
    padding: 0;
    box-shadow: 1px 1px 3px #cccccc;
  }
  .el-main {
    padding-top: 10px;
  }
}
</style>
