<template>
    <p class="is-size-1 has-text-centered mt-3">Job Page {{ route.params.id }}</p>
</template>



<script lang="ts">
import { defineComponent, onMounted, PropType} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Job from '@/models/Job';

export default defineComponent({
    props: {
        job: {
            type: Object as PropType<Job>,
            required: true
        },
    },
    setup() {
        const router = useRouter();
        const route = useRoute();

        // const job = reactive<Job>({
        //     id: 0,
        //     company_id: 0, 
        //     name: "Job", 
        //     salary_per_day: 500, 
        //     location: "None", 
        //     capacity: 0, 
        //     detail: "None", 
        //     interview: "online", 
        //     qualifications: ["111", "2222"], 
        //     contact: { name: "chanapon", email: "xxxxx@hotmail.com", phone: "08xxxxxxxx" }
        // });

        onMounted(()=>{
            console.log(route.params.prop)
        });

        
        return {
            router,
            route
        }
    },
})
</script>
