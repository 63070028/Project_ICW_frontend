<template>

    <div class="columns ml-6 mt-6 pl-3 pr-3">

      <div class="column has-background-dark is-2 mr-6 has-text-white box" @click="viewContact()" style="cursor: pointer;">
        <p class="is-size-1 has-text-centered">Contact</p>
      </div>

      <div class="column is-10 ml-3 mr-3 ">
        <Carousel :autoplay="1500" :wrapAround="true" style="width: 90%;">
        <Slide v-for="slide in 10" :key="slide">
          <img @click="viewProgram()" class="carousel__item" src="https://www.w3schools.com/w3images/workbench.jpg" width="1400">
        </Slide>
        <template #addons>
          <Navigation/>
          <Pagination />
        </template>
      </Carousel>
      </div>
    </div>

    <paginationItems :items="states.companies"></paginationItems>

</template>


<script lang="ts">
import { defineComponent, reactive } from 'vue'
import paginationItems from '../components/pagination-items.vue'
import Company from '@/models/Company'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    paginationItems,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {

    const router = useRouter();

    const states = reactive<{ companies: Company[] }>({
      companies: [
        { id: 1, name: "Company1", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 2, name: "Company2", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 3, name: "Company3", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 4, name: "Company4", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 5, name: "Company5", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 6, name: "Company6", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 7, name: "Company7", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 8, name: "Company8", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 9, name: "Company9", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 10, name: "Company10", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 11, name: "Company11", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 12, name: "Company12", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 13, name: "Company13", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 14, name: "Company14", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 15, name: "Company15", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 16, name: "Company16", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 17, name: "Company17", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 18, name: "Company18", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 19, name: "Company19", company_description:"", profile_image:"", background_image:"", vdo:"" },
        { id: 20, name: "Company20", company_description:"", profile_image:"", background_image:"", vdo:"" },
      ]
    });

    const deleteCompany = (index: number) => {
      console.log(index)
      states.companies.splice(index, 1);
    };

    const viewProgram = () => {
      router.push("/program")
    }

    const viewContact = () => {
      router.push("/contact")
    }


    return { states, deleteCompany, viewProgram, viewContact}
  },
})
</script>

<style scoped>
@import '../assets/styles/homepage.css';

.carousel__item {
  border-radius: 8px;
  display:  block;;
  border-radius: 15px;
  cursor: pointer;
}


.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.box{
  border-radius: 15px;
}

</style>


