/* eslint-disable */
<template>
    <Sidebar />
    <div class="chart-row">
        <Chart title='API' v-bind:results='resAPI' :legend='[resAPI[0].name, resAPI[1].name, resAPI[2].name]' />
        <Chart title='UI Firefox' v-bind:results='resUIFF' :legend='[resAPI[0].name, resAPI[1].name, resAPI[2].name]' />
        <Chart title='UI Chrome' v-bind:results='resUIC' :legend='[resAPI[0].name, resAPI[1].name, resAPI[2].name]' />
        <Chart title='Total' v-bind:results='resT' :legend='[resAPI[0].name, resAPI[1].name, resAPI[2].name]' />
        <Chart title='Duration' v-bind:results='resD' :legend='[resD[0].name, resD[1].name, resD[2].name]' />
    </div>
    <div>
        <Line />
    </div>


</template>

<script>
import Sidebar from '@/components/sidebar.vue'
import Chart from '@/components/ChartDiv.vue'
import Line from '@/components/LineChart.vue'
export default {
    name: 'component.vue',
    components: { Sidebar, Chart, Line },
    data() {
        return {
            resAPI: [
                { value: 800, name: "passed", itemStyle: { color: '#76d999' } },
                { value: 200, name: "failed", itemStyle: { color: '#eb3d4e' } },
                { value: 100, name: "flaky", itemStyle: { color: '#e4b562' } },
            ],
            resUIFF: [
                { value: 3000, name: "passed", itemStyle: { color: '#76d999' } },
                { value: 200, name: "failed", itemStyle: { color: '#eb3d4e' } },
                { value: 123, name: "flaky", itemStyle: { color: '#e4b562' } },
            ],
            resUIC: [
                { value: 3000, name: "passed", itemStyle: { color: '#76d999' } },
                { value: 195, name: "failed", itemStyle: { color: '#eb3d4e' } },
                { value: 120, name: "flaky", itemStyle: { color: '#e4b562' } },
            ],
            resT: [
                { value: 6800, name: "passed", itemStyle: { color: '#76d999' } },
                { value: 595, name: "failed", itemStyle: { color: '#eb3d4e' } },
                { value: 343, name: "flaky", itemStyle: { color: '#e4b562' } },
            ],
            resD: [
                { value: 80000, name: "UI Chrome", itemStyle: { color: '#76d999' } },
                { value: 90000, name: "UI Firefox", itemStyle: { color: '#eb3d4e' } },
                { value: 9000, name: "API", itemStyle: { color: '#e4b562' } },
            ],
            resARRAY: [
                [30, 32, 45, 12, 13, 11, 8, 60, 40, 30, 32, 45, 12, 13, 11, 8, 60, 40],
                [31, 34, 42, 10, 12, 11, 10, 63, 38, 31, 34, 42, 10, 12, 11, 10, 63, 38],
                [20, 2, 5, 2, 33, 21, 10, 6, 4, 20, 2, 5, 2, 33, 21, 10, 6, 4],
                [81, 68, 89, 55, 46, 32, 24, 127, 82, 81, 68, 89, 55, 46, 32, 24, 127, 82],
            ],
            catarr: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18
            ],
            lege: ['UI Firefox', 'UI Chrome', 'API', 'Total'],


        }
    },
    methods: {
        bebra: function () {
            this.Line.$refs.options.plugins.title.text = 'BEBRAs'
        }
    }

}
</script>

<style>
.chart-row {
    display: flex;
    flex-direction: row;
    flex:0 0 auto;
    

}
</style>
