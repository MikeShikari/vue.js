<template>
    <div class="progress-element">
        <p class="progress-label">{{ this.title }}</p>
        <div :class="boola ? 'progress-container' : (boola2 ? 'progress-container-done' : 'progress-container-failed')">
            <progress :max="this.maximum" :value="this.value">{{ this.percentage
            }}</progress>
        </div>

    </div>

</template>

<script>
import { computed, defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
    props: {
        value: {
            type: String
        },
        maximum: {
            type: String
        },
        title: {
            type: String
        },
        status: {
            type: String
        }
    },

    setup(props) {
        const value = ref(props.value)
        const maximum = ref(props.value)
        const percentage = ref(((props.value / props.maximum) * 100).toFixed(0) + '%')
        const per_str = ref(((props.value / props.maximum) * 100).toFixed(0))
        const title = ref(props.title)
        const boola = (props.status === 'ongoing')
        const boola1 = (props.status === 'failed')
        const boola2 = (props.status === 'done')
        return { value, maximum, percentage, title, per_str, boola, boola1, boola2 }
    },

})

</script>

<style>
progress {
    opacity: 0;
}

.progress-container {
    position: relative;
    display: inline-block;
    background: #eee;
    height: 20px;
    width: 91%;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 6px;
    overflow: hidden;
}

.progress-container-done {
    position: relative;
    display: inline-block;
    background: #eee;
    height: 20px;
    width: 91%;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 6px;
    overflow: hidden;
}

.progress-container-failed {
    position: relative;
    display: inline-block;
    background: #eee;
    height: 20px;
    width: 91%;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 6px;
    overflow: hidden;
}

.progress-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #62a7f5;
    width: 0;
    animation: progress-animation .7s ease-in forwards;
}

.progress-container-done::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: rgba(68, 184, 160, 72);
    width: 0;
    animation: progress-animation .7s ease-in forwards;
}

.progress-container-failed::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #f57862;
    width: 0;
    animation: progress-animation .7s ease-in forwards;
}

.progress-label {
    position: relative;
    margin-left: 20px;
    margin-right: 20px;
}

.progress-label::after {
    content: v-bind(per_str);
    position: absolute;
    top: 0;
    right: 0;
}

@keyframes progress-animation {
    to {
        width: v-bind(percentage);
    }
}

@property --num {
    syntax: '<integer>';
    initial-value: 0;
    inherits: false;
}

.progress-label::after {
    counter-reset: num var(--num);
    content: counter(num) '%';
    position: absolute;
    top: 0;
    right: 0;
    animation: progress-text 1s ease-in forwards;
}

@keyframes progress-text {
    to {
        --num: v-bind(per_str);
    }
}
</style>