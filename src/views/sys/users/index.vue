<template>
  <div>
    <Bread :breads="breads" />
    <div>
      <el-button type="primary" size="small">新增</el-button>
    </div>
    <el-divider />
    <div class="tHeader">
      <span class="title"><i class="icon-caidan iconfont"></i>用户列表</span>
    </div>
    <el-table :data="tableData" size="small" row-key="id">
      <el-table-column prop="id" label="id"> </el-table-column>
      <el-table-column prop="name" label="用户名"> </el-table-column>
      <el-table-column prop="icon" label=""> </el-table-column>
      <el-table-column prop="url" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="text" size="small">修改</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Bread from "@/components/admin/Bread";
import nenuData from "./menuData.js";
export default {
  components: {
    Bread
  },
  data() {
    return {
      tableData: [],
      breads: [
        {
          name: "首页",
          url: "/home"
        },
        {
          name: "系统管理"
        },
        {
          name: "用户管理"
        }
      ]
    };
  },
  methods: {},
  created() {
    this.tableData = nenuData.nenuData();
  }
};
</script>
