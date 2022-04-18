<template>
   <carousel :settings='settings' :breakpoints='breakpoints'>
    <Slide v-for="(image) in images" :key="image.id">
      <a :href="getImage(image.repo)" target="_blank">
        <figure>
          <img class="carousel__item" :src="getImage(image.url)" alt="projetos" />
          <figcaption>{{image.cap}}</figcaption>
        </figure>
      </a>
    </Slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {
  Carousel, Slide, Pagination, Navigation,
} from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      images: [
        {
          id: 1,
          url: 'https://github.com/dandara-dias/alura-doctor-who/raw/master/alura.gif',
          repo: 'https://github.com/dandara-dias/alura-doctor-who',
          cap: 'Aluracord - "clone" do Discord',
        },
        {
          id: 2,
          url: 'https://github.com/dandara-dias/philips-dev-week/blob/master/philips-dev-week.gif?raw=true',
          repo: 'https://github.com/dandara-dias/philips-dev-week',
          cap: 'Philips Dev Week - sistema de consulta ao DataSUS',
        },
        {
          id: 3,
          url: 'https://github.com/dandara-dias/tfc-trybe-futebol-clube/raw/main/tfc.gif',
          repo: 'https://github.com/dandara-dias/tfc-trybe-futebol-clube',
          cap: 'Trybe Futebol Clube - site informativo sobre partidas e classificações de futebol',
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
    };
  },
  methods: {
    getImage(imagePath) {
      return (imagePath);
    },
  },
};
</script>

<style>
.carousel__item {
  height: 400px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px;
}

a {
  text-decoration: none;
}

.carousel__slide {
  padding: 9px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  margin: 15%;
}
</style>
