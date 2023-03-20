<template>
    <div class="columns select-role">
        <div class="column has-background-light p-1 role" @click="() => { select_role = 'applicant'; }">
            <p class="has-text-centered p-5">หางาน</p>
        </div>
        <div class="column has-background-light p-1" @click="() => { select_role = 'company'; }">
            <p class="has-text-centered p-5">หาคน</p>
        </div>
    </div>
        <applicantSignupVue v-if="select_role === 'applicant'"></applicantSignupVue>
        <companySignupVue v-if="select_role === 'company'"></companySignupVue>
</template>


<script>
import applicantSignupVue from '@/components/applicant-signup.vue'
import companySignupVue from '@/components/company-signup.vue'
export default {
    name: "SignUp",
    components: {
        applicantSignupVue,
        companySignupVue
    },
    data() {
        return {
            select_role: "applicant",
        }
    },

    methods: {

    }



}
</script>

<style scoped>
@import '../assets/styles/signup.css';
</style>