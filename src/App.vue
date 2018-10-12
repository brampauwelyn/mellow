<template>
  <div id="app">
    <header>
    <Logo/>
      <ul class="navigation">
        <li v-for="(link, index) in getTypes"><a href="#" :class="link.class">{{link.name}}</a></li>
      </ul>
    </header>

    <div class="cards">
      <Card v-for="(site, index) in sites" :card="site"></Card>
    </div>
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
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
    Logo
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

  p,h3{
    font-family: 'Open Sans', sans-serif;
  }

  h3{
    font-size: 20px;
  }

  header{
    padding: 25px 0;
    display: flex;
    align-items: center;
  }

  .navigation{
    width: 45%;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;

    li a{
      text-decoration: none;
      font-family: 'Montserrat', sans-serif;
      text-transform: capitalize;
      color: #000;
      font-size: 24px;
      border-bottom-width: 3px;
      border-bottom-style: solid;

      &.label{
        border-bottom-color: $yellow;
        &:hover{
          background: $yellow;
        }
      }

      &.radio{
        border-bottom-color: $green;
        &:hover{
          background: $green;
        }
      }

      &.mags{
        border-bottom-color: $purple;
        &:hover{
          background: $purple;
        }
      }

      &.platform{
        border-bottom-color: $pink;
        &:hover{
          background: $pink;
        }
      }
    }
  }



  .cards{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 50px;

    @media screen and (min-width: 480px){
          grid-template-columns: repeat(2, 1fr);
        }

    @media screen and (min-width: 1000px){
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
