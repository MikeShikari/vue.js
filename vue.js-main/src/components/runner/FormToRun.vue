<template>
    <div class="main-row">
        <RunOpts />
        <div class="col">
            <div class="inside-row">
                <div class="radial-form-container">
                    <h3 class="header">Субпроцессы</h3>
                    <radial_progress totalSteps="12" completedSteps="2" class="rad-marge" />

                </div>
                <ErrorCounter loading="ongoing" />
            </div>
            <Logger ref=Logger :logValue="this.biba" />
        </div>


        <div class="checks-form-container">
            <h3 class="header">Статусы тестов</h3>

            <div class="col-element">
                <p class="marge"><b>API</b> </p>
                <pbar value=40 maximum=200 title="4654351" status=ongoing />
                <pbar value=200 maximum=200 title="4623545" status=done />
                <pbar value=40 maximum=200 title="6764351" status=failed />
                <pbar value=40 maximum=200 title="87964351" status=ongoing />
            </div>
            <div class="col-element">
                <p class="marge"><b>Chrome</b></p>
                <pbar value=405 maximum=2000 title="4654351" status=ongoing />
                <pbar value=2000 maximum=2000 title="4623545" status=done />
                <pbar value=40 maximum=2000 title="6764351" status=failed />
                <pbar value=200 maximum=2000 title="87964351" status=done />
            </div>
            <div class="col-element">
                <p class="marge"><b>Firefox</b> </p>
                <pbar value=0 maximum=2000 title="4654351" status=failed />
                <pbar value=200 maximum=2000 title="4623545" status=ongoing />
                <pbar value=40 maximum=2000 title="6764351" status=failed />
                <pbar value=40 maximum=2000 title="87964351" status=ongoing />
            </div>


        </div>



    </div>
</template>

<script>
import radial_progress from "@/components/runner/progress.vue";
import pbar from '@/components/runner/pbar.vue'
import RunOpts from '@/components/runner/RunnerOptions.vue'
import ErrCounter from '@/components/runner/errorCounter.vue'
import { computed, defineComponent, ref, onMounted } from 'vue';
import ErrorCounter from '@/components/runner/errorCounter.vue';
import Logger from '@/components/runner/Logger.vue'
export default defineComponent({
    components: {
        radial_progress,
        pbar,
        RunOpts,
        ErrCounter,
        ErrorCounter,
        Logger
    },
    name: 'runform',
    data() {
        return {
            biba: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla sollicitudin ornare. Maecenas non augue non augue convallis sagittis id a nisl. In sapien massa, finibus quis purus id, ullamcorper vehicula diam. Etiam mi est, cursus a ex quis, pulvinar mollis metus. Donec porttitor tristique nulla vitae posuere. Vestibulum velit leo, facilisis nec quam vitae, tempor imperdiet magna. Praesent et tempor erat. Nulla facilisi. In ligula sapien, aliquam vel erat non, fringilla aliquam ipsum. Donec quis laoreet nisi, ac fringilla justo. Quisque eget sollicitudin tellus, vitae malesuada justo. Maecenas congue suscipit nibh quis sagittis. Nullam facilisis, orci in accumsan gravida, odio est fermentum mi, in venenatis est erat ac mauris. Donec at luctus sem, sed porttitor sem. Donec faucibus mauris nec nisi scelerisque, non consequat quam imperdiet.\
\
Aliquam eu quam nulla. Sed pharetra finibus felis mattis gravida. Aenean vestibulum tellus vel efficitur auctor. Vestibulum cursus, nulla in congue lobortis, diam augue fermentum massa, ut aliquam nisi ligula at eros. Ut justo orci, pretium id dictum mattis, fringilla sit amet mauris. Morbi vel erat bibendum, finibus ipsum tincidunt, condimentum nibh. Nam nec lectus dignissim, accumsan justo at, vestibulum augue. Aliquam metus nulla, aliquam et eros id, bibendum condimentum velit. Maecenas eget rhoncus dui. Aenean euismod nunc ligula, in euismod magna scelerisque vitae. Cras lacinia magna vel felis molestie, eget condimentum dolor gravida. \
\
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla sollicitudin ornare. Maecenas non augue non augue convallis sagittis id a nisl. In sapien massa, finibus quis purus id, ullamcorper vehicula diam. Etiam mi est, cursus a ex quis, pulvinar mollis metus. Donec porttitor tristique nulla vitae posuere. Vestibulum velit leo, facilisis nec quam vitae, tempor imperdiet magna. Praesent et tempor erat. Nulla facilisi. In ligula sapien, aliquam vel erat non, fringilla aliquam ipsum. Donec quis laoreet nisi, ac fringilla justo. Quisque eget sollicitudin tellus, vitae malesuada justo. Maecenas congue suscipit nibh quis sagittis. Nullam facilisis, orci in accumsan gravida, odio est fermentum mi, in venenatis est erat ac mauris. Donec at luctus sem, sed porttitor sem. Donec faucibus mauris nec nisi scelerisque, non consequat quam imperdiet.\
\
Aliquam eu quam nulla. Sed pharetra finibus felis mattis gravida. Aenean vestibulum tellus vel efficitur auctor. Vestibulum cursus, nulla in congue lobortis, diam augue fermentum massa, ut aliquam nisi ligula at eros. Ut justo orci, pretium id dictum mattis, fringilla sit amet mauris. Morbi vel erat bibendum, finibus ipsum tincidunt, condimentum nibh. Nam nec lectus dignissim, accumsan justo at, vestibulum augue. Aliquam metus nulla, aliquam et eros id, bibendum condimentum velit. Maecenas eget rhoncus dui. Aenean euismod nunc ligula, in euismod magna scelerisque vitae. Cras lacinia magna vel felis molestie, eget condimentum dolor gravida. \
\
Etiam tristique luctus ante non tincidunt. Morbi vitae tortor sit amet turpis egestas cursus. Cras hendrerit nisl lectus, ac tempor nunc sagittis et. Maecenas vel ultricies ante. Aenean vitae sapien at risus semper egestas non eget dolor. Proin et felis quis risus pellentesque accumsan nec ut sem. Nulla euismod dignissim dui eu scelerisque. Integer mi odio, fermentum cursus eros nec, convallis aliquet mauris. Nam nec justo ut justo tristique condimentum eu vel lectus."
        }
    }

})
</script>

<style scoped>
.main-row {
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    justify-content: stretch;
    max-width: 98%;

}

.checks-form-container {
    border: 1px solid #fcfdfd;
    background-color: #fcfdfd;
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    padding: auto;
    margin-top: 25px;
    margin-left: 15px;
    margin-right: 15px;
    justify-content: stretch;
    margin-bottom: 25px;
    position: relative;
    max-height: 100%;
    max-width: 30%;
    box-shadow: 0px 0px 15px -5px rgb(0 0 0 / 30%);
    flex: 1 1;
    ;
    transition: all 1s ease;
}

.radial-form-container {
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
    max-width: 70%;
    box-shadow: 0px 0px 15px -5px rgb(0 0 0 / 30%);
    flex: 1 1;
    ;
    transition: all 1s ease;
}

.row {
    flex: 1 1;
    display: flex;
    flex-direction: row;
}

.inside-row {
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    justify-content: stretch;
    max-width: 100%;
    height: 10%
}

.col {
    flex: 1 1;
    display: flex;
    flex-direction: column;
}

.col-element {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;
}

.pbar {
    float: right
}

.plbael {
    float: left
}

.rad-marge {
    margin-left: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    padding: 20px;
}

.header {
    margin: 20px;
}

.marge {
    margin-left: 20px;
    /* margin-top: 10px */
}

.icon-checks {
    font-size: 4em;
    margin: auto
}

.default-i {
    color: gray
}

.passed-i {
    color: rgb(0, 34, 128)
}

.failed-i {
    color: red
}



.form-input {
    border: 1px solid #cccccc;
    border-radius: 7px;
    padding-left: 10px;
    font-size: 18px;
    max-width: 100%;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
}


.form-aligner {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    margin-left: 10px;
    /* padding: px */
}

.span-aligner {
    display: block;
    /* padding: 20px */
}

.checkbox-aligner {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 5px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.checkbox-aligner input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkbox-aligner:hover input~.checkcust {
    transition: all 0.4s ease;
    border: 1px solid #cccccc;
    background-color: #e9e9e9;
}

.checkbox-aligner input:checked~.checkcust {
    transition: all 0.4s ease;
    border: 1px solid #cccccc;
    background-color: #62a7f5;
}

.rdb {
    border-radius: 90%;
}

.cbb {
    border-radius: 15%;
}

.checkcust {
    position: absolute;
    border: 1px solid #cccccc;
    height: 21px;
    width: 21px;
    top: 3px;
    left: 0;
    background-color: #f1f1f1;
}

.checkcust:after {
    content: "";
    position: absolute;
    display: none;
}

.checkbox-aligner input:checked~.checkcust:after {
    display: block;
}

.checkbox-aligner .checkcust:after {
    transition: all 0.4s ease;
    left: 6px;
    top: 3px;
    width: 5px;
    height: 8px;
    border: solid rgb(255, 255, 255);
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.form-block {
    margin: 15px;

}
</style>