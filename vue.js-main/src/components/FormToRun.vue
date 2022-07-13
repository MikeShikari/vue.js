<template>
    <div>
        <div class="main-form-container">
            <form autocomplete="on" class="form-aligner">
                <div class="form-block">
                    <span class="span-aligner">
                        hehehehe
                    </span>
                    <label class="checkbox-aligner"><input type="checkbox"> Chrome</label>
                    <label class="checkbox-aligner"><input type="checkbox"> Firefox</label>
                    <label class="checkbox-aligner"><input type="checkbox"> API</label>
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
                    <label class="checkbox-aligner"><input type="radio"> chromus</label>
                    <label class="checkbox-aligner"><input type="radio"> chromus1</label>
                    <label class="checkbox-aligner"><input type="radio"> chromus2</label>
                    <label class="checkbox-aligner"><input type="radio"> chromus3</label>
                </div>
                <div class="form-block">
                    <span class="span-aligner">
                        hehehehe
                    </span><input class="form-input" type="text">
                </div>
                <div class="form-block">
                    <span class="span-aligner">
                        hehehehe
                    </span><input class="form-input" type="text">
                </div>

            </form>
        </div>
        <div></div>
        <div></div>

    </div>
</template>

<script>
import { computed, defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
    name: 'runform'

})
</script>

<style>
.main-form-container {
    border: 1px solid #fcfdfd;
    background-color: #fcfdfd;
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    margin: 25px;
    position: relative;
    height: auto;
    max-width: 30%;
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
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
}


.form-aligner {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    padding: 25px
}

.span-aligner {
    display: block;
    /* padding: 20px */
}

.checkbox-aligner {
    display: block;
    margin-left: 20px
        /* padding: 20px */
}

.form-block {
    margin: 15px;

}
</style>