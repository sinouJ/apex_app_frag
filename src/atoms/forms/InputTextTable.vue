<template>
    <div class="inputText">
        <input 
            type="text" 
            :id="id" 
            v-bind="$attrs" 
            :value="inputValue"
            :placeholder="placeholder"
            @input="inputUpdate($event)"
        >
    </div>
</template>

<script>
export default {
    name: 'InputTextTable',
    props: {
        id: String,
        placeholder: String,
        inputValue: String
    },
    methods: {
        inputUpdate(e) {
            this.$emit('update', e.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
    .inputText {
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
            width: 100%;
            height: 40px;
            padding: 5px 10px;
            border-radius: inherit;
        }
    }
</style>