<template>
    <div class="error">
        <img src="../../assets/errors/blood.png">
        <Title title="404"/>
        <sub-title title="Page not found"/>
        <Button txt="Go back home" @clicked="goHome"/>
    </div>
</template>

<script>
// Components
import Button from '../../atoms/buttons/Button.vue'
import SubTitle from '../../atoms/SubTitle.vue'
import Title from '../../atoms/Title.vue'

export default {
    components: { SubTitle, Title, Button },
    name: "Page404",
    methods: {
        goHome: function() {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss">
    .error {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
            margin-bottom: 0;
        }

        h2 {
            margin-bottom: 30px;
        }
    }
</style>