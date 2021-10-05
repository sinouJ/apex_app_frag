<template>
  <div class="button" :type="submit ? 'submit' : null">
      <p> {{txt}} </p>
  </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        txt: String,
        submit: Boolean
    }
}
</script>

<style scoped lang="scss">
    .button {
        background: linear-gradient(90deg, rgba(158,116,253,1) 0%, rgba(217,147,209,1) 100%);
        min-width: 120px;
        width: fit-content;
        padding: 10px 20px;
        border-radius: 20px;

        p {
            text-align: center;
        }
    }
</style>