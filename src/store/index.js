import { createStore } from "vuex";

export default createStore({
  state: {
    attractions: [
      {
        name: 'Усадьба Марьино',
        description: `В районе г. Тосно Ленинградской области, в деревне Андрианово, в 60 км от Санкт-Петербурга расположился один из самых пышных усадебных ансамблей России XIX века – родовое имение Строгановых-Голицыных усадьба Марьино - идеальное место для отдыха, романтических встреч и незабываемых торжеств.`,
        link: 'https://usadbamaryino.ru/',
        image: 'marino.jpg',
      },
      {
        name: 'Саблинские водопады',
        description: `Саблинский водопад — одна из достопримечательностей Саблинского памятника природы в Ленинградской области. Живописный водопад располагается на реке Саблинка, на территории поселка Ульяновка.`,
        link: 'https://www.tourister.ru/world/europe/russia/city/ulyanovka/waterfall/28772',
        image: 'sablino_waterfall.jpg',
      },
      {
        name: 'Церковь Троицы Живоначальной',
        description: `Церковь в честь Святой Троицы в д. Андрианово района г. Тосно, которая была возведена на территории усадьбы «Марьино». В церкви была усыпальница двух известных в России родов: графов Строгановых и князей Голицыных. 
        Церковь построена в неоготическом стиле (стиле английской псевдоготики), что придает ей заметную пышность и нарядность. Она является базиликой с одним помещением, массивными пилонами в наружных углах конструкции.`,
        link: 'https://pravoslavie.wiki/russkaya-neogotika-cerkov-troicy-zhivonachalnoj-v-andrianovo.html',
        image: 'church.jpg',
      },
      {
        name: 'Тосненский водопад',
        description: `Тосненский водопад — достопримечательность одного из поселков Ленинградской области — Ульяновки. Название это природное чудо получило благодаря реке Тосне, в каньоне которой оно и расположено. Водопад часто сравнивают с Ниагарским из-за схожей формы, напоминающей подкову.`,
        link: 'https://www.tourister.ru/world/europe/russia/city/ulyanovka/waterfall/28775',
        image: 'tosno_waterfall.jpg',
      },
      {
        name: 'Саблинские пещеры',
        description: `Саблинские пещеры — бывшие искусственно созданные штольни по добыче кварцевого песка, который использовался для изготовления стекла. В наши дни Саблинские пещеры (Левобережная) — это уникальный туристический объект, где проводятся увлекательные мероприятия для всей семьи, мастер-классы, познавательные программы, квесты, игры, тематические праздники, и даже новогодняя программа.`,
        link: 'https://www.tourister.ru/world/europe/russia/city/ulyanovka/placeofinterest/43218',
        image: 'sablino_cave.jpg',
      }
    ],
/*     services:[{
      name
    }], */
    apartments: [
      {
        id: 1,
        name: "2-х комнатная квартира в центре Тосно",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
        price: 3500,
        adress: "Ул. Горького 26",
        guestsCount: 2,
        size: 25,
        floor: 5,
        bedCount: 1,
        beds: ['1 двуспальная кровать'],
        description: `Вашему внимaнию пpeдлaгается в посутoчную аpенду отличная, уютная кваpтиpа-студия.
        Зaсeление с 13: 30, выcеление в 12: 00. B квapтиpе есть вcе нeoбxодимое для комфopтногo проживания:
        Оборудованная кухня, индукционная плита для приготовлeния пищи, вся необходимая поcудa, стoлoвыe прибoры, холодильник, чайник, телевизор, фен, утюг, wi-fi,
        Санузел совмещённый, выдаются чистые спальные принадлежности и полотенца.
        Вся инфраструктура в шаговой доступности. Рядом супермаркеты, кафе, рестораны, кинотеатр, дом культуры, теннис-клуб, парк, бассейн.
        До санкт-петербурга час езды. `,
        rules: {
          checkIn : '14:00',
          checkOut: '12:00',
          minimalPeriod: 1,
          kids: false,
          smoking: false,
          party:false,
          pets: true,
          drinks: false,
          deposit: 1000,
          passport: true
        },
        amenities:{
          min: ["Wi-FI", "Телевизор", "Стиральная машина", "Фен"],
          full: ["Wi-FI", "Телевизор", "Стиральная машина", "Фен",
           "косметический ремонт","электрический чайник", "полотенца","постельное белье", 
           "балкон / лоджия", "микроволновка"],
           bath: ['Количество ванных комнат с туалетом  1','полотенца','фен','душ'],
           citchen: ['микроволновка', 'посуда и принадлежности', 'столовые приборы', 'электрический чайник', 'холодильник','кухонный гарнитур', 'обеденный стол']
        }
      },
      {
        id: 2,
        name: "3-х комнатная квартира в центре Тосно",
        images: ["3.jpg", "4.jpg", "5.jpg", "1.jpg", "2.jpg"],
        price: 5500,
        adress: "Ул. Горького 26",
        guestsCount: 2,
        size: 25,
        floor: 5,
        bedCount: 1,
        beds: ['1 двуспальная кровать'],
        description: `Вашему внимaнию пpeдлaгается в посутoчную аpенду отличная, уютная кваpтиpа-студия.
        Зaсeление с 13: 30, выcеление в 12: 00. B квapтиpе есть вcе нeoбxодимое для комфopтногo проживания:
        Оборудованная кухня, индукционная плита для приготовлeния пищи, вся необходимая поcудa, стoлoвыe прибoры, холодильник, чайник, телевизор, фен, утюг, wi-fi,
        Санузел совмещённый, выдаются чистые спальные принадлежности и полотенца.
        Вся инфраструктура в шаговой доступности. Рядом супермаркеты, кафе, рестораны, кинотеатр, дом культуры, теннис-клуб, парк, бассейн.
        До санкт-петербурга час езды. `,
        rules: {
          checkIn : '14:00',
          checkOut: '12:00',
          minimalPeriod: 1,
          kids: false,
          smoking: false,
          party:false,
          pets: true,
          drinks: false,
          deposit: 1000
        },
        amenities:{
          min: ["Wi-FI", "Телевизор", "Стиральная машина", "Фен"],
          full: ["Wi-FI", "Телевизор", "Стиральная машина", "Фен",
           "косметический ремонт","электрический чайник", "полотенца","постельное белье", 
           "балкон / лоджия", "микроволновка"],
           bath: ['Количество ванных комнат с туалетом  1','полотенца','фен','душ'],
           citchen: ['микроволновка', 'посуда и принадлежности', 'столовые приборы', 'электрический чайник', 'холодильник','кухонный гарнитур', 'обеденный стол']
        }
      },
      {
        id: 3,
        name: "1 комнатная квартира в центре Тосно",
        images: ["5.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"],
        price: 1500,
        adress: "Ул. Горького 26",
        guestsCount: 2,
        size: 25,
        floor: 5,
        bedCount: 1,
        beds: ['1 двуспальная кровать'],
        description: `Вашему внимaнию пpeдлaгается в посутoчную аpенду отличная, уютная кваpтиpа-студия.
        Зaсeление с 13: 30, выcеление в 12: 00. B квapтиpе есть вcе нeoбxодимое для комфopтногo проживания:
        Оборудованная кухня, индукционная плита для приготовлeния пищи, вся необходимая поcудa, стoлoвыe прибoры, холодильник, чайник, телевизор, фен, утюг, wi-fi,
        Санузел совмещённый, выдаются чистые спальные принадлежности и полотенца.
        Вся инфраструктура в шаговой доступности. Рядом супермаркеты, кафе, рестораны, кинотеатр, дом культуры, теннис-клуб, парк, бассейн.
        До санкт-петербурга час езды. `,
        rules: {
          checkIn : '14:00',
          checkOut: '12:00',
          minimalPeriod: 1,
          kids: false,
          smoking: false,
          party:false,
          pets: true,
          drinks: false,
          deposit: 1000
        },
        amenities:{
          min: ["Wi-FI", "Телевизор", "Стиральная машина", "Фен"],
          full: ["Wi-FI", "Телевизор", "Стиральная машина", "Фен",
           "косметический ремонт","электрический чайник", "полотенца","постельное белье", 
           "балкон / лоджия", "микроволновка"],
           bath: ['Количество ванных комнат с туалетом  1','полотенца','фен','душ'],
           citchen: ['микроволновка', 'посуда и принадлежности', 'столовые приборы', 'электрический чайник', 'холодильник','кухонный гарнитур', 'обеденный стол']
        }
      },
    ],
    privileges: [
      `Мы работаем только с надежными арендодателями, чтобы гарантировать вам качество и надежность жилья. 
      Все квартиры проходят проверку на соответствие нормам безопасности и комфорта, чтобы вы могли чувствовать себя как дома.`,
      `На нашем сайте вы найдете подробные описания квартир с указанием количества комнат, площади, наличия мебели и других удобств. 
      Мы стараемся предоставить максимум информации, чтобы вы смогли принять правильное решение при выборе жилья.`,
      `Мы стремимся предоставить нашим клиентам лучший сервис и поддержку на каждом этапе процесса аренды квартиры. 
      Наша команда профессионалов готова помочь вам ответить на все вопросы и решить любые проблемы, связанные с арендой жилья.`,
      `Мы работаем только с надежными арендодателями, чтобы гарантировать вам качество и надежность жилья. 
      Все квартиры проходят проверку на соответствие нормам безопасности и комфорта, чтобы вы могли чувствовать себя как дома.`,
    ],
  },
  getters: {
    getApartmentByID: (state) => (id) => {
      return state.apartments.find((el) => el.id == id);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
