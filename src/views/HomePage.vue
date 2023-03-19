<template>
  <div class="home">

    <div class="columns ml-6 mt-6" style="height: 40%;">
      <div class="column has-background-dark is-3">1</div>
      <div class="column ml-6 has-background-light is-8">2</div>
    </div>
    <paginationItems :items="states.jobs"></paginationItems>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import paginationItems from '../components/pagination-items.vue'
import Job from '@/models/Job'

export default defineComponent({
  components: {
    paginationItems
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

    const deleteJob = (index:number) => {
      console.log(index)
      states.jobs.splice(index, 1);
    };

    return { states, deleteJob}
  },
})
</script>

<style scoped>
@import '../assets/styles/home.css';
</style>


