<template>
  <div class="apartment-wrapper">
    <div class="apartment">
      <div class="go-back" @click="$router.push('/')">
        <img src="../assets/images/icons/go-back.png" alt="">
        <p>На главную</p>
      </div>
      <div class="slider">
        <ImagesSlider :images="apartment.images" :imagesLocation="'apartmetns'" :auto="false" :duration="5000"
          :control="true"></ImagesSlider>
      </div>
      <div class="info text-block">
        <h2><span class="info-h2">{{ apartment.name }}</span> <span>{{ apartment.size }}м<sup>2</sup></span></h2>
        <ul>
          <li>
            Гостей: {{ apartment.guestsCount }}
          </li>
          <li>
            Кровати: {{ apartment.bedCount }}
          </li>
          <li>
            Этаж: {{ apartment.floor }}
          </li>
        </ul>

        <p class="description">
          {{ apartment.description }}
        </p>
        <h4>Спальные места: {{ apartment.guestsCount }}</h4>
        <p v-for="bed in apartment.beds" :key="bed">{{ bed }}</p>
        <p class="price">Цена: {{ apartment.price }}₽ / сутки</p>
      </div>
      <div class="rules text-block">
        <h2>Правила проживания</h2>
        <!--   <div class="time">
          <p class="check-in">Заезд
            <br>
            <span>После {{ apartment.rules.checkIn }}</span>
          </p>
          <p class="check-out">Отъезд
            <br>
            <span>До {{ apartment.rules.checkOut }}</span>
          </p>
          <p class="minimal-period">Минимальный срок проживания
            <br>
            <span>От {{ apartment.rules.minimalPeriod }} суток</span>
          </p>
        </div> -->
        <ul class="allows">
          <li>
            <p v-if="apartment.rules.kids">Можно с детьми</p>
            <p v-else>Без детей</p>
          </li>
          <li>
            <p v-if="apartment.rules.smoking">Можно курить</p>
            <template v-else>
              <p v-if="apartment.rules.balcony">Курение запрещено (включая лоджию)</p>
              <p v-else>Курение запрещено </p>
            </template>
          </li>
          <li>
            <p v-if="apartment.rules.party">Подходит для вечеринок</p>
            <p v-else>Без вечеринок</p>
          </li>
          <li>
            <p v-if="apartment.rules.drinks">Можно с алкоголем</p>
            <p v-else>Употребление алкоголя запрещено</p>
          </li>
          <li>
            <p v-if="apartment.rules.pets">Можно с питомцами по согласованию с хозяином квартиры</p>
            <p v-else>Без питомцев</p>
          </li>
          <li class="passport">
            <p v-if="apartment.rules.passport">Заселение по паспорту</p>
            <p v-else>Паспорт не обязателен</p>
          </li>
        </ul>

        <p class="deposit">
          Залог : {{ apartment.rules.deposit }}₽ - возвращаемый
        </p>
      </div>
      <div class="amenities text-block">

        <h2>Удобства</h2>
        <ul class="amenities-main">
          <li v-for="amenity in apartment.amenities.full" :key="amenity">
            <p>{{ amenity }}</p>
          </li>
        </ul>

        <ul class="amenities-all">

          <li>
            <h3>Ванная команата</h3>
            <ul>
              <li v-for="bath in apartment.amenities.bath" :key="bath">
                <p>{{ bath }}</p>
              </li>
            </ul>
          </li>

          <li>
            <h3>Кухня</h3>
            <ul>
              <li v-for="citchen in apartment.amenities.citchen" :key="citchen">
                <p>{{ citchen }}</p>
              </li>
            </ul>
          </li>

          <li>
            <h3>Комната</h3>
            <ul>
              <li v-for="room in apartment.amenities.room" :key="room">
                <p>{{ room }}</p>
              </li>
            </ul>
          </li>

          <li>
            <h3>Инфраструктура рядом</h3>
            <ul>
              <li v-for="infrastructure in apartment.amenities.infrastructure" :key="infrastructure">
                <p>{{ infrastructure }}</p>
              </li>
            </ul>
          </li>

        </ul>
      </div>
      <div class="adress text-block">
        <h2>Адрес : {{ apartment.adress }}</h2>
        <iframe :src="apartment.addresSrc" frameborder="0"></iframe>
      </div>

      <div class="owner text-block">
        <h2>Владелец : Константин</h2>
        <h3><span class="owner-h3">По всем вопросам обращаться по номеру телефона</span> <span class="owner-tel">8 800 880
            88 88</span></h3>
        <p>Звоните-приезжайте-заселяйтесь! Мы рады новым и постоянным гостям</p>
        <p>Ждем вашего звонка с 7:00 до 00:00 </p>
      </div>
    </div>
  </div>
</template>


<script>
/* import IntroCard from '@/components/Intro.vue'
import apartmentCard from '@/components/ApartmentCard.vue' */
import ImagesSlider from '@/components/Slider.vue'
export default {
  name: 'ApartCardView',
  components: {
    ImagesSlider
    /*     IntroCard,
        apartmentCard */
  },
  data() {
    return {
      apartment: {},
      itemID: this.$route.params.id
    }
  },
  computed: {
  },
  created() {
    window.scroll({
      left: 0, // до какого количества пикселей прокрутить вправо
      top: 0, // до какого количество пикселей прокрутить вниз
      behavior: 'smooth' // определяет плавность прокрутки: 'auto' - мгновенно (по умолчанию), 'smooth' - плавно
    });
    this.apartment = this.$store.getters.getApartmentByID(this.itemID)
  }
}
</script>

<style scoped>
.apartment-wrapper {
  padding-top: 30px;
  padding-bottom: 100px;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(90deg, rgba(255, 189, 189, 0.052), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 189, 189, 0.052));
}

.apartment {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.go-back {
  display: flex;
  align-items: center;
  align-self: flex-start;
  padding-bottom: 20px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.go-back p {
  margin-left: 15px;
  color: gray;
  transition: all 0.5s ease-in-out;
}

.go-back:hover{
  transform: translateX(-5px);
}
.go-back:hover p{
  color: rgb(23, 6, 58);
}


.slider {
  width: 100%;
  height: calc(70vw / 1.9);
  border-radius: 15px;
}


.text-block {
  width: 100%;
  min-height: 100px;
  background-color: white;
  border: 1px solid rgba(138, 137, 137, 0.21);
  margin-top: 20px;
  box-shadow: 5px 5px 15px rgba(201, 201, 201, 0.419);
  border-radius: 15px;
  text-align: left;
  padding: 30px;
  padding-top: 20px;
}

.info h2 {
  margin-bottom: 10px;
}

.info-h2 {
  margin-right: 20px;
}

.info ul {
  display: flex;
  flex-direction: row;
}

.info li {
  margin-right: 20px;
  margin-bottom: 20px;
  color: rgb(86, 86, 86);
}

.description {
  margin-bottom: 15px;
}

.price {
  margin-top: 15px;
  font-size: 1.3rem;
  color: rgb(51, 51, 51);
  font-weight: 600;
}

.rules {}

.time {
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
}

.time p {
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
}

.time span {
  font-weight: 400;
  font-size: 1rem;
  margin-top: 10px;
}

.deposit {
  margin-top: 10px;
  font-size: 1.2rem;
  color: rgb(51, 51, 51);
  font-weight: 600;
}

.allows {
  margin-top: 15px;
}

.allows li {
  margin-left: 15px;
  list-style: disc;
  padding-bottom: 10px;
}

.passport p {
  font-weight: bold;
  color: rgb(255, 55, 55);
}

.amenities ul {
  margin-top: 15px;
}

.amenities li {
  margin-top: 5px;
}

.amenities li:first-letter {
  text-transform: uppercase;
}

.amenities-main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.amenities-main li {
  list-style: disc;
  margin-left: 15px;
  margin-right: 15px;
}


.amenities-all {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 15px;
}

.amenities-all h3 {
  margin-top: 15px;
}

.adress iframe {
  width: 100%;
  margin-top: 20px;
  border-radius: 12px;
  height: calc(80vw / 2 - 40px);
}

.owner h2 {
  margin-bottom: 20px;
}

.owner-h3 {
  margin-right: 15px;
  color: black !important;
  white-space: none !important;
}

.owner-tel {
  color: rgb(12, 0, 142);
  white-space: nowrap;
}

.owner p {
  padding-top: 10px;
}


@media (max-width: 900px) {
  .apartment {
    width: 85%;
  }

  .slider {
    height: calc(85vw / 1.9);
  }
}

@media (max-width: 750px) {
  .time {
    flex-direction: column;
    gap: 15px;
  }

  .time span {
    margin-top: 5px;
  }
}


@media (max-width: 650px) {
  .apartment {
    width: 95%;
  }

  .slider {
    height: calc(100vw / 1.5);
  }

  .adress iframe {
    height: calc(80vw - 40px);
  }
}

@media (max-width: 450px) {
  .amenities ul {
    grid-template-columns: 1fr;
  }

}

@media (max-width: 380px) {
  .info ul {
    flex-wrap: wrap;
  }

  .text-block {
    padding-left: 15px;
    padding-right: 15px;
  }

  .slider {
    height: calc(100vw / 1.3);
  }

}
</style>
