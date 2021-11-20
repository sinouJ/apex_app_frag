<template>
    <div class="button" :class="color" @click="clicked">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'ButtonIcon',
    props: {
        color: String
    },
    methods: {
        clicked: function() {
            this.$emit('clicked')
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../../sass/main';

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        padding: 5px;
        border-radius: 6px;
    }

    .edit {
        background-color: $lightblue;
    }

    .delete {
        background-color: $falls;
    }

    .create {
        background-color: $green;
    }
</style>