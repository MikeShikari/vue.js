<template>
    <div class="error-form-container">
        <h3 class="aligner">Run status</h3>
        <div class="aligner">
            <p><b>Timeout errors</b></p>
            <h2 class="to-err">10</h2>
        </div>
        <div class="aligner">
            <p><b>Selector errors</b></p>
            <h2 class="sel-err">10</h2>
        </div>
        <div class="aligner">
            <p><b>DB errors</b></p>
            <h2 class="db-err">10</h2>
        </div>

    </div>
</template>


<script>
import { computed, defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
    name: 'errCounter',
})

</script>


<style scoped>
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
    height: 45%;
    max-width: 20%;
    box-shadow: 0px 0px 15px -5px rgb(0 0 0 / 30%);
    flex: 1 1;
    ;
    transition: all 1s ease;
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