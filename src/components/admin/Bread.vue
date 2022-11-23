<template>
  <div class="Bread">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in breads"
        :key="index"
        class="breadItem"
      >
        <a v-if="item.url" :href="'#' + item.url">{{ item.name }}</a>
        <span v-else>{{ item.name }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  props: {
    breads: Array
  }
};
</script>

<style lang="scss" scoped>
.Bread {
  // background-color: #eee;
  padding-bottom: 1rem;
  display: flex;
  .el-breadcrumb {
    font-size: 0.8rem;
    line-height: 2rem;
    color: #333;
  }
}
</style>
