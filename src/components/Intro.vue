<template>
  <div class="intro">
    
    <div class="intro-slider">
      <img v-for="image in images" :key="image"
      :style="imagePosition"
    :src=" require(`../assets/images/main/${image}`)"  alt="">
    </div>
    <div class="intro-content">
      <h1>Аренда квартир в Тосно</h1>
      <div class="intro-privilege">
        <div class="intro-privilege-item intro-left">
          <div class="intro-privilege-text">Низкая стоимость
            <!-- <div class="full-text">Низкая стоимость</div> -->
          </div>
          <div class="intro-privilege-text">Предложения от собственника</div>
        </div>
        <div class="intro-privilege-btn">
          <button>Смотреть предложения</button>
        </div>
        <div class="intro-privilege-item intro-right">
          <div class="intro-privilege-text">Низкая стоимость</div>
          <div class="intro-privilege-text">Предложения от собственника</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroCard',
  props: {
    msg: String
  }, 
  data(){
    return{
      images: ['1.jpg','2.jpg','3.jpg','4.jpg'],
      activeImage: 0
    }
  },
  computed:{
    imagePosition() {
      return 'transform:' + 'translateX(-' + this.activeImage * 100 + '%)';
    }
  },
  methods:
  {
    getNextImage(){
      setInterval(()=>{
        if (this.activeImage < this.images.length - 1) this.activeImage++
        else this.activeImage = 0;
      },10000);
    },
    sliderActivate(){
      this.getNextImage();
    }
  },
  mounted(){
    this.getNextImage();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro {
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;

}

.intro-slider{
  display: flex;
  flex-direction: row;
  overflow: hidden;
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
}
.intro img{
  z-index: 0;
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  transition: all 0.8s ease-in-out;
  object-fit: cover;
}
.intro h1{
  display: block;
  cursor: pointer;
  color: rgb(239, 239, 255);
  font-size: 2rem;
  text-shadow: 3px 3px 10px rgb(66, 107, 125);
}

.intro-content{
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  cursor:default;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.301), rgba(188, 188, 188, 0.162), rgba(0, 0, 0, 0.389));
}
.intro-privilege{
  
  display: flex;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  height: auto;
}


.intro-privilege-item{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.intro-privilege-text{
  padding: 20px;
  display: block;
  width: 100%;
  margin: 20px;
  border-radius: 10px;
  color: rgb(97, 73, 29);
  font-weight: bold;
  backdrop-filter: blur(3px);
  background-color: rgba(240, 248, 255, 0.626);
  position: relative;
}

.intro-privilege-btn button{
  padding: 20px;
  margin: 50px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  color: rgb(97, 73, 29);
  background-color: rgba(255, 255, 255, 0.715);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 252, 236, 0.249);
  box-shadow: 3px 3px 10px rgba(255, 229, 156, 0.552);
}
.intro-left div{
  background: linear-gradient(to right, transparent,rgba(255, 255, 255, 0.758), rgba(255, 242, 221, 0.807));
}

.intro-right div{
  background: linear-gradient(to left, transparent,rgba(255, 255, 255, 0.758), rgba(255, 242, 221, 0.807));
}

.full-text{
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  height: 300px;
  width: 150%;

}
</style>
