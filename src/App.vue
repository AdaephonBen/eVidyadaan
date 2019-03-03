<template>
  <div id="app">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="http://evidyadaan.netlify.com">eVidyadaan</b-navbar-brand>
    <b-navbar-toggle target="nav_collapse" />
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <div v-for="grade in json" :key="grade">
          <b-nav-item-dropdown :text="grade.name">
            <b-dropdown-item v-for="subject in grade.subjects" :key="subject" v-on:click="selectedSubject = subject; iframesrc = null ;">{{subject.name}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
  <br v-if="selectedSubject == null">
  <div v-if ="selectedSubject != null && iframesrc == null" >
    <b-list-group v-for="ppt in selectedSubject.ppts" :key="ppt">
      <b-list-group-item><b-button  v-on:click="iframesrc=ppt.vlink; downloadsrc=ppt.dlink" variant="outline-primary" >{{ppt.name}}</b-button></b-list-group-item>
    </b-list-group>
  </div>
  <div v-if="iframesrc != null" id="lol" class="resp-container">
    <iframe class="resp-iframe" :src="'https://docs.google.com/presentation/d/e/'+iframesrc+'/embed?start=false&loop=false&delayms=3000'" frameborder="0" width="1280" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  </div>
  <br />
  <div v-if="iframesrc != null" class="download">
    <b-button  v-on:click="iframesrc=ppt.vlink; downloadsrc=ppt.dlink" variant="outline-primary" :href="'https://docs.google.com/presentation/d/'+downloadsrc+'/export/pdf'">Download this presentation</b-button>
  </div>
  <br />
  
  </div>
</template>

<script>
import json from './presentations.json'
export default {
  name: 'app',
  components: {},
  data() {
    var iframesrc = null;
    var downloadsrc = null;
    var selectedSubject = null ;
    return{
      json,
      iframesrc,
      downloadsrc,
      selectedSubject
    }
  },
  methods: {
    generateIframe(dlink,vlink) {
      this.iframesrc = vlink;
      this.downloadsrc = dlink;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}
.download {
  text-align: center;
}
.resp-container {
    position: relative;
    overflow: hidden;
    padding-top: 58.515625%;
}
.resp-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>
