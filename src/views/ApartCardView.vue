<template>
  <div class="apart">
    <div class="go-back">
      <img src="../assets/images/icons/go-back.png" alt="">
    </div>
    <div class="slider">
      <div class="current-image">
        <template v-for="(image, index) in apartments.images" :key="index">
          <img src="" alt="">
        </template>
      </div>
    </div>
  </div>
</template>


<script>
/* import IntroCard from '@/components/Intro.vue'
import apartmentCard from '@/components/ApartmentCard.vue' */
export default {
  name: 'ApartCardView',
  components: {
/*     IntroCard,
    apartmentCard */
  },
  data() {
    return {
      apartments: {},
      itemID : this.$route.params.id
    }
  },
  computed:{
  },
  created(){
    this.apartments = this.$store.getters.getApartmentByID(this.itemID)
  }
}
</script>

<style scoped>
.apartment-container {
  padding-bottom: 100px;
  padding-top: 50px;
  background: linear-gradient(90deg, rgba(255, 189, 189, 0.133), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 189, 189, 0.138));
}

.apartment-title {}

.apartment-container h2 {
  margin-bottom: 30px;
  background: linear-gradient(45deg, #000000, #c4781c, #000000);
  -webkit-background-clip: text;
  font-weight: bold;
  font-size: 1.7rem;
  -webkit-text-fill-color: transparent;
  text-shadow: 5px 5px 10px rgba(173, 223, 244, 0.395);
}

.apartment-container ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.apartment-container li {
  width: 80%;
}

.info{
  position: relative;
}
.info img{
  width: 100%;
  height: 50%;
  max-height: 500px;
  object-fit: cover;
}

.info-content{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.641);
  backdrop-filter: blur(3px);
}

.info-content-text{
  width: 40%;
  align-self: flex-start;
  margin-left: 20%;
  text-align: left;
  font-family: 'roboto' !important;
}


.info-content-text h2{
  line-height: 1.4rem;
  font-size: 2rem;
  padding-bottom: 20px;
  color: #2c2c2ce4 !important;
}
.info-content-text p{
  font-weight: bold;
  line-height: 1.8rem;
  font-size: 1.2rem;
  color: #000000d2 !important;
}

.info-content-text-thanks{
  margin-top: 20px;
  background: linear-gradient(45deg, #363636, #626262, #242424);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
