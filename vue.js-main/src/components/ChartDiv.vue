<template>
  <div class="chart-container">
    <DoughnutChart ref="doughnutRef" :chartData="testData" :options="options" class='chart' />
    <button class="chart-more" @click='all'> <i
        :class="isActive ? 'bx bx-chevrons-right icon' : 'bx bx-chevrons-right icon_more'"></i> </button>
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
      if (this.results[0].value <= this.results[1].value) {
        this.options.plugins.legend.title.color = '#D95252'
      }
      else {
        this.options.plugins.legend.title.color = '#00B59E'
      }
      // this.options.plugins.legend.title.text = `${(this.results[0].value / (this.results[0].value + this.results[1].value + this.results[2].value)) * 100}%`
      this.isActive = !this.isActive
      console.log(this.options.plugins.legend.display)
      // console.log(this.results[0].value)
      // console.log(this.options.plugins)
    }
  },

  setup(props) {
    const doughnutRef = ref();
    const leg = ref({
      showLego: false,
      isActive: true
    })
    const data = ref(props.results);
    const options = ref({
      responsive: true,
      plugins: {
        legend: {
          display: leg.value.showLego,
          position: 'left',

          title: {
            color: '#00B59E',
            display: true,
            text: `${((props.results[0].value / (props.results[0].value + props.results[1].value + props.results[2].value)) * 100).toFixed(2)}%`
          }
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
          data: data.value,
          backgroundColor: ['#93DAD2', '#D95252', '#FEAF64'],
        },
      ],
    }));



    return { testData, doughnutRef, options, al };
  },
});
</script>
<style>
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
  background: #fcfdfd;
  flex-direction: column;
    border-radius: 14px;
    margin: auto;
    position: relative;
    height: auto;
    max-width: 15%;
    box-shadow: 0px 0px 15px -5px rgb(0 0 0 / 30%);
    flex: 1 1 0px;
      ;
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