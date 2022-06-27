/* eslint-disable */
<template>
    <Sidebar />
    <div class="chart-row">
        <Chart  />
        <Chart  />
        <Chart  />
    </div>
    
    
</template>

<script>
import Sidebar from '@/components/sidebar.vue'
import Chart from '@/components/ChartDiv.vue'
export default {
    name: 'component.vue',
    components: { Sidebar, Chart },
    data() {
        return {}
    }
}
</script>

<style>
.chart-row {
    display: flex;
    flex-direction: row;
    flex:0 0 auto;
    
justify-content: space-between;
}
</style>
