<template>
  <el-container class="login">
    <!-- 表单模块 -->
    <Form />
  </el-container>
</template>
<script>
import Form from "./form";
export default {
  components: {
    Form
  }
};
</script>
<style lang="scss" scoped>
.login {
  background-color: #2d3a4b;
  height: 100vh;
}
</style>
