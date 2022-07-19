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
    setup(props) {
        const logV = ref(props.logValue)
        return { logV }
    }

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
    padding: 20px;
    position: relative;
    height: 55%;
        width: 96.5%;
    box-shadow: 0px 0px 15px -5px rgb(0 0 0 / 30%);
    overflow: hidden;
        display: flex;
        flex-direction: column;
        flex: 1 1 0px;
        transition: all 1s ease;
        overflow-y: none;
        overflow-x: hidden;
        scrollbar-gutter: stable;
    }
    
    .log-form-container:hover {
    overflow: scroll;
    /* overflow-y: none; */
        overflow-x: hidden;
        scrollbar-gutter: stable;
    }
    
    
    /* width */
    ::-webkit-scrollbar {
        width: 7px;
        background: transparent !important;
    
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        /* box-shadow: inset 0 0 5px grey; */
        background: transparent !important;
        border-radius: 15px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgb(98, 167, 245);
        border-radius: 10px;
}
</style>