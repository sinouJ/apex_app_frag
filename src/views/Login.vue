<template>
    <div class="login">
        <vue-notification-list position="top-left"></vue-notification-list>
        <img src="../assets/logo.png">
        <form @submit.prevent="validForm">
            <div class="checkUsername">
                <input-text 
                    id="checkUsername"
                    label="Username"
                    @update="updateConnexionUsername"
                />
                <input-password
                    id="pwd"
                    label="Password"
                    @update="updatePassword"
                />
            </div>
            <div class="buttonContainer">
                <Button @clicked="validForm" txt="Login"/>
            </div>
        </form>
    </div>
</template>

<script>
// Components
import InputPassword from '../atoms/InputPassword.vue'
import InputText from '../atoms/InputText.vue'
import Button from '../atoms/Button.vue'

// Cookies
import Cookies from 'js-cookie'

// Toasts
import { useNotificationStore } from '@dafcoe/vue-notification'
const { setNotification } = useNotificationStore()
import notificationStore from '../assets/notification.store'

export default {
    name: 'Login',
    components: {
        InputPassword,
        InputText,
        Button
    },
    data: function() {
        return {
            formData: {
                connexion_username: '',
                password: ''
            },
        }
    },
    methods: {
        updateConnexionUsername: function(e) {
            this.formData.connexion_username = e
        },
        updatePassword: function(e) {
            this.formData.password = e
        },
        validForm: async function() {
            const url = process.env.NODE_ENV == 'development' ? 'http://localhost:2222/api/user/login' : 'https://api-apex-frag.herokuapp.com/api/user/login'
            const req = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    password: this.formData.password,
                    connexion_username: this.formData.connexion_username
                })
            })
            
            const res = await req.json()

            console.log(process.env.NODE_ENV)

            if (res.status == 200) {
                Cookies.set('token', res.token)
                this.$router.push('/')
                return
            }
            else if (res.status == 403) {
                setNotification(notificationStore.invalidPassword)
                return
            }
            else if (res.status == 404) {
                setNotification(notificationStore.userNotFound)
                return
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .login {
        height: calc(100vh - 97px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;

        img {
            position: absolute;
            top: 30px;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 70%;
        }

        .buttonContainer {
            position: absolute;
            bottom: 40px;
            left: 0;
            right: 0;
            margin: 0 auto;
            display: flex;
            justify-content: center;

            .button {
                color: white;
                margin: 0 auto;
            }
        }
    }
</style>