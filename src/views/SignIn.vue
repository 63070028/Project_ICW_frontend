<template>
    <div class="signin_content p-6">
        <h1 class="is-size-1 has-text-centered mt-3">Sign Up</h1>
        <div class="field ">
            <label class="label is-large">Email</label>
            <div class="control">
                <input class="input is-large" type="text">
            </div>
        </div>
        <div class="field ">
            <label class="label is-large">Password</label>
            <div class="control">
                <input class="input is-large" type="text">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <button class="button is-success is-large is-fullwidth">Sign In</button>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {

        let email = ref<string>("");



        return { email }
    },
})
</script>

<style scoped>
.signin_content {
    
    align-self: center;
    width: 30%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
