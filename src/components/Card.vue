<template>
  <transition name="sitecard">
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
  </transition>
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
  transform: translateY(-15px);
}

.card{
  display:block;
  float:left;
  background-color:#FFFFFF;
  transition-property: box-shadow, transform;
  transform: translateY(0);
  transition-duration:0.3s;

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
      object-fit: cover;
      width:100%;
      padding:0;
      margin:0;
    }

  }
}


.sitecard-leave{
  opacity: 1;
  transform: scale(1);
}

.sitecard-leave-to{
  opacity: 0;
}

.sitecard-leave-active{
  transition: transform,opacity .15s ease-in;
}

.sitecard-enter{
  opacity: 0;
  transform: scale(0.5);
}

.sitecard-enter-to{
  opacity: 1;
  transform: scale(1);
}

.sitecard-enter-active{
  transition: transform,opacity .15s .15s ease-in;
}


</style>

