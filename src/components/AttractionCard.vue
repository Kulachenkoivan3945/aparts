<template>
  <div class="attraction">
    <a :href="itemInfo.link" target="_blank">
      <div class="attraction-image">
        <img :src="require(`../assets/images/attractions/${itemInfo.image}`)" alt="">
      </div>
      <div class="content">
        <div class="text">
          <h3>{{ itemInfo.name }}</h3>
          <!--         <p>{{ itemInfo.description }}</p> -->

        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'attractionCard',
  props: ['itemInfo', 'contentPosition'],
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
.attraction {

  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.918);
  padding: 10px;
  border-radius: 10px;
  /*width: calc(65vw - 50px);
  min-height: 50vh;
  display: flex;
  position: relative;
  margin-left: 20px;*/
}

.attraction:hover img {
  transform: scale(1.2);
}

.attraction:hover h3 {
  color: rgb(100, 3, 120);
}


.attraction-image {
  width: 100%;
  height: 80%;
  overflow: hidden;
  border-radius: 10px;
}

h3 {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.8s ease-in-out;
  padding-top: 10px;
}

img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  margin-bottom: 10px;
  transition: all 0.8s ease-in-out;
  cursor: pointer;
}

a {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  cursor: pointer;
}
</style>
