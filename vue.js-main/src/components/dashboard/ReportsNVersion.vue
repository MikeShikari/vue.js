<template>
    <div class="chart-container">
        <div class="ver-container">
            <label for="test-runs" class="info_text">Choose a test run:</label>
            <select name="test-runs" id="test-runs" v-model="selected" class="option-picker">
                <option v-for="(val, index) in values"
                    v-bind:value='{ date: val.date, version: val.version, tests: val.tests }' class="option-list"> {{
                            val.date
                    }}, {{ val.version }}, {{ index }}</option>
            </select>
            <p class="info_text">Date: <span class="info_text_p">{{ this.selected.date }}</span></p>
            <p class="info_text">Version: <span class="info_text_p">{{ this.selected.version }}</span></p>
            <p class="info_text">Total amount of tests: <span class="info_text_p">{{ this.selected.tests }}</span></p>
        </div>
        <div class="rep-container">
            <button class="report allure">
                <span class="report-text">Allure</span>
            </button>
            <button class="report pdf">
                <span class="report-text">PDF</span>
            </button>
        </div>
    </div>
</template>


<script>
import { computed, defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
    name: 'Runs',
    data() {
        return { selected: this.values[0] };
    },
    methods: {
        selectCategory(event) {
            console.log(this.key.date);
        }
    },
    props: {
        vals: {
            type: Array
        }
    },
    setup(props) {
        const values = ref(props.vals)
        return { values }
    }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

.chart-more {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-left: 5px;
    margin-bottom: 6px;
    margin-right: 9px;
    background: none;
    border: none;
    color: #686868;
}

.chart-more:hover {
    color: rgb(98, 167, 245)
}

.option-picker {
    border-radius: 7px;
    color: rgb(85, 85, 85);
    margin-bottom: 5px;
    margin-top: 5px;
    font-weight: 500;
    background-color: #e9e9e9;
    border: 2px solid #93dad229;
    padding: 5px;
    border: 1px solid #dddddd;
    transition: all 0.5s ease;

}

.option-list {
    border-radius: 7px;
    color: rgb(85, 85, 85);
    transition: all 0.5s ease;
    font-weight: 500;
}





.report {
    width: 100%;
    border-radius: 7px;
    margin-top: 20px;
    border: 3px;

    padding: 5px;
    font-size: large;


}

.allure {
    color: rgb(255, 255, 255);
    font-weight: 600;
    border: 2px solid rgb(98, 167, 245);
    /* border-color: rgb(247 234 100 / 80%); */
    background-color: rgb(98, 167, 245);
}

.allure:hover {
    box-shadow: 0px 0px 15px -5px rgb(98, 167, 245);
    transition: all 0.5s ease;
}

.allure:active {
    background-color: rgb(113, 153, 76);
    transition: all 0.5s ease;
    ;
}

.report-text {
    text-align: center;
    margin: 5px
}

.pdf {
    color: rgb(255, 255, 255);
    font-weight: 600;
    border: 2px solid rgb(230, 97, 97);
    background-color: rgb(230, 97, 97)
        /* border-color: rgb(230, 97, 97); */
}


.pdf:hover {
    box-shadow: 0px 0px 15px -5px rgb(237, 16, 16);
    transition: all 0.5s ease;
}

.pdf:active {
    background-color: rgb(173, 73, 73);
    transition: all 0.5s ease;
}

.ver-container {
    display: flex;
    padding: 20px;
    flex-direction: column;
    flex: 0 0 auto;
    ;
    width: 60%
}

.rep-container {
    display: flex;
    padding: 20px;
    flex-direction: column;
    flex: 0 0 auto;
    ;
    width: 40%
}

.info_text {
    color: rgb(85, 85, 85);
    margin-top: 5px;
    transition: all 1s ease;
}

.info_text_p {
    color: rgb(51, 51, 51);
    font-weight: 600;
    transition: all 1s ease;
}

.chart-container {
    border: 1px solid #fcfdfd;
    display: flex;
    background: #fcfdfd;
    flex-direction: row;
    border-radius: 14px;
    margin: 25px;
    position: relative;
    height: auto;
    max-width: 25%;
    box-shadow: 0px 0px 15px -5px rgb(0 0 0 / 30%);
    flex: 1 1 0px;
    align-self: stretch;
    ;
}

.allure-icon {
    background: url("../../../public/allure-fixed.png");
    height: 20px;
    width: 20px;
    margin-top: 8px;
    margin-bottom: 3px;
    margin-left: 5px;
    display: inline-block;
}

.pdf-icon {
    background: url("../../../public/images-fixed.png");
    height: 20px;
    width: 20px;
    margin-top: 8px;
    margin-bottom: 3px;
    margin-left: 5px;
    display: inline-block;
}

.chart {
    height: 20vh;
    width: auto;
    margin-bottom: 20px;
    transition: all 0.5s ease;
}

.chart_more {
    height: 23vh;
    width: auto;
    transition: all 0.5s ease;
}

.icon {
    font-size: 25px;
    font-weight: 500;
    transition: all 0.5s ease;
}

.icon_more {
    font-size: 25px;
    font-weight: 500;
    transition: all 0.5s ease;
    transform: rotate(180deg)
}
</style>