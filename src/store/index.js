import { createStore } from 'vuex'

export default createStore({
  state: {
    apartments:[
      {
        name: '2-х комнатная квартира в центре Тосно',
        images: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'],
        price: 3500,
        adress: 'Ул. Горького 26',
        guestsCount: 2,
        amenities: ['Wi-FI', 'Телевизор','Стиральная машина','Фен']
      },
      {
        name: '3-х комнатная квартира в центре Тосно',
        images: ['3.jpg','4.jpg','5.jpg','1.jpg','2.jpg'],
        price: 5500,
        adress: 'Ул. Горького 26',
        guestsCount: 2,
        amenities: ['Wi-FI', 'Телевизор','Стиральная машина','Фен']
      },
      {
        name: '1 комнатная квартира в центре Тосно',
        images: ['5.jpg','1.jpg','2.jpg','3.jpg','4.jpg'],
        price: 1500,
        adress: 'Ул. Горького 26',
        guestsCount: 2,
        amenities: ['Wi-FI', 'Телевизор','Стиральная машина','Фен']
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
