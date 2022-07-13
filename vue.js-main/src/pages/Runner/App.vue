/* eslint-disable */
<template>
    <Sidebar />





</template>

<script>
import Sidebar from '@/components/sidebar.vue'

export default {
    name: 'component.vue',
    components: { Sidebar },
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
