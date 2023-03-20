<template>

    <div class="columns ml-6 mt-6 pl-3 pr-3">
      <div class="column has-background-dark is-2 mr-6 has-text-white box">
        <p class="is-size-1 has-text-centered">Contact</p>
      </div>
      <div class="column is-9 ml-3 mr-3 ">
        <Carousel :autoplay="2000" :wrapAround="true">
        <Slide v-for="slide in 10" :key="slide">
          <img class="carousel__item" src="https://www.w3schools.com/w3images/workbench.jpg" >
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
      </div>
    </div>

    <paginationItems :items="states.jobs"></paginationItems>
    
</template>


<script lang="ts">
import { defineComponent, reactive } from 'vue'
import paginationItems from '../components/pagination-items.vue'
import Job from '@/models/Job'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default defineComponent({
  components: {
    paginationItems,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const states = reactive<{ jobs: Job[] }>({
      jobs: [
        { id: 1, name: "Job1", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 2, name: "Job2", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 3, name: "Job3", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 4, name: "Job4", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 5, name: "Job5", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 6, name: "Job6", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 7, name: "Job7", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 8, name: "Job8", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 9, name: "Job9", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 10, name: "Job10", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 11, name: "Job11", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 12, name: "Job12", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 13, name: "Job13", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 14, name: "Job14", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 15, name: "Job15", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 16, name: "Job16", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 17, name: "Job17", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 18, name: "Job18", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 19, name: "Job19", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
        { id: 20, name: "Job20", salary_per_day: 500, location: "xxxx", capacity: 2, detail: "xxxxxxxxxx", qualifications: ["1111", "2222"], contact: { name: "chanapon", email: "xxx@gmail.com", phone: "08xxxxxxxx" } },
      ]
    });

    const deleteJob = (index: number) => {
      console.log(index)
      states.jobs.splice(index, 1);
    };

    return { states, deleteJob }
  },
})
</script>

<style scoped>
@import '../assets/styles/homepage.css';

.carousel__item {
  width: 100%;
  border-radius: 8px;
  display:  block;;
  border-radius: 15px;
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


