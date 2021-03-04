<template>
  <div id="app">
    <router-view></router-view>
    <router-link :to="{name:'login'}">login</router-link>
    <router-link :to="{name:'dashboard'}">dashboard</router-link>
    <router-link :to="{name:'register'}">register</router-link>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
