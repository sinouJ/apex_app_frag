<template>
    <div class="register">
        <img src="../assets/logo.png">
        <input-text
            id="username"
            label="Username"
        />
        <input-password
            id="pwd"
            label="Enter a password"
        />
        <Button txt="Sign up"/>
    </div>
</template>

<script>
import InputPassword from '../atoms/InputPassword.vue'
import InputText from '../atoms/InputText.vue'
import Button from '../atoms/Button.vue'

export default {
    name: 'Register',
    components: {
        InputPassword,
        InputText,
        Button
    }
}
</script>

<style lang="scss" scoped>
    .register {
        height: calc(100vh - 97px);
        display: flex;
        flex-direction: column;
        justify-content: center;

        img {
            position: absolute;
            top: 30px;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 70%;
        }

        .button {
            color: white;
            margin: 0 auto;
        }
    }
</style>