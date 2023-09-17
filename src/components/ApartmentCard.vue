<template>
  <div class="apartment">

    <div class="apartment-slider">
      <img :src="require(`../assets/images/apartmetns/${itemInfo.images[0]}`)" alt="">
    </div>
    <div class="apartment-description">
      <div>
        <h3 class="apartment-name">{{ itemInfo.name }}</h3>
        <p class="apartment-adress">{{ itemInfo.adress }}</p>
        <div class="apartment-amenities">
          <span v-for="(amenities, index) in itemInfo.amenities" :key="index">
            {{ amenities }}
            <span class="dot" v-if="index != itemInfo.amenities.length - 1"> • </span>
          </span>
        </div>
      </div>
      <div class="apartment-buy">
        <p class="apartment-price">{{ itemInfo.price }} ₽ / сутки</p>
        <button>Забронировать</button>
      </div>
    </div>
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
    console.log(this.itemInfo);
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
  box-shadow: 5px 5px 15px rgba(201, 201, 201, 0.195);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.apartment:hover{
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
  justify-content:space-between;
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
  justify-self: flex-end;
  font-weight: bold;
  font-size: 1.2rem;
}

.apartment-buy button{
  padding: 12px;
  margin-top: 10px;
  font-size: 1.02rem;
  border-radius: 5px;
  border: 1px solid rgb(184, 244, 164);
  background-color: rgba(104, 193, 90, 0.832);
  color: white;
}
</style>
