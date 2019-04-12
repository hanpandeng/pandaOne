<template>
  <div id="container">
    <header @click="hidden = !hidden">{{title}}</header>
    <footer v-show="hidden">{{footer}}</footer>
  </div>
</template>                                                                                             

<script>
export default {
  name: "container",
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      footer: "welcome to my city",
      hidden: false
    };
  }
};
</script>

<style scoped>
header,
footer {
  width: 100%;
  color: #fff;
  padding: 1% 0;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  background: #24dcb8;
}
footer {
  background: #000;
  position: fixed;
  bottom: 0;
}
</style>

 