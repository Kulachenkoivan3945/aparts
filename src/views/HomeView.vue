<template>
  <div class="home">
    <IntroCard></IntroCard>
    <div class="apartment-container">
      <div class="apartment-title">
          <h2>Квартиры, свободные для заселения</h2>
      </div>
      <ul>
        <li v-for="apartment in apartments" :key="apartment">
          <apartmentCard :item-info="apartment"></apartmentCard>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import IntroCard from '@/components/Intro.vue'
import apartmentCard from '@/components/ApartmentCard.vue'
export default {
  name: 'HomeView',
  components: {
    IntroCard,
    apartmentCard
    /*  HelloWorld */
  },
  data() {
    return {
      apartments: this.$store.state.apartments
    }
  },
}
</script>

<style scoped>

.apartment-container{
  padding-bottom: 100px;
  padding-top: 50px;
  background: linear-gradient(90deg, rgba(255, 189, 189, 0.133),rgb(255, 255, 255), rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 255, 255),rgba(255, 189, 189, 0.138));
}
.apartment-title{

}
.apartment-container h2{
  margin-bottom: 30px;
  background: linear-gradient(45deg, #000000, #c4781c, #000000);
  -webkit-background-clip: text;
  font-weight: bold;
  font-size: 1.7rem;
  -webkit-text-fill-color: transparent;
  text-shadow: 5px 5px 10px rgba(173, 223, 244, 0.395);
}
.apartment-container ul{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.apartment-container li{
  width: 80%;
}
</style>
