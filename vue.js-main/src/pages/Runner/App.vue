/* eslint-disable */
<template>
    <Sidebar />
    <RunForm />




</template>

<script>
import Sidebar from '@/components/sidebar.vue'
import RunForm from '@/components/FormToRun.vue'

export default {
    name: 'component.vue',
    components: { Sidebar, RunForm },
}
</script>

<style>
.chart-row {
    display: flex;
    flex-direction: row;
    flex: 0 0 auto;
    justify-content: stretch;
    max-width: 98%;

}

.chart-col {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
}
</style>
