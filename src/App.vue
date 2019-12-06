<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <NavbarFront/>  

    <Home/>

    <Footer/>   

  </div>
</template>

<script>
  //hay que importar todos los compenentes aqui
//import HelloWorld from './components/HelloWorld.vue'


// navegacion front
import NavbarFront from './components/NavbarFront.vue'
import Footer from './components/Footer.vue'


import Home from './components/Home.vue'
//import Blog from './components/Blog.vue'
//import About from './components/About.vue'
//import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {   
    Home,
    NavbarFront,
    Footer

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
