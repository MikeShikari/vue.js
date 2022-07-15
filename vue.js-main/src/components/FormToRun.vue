<template>
    <div class="chart-row">
        <div class="main-form-container">
            <h3 class="header">Test options</h3>
            <form autocomplete="on" class="form-aligner">
                <div class="form-block">
                    <span class="span-aligner">
                        hehehehe
                    </span>
                    <label class="checkbox-aligner"><input ref="myInput" checked="checked" id="chrome" value="chrome"
                            v-model="checked" type="checkbox"><span class="checkcust cbb"></span>
                        Chrome</label>
                    <label class="checkbox-aligner"><input type="checkbox" id="firefox" value="firefox"
                            v-model="checked"><span class="checkcust cbb"></span>Firefox
                    </label>
                    <label class="checkbox-aligner"><input type="checkbox" id="api" value="api" v-model="checked"><span
                            class="checkcust cbb"></span>API </label>
                </div>
                <div class="form-block">
                    <span class="span-aligner">
                        hehehehe
                    </span><input class="form-input" type="text">
                </div>
                <div class="form-block">
                    <span class="span-aligner">
                        hehehehe
                    </span>
                    <label class="checkbox-aligner"><input name="radbtn" type="radio"><span
                            class="checkcust rdb"></span> chromus</label>
                    <label class="checkbox-aligner"><input name="radbtn" type="radio"><span
                            class="checkcust rdb"></span> chromus1</label>

                </div>
                <div class="form-block">
                    <span class="span-aligner">
                        hehehehe
                    </span>
                    <label class="checkbox-aligner"><input name="radbtn" type="radio"><span
                            class="checkcust rdb"></span> chromus2</label>
                    <label class="checkbox-aligner"><input name="radbtn" type="radio"><span
                            class="checkcust rdb"></span> chromus3</label>
                </div>
                <div class="form-block">
                    <span class="span-aligner">
                        hehehehe
                    </span>
                    <label class="checkbox-aligner"><input ref="myInput" checked="checked" id="chrome" value="chrome"
                            v-model="checked" type="checkbox"><span class="checkcust cbb"></span>
                        Chrome</label>
                    <label class="checkbox-aligner"><input type="checkbox" id="firefox" value="firefox"
                            v-model="checked"><span class="checkcust cbb"></span>Firefox
                    </label>
                </div>
                <div class="form-block">
                    <span class="span-aligner">
                        hehehehe
                    </span>
                    <label class="checkbox-aligner"><input name="radbtn" type="radio"><span
                            class="checkcust rdb"></span> chromus2</label>
                    <label class="checkbox-aligner"><input name="radbtn" type="radio"><span
                            class="checkcust rdb"></span> chromus3</label>
                </div>

                <div class="form-block">
                    <span class="span-aligner">
                        hehehehe
                    </span><input class="form-input" type="text">
                </div>
                <button @click="checkboxCheck">Запуск</button>
                <button @click="checkboxCheck">Стоп</button>
            </form>
        </div>
        <div class="checks-form-container">
            <h3 class="header">Test status</h3>
            <div class="row">
            </div>
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
        <div class="checks-form-container">
            <h3 class="header">Subprocesses</h3>
            <radial_progress totalSteps="12" completedSteps="2" class="rad-marge" />

        </div>

    </div>
</template>

<script>
import radial_progress from "@/components/progress.vue";
import pbar from '@/components/pbar.vue'
import { computed, defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
    components: {
        radial_progress, pbar
    },
    name: 'runform'

})
</script>

<style scoped>
.checks-form-container {
    border: 1px solid #fcfdfd;
    background-color: #fcfdfd;
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    padding: auto;
    margin: 25px;
    position: relative;
    height: 40%;
    max-width: 30%;
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
                                    
                                    .main-form-container {
                                        border: 1px solid #fcfdfd;
                                        background-color: #fcfdfd;
                                        display: flex;
                                        flex-direction: column;
                                        border-radius: 14px;
                                        margin: 25px;
                                        position: relative;
    height: auto;
    max-width: 25%;
    box-shadow: 0px 0px 15px -5px rgb(0 0 0 / 30%);
    flex: 1 1 0px;
    ;
    transition: all 1s ease;
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