<template>
    <div class="number">
        <div class="label">
            <label>{{ label }}</label>
        </div>
        <div class="inputWrapper">
            <ButtonIcon color="edit" @click="decrement"> - </ButtonIcon>
            <FormKit 
                type="number"
                :step="step"
                :min="min"
                :max="max"
                :name="name"
                v-model="dataValue"
            />
            <ButtonIcon color="edit" @click="increment"> + </ButtonIcon>
        </div>
    </div>
</template>

<script>
import ButtonIcon from '../buttons/ButtonIcon.vue'

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
        step: {
            type: Number,
            default: 1
        },
        min: {
            type: Number,
            default: null
        },
        max: {
            type: Number,
            default: null
        },
        initialValue: {
            type: Number,
            default: 0
        },
        name: {
            type: String,
            default: null
        }
    },
    methods: {
        increment(e) {
            e.preventDefault();
            if (this.max && this.dataValue >= this.max)
                return;
            this.dataValue += this.step;
            this.$emit('update', this.dataValue);
        },
        decrement(e) {
            e.preventDefault();
            if (this.min && this.dataValue <= this.min)
                return;
            this.dataValue -= this.step;
            this.$emit('update', this.dataValue);
        }
    },
    components: { ButtonIcon }
}
</script>

<style lang="scss">
    .number {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        width: 100%;

        .label {
            font-weight: bold;
            margin-right: auto;
            width: 50%;
            font-size: 14px;
        }

        .inputWrapper {
            display: flex;
            align-items: center;
            width: 50%;
        }

        .formkit-outer {
            margin-bottom: 0 !important;

            .formkit-inner {
                width: 42px;
                margin: 0 auto;

                .formkit-input {
                    font-weight: bold;
                    border: 0;
                    text-align: center;
                }
            }
        }

        button {
            border: none;
            background: none;
            font-size: 20px;
            color: rgba(158,116,253,1);
            font-weight: bold;
            cursor: pointer;
            padding: 0 10px;
        }
    }

</style>