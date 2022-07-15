/* eslint-disable */
<template>
    <Sidebar />
    <RunForm />
    <!-- <radial_progress /> -->




</template>

<script>
import Sidebar from '@/components/sidebar.vue'
import RunForm from '@/components/FormToRun.vue'
import radial_progress from '@/components/progress.vue'

export default {
    name: 'component.vue',
    components: { Sidebar, RunForm, radial_progress },
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
