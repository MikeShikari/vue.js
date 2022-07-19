<template>
    <div class="error-form-container">
        <div>
            <h3 class="aligner">Статус</h3>

            <div class="icon-stat" v-if="load === 'ongoing'">
                <div class="spin"></div>
            </div>
            <div class="ic-cont" v-else-if="load === 'done'">
                <i class='bx bx-check ic-done'></i>
            </div>
            <div class="ic-cont" v-else-if="load === 'error'">
                <i class='bx bx-error-circle ic-err'></i>
            </div>
        </div>

        <div class="aligner">
            <p><b>Ошибки ожидания</b></p>
            <h2 class="to-err">10</h2>
        </div>
        <div class="aligner">
            <p><b>Ошибки селекторов</b></p>
            <h2 class="sel-err">10</h2>
        </div>
        <div class="aligner">
            <p><b>Ошибки базы данных</b></p>
            <h2 class="db-err">10</h2>
        </div>

    </div>
</template>


<script>
import { computed, defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
    name: 'errCounter',
    props: {
        loading: {
            type: String
        }
    },
    setup(props) {
        const load = ref(props.loading)
        console.log(props.loading)
        console.log(load.value)
        return { load }
    },

})

</script>


<style scoped>
@import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');
.error-form-container {
    border: 1px solid #fcfdfd;
    background-color: #fcfdfd;
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    padding: auto;
    margin-top: 25px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 25px;
    position: relative;
    height: 95%;
    max-width: 25%;
    box-shadow: 0px 0px 15px -5px rgb(0 0 0 / 30%);
    flex: 1 1;
    ;
    transition: all 1s ease;
}

@keyframes spinner {
    0% {
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }

    100% {
        transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
}

.ic-done {
    font-size: 30px;
    color: #44b89f
}

.ic-err {
    font-size: 30px;
    color: #f47862
}

.ic-cont {
    position: absolute;
    right: 9%;
    top: 3.5%;
}

.icon-stat {
    position: absolute;
    right: 9%;
    top: 7%;
}

.spin::before {
    animation: 1.5s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 2px #cfd0d100;
    border-bottom-color: #1c87c9;
    border-left-color: #1c87c9;
    border-right-color: #1c87c9;
    border-radius: 50%;
    content: "";
    height: 20px;
    width: 20px;
    position: absolute;
    right: 10%;
    top: 7%;
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;
}
.aligner {
    margin-left: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
}

.header {
    margin-bottom: 10px
}

.to-err {
    color: #db6e26
}

.sel-err {
    color: #2684db
}

.db-err {
    color: #7b26db
}
</style>