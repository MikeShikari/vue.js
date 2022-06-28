<template>
    <div class="chart-container">
        <v-chart class="chart" :option="option" />
        <p class="chart-more"> Show more </p>
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
import { ref, defineComponent } from "vue";

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

  setup () {
    const option = ref({
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
        show: false,
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
    });

    return { option };
  }
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