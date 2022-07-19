/* eslint-disable */
<template>
    <Sidebar />
    <div class="chart-col">
        <div class="chart-row">
            <Line title='Errors' v-bind:results='resARRAY' :legend='catarr' />
        </div>
        <div class="chart-row">
            <Runs :vals='runs' />
            <Chart title='API' v-bind:results='resAPI' :legend='[resAPI[0].name, resAPI[1].name, resAPI[2].name]' />
            <Chart title='UI Firefox' v-bind:results='resUIFF'
                :legend='[resAPI[0].name, resAPI[1].name, resAPI[2].name]' />
            <Chart title='UI Chrome' v-bind:results='resUIC'
                :legend='[resAPI[0].name, resAPI[1].name, resAPI[2].name]' />
            <Chart title='Total' v-bind:results='resT' :legend='[resAPI[0].name, resAPI[1].name, resAPI[2].name]' />
            <!-- <Chart title='Duration' v-bind:results='resD' :legend='[resD[0].name, resD[1].name, resD[2].name]' /> -->
        </div>
        <div class="chart-row">
            <Bar title='Time' :legend="legenda" :results="resTi" />
            <TLine title='Time throughout test runs' v-bind:results='resARRAY1' :legend='catarr' />
        </div>
    </div>




</template>

<script>
import Sidebar from '@/components/sidebar.vue'
import Chart from '@/components/ChartDiv.vue'
import Line from '@/components/LineChart.vue'
import Runs from '@/components/ReportsNVersion.vue'
import Bar from '@/components/BarChart.vue'
import TLine from '@/components/TimeLineChart.vue'
export default {
    name: 'component.vue',
    components: { Sidebar, Chart, Line, Runs, Bar, TLine },
    data() {
        return {
            resAPI: [
                { value: 800, name: "passed", itemStyle: { color: '#76d999' } },
                { value: 200, name: "failed", itemStyle: { color: '#eb3d4e' } },
                { value: 100, name: "flaky", itemStyle: { color: '#e4b562' } },
            ],
            resUIFF: [
                { value: 300, name: "passed", itemStyle: { color: '#76d999' } },
                { value: 2000, name: "failed", itemStyle: { color: '#eb3d4e' } },
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

            ],
            catarr: [
                [1, '21.12.2022'], 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18
            ],
            lege: ['UI Firefox', 'UI Chrome', 'API', 'Total'],
            legenda: ['API', 'UI Chrome', 'UI Firefox'],
            resTi: [100, 2000, 2100],
            resARRAY1: [
                [2000, 2009, 1990, 1850, 2200, 2100, 2050, 1990, 1950, 2060, 2070, 2000, 2050, 1990, 1950, 2060, 2070, 2000],
                [2100, 2109, 1890, 2050, 2500, 2900, 1850, 1790, 2250, 2160, 2090, 2050, 2050, 2090, 1930, 2090, 2020, 2050],
                [300, 200, 199, 185, 220, 210, 205, 199, 195, 206, 200, 200, 205, 199, 195, 206, 207, 200]
            ],
            runs: [
                {
                    date: '11.07.2022',
                    version: 150,
                    tests: 2000
                },
                {
                    date: '12.07.2022',
                    version: 152,
                    tests: 2020
                },
                {
                    date: '13.07.2022',
                    version: 151,
                    tests: 2200
                },
                {
                    date: '09.07.2022',
                    version: 149,
                    tests: 1900
                },
            ]


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
    flex: 1 1 auto;
    justify-content: stretch;
    max-width: 98%;

}

.chart-col {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
}
</style>
