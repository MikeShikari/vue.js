<template>
    <div>
        <DoughnutChart ref="doughnutRef" :chartData="testData" :options="options" />
    </div>
</template>

<script>
import { shuffle } from 'lodash';
import { computed, defineComponent, ref, onMounted } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
export default defineComponent({
    name: 'Home',
    components: { DoughnutChart },
    setup() {
        const data = ref([30, 40, 60, 70, 5]);
        const doughnutRef = ref();
        const options = ref({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Doughnut Chart',
                },
            },
        });
        onMounted(() => {
            console.log(options.value.plugins.title)
        });
        const testData = computed(() => ({
            labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
            datasets: [
                {
                    data: data.value,
                    backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
                },
            ],
        }));



        return { testData, doughnutRef, options };
    },
});
</script>