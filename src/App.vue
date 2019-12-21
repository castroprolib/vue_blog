<template>
  <div id="app">
   <!--  <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- <router-view name="blog"></router-view> -->

    <NavbarFront/> 

    <router-view/> 

   <!--  <Home/> -->

   <!--  <blog/> -->

    <!-- <about/> -->

  <!--   <contact/>  -->

    <Footer/>   

  </div>

</template>


<script>
  //hay que importar todos los compenentes aqui
//import HelloWorld from './components/HelloWorld.vue'


// navegacion front
import NavbarFront from './components/NavbarFront.vue'
import Footer from './components/Footer.vue'


// import Home from './components/Home.vue'
// import Blog from './components/Blog.vue'
// import About from './components/About.vue'
// import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {   
    // Home,
    NavbarFront,
    Footer
    // Blog,
    // About,
    // Contact

  }
}
</script>

<style>
/*importo boostrap*/
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
