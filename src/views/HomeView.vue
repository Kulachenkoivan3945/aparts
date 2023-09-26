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
    <div class="info">
      <img src="../assets/images/apartmetns/4.jpg" alt="">
      <div class="info-content">
        <div class="info-content-text">
          <h2>
            Хотите отдохнуть комфортно?
          </h2>
          <p>
            Мы приглашаем вас искать ваше идеальное жилье на нашем сайте и надеемся, что мы сможем помочь вам сделать ваше
            пребывание в Тосно комфортным и приятным.
          </p>
          <p class="info-content-text-thanks">
            Не стесняйтесь обращаться к нам с любыми вопросами или запросами.
            Благодарим вас за ваш интерес и выбор нашего сервиса аренды квартир в Тосно!
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="services">
      <div class="services-text">
        <h2>Дополнительные услуги</h2>
        <p>Воспользуйтесь дополнительным сервисом для более приятного и комфортного отдыха</p>
      </div>
      <div class="services-text">
        <h2>Дополнительные услуги</h2>
        <p>Воспользуйтесь дополнительным сервисом для более приятного и комфортного отдыха</p>
      </div>
    </div> -->
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

.services{
  width: 100vw;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
}

.services-text{
  width: 300px;
  text-align: left;
  line-height: 1.5rem;
}
.services h2{
  font-size: 1.4rem;
  margin-bottom: 20px;
}
</style>
