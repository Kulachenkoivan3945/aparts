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
      <img src="../assets/images/apartmetns/1.jpg" alt="">
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
    <div class="attractions">
      <div class="attractions-title">
        <h2>Куда сходить?</h2>
        <p class="attraction-descr">Тосно - город с богатым наследием и интересными достопримечательностями, которые предлагают уникальные и
          захватывающие впечатления. Он приветствует гостей и приглашает их открыть для себя его историческую и культурную
          ценность.</p>
        <p class="attraction-end">Мы подобрали для вас список самых популярных достопримечательностей</p>
      </div>
      <ul>
        <li v-for="attraction in attractions" :key="attraction">
          <attractionCard :item-info="attraction"></attractionCard>
        </li>
      </ul>
<!--       <div class="slider-attractions">
        <ImagesSlider :images="attractions" :is-attractions="true" :auto="false" :duration="5000" :control="true"></ImagesSlider>
      </div> -->
    </div>
  </div>
</template>


<script>
import IntroCard from '@/components/Intro.vue'
import apartmentCard from '@/components/ApartmentCard.vue'
import attractionCard from '@/components/AttractionCard.vue'
/* import ImagesSlider from '@/components/Slider.vue' */

export default {
  name: 'HomeView',
  components: {
    IntroCard,
    apartmentCard,
    attractionCard,
/*     ImagesSlider */
    /*  HelloWorld */
  },
  data() {
    return {
      apartments: this.$store.state.apartments,
      attractions: this.$store.state.attractions
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

.info {
  position: relative;
}

.info img {
  width: 100%;
  height: 50%;
  max-height: 500px;
  object-fit: cover;
}

.info-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% + 10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.641);
  backdrop-filter: blur(3px);
}

.info-content-text {
  width: 40%;
  align-self: flex-start;
  margin-left: 20%;
  text-align: left;
  font-family: 'roboto' !important;
}


.info-content-text h2 {
  line-height: 1.4rem;
  font-size: 2rem;
  line-height: 2.5rem;
  padding-bottom: 20px;
  color: #2c2c2ce4 !important;
}

.info-content-text p {
  font-weight: bold;
  line-height: 1.8rem;
  font-size: 1.2rem;
  color: #000000d2 !important;
}

.info-content-text-thanks {
  margin-top: 20px;
  background: linear-gradient(45deg, #363636, #626262, #242424);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.attractions {
  width: 100vw;
  min-height: 300px;
  height: calc(100% + 8px);
  display: flex;
  justify-content: center; 
  padding-top: 50px;
  padding-bottom: 8px;
  background-color: #f3f3f3ca;
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 100;
  padding-bottom: 50px;
}

.attractions::after{
  position: absolute;
  content: ' ';
  background-color: #f3f3f3ca;
  top:0;
  width: 100%;
  height: 8px;
  z-index: -10;
  transform: translateY(-8px);
  left: 0;
}

.attractions-title h2{
  font-size: 1.4rem;
  margin-bottom: 20px;
}
.attractions-title{
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  align-items: center;
  text-align: left;
  line-height: 1.4rem;
  padding: 30px;
  padding-left: 50px;
  margin-top: 0px;
  text-shadow: 2px 2px 5px rgba(236, 236, 236, 0.884);
  order: 5;
}
.attractions-title p{
  font-size: 1.1rem;
}

.attraction-descr{
  font-weight: bold;
  line-height: 1.8rem;
  font-size: 1.2rem;
  color: #000000d2 !important;
}

.attraction-end{
  padding-top: 30px;
  background: linear-gradient(45deg, #29292a, #272727, #2d2c2e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.attractions ul{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  flex-basis: 65%;
  justify-content: center;
  align-items:stretch;
}

.attractions li{
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


@media (max-width: 1100px) {
  .attractions li{
    width: 40%;
  }

  .apartment-container li{
    width: 95%;
  }
}

@media (max-width: 900px) {
  .attractions-title{
    padding: 10px;
  }

  .info-content-text{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .info h2{
    font-size: 1.6rem;
  }
  .info p{
    font-size: 1rem;
  }
}

@media (max-width: 900px) {
  .attractions-title{
    padding: 10px;
    padding-right: 20px;
  }

  .info-content-text{
    width: 50%;
  }
  .info h2{
    font-size: 1.6rem;
  }
  .info p{
    font-size: 1rem;
  }

  
}

@media (max-width: 700px) {
  .attractions{
    flex-direction: column;
  }

  .info{
    height: 100%;
  }
  .info img{
    height: 500px;
    max-height: max-content;
  }
  .info-content-text{
    height: 100%;
    width: 70%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .attractions-title{
    order: -5;
    padding: 30px;
    padding-top: 0;
    width: 100%;
    justify-self: center;
  }

  .attractions-title p{
    width: 70%;
  }
}

@media (max-width: 600px) {

  .apartment-container ul{
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  .apartment-container li{
    flex-basis: 45%;
  }

  .attractions-title p{
    width: 100%;
  }

  .attractions li{
    width: 45%;
  }
}

@media (max-width: 450px) {

  .apartment-container ul{
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  .apartment-container li{
    flex-basis: 70%;
  }

  .attractions li{
    width: 75%;
  }
}

@media (max-width: 350px) {

  .apartment-title h2{
    margin-left: 10px;
    margin-right: 10px;
  }
  .apartment-container li{
    flex-basis: 90%;
  }

  .info-content-text{
    margin-left: 10%;
    margin-right: 10px;
    width: 75%;
  }
  .attractions li{
    width: 85%;
  }
}
</style>
