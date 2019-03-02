<template>
  <div id="app">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">eVidyadaan</b-navbar-brand>
    <b-navbar-toggle target="nav_collapse" />
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <div v-for="index in 12" :key="index">
          <b-nav-item-dropdown v-bind:text="'Grade ' + index">
            <div v-for="(ppts,pptID) in presentations" :key="ppts">
              <b-dropdown-item v-if="ppts.grade === index" v-on:click="generateIframe(pptID)">{{ppts.title}}</b-dropdown-item>
            </div>
          </b-nav-item-dropdown>
        </div>
      </b-navbar-nav>
      
    </b-collapse>
  </b-navbar>
  <br />
  <iframe :src="'https://docs.google.com/presentation/d/e/'+iframesrc+'/embed?start=false&loop=false&delayms=3000'" frameborder="0" width="1280" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  <br />
  <a :href="'https://docs.google.com/presentation/d/'+downloadsrc+'/export/pdf'">Download this presentation</a>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  data() {
    var presentations = []
    var iframesrc = '2PACX-1vRgk-rSIm4b5jKL85hsomE_1dHAgf79UnT62mxq_ahKBBzAltOrkT7dS7EjYQlTLHTDnFO0B6E-8vHu'
    var downloadsrc = '1FfoD4Vw6NhixFdZ45V8wp6pl_5hpqeYBhbt-aXbn7W0' 
    presentations[0] = {title: 'Chemical Reactions and Equations', grade: 10, iframesrc: '2PACX-1vSyG1poqfYfc50RDxJrocqX90QuvInHB3IXQWMZNwyRkcSUna2DIRmaHRhKHYQiC3W0EuXCmI9FVpCs', download: '1woqw-TPMANvkGvOkNGKeyLJ1wBDp1MM5P-7d2eIwf6s'};

    return{
      presentations,
      iframesrc,
      downloadsrc
    }
  },
  methods: {
    generateIframe(pptID) {
      this.iframesrc = this.presentations[pptID].iframesrc;
      this.downloadsrc = this.presentations[pptID].download;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
