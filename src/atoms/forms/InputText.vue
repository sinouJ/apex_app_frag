<template>
    <div class="inputText">
        <label :for="id">{{label}}</label>
        <div class="inputContainer">
            <input 
                type="text" 
                :id="id" 
                v-bind="$attrs" 
                :value="inputValue" 
                @input="inputUpdate($event)"
                autocomplete="off"
                readonly
                onfocus="this.removeAttribute('readonly')"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'InputText',
    model: {
        prop: 'inputValue',
        event: 'input'
    },
    props: {
        id: String,
        txt: String,
        label: String,
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

        label {
            margin-bottom: 5px;
        }

        .inputContainer {
            background: linear-gradient(90deg, rgba(158,116,253,1) 0%, rgba(217,147,209,1) 100%);
            padding: 2px;
            width: 80%;
            border-radius: 8px;
            margin-bottom: 20px;

            input {
                width: 100%;
                height: 40px;
                padding: 5px 10px;
                border-radius: inherit;
            }
        }
    }
</style>