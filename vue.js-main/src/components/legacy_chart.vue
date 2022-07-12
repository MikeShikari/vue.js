<template>
    <div class="chart-container">
        <v-chart :class="isActive ? 'chart' : 'chart_more'" :option="option" />
        <button class="chart-more" @click='al'> Show legend </button>
    </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent, toRef } from "vue";

use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent
]);

export default defineComponent({

    name: "Pie",
    components: {
        VChart
    },

    data() {
        return {
            showLego: false,
            center: ["40%", "50%"],
            isActive: true
        }
    },
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

    methods: {
        al: function () {
            this.showLego = !this.showLego
            this.isActive = !this.isActive
            if (this.showLego == true) {
                this.center = ["65%", "50%"]
                console.log(this.center)
            } else if (this.showLego == false) {
                this.center = ["40%", "50%"]
                console.log(this.center)

            }
            console.log(this.option.legend.show)
        }
    },
    computed: {
        option(props) {
            return {
                title: {
                    text: props.title,
                    left: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "<b>{b}</b> : {c} ({d}%)"
                },
                legend: {
                    top: '20%',
                    orient: "vertical",
                    left: "left",
                    show: this.showLego,
                    data: props.legend
                },
                series: [
                    {
                        name: props.title,
                        type: "pie",
                        radius: ['35%', '65%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        center: this.center,
                        data: props.results,
                        labelLine: {
                            show: false
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            },

                        }
                    }
                ]
            }
        }
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
    width: 16.5%;
    box-shadow: 0px 0px 15px -5px rgb(0 0 0 / 30%);
    flex: 0 0 auto;
        ;
}

.chart {
    height: 20vh;
    width: auto;
    transition: all 0.5s ease;
}

.chart_more {
    height: 23vh;
    width: auto;
    transition: all 0.5s ease;
}
</style>