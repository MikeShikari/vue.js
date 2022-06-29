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


</template>

<script>
import Sidebar from '@/components/sidebar.vue'
import Chart from '@/components/ChartDiv.vue'
export default {
    name: 'component.vue',
    components: { Sidebar, Chart },
    data() {
        return {
            resAPI: [
                { value: 800, name: "passed", itemStyle: { color: '#b0ffc2' } },
                { value: 200, name: "failed", itemStyle: { color: '#eb3d4e' } },
                { value: 100, name: "flaky", itemStyle: { color: '#b0c4ff' } },
            ],
            resUIFF: [
                { value: 3000, name: "passed", itemStyle: { color: '#b0ffc2' } },
                { value: 200, name: "failed", itemStyle: { color: '#eb3d4e' } },
                { value: 123, name: "flaky", itemStyle: { color: '#b0c4ff' } },
            ],
            resUIC: [
                { value: 3000, name: "passed", itemStyle: { color: '#b0ffc2' } },
                { value: 195, name: "failed", itemStyle: { color: '#eb3d4e' } },
                { value: 120, name: "flaky", itemStyle: { color: '#b0c4ff' } },
            ],
            resT: [
                { value: 6800, name: "passed", itemStyle: { color: '#b0ffc2' } },
                { value: 595, name: "failed", itemStyle: { color: '#eb3d4e' } },
                { value: 343, name: "flaky", itemStyle: { color: '#b0c4ff' } },
            ],
            resD: [
                { value: 80000, name: "UI Chrome", itemStyle: { color: '#b0ffc2' } },
                { value: 90000, name: "UI Firefox", itemStyle: { color: '#eb3d4e' } },
                { value: 9000, name: "API", itemStyle: { color: '#b0c4ff' } },
            ],

        }
    },

}
</script>

<style>
.chart-row {
    display: flex;
    flex-direction: row;
    flex:0 0 auto;
    

}
</style>
