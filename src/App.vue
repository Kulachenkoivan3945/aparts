<template>
  <!--   <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  created() {
   /*  this.$store.dispatch('getPrices');
    console.log(sessionStorage.getItem("test")); */
  },
};
</script>
<style>
@font-face {
  font-family: 'Montserrat';
  src: url('assets/fonts/Montserrat/static/Montserrat-Regular.ttf');
}

@font-face {
  font-family: 'roboto';
  src: url('assets/fonts/roboto/Roboto-Regular.ttf');
}

#app {
  font-family: 'Montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: black;
  font-family: 'Montserrat';
}

::-webkit-scrollbar {
  display: none;
}

li {
  list-style: none;
}

p {
  font-size: 1rem;
}

a {
  text-decoration: none;
}

@media (max-width: 800px) {
  html {
    font-size: 14px;
  }

}

@media (max-width: 400px) {
  html {
    font-size: 12px;
  }

}
</style>
