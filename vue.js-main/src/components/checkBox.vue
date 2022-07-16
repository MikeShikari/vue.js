<template>
    <div v-if="this.checked === true">
        <label class="checkbox-aligner" :option="this.opt"><input ref="myInput" checked id="chrome" value="chrome"
                :v-model="this.check.value" type="checkbox"><span class="checkcust cbb"></span>
            {{ option }}</label>
    </div>
    <div v-else-if="this.checked === false">
        <label class="checkbox-aligner" :option="this.opt"><input ref="myInput" id="chrome" value="chrome"
                :v-model="this.check.value" type="checkbox"><span class="checkcust cbb"></span>
            {{ option }}</label>
    </div>
</template>

<script>
import { computed, defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
    name: 'radbtn',
    props: {
        option: {
            type: String
        },
        checked: {
            type: Boolean
        }
    },
    setup(props) {
        const opt = ref(props.option)
        const check = ref(props.checked)
        console.log(check.value)
        return { opt, check }
    }
})
</script>

<style scoped>
.checkbox-aligner {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 5px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.checkbox-aligner input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkbox-aligner:hover input~.checkcust {
    transition: all 0.4s ease;
    border: 1px solid #cccccc;
    background-color: #e9e9e9;
}

.checkbox-aligner input:checked~.checkcust {
    transition: all 0.4s ease;
    border: 1px solid #cccccc;
    background-color: #62a7f5;
}

.cbb {
    border-radius: 15%;
}

.checkcust {
    position: absolute;
    border: 1px solid #cccccc;
    height: 21px;
    width: 21px;
    top: 3px;
    left: 0;
    background-color: #f1f1f1;
}

.checkcust:after {
    content: "";
    position: absolute;
    display: none;
}

.checkbox-aligner input:checked~.checkcust:after {
    display: block;
}

.checkbox-aligner .checkcust:after {
    transition: all 0.4s ease;
    left: 6px;
    top: 3px;
    width: 5px;
    height: 8px;
    border: solid rgb(255, 255, 255);
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>