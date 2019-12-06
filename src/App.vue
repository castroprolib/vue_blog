<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <Home/>   

  </div>
</template>

<script>
  //hay que importar todos los compenentes aqui
//import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
//import Blog from './components/Blog.vue'
//import About from './components/About.vue'
//import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {   
    Home

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
