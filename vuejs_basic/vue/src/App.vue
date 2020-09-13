<template>
  <div id="app">
      <h2>{{ title }}</h2>
      <Navbar></Navbar>
  </div>
</template>

<script>

import Navbar from './components/Navbar'
export default {
  name: 'App',
  data() {
      return {
          title: 'Wow Our vue website are running'
      }
  },
  components: {
      Navbar
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
  margin-top: 60px;
}
</style>
