<template>
  <div id="container">
    <header v-on:click="handle()">{{title}}</header>
    <a href="waterfall.vue"></a>
  </div>
</template>                                                                                             

<script>
export default {
  name: "container",
  data() {
    return {
      title: "This is the world of AKA Pandas"
    };
  },
  methods: {
    handle: function() {
        console.log(new Date())
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  color: #fff;
  padding: 1% 0;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  background: #24dcb8;
}
</style>

 