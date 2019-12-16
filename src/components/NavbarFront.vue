<template>
  
  <nav class="navbar navbar-expand-md bg-dark navbar-dark ">
    <!-- Brand -->
    <!-- <a class="navbar-brand nav-bar-title" href="">Home</a> -->
    <router-link to="/" exact class="navbar-brand">Home</router-link>

    <!-- Toggler/collapsibe Button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar links -->
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav ml-auto ">
        
        <li class="nav-item nav-bar-text">
          <!-- <a class="nav-link" href="">Blog</a> -->
          <router-link to="/blog" exact class="navbar-brand">Blog</router-link>
        </li>

        <li class="nav-item nav-bar-text">
          <!-- <a class="nav-link" href="">About</a> -->
          <router-link to="/about" exact class="navbar-brand">About</router-link>
        </li>
        <li class="nav-item nav-bar-text">
         <!--  <a class="nav-link" href="">Contact</a> -->
         <router-link to="/contact" exact class="navbar-brand">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>

</template>