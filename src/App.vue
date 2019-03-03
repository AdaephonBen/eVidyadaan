<template>
  <div id="app">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="http://evidyadaan.netlify.com">eVidyadaan</b-navbar-brand>
    <b-navbar-toggle target="nav_collapse" />
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <div v-for="grade in json" :key="grade">
          <b-nav-item-dropdown :text="grade.name">
            <b-dropdown-item v-for="subject in grade.subjects" :key="subject" v-on:click="selectedSubject = subject">{{subject.name}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
  <br v-if="selectedSubject == null">
  <div v-if ="selectedSubject != null" >
    <b-list-group v-for="ppt in selectedSubject.ppts" :key="ppt">
      <b-list-group-item v-on:click="iframesrc=ppt.vlink; downloadsrc=ppt.dlink" >{{ppt.name}}  <b-button variant="outline-primary" :href="'https://docs.google.com/presentation/d/e/'+iframesrc+'/embed?start=false&loop=false&delayms=3000'">View</b-button>&nbsp;<b-button variant="outline-primary" :href="'https://docs.google.com/presentation/d/'+downloadsrc+'/export/pdf'">Download this presentation</b-button></b-list-group-item>
    </b-list-group>
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
    var iframesrc = '2PACX-1vSUScgVpG2sORQbq-F0tP91q-hNWvrxOSzhkGZVVkMUtk_qkxOrwAOjdFILFF8rfpSPJu59HPPNpEF6';
    var downloadsrc = '1YsWVrSc8Tt-w9ssmJ1T-vgRAdLcoLazMERpeWQnYcpU';
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
a
{
  text-align: right;
}
</style>
