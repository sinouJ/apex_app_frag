<template>
    <div class="text">
        <div class="inputWrapper">
            <FormKit 
                type="text"
                :name="name"
                :label="label"
                v-model="dataValue"
                :placeholder="placeholder"
                autocomplete="off"
                readonly
                onfocus="this.removeAttribute('readonly')"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "Number",
    data() {
        return {
            dataValue: this.initialValue
        };
    },
    props: {
        label: {
            type: String,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
    },
}
</script>

<style lang="scss">
    @import '../../sass/helpers/variables';

    .text {
        margin-bottom: 20px;
        width: 100%;

        input {
            box-sizing: border-box;
            transition: all 0.3s ease;
            padding: 20px !important;
            border: 2px dashed $lightgray !important;
            outline: none !important;

            &:focus {
                border: 2px solid $green !important;
            }
        }
    }

</style>