// 模板：HTML结构
<template>
  <div id="app">
    <!-- 使用组件 -->
    <!-- <app-header :title="title" ></app-header> -->
    <waterfall :name="title" @value="data($event)"></waterfall>
  </div>
</template>

// 行为：处理逻辑
<script>
//局部组件注册引入文件路径
import header from "./components/header";

export default {
  name: "App",
  // 注册局部组件
  components: {
    "app-header": header
  },
  data() {
    return {
      title: "This is the world of AKA Pandas"
    };
  },
  methods: {
    data(content) {
      this.title = content;
    }
  }
};
</script>

// 样式：解决样式
<style>
* {
  margin: 0;
  padding: 0;
}
input,
button {
  outline: none;
}
img {
  display: block;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-image: url("./assets/rain.png");
  background-attachment: fixed;
}
li {
  list-style: none;
}
</style>
