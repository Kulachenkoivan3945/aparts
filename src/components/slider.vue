<template>
  <div class="slider">
    <img v-for="image in images" :key="image" :style="imagePosition" :src="require(`../assets/images/main/${image}`)"
      alt="">
  </div>
</template>

<script>
export default {
  name: 'IntroCard',
  props: {
    images: Array,
    auto: Boolean
  },
  data() {
    return {
      activeImage: 0,
    }
  },
  computed: {
    imagePosition() {
      return 'transform:' + 'translateX(-' + this.activeImage * 100 + '%)';
    }
  },
  methods:
  {
    getNextImage() {
      if (this.auto) {
        setInterval(() => {
          if (this.activeImage < this.images.length - 1) this.activeImage++
          else this.activeImage = 0;
        }, 15000);
      }
      else {
        if (this.activeImage < this.images.length - 1) this.activeImage++
        else this.activeImage = 0;
      }
    },
    getPrevImage() {
      if (this.activeImage == 0) this.activeImage = this.activeImage.length - 1
      else this.activeImage--;
    }
  },
  mounted() {
    if (this.auto) this.getNextImage();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  
}


</style>
