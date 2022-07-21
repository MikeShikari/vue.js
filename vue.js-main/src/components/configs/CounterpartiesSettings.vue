<template>

    <div class="main-form-container">
        <h3 class="header">Настройка контрагентов</h3>
        <form autocomplete="on" class="form-aligner">


            <div class="form-block">
                <span class="span-aligner">
                    Введите вылидный счет для контрагентов:
                </span><input class="form-input" type="text">
            </div>
            <div class="form-block">
                <span class="span-aligner">
                    Использовать несколько БИКов:
                </span>
                <radbtn :option="'Да'" :group="'multi-bic'" />
                <radbtn :option="'Нет'" :group="'multi-bic'" />

            </div>
            <div class="form-block last-el">
                <span class="span-aligner">
                    Введите БИК банка / банков для контрагентов:
                </span><input class="form-input" type="text">

            </div>


        </form>
    </div>
</template>

<script>
import radbtn from '@/components/runner/radbtn.vue'
import checkBox from '@/components/runner/checkBox.vue'
import { computed, defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
    components: {
        radbtn, checkBox
    },
    name: 'runneropts',
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

})

</script>

<style scoped>
.ic-done {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 35px;
    color: #44b89f
}

.ic-err {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 35px;
    color: #f47862
}
.last-el {
    margin-bottom: 30px !important
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



.row {
    flex: 1 1;
    display: flex;
    flex-direction: row;
}

.header {
    margin: 20px;
}



.main-form-container {
    border: 1px solid #fcfdfd;
    background-color: #fcfdfd;
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    margin-top: 7px;
        align-items: center;
    margin-left: 25px;
    margin-right: 15px;
    margin-bottom: 25px;
    position: relative;
    height: auto;
    max-width: 100%;
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


.form-block {
    margin: 15px;

}
</style>