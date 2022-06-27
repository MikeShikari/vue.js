<template>
    <div>
        <form @submit.prevent>
            <input v-bind:value="title" @input="title = $event.target.value" class="input" type="text"
                placeholder="Name">
            <input v-bind:value="body" @input="body = $event.target.value" class="input" type="text"
                placeholder="Description">
            <button class="btn" @click="createPost"> Create </button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;
}

.btn {
    align-self: flex-end;
    margin-top: 15px;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
}

.input {
    border: 1px solid teal;
    width: 100%;
    padding: 10px 15px;
    margin-top: 15px
}
</style>