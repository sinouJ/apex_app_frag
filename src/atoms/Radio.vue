<template>
    <div class="radio">
        <div v-for="radio in inputArray" class="input" :key="radio.id">
            <label :class="radio.selected ? 'selected' : null" :for="radio.id" @click="selectLabel(radio)">{{radio.id}}</label>
            <input type="radio" :name="name" :id="radio.id" :value="radio.value">
        </div>
    </div>
</template>

<script>
export default {
    name:"Radio",
    props: {
        inputArray: Array,
        name: String
    },
    methods: {
        selectLabel: function(e) {
            this.inputArray.forEach(element => element.selected = false)
            e.selected = true
            this.$emit('select')
        }
    }
}
</script>

<style lang="scss" scoped>
    .radio {
        display: flex;
        align-items: center;
        justify-content: center;

        .input {
            input {
                position: absolute;
                left: -9999999999px;
            }

            &:not(:first-child) {
                margin-left: 10px;
            }

            label {
                color: rgba(158,116,253,1);
                font-weight: bold;
                position: relative;
                background-color: white;
                border-radius: 8px;
                padding: 10px 15px;
                display: block;

                &.selected {
                    background: linear-gradient(90deg, rgba(158,116,253,1) 0%, rgba(217,147,209,1) 100%);
                    color: white;
                }

                &:before {
                    content: '';
                    position: absolute;
                    inset: -2px;
                    background: linear-gradient(90deg, rgba(158,116,253,1) 0%, rgba(217,147,209,1) 100%);
                    z-index: -1;
                    padding: 10px 15px;
                    border-radius: 8px;
                }
            }
        }
    }
</style>