<template>
  <el-aside :width="menuStyle ? '200px' : '65px'">
    <el-menu
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      :collapse="!menuStyle"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409eff"
    >
      <div v-for="item in menuData" :key="item.id">
        <el-menu-item
          :index="item.id"
          @click="clickMenu(item)"
          v-if="!item.children"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
        <el-submenu :index="item.id" v-if="item.children">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="data in item.children"
            :key="data.id"
            :index="data.id"
            @click="clickMenu(data)"
            style="padding-left: 2.8rem;"
            >{{ data.name }}</el-menu-item
          >
        </el-submenu>
      </div>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  props: {
    menuStyle: Boolean
  },
  data() {
    return {};
  },
  computed: {
    menuData() {
      return this.$store.state.user.userMenu;
    }
  },
  created() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      this.$router.push({ name: item.url });
    }
  }
};
</script>
<style lang="scss" scoped>
.el-aside {
  transition: width 0.3s;
  overflow: hidden;
  .el-menu-vertical {
    width: 100%;
    height: 100%;
    background: #cccccc;
    .iconfont {
      margin-right: 10px;
    }
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
  }
}
</style>
