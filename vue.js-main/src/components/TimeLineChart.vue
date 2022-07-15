<template>
    <div class="chart-container">
        <LineChart ref="lineRef" :chartData="testData" :options="options" class='chart' />
        <button class="chart-more" @click='all'> <i
                :class="isActive ? 'bx bx-chevrons-down icon' : 'bx bx-chevrons-down icon_more'"></i> </button>
    </div>
</template>

<script>
import { shuffle } from 'lodash';
import { computed, defineComponent, ref, onMounted } from 'vue';
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
export default defineComponent({
    name: 'Home',
    components: { LineChart },
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
    data() {
        return {
            showLego: false,
            center: ["40%", "50%"],
            isActive: true
        }
    },
    methods: {
        all: function () {
            this.options.plugins.legend.display = !this.options.plugins.legend.display
            this.isActive = !this.isActive
            console.log(this.options.plugins.legend.display)
            // console.log(this.options.plugins)
        }
    },

    setup(props) {
        const lineRef = ref();
        const leg = ref({
            showLego: false,
            center: ["40%", "50%"],
            isActive: true
        })
        const data = ref(props.results);
        const options = ref({
            responsive: true,
            // tooltips: {
            //     callbacks: {
            //         afterLabel: function(tooltipItem, data) {
            //             var dataset = data.value[0];
            //             var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
            //             return '(' + percent + '%)';}
            //     } 
            //     },
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
                    display: leg.value.showLego,
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: props.title,
                },
            },
        });

        const al = computed(() => {
            leg.value.showLego = !leg.value.showLego
            console.log(leg.value.showLego)
            // this.isActive = !this.isActive
            // if (this.showLego == true) {
            //     this.center = ["65%", "50%"]
            //     console.log(this.center)
            // } else if (this.showLego == false) {
            //     this.center = ["40%", "50%"]
            //     console.log(this.center)

            // }
        });
        const testData = computed(() => ({
            labels: props.legend,

            datasets: [
                {
                    label: 'API',
                    data: data.value[2],
                    borderColor: 'rgba(54, 95, 186, 73)',
                    tension: 0.5,
                    fill: {
                        target: 'origin',
                        above: 'rgba(54, 95, 186, 0.07)'
                    }
                    // backgroundColor: ['#77CEFF', '#0079AF', '#123E6B'],
                },
                {
                    label: 'Chrome',
                    data: data.value[0],
                    borderColor: 'rgb(98, 167, 245)',
                    tension: 0.5,
                    fill: {
                        target: 'origin',
                        above: 'rgba(98, 167, 245, 0.07)'
                    }
                    // backgroundColor: ['#77CEFF', '#0079AF', '#123E6B'],
                },
                {
                    label: 'Firefox',
                    data: data.value[1],
                    borderColor: 'rgba(68, 184, 160, 72)',
                    tension: 0.5,
                    fill: {
                        target: 'origin',
                        above: 'rgba(81, 232, 202, 0.05)'
                    }
                    // backgroundColor: ['#77CEFF', '#0079AF', '#123E6B'],
                },
            ],
        }));



        return { testData, lineRef, options, al };
    },
});
</script>
<style scoped>
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
    transition: all 1s ease;
}

.chart-more:hover {
    color: #512abd
}

.chart-container {
    border: 1px solid #fcfdfd;
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    margin: 25px;
    position: relative;
    height: auto;
    max-width: 75%;
    box-shadow: 0px 0px 15px -5px rgb(0 0 0 / 30%);
    flex: 1 1 0px;
    ;
    transition: all 1s ease;
}

.chart {
    height: 24vh;
    width: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-right: 30px;
    margin-left: 30px;
    transition: all 1s ease;
}

.chart_more {
    height: 23vh;
    width: auto;
    transition: all 1s ease;
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