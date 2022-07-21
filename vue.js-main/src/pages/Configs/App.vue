<template>
    <Sidebar />
    <div class="main-row">
        <div class="chart-col">
            <DBopts />
            <div>
                <GeneralSettings />
                <CPSettings />
            </div>
            <div>
                <UserSettings />
            </div>
            <div class="row">
                <button @click="al" class="opt-btn strt">Проверить подключение</button>
                <i :class="connected ? 'bx bx-check ic-done' : 'bx bx-error-circle ic-err'"></i>
            </div>
            <div class="row">
                <button class="opt-btn save">Сохранить конфигурацию</button>
            </div>
        </div>



    </div>






</template>

<script>
import Sidebar from '@/components/sidebar.vue'
import GeneralSettings from '@/components/configs/GeneralSettings.vue'
import CPSettings from '@/components/configs/CounterpartiesSettings.vue'
import DBopts from '@/components/configs/DBConnect.vue'
import UserSettings from '@/components/configs/UserSettings.vue'


export default {
    name: 'component.vue',
    components: { Sidebar, DBopts, GeneralSettings, CPSettings, UserSettings },
    data() {
        return {
            connected: true
        }

    },
    methods: {
        al: function () {
            this.connected = !this.connected
        }
    }

}
</script>

<style>
body {
    color: #666666;
}

.ic-done {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 35px;
    color: #44b89f
}

.row {
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    margin-left: 20%;
}

.ic-err {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 35px;
    color: #f47862
}

.opt-btn {
    width: 60%;
    border-radius: 7px;
    margin-left: 15px;
    margin-bottom: 15px;
    margin-right: 10px;
    margin-top: 5px;
    border: 3px;
    display: inline-block;
    padding: 5px;
    font-size: large;


}

.strt {
    color: rgb(255, 255, 255);
    font-weight: 600;
    border: 2px solid #62a7f5;
    /* border-color: rgb(247 234 100 / 80%); */
    background-color: #62a7f5;
}

.strt:hover {
    box-shadow: 0px 0px 15px -5px #62a7f5;
    transition: all 0.5s ease;
}

.strt:active {
    background-color: #293e6d;
    transition: all 0.5s ease;
    ;
}

.save {
    color: rgb(255, 255, 255);
    font-weight: 600;
    border: 2px solid #73c6b4;
    /* border-color: rgb(247 234 100 / 80%); */
    background-color: #73c6b4;
}

.save:hover {
    box-shadow: 0px 0px 15px -5px #73c6b4;
    transition: all 0.5s ease;
}

.save:active {
    background-color: rgb(41, 109, 72);
    transition: all 0.5s ease;
    ;
}
.main-row {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    align-items: center;
        justify-content: center;
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
    width: 700px;
}
</style>
