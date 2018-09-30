<template>
  <div :class="'card ' + card.typeClass">
    <div class="card-image">
      <img :src="card.image" alt="site title">
      <div class="card-image-overlay"></div>
    </div>
    <div class="card-text">
      <h3>{{card.title}}</h3>
      <p>{{card.description}}</p>
    </div>
  </div>
</template>


<script>
export default {
  props: ['card']
}
</script>

<style lang="scss">

.card:hover{
  -webkit-box-shadow: 0px 10px 19px 0px rgba(50, 50, 50, 0.3);
  -moz-box-shadow:    0px 10px 19px 0px rgba(50, 50, 50, 0.3);
  box-shadow:         0px 10px 19px 0px rgba(50, 50, 50, 0.3);
}

.card{
  display:block;
  float:left;
  background-color:#FFFFFF;
  transition-property: box-shadow;
  transition-duration:0.4s;

  h3{
    margin-bottom:10px;
  }


  p{
    font-size:14px;
    line-height:18px;
  }

  .card-text{
    padding:10%;
  }

.card-image:hover{
  .card-image-overlay{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.8);
  }
}

  .card-image{
  width:100%;
  overflow:hidden;
  position:relative;


    img{
      display: block;
      width:100%;
      padding:0;
      margin:0;
    }

  }
}

.card.radio{
  border-top: 8px solid $green;
}
.card.mags{
  border-top: 8px solid $yellow;
}

</style>

