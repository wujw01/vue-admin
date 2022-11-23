<template>
  <el-form
    :model="loginForm"
    :rules="loginRules"
    ref="loginForm"
    class="login_form"
  >
    <el-form-item>
      <div class="title">系统登录</div>
    </el-form-item>
    <el-form-item class="changeStyle" prop="username">
      <el-input class="MThem" v-model="loginForm.username">
        <i slot="prefix" class="iconfont icon-user"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input class="MThem" type="password" v-model="loginForm.password">
        <i slot="prefix" class="iconfont icon-password"></i>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="submit"
        @click="submint"
        :loading="loading"
      >
        登 录
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { userLogIn } from "@/api/index";
export default {
  data() {
    return {
      loginForm: {
        username: "superadmin",
        password: "superadmin123123"
      },
      loading: false,
      //  验证
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入用户名" }
        ],
        password: [{ required: true, trigger: "blur", message: "请输入密码" }]
      }
    };
  },
  methods: {
    submint() {
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          userLogIn(this.loginForm, this.$router);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login_form {
  width: 500px;
  height: 300px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  .iconfont {
    font-size: 1.5rem;
    color: #2d3a4b;
  }
  .submit {
    width: 100%;
  }
  .changeStyle {
    background: #454545;
  }
  .title {
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    padding-bottom: 2rem;
  }
}
</style>
