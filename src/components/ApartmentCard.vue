<template>
  <div class="apartment">

    <router-link :to="'/apart-card/' + itemInfo.id">
      <div class="apartment-slider">
        <img :src="require(`../assets/images/apartmetns/${itemInfo.minImage}`)" alt="">
      </div>
      <div class="apartment-description">
        <div>
          <h3 class="apartment-name">{{ itemInfo.name }}</h3>
          <p class="apartment-adress">{{ itemInfo.adress }}</p>
          <div class="apartment-amenities">
            <span v-for="(amenities, index) in itemInfo.amenities.min" :key="index">
              {{ amenities }}
              <span class="dot" v-if="index != itemInfo.amenities.min.length - 1"> • </span>
            </span>
          </div>
        </div>
        <div class="apartment-buy">
          <p class="apartment-price">{{ itemInfo.price }} ₽ / сутки</p>
          <!-- <button @click.prevent="">Забронировать</button> -->
        </div>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'apartmentCard',
  props: ['itemInfo'],
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.apartment {
  width: calc(100% - 40px);
  height: 250px;
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(223, 223, 223, 0.401);
  border-radius: 10px;
  margin: 20px;
  margin-top: 0px;
  margin-bottom: 20px;
  transition: all 0.5s ease-in-out;
  background-color: rgb(255, 255, 255);
}

a{
  display: flex;
  flex-direction: row;
  margin: 0;
  width: 100%;
}
.apartment:hover {
  box-shadow: 3px 3px 15px rgba(105, 105, 105, 0.767);
  background-color: rgba(255, 253, 251, 0.807);
}

.apartment-slider img {
  width: 350px;
  height: calc(100%);
  border-radius: 10px;
}

.apartment-description {
  margin: 20px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: calc(100% - 50px);
  width: 100%;
}

.apartment-name {
  margin-bottom: 10px;
}

.apartment-adress {
  margin-bottom: 10px;
}

.apartment-amenities span {
  color: gray;
}

.apartment-amenities:last-child {
  color: black;
}

.apartment-price {
  display: flex;
  justify-self: flex-start;
  font-weight: bold;
  transform: translateY(-250%);
  font-size: 1.2rem;
}

.apartment-buy button {
  padding: 12px;
  margin-top: 10px;
  font-size: 1.02rem;
  border-radius: 5px;
  border: 1px solid rgb(184, 244, 164);
  background-color: rgba(104, 193, 90, 0.832);
  color: white;
}

@media (max-width: 1100px) {
  .apartment-price{
    transform: none;
  }
}

@media (max-width: 900px) {

  .apartment{
    height: 180px;
  }
  .apartment-slider img{
    width: 250px;
  }
}

@media (max-width: 650px) {

  .apartment-amenities{
    margin-bottom: 10px;
  }
}

@media (max-width: 600px) {

  .apartment{
    height: auto;
    margin: 5px;
    width: 100%;
  }

  .apartment img{
    height: 200px;
    width: 100%;
  }

  .apartment-description{
    width: auto;
    margin: 10px;
  }
  .apartment a{
    flex-direction: column;
    width: 100%;
  }

  .apartment h3{
    text-align: center;
  }
  .apartment p{
    text-align: center;
  }
  .apartment-amenities{
    text-align: center;
  }

  .apartment-price{
    width: 100%;
    display: block;
    text-align: center;
  }

}

</style>
