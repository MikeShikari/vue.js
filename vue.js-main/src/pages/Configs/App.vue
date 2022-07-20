<template>
    <Sidebar />
    <div class="main-row">
        <DBopts />
        <div>
            <GeneralSettings />
            <CPSettings />
        </div>
    </div>






</template>

<script>
import Sidebar from '@/components/sidebar.vue'
import GeneralSettings from '@/components/configs/GeneralSettings.vue'
import CPSettings from '@/components/configs/CounterpartiesSettings.vue'
import DBopts from '@/components/configs/DBConnect.vue'


export default {
    name: 'component.vue',
    components: { Sidebar, DBopts, GeneralSettings, CPSettings },
}
</script>

<style>
body {
    color: #666666;
}

.main-row {
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    justify-content: stretch;
    max-width: 98%;

}

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
