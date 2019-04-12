// 模板：HTML结构
<template>
  <div id="app">
    <img src="./assets/panda.png" class="logo">
    <one/>
  </div>
</template>

// 行为：处理逻辑
<script>
import one from "./components/one";

export default {
  name: "App",
  components: {
    one
  }
};
</script>

// 样式：解决样式
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/rain.png");
  /* background-size: 100% 100%; */
  background-attachment: fixed;
}
.logo {
  margin: 8% 0 0 0;
}
</style>
