<template>
  <div class="slider">
    <div class="slider-image">
      <img v-for="image in images" :key="image" :style="imagePosition" :src="require(`../assets/images/main/${image}`)"
        alt="">
    </div>
    <div class="control" v-if="control">
      <div class="control-left control-btns" @click="getPrevImage">
        <span class="btn-left-right btn-left-1"></span>
        <span class="btn-left-right btn-left-2"></span>
      </div>
      <div class="control-right control-btns" @click="getNextImage">
        <span class="btn-left-right btn-right-1"></span>
        <span class="btn-left-right btn-right-2"></span>
      </div>
      <div class="image-counter">
        {{ activeImage + 1 }} / {{ images.length }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImagesSlider',
  props: {
    images: Array,
    auto: Boolean,
    duration: Number,
    control: Boolean
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
        }, this.duration);
      }
      else {
        if (this.activeImage < this.images.length - 1) this.activeImage++
        else this.activeImage = 0;
        document.querySelector('.btn-right-1').classList.add('animate-right-1');
        document.querySelector('.btn-right-2').classList.add('animate-right-2');
        setTimeout(() => {
          document.querySelector('.btn-right-1').classList.remove('animate-right-1');
          document.querySelector('.btn-right-2').classList.remove('animate-right-2');
        }, 1000)
      }
    },
    getPrevImage() {
      if (this.activeImage == 0) this.activeImage = this.images.length - 1
      else this.activeImage--;

      document.querySelector('.btn-left-1').classList.add('animate-left-1');
      document.querySelector('.btn-left-2').classList.add('animate-left-2');
      setTimeout(() => {
        document.querySelector('.btn-left-1').classList.remove('animate-left-1');
        document.querySelector('.btn-left-2').classList.remove('animate-left-2');
      }, 1000)
    }
  },
  mounted() {
    if (this.auto) this.getNextImage();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slider {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.slider-image {
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
  z-index: 0;
}


.slider-image img {
  transition: all 0.8s ease-in-out;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
}

.control {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.control-btns {
  padding: 20px;
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.control-left {
  background: linear-gradient(to right, rgba(84, 84, 84, 0.279), transparent);
}

.control-right {
  background: linear-gradient(to left, rgba(84, 84, 84, 0.279), transparent);
}

.control-btns:hover {
  transform: scale(1.1);
}

.btn-left-right {
  width: 5px;
  height: 25px;
  background-color: rgb(255, 255, 255);
}

.btn-left-1 {
  transform: rotateZ(45deg) translateY(7px);
}

.btn-left-2 {
  transform: rotateZ(-45deg) translateY(-7px);
}

.animate-left-1 {
  animation: click-left-1 1s ease-in-out;
}

.animate-left-2 {
  animation: click-left-2 1s ease-in-out;
}

.animate-right-1 {
  animation: click-right-1 1s ease-in-out;
}

.animate-right-2 {
  animation: click-right-2 1s ease-in-out;
}

@keyframes click-left-1 {
  100% {
    transform: rotateZ(405deg) translateY(7px);
  }
}

@keyframes click-left-2 {
  100% {
    transform: rotateZ(-405deg) translateY(-7px);
  }
}


.btn-right-1 {
  transform: rotateZ(-45deg) translateY(7px);
  /*animation: click-right-1 2s ease-in-out infinite;*/

}

.btn-right-2 {
  transform: rotateZ(45deg) translateY(-7px);
  /* animation: click-right-2 2s ease-in-out infinite; */
}

@keyframes click-right-1 {
  100% {
    transform: rotateZ(-405deg) translateY(7px);
  }
}

@keyframes click-right-2 {
  100% {
    transform: rotateZ(405deg) translateY(-7px);
  }
}

.control-btns img {
  width: 50px;
  height: 50px;
  cursor: pointer;
  box-shadow: 3px 3px 10px rgba(255, 255, 255, 0.888);
}


.image-counter {
  position: absolute;
  right: 15px;
  bottom: 15px;
  color: rgb(255, 255, 255);
  text-shadow: 0px 0px 3px rgb(0, 0, 0);

  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.3rem;
  border-radius: 5px;
}
</style>
