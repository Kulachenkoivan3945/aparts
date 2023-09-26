<template>
  <div class="apartment-wrapper">
    <div class="apartment">
      <div class="go-back" @click="$router.push('/')">
        <img src="../assets/images/icons/go-back.png" alt="">
        <p>На главную</p>
      </div>
      <div class="slider">
        <ImagesSlider :images="apartment.images" :auto="false" :duration="5000" :control="true"></ImagesSlider>
      </div>
      <div class="info text-block">
        <h2>{{ apartment.name }} <span>{{ apartment.size }}м<sup>2</sup></span></h2>
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
        <div class="time">
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
        </div>
        <ul class="allows">
          <li>
            <p v-if="apartment.rules.kids">Можно с детьми</p>
            <p v-else>Без детей</p>
          </li>
          <li>
            <p v-if="apartment.rules.smoking">Можно курить</p>
            <p v-else>Курение запрещено</p>
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
          Возвращаемый залог : {{ apartment.rules.deposit }}₽
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

        </ul>
      </div>
      <div class="adress text-block">
        <h2>Адрес : {{ apartment.adress }}</h2>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A1dde84448939f3c51ffa01a447ff7431518f1bc8bd93a2c8be7bcf743fb74d2d&amp;source=constructor"
          frameborder="0"></iframe>
      </div>

      <div class="owner text-block">
        <h2>Владелец : Константин</h2>
        <h3>По всем вопросам обращаться по номеру телефона <span>8 800 880 88 88</span></h3>
        <p>Не стесняйтесь обращаться к нам с любыми вопросами или запросами</p>
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
}

.go-back p {
  margin-left: 15px;
  color: gray;
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

.info h2 span {
  margin-left: 20px;
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

.allows {}

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

.amenities-main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.amenities-main li {
  list-style: disc;
  margin-left: 15px;
}


.amenities-all {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
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

.owner span {
  margin-left: 15px;
  color: rgb(12, 0, 142);
}

.owner p {
  padding-top: 10px;
}
</style>
