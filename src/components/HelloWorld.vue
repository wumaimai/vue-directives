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
  <div v-ellipsis style="margin: 0 auto">
    <b> 需要省略的文字是阿萨的副本阿萨的副本阿萨的副本阿萨的副本 </b>
  </div>
  <p>````````````````````````</p>
  <p>````````````````````````</p>
  <p>````````````````````````</p>
  <p>````````````````````````</p>
  <p>````````````````````````</p>
  <p>````````````````````````</p>
  <div v-backtop>回到顶部</div>
  <p>````````````````````````</p>
  <div
    v-empty="emptyValue"
    style="width: 200px; height: 200px; margin: 0 auto"
  ></div>
  <p>````````````````````````</p>
  <div class="drag-wrap">
    <span v-drag> 请拖拽我 </span>
  </div>
  <p>````````````````````````</p>
  <div v-format.toFixed.price="123333"></div>
  <!-- <el-tooltip content="Top center">
    <i class="el-icon-question" style="margin: 0 10px">假如我是一个图标</i>
  </el-tooltip> -->
</template>

<script setup>
import { defineProps, reactive } from "vue";
//import empty from "../static/img/empty.png";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
import imgUrl from "../static/img/empty.png";

const emptyValue = {
  content: "暂无列表",
  img: imgUrl,
  visible: true,
};
</script>

<style scoped>
a {
  color: #42b983;
}
.drag-wrap {
  height: 500px;
  position: relative;
}
.drag-wrap span {
  padding: 24px;
  position: absolute;
  background: red;
}
</style>
