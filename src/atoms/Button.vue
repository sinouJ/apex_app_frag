<template>
  <div class="button" :class="disabled ? 'disable' : null" :type="submit ? 'submit' : null" @click="clicked">
      <p> {{txt}} </p>
  </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        txt: String,
        submit: Boolean,
        disabled: Boolean
    },
    methods: {
        clicked: function() {
            this.$emit('clicked')
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../sass/main';

    .button {
        background: linear-gradient(90deg, rgba(158,116,253,1) 0%, rgba(217,147,209,1) 100%);
        min-width: 120px;
        width: fit-content;
        padding: 10px 20px;
        border-radius: 20px;

        &.disable {
            background: $border_dark;
        }

        p {
            text-align: center;
        }
    }
</style>