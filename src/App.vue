<template>
  <div id="app">
    <Header/>
    <ul>
      <li v-for="(link, index) in getTypes"><a href="#" :class="link.class">{{link.name}}</a></li>
    </ul>
    <div class="cards">
      <Card v-for="(site, index) in sites" :card="site"></Card>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Card from './components/Card.vue'
import { db } from './main.js'

export default {
  name: 'app',
  data: function(){
    return{
      sites: []
    }
  },
  firestore(){
    return{
      sites: db.collection('sites')
    }
  },
  components: {
    Card,
    Header
  },
   computed: {
    getTypes: function(){
      var typeCheck = [];
      var types = [];
      for (var i = 0; i < this.sites.length; i++) {
        if(typeCheck.indexOf(this.sites[i].type) === -1){
          const obj = {
            "name": this.sites[i].type,
            "class": this.sites[i].typeClass
          };
          typeCheck.push(this.sites[i].type);
          types.push(obj);
        }
      }
      return types;
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans');

  body{
    background-color: #f5f5f5;
    width:95%;
    margin: 0 auto;
  }

  p{
    font-family: 'Open Sans', sans-serif;
  }

  .cards{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    @media screen and (min-width: 480px){
          grid-template-columns: repeat(2, 1fr);
        }

    @media screen and (min-width: 1000px){
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
