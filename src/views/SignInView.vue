
<template>
  <div class="log-in">
    <div class="log-in-container">
      <h2>Добро пожаловать</h2>
      <form @submit.prevent>

        <label for="">
          <span>Введите логин</span>
          <input type="text" v-model="login" required>
        </label>

        <label for="">
          <span>Введите пароль</span>
          <input type="password" v-model="password" required>
        </label>

        <div class="errors-block">
          <p v-for="error in errors" :key=error>{{ error }}</p>
        </div>

        <button class="log-in-btn" @click="auth">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'LogInView',
  components: {
  },
  data() {
    return {
      login: "",
      password: "",
      errors: []

    }
  },

  methods: {
    auth() {
      this.errors = [];
      const cyrb53 = (str, seed = 0) => {
        let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
        for (let i = 0, ch; i < str.length; i++) {
          ch = str.charCodeAt(i);
          h1 = Math.imul(h1 ^ ch, 2654435761);
          h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
        h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
        h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

        return 4294967296 * (2097151 & h2) + (h1 >>> 0);
      };
      axios.get("users.json").then((res) => {
        console.log(res.data);
        if (cyrb53(this.login) == res.data[0].login && cyrb53(this.password) == res.data[0].password) {
          sessionStorage.setItem('test', 1);
          this.errors.push("Вы успешно авторизовались")
        }
        else {
          sessionStorage.clear();
          this.errors.push("Неверный логин или пароль")
        }
      });
    }

  },

  created() {

  },
  mounted() {
    /* this.$store.state.activaPage = 'gallery'; */
    window.scroll({
      left: 0, // до какого количества пикселей прокрутить вправо
      top: 0, // до какого количество пикселей прокрутить вниз
      behavior: 'smooth' // определяет плавность прокрутки: 'auto' - мгновенно (по умолчанию), 'smooth' - плавно
    });

  }
}
</script>

<style scoped>
a {
  padding: 10px;
  display: block;
  text-decoration: none;
  transition: color .5s ease-in-out;
}

a:hover {
  color: rgb(0, 4, 255);
}

.log-in {
  min-height: 100vh;
  margin: 0;
  padding-top: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(229, 229, 229, 0.401);
  /* background: linear-gradient(45deg, blue, violet, pink);*/
  z-index: 0;
}

.log-in-container {
  width: 600px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(199, 199, 199);
  box-shadow: 5px 5px 10px rgba(11, 16, 35, 0.418);
  padding: 50px;
  z-index: 1;
  filter: blur(3x);
  border-radius: 10px;
}

.log-in-container h2 {
  text-align: center;
}

.log-in-container form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 5px;
}

.log-in-container label {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
}

.log-in-container input {
  margin-top: 7px;
  border-radius: 5px;
  padding: 7px;
  width: 100%;
}

.log-in-btn {
  padding: 10px;
  width: 150px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid gray;
  margin-top: 15px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.log-in-btn:hover {
  background-color: rgb(9, 9, 100);
  color: white;
}


@media(max-width:650px) {

  .log-in-container {
    width: 400px;
  }

}


@media(max-width:430px) {

  .log-in-container {
    min-width: 250px;
    width: 90%;
    padding: 10px;
    padding-top: 20px;
  }

  .log-in-container label {
    width: 80%;
    padding: 5px;
  }

  .log-in-container input {
    padding: 3px;
  }
}

@media(max-height:780px) {

  .log-in {
    padding-top: 70px;
  }

  .log-in-container {
    margin-bottom: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
  }


}


@media(max-height:550px) {

  .log-in {
    padding-top: 70px;
  }

  .log-in-container {
    margin-bottom: 50px;
    padding-top: 10px;
    padding-bottom: 15px;
  }


}
</style>
