<template>
    <div v-if="this.completedSteps < this.totalSteps">
        <radial-progress-bar :diameter="300" :completed-steps="completedSteps" :total-steps="totalSteps"
            :stop-color="'rgb(0, 34, 128)'" :start-color="'#62a7f5'" :animate-speed="300" class="auto-marge"
            :inner-stroke-color="'#e9e9e9'">
            Завершено субпроцессов: <br>
            <b>{{ completedSteps }}/{{ totalSteps }}</b>
        </radial-progress-bar>
    </div>
    <div v-else-if="this.completedSteps === this.totalSteps">
        <radial-progress-bar :diameter="300" :completed-steps="completedSteps" :total-steps="totalSteps"
            :stop-color="'rgb(0, 34, 128)'" :start-color="'#62a7f5'" :animate-speed="300" class="auto-marge">
            DONE
        </radial-progress-bar>
    </div>
</template>

<script>
import RadialProgressBar from "vue3-radial-progress";
import { ref, defineComponent } from "vue";
export default {
    components: {
        RadialProgressBar
    },
    props: {
        completedSteps: {
            type: String
        },
        totalSteps: {
            type: String
        }
    },
    setup(props) {
        const completedSteps = ref(parseInt(props.completedSteps));
        const totalSteps = ref(parseInt(props.totalSteps));

        return {
            completedSteps,
            totalSteps
        }
    }
};
</script>

<style>
.font-radial {
    font-size: small;
}

.auto-marge {
    margin: auto;
    text-align: center;

}
</style>