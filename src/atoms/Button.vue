<template>
  <div class="button">
      <p> {{txt}} </p>
  </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        txt: String
    }
}
</script>

<style scoped lang="scss">
    .button {
        background: linear-gradient(90deg, rgba(158,116,253,1) 0%, rgba(217,147,209,1) 100%);
        width: fit-content;
        padding: 10px 20px;
        border-radius: 20px;

        p {
            text-align: center;
        }
    }
</style>