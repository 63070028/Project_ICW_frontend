<template>
    <p class="is-size-1 has-text-centered mt-3">{{job.name}}</p>
</template>



<script lang="ts">
import { defineComponent, onMounted, reactive} from 'vue'
import { useRoute, useRouter,} from 'vue-router'
import Job from '@/models/Job';

export default defineComponent({
    setup() {
        const router = useRouter();
        const route = useRoute();

        const job = reactive<Job>({
            id: 0,
            company_id: 0, 
            name: "Job", 
            salary_per_day: 500, 
            location: "None", 
            capacity: 0, 
            detail: "None", 
            interview: "online", 
            qualifications: ["111", "2222"], 
            contact: { name: "chanapon", email: "xxxxx@hotmail.com", phone: "08xxxxxxxx" }
        });

        onMounted(()=>{
            //get api job
            const get_job = { id: 0, company_id: 1, name: "ฝึกงาน ตำแหน่ง Software Engineer", salary_per_day: 500, location: "sssss", capacity: 10, detail: "", interview: "online", qualifications: ["111", "2222"], contact: { name: "chanapon", email: "xxxxx@hotmail.com", phone: "08xxxxxxxx" }}
            Object.assign(job, get_job)
            
        });

        
        return {
            router,
            route,
            job
        }
    },
})
</script>
