<template>
  <div class="error">
    <div class="Bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>404</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="error-404">
      <img src="@/assets/404.png" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.error {
  .error-404 {
    overflow: hidden;
    text-align: center;
    padding: 3rem;
    img {
      height: 400px;
    }
  }
}
</style>
