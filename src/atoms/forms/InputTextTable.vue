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
    @import '@/sass/helpers/variables';

    .inputText {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        input {
            width: 100%;
            height: 40px;
            padding: 5px 10px;
            border-radius: inherit;
            border-bottom: 1px solid $secondary_dark;
        }
    }
</style>