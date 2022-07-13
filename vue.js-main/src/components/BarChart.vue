<template>
    <div class="chart-container">
        <BarChart ref="barRef" :chartData="testData" :options="options" class='chart' />

    </div>
</template>

<script>
import { shuffle } from 'lodash';
import { computed, defineComponent, ref, onMounted } from 'vue';
import { BarChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
export default defineComponent({
    name: 'Bar',
    components: { BarChart },
    props: {
        title: {
            type: String
        },
        results: {
            type: Array
        },
        legend: {
            type: Array
        }
    },






    setup(props) {
        const barRef = ref();

        const data = ref(props.results);
        const options = ref({
            responsive: true,
            scales: {
                y: {
                    grid: {
                        display: false
                    }
                },
                x: { grid: { display: false } }
            },
            plugins: {
                legend: {
                    display: false,
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: props.title,
                },
            },
        });


        const testData = computed(() => ({
            labels: props.legend,

            datasets: [
                {
                    data: data.value,
                    backgroundColor: ['rgba(54, 95, 186, 73)', 'rgb(98, 167, 245)', 'rgba(81, 232, 202, 91)']

                    // backgroundColor: ['#77CEFF', '#0079AF', '#123E6B'],
                },

            ],
        }));



        return { testData, barRef, options };
    },
});
</script>
<style scoped>
.chart-container {
    border: 1px solid #fcfdfd;
    display: flex;
    background: #fcfdfd;
    flex-direction: column;
    border-radius: 14px;
    margin: 25px;
    position: relative;
    max-height: 20%;
    max-width: 25%;
    box-shadow: 0px 0px 15px -5px rgb(0 0 0 / 30%);
    flex: 1 1 0px;
    ;
}

.chart {
    height: 24vh;
    width: auto;
    margin: 10px;
    transition: all 1s ease;
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