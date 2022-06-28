<template>
    <div class="chart-container">
        <v-chart class="chart" :option="option" />
        <button class="chart-more" v-on:click='showLego =! showLego' @click='al'> Show more </button>
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
import { ref, defineComponent, toRef} from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default defineComponent({
  
  name: "HelloWorld",
  components: {
    VChart
  },
 props:{
    showLeg:  {
            type: Boolean,
            default: false,
        },
    
  },
  data(){
    return {
      showLego:false
    }
  },
  
  created() {
        this.showLego = this.showLeg
    },
  methods:{
    al:function(){
      this.option.legend.show =! this.option.legend.show
      console.log(this.option.legend.show)
    }
  },
  computed: {
    option() {
      return {
      title: {
        text: "Traffic Sources",
        left: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "left",
        show: this.showLego,
        data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
      },
      series: [
        {
          name: "Traffic Sources",
          type: "pie",
          radius: ['35%', '65%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          center: ["40%", "50%"],
          data: [
            { value: 335, name: "Direct" },
            { value: 310, name: "Email" },
            { value: 234, name: "Ad Networks" },
            { value: 135, name: "Video Ads" },
            { value: 1548, name: "Search Engines" }
          ],
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
    }}},
    
   

    
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
  color:#512abd
}

.chart-container {
  border: 1px solid #fcfdfd;
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    margin: 25px;
  position: relative;
    height: auto;
  width: 17%;
    box-shadow: 10px 0px 27px -5px rgb(0 0 0 / 30%);
  flex:0 0 auto;
}
.chart {
  height: 20vh;
    width: auto
  }

</style>