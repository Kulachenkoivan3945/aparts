<template>
  <div class="intro">

    <div class="intro-slider">
      <ImagesSlider :images="images" :auto="true" :duration="5000"></ImagesSlider>
    </div>
    <div class="intro-content">
      <h1>Аренда квартир в Тосно</h1>
      <div class="intro-privilege">
        <div class="intro-privilege-item intro-left">
          <div class="intro-privilege-text" @click="showPrivilege(0)">Низкая стоимость
          </div>
          <div class="intro-privilege-text" @click="showPrivilege(1)">Предложения от собственника</div>
        </div>
        <div class="intro-privilege-btn">
          <button @click="toAparts">Смотреть предложения</button>
        </div>
        <div class="intro-privilege-item intro-right">
          <div class="intro-privilege-text" @click="showPrivilege(2)">Низкая стоимость</div>
          <div class="intro-privilege-text" @click="showPrivilege(3)">Предложения от собственника</div>
        </div>
      </div>
      <transition name="modal-fade">
        <div class="full-text" v-if="isFullShowed">
          <p>
            {{ privileges[activePrivilege] }}
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ImagesSlider from '@/components/Slider.vue'

export default {
  name: 'IntroCard',
  components: {
    ImagesSlider
  },
  props: {
    msg: String
  },
  data() {
    return {
      images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
      privileges: this.$store.state.privileges,
      activePrivilege: 0,
      isFullShowed: false
    }
  },
  computed: {
  },
  methods:
  {
    toAparts() {
      let scrollDiv = window.innerHeight
      window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
    },
    showPrivilege(n) {
      if (this.activePrivilege == n) {
        if (this.isFullShowed) {
          this.isFullShowed = false;
          return
        }
      }
      else {
        if (this.isFullShowed) {
          this.isFullShowed = false;
          setTimeout(() => {
            this.isFullShowed = true;
            this.activePrivilege = n;
          }, 500)
          return
        }
      }
      this.isFullShowed = true;
      this.activePrivilege = n;
    },
  },
  mounted() {
    console.log(this.privileges[0]);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-fade-leave-to,
.modal-fade-enter-from {
  opacity: 0;
  transform: scaleY(0);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.intro {
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;

}

.intro-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  width: 100vw;
  height: 100vh;
}

.intro h1 {
  display: block;
  cursor: pointer;
  color: rgb(239, 239, 255);
  font-size: 2.2rem;
  text-shadow: 3px 3px 10px rgb(66, 107, 125);
}

.intro-content {
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  cursor: default;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.301), rgba(188, 188, 188, 0.162), rgba(0, 0, 0, 0.389));
}

.intro-privilege {

  display: flex;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  height: auto;
}


.intro-privilege-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  justify-content: center;
}

.intro-privilege-text {
  padding: 20px;
  display: block;
  width: 100%;
  margin: 20px;
  border-radius: 10px;
  color: rgb(97, 73, 29);
  font-weight: bold;
  z-index: 100;
  backdrop-filter: blur(3px);
  position: relative;
  transition: all 0.5s ease-in-out;
  font-size: 1rem;
}

.intro-privilege-text:hover {
  background-color: rgb(255, 247, 240);
  box-shadow: 3px 3px 10px rgba(91, 57, 30, 0.322);
}

.intro-privilege-btn button {
  padding: 20px;
  margin: 50px;
  transition: all 0.5s ease-in-out;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  color: rgb(252, 238, 213);
  background: linear-gradient(to right, rgba(253, 170, 55, 0.749), rgba(255, 107, 27, 0.919), rgb(255, 177, 44));
  background-size: 200% 100%;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 252, 236, 0.249);
  box-shadow: 3px 3px 10px rgba(255, 229, 156, 0.552);
}

.intro-privilege-btn button:hover {
  background-position: 100% 100%;
  box-shadow: 3px 3px 10px rgba(255, 175, 134, 0.784);
  color: white;
}

.intro-left div {
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8), rgba(255, 242, 221, 0.8));
}

.intro-right div {
  background: linear-gradient(to left, transparent, rgba(255, 255, 255, 0.8), rgba(255, 242, 221, 0.8));
}

.full-text {
  position: absolute;
  top: 70%;
  backdrop-filter: blur(3px);
  width: 400px;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(91, 57, 30, 0.322);
  background: linear-gradient(to top, rgba(255, 242, 221, 0.8), rgba(255, 255, 255, 0.8), rgba(255, 242, 221, 0.8));
}

.full-text p {
  color: rgb(70, 50, 12);
  white-space: pre-line;
}
</style>
