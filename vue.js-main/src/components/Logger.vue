<template>
    <div class="log-form-container">
        <p>{{ this.logValue }}</p>
    </div>
</template>



<script>
import { computed, defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
    props: {
        logValue: {
            type: Array
        }
    },

})
</script>


<style scoped>
.log-form-container {
    border: 1px solid #fcfdfd;
    background-color: #fcfdfd;
    border-radius: 14px;
    padding: auto;
    margin-top: 25px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 25px;
    position: relative;
    height: 45%;
    width: 100%;
    box-shadow: 0px 0px 15px -5px rgb(0 0 0 / 30%);
    overflow: scroll;
    display: block;
    transition: all 1s ease;
}
</style>