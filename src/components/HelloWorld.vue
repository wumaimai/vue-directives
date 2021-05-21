<template>
  <div v-expandClick="(20, 30, 40, 50)" @click="glabClickoutside">
    点击范围扩大
  </div>
  <p>````````````````````````</p>
  <input v-focus />
  <p>````````````````````````</p>
  <div v-copy>点击复制123</div>
  <p>````````````````````````</p>
  <div v-copy.dblclick>双击复制456</div>
  <p>````````````````````````</p>
  <div v-screenfull>全屏</div>
  <p>````````````````````````</p>
  <div v-tooltip:提示内容为XXX1>提示1</div>
  <p>````````````````````````</p>
  <span v-ellipsis>
    需要省略的文字是阿萨的副本阿萨的副本阿萨的副本阿萨的副本
  </span>
  <!-- <el-tooltip content="Top center">
    <i class="el-icon-question" style="margin: 0 10px">假如我是一个图标</i>
  </el-tooltip> -->
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
