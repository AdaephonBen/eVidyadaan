<template>
  <div id="app">
    <div class="content">
  <b-navbar toggleable="lg" type="dark" variant="info" sticky="true">
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
    <iframe class="resp-iframe" :src="'https://docs.google.com/presentation/d/e/'+iframesrc+'/embed?start=false&loop=false&delayms=3000'" frameborder="0" width="1280" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" ></iframe>
  </div>
  <br />
  <div v-if="iframesrc != null" class="download">
    <b-button  v-on:click="iframesrc=ppt.vlink; downloadsrc=ppt.dlink" variant="outline-primary" :href="'https://docs.google.com/presentation/d/'+downloadsrc+'/export/pdf'">Download this presentation</b-button>
  </div>
  <br />
  <br />
  <br />
</div>
  <footer class="page-footer">
    Site developed for <a href="http://nss.iith.ac.in" class="footer-link">NSS, IIT Hyderabad</a> by <a href="https://github.com/adaephonben" class="footer-link">AdaephonBen</a>
  </footer>
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
    min-height: 100px;
    background:#fff url("Spinner-1s-200px.gif") no-repeat 50% top;
}
.resp-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

.page-footer {
  padding-top : 5px;
  width : 100%;
  bottom: 0;
  position: fixed;
  height : 35px;
  text-align: left;
  padding-left: 10px ; 
  background-color: #17A2B8 ;
  color: #FFFCEB;
}
.footer-link {
  border-bottom: 1px solid #453886;
  color: #453886;
  padding-bottom: .25em;
  text-decoration: none;
}
.footer-link:hover {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23453886' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 20%;
  border-bottom: 0;
  padding-bottom: .3em;
  text-decoration: none;
}
</style>
