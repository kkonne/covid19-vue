<template>
  <div id="app">
    <Navbar />

    <router-view/>

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar, Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Newsreader:wght@400;700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Newsreader', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #353535;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.font-bold {
  font-weight: 700;
}

.container {
  width: 85%;
  margin: 30px auto;
}

.spacer-sm {
  height: 10px;
}

.spacer-md {
  height: 25px;
}

.spacer-lg {
  height: 40px;
}

p {
  font-size: 1.1rem;
  margin: 5px 0;
}

.text-center {
  text-align: center;
}
</style>
