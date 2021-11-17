<template>
    <div class="register">
        <vue-notification-list position="top-left"></vue-notification-list>
        <img src="../../assets/logo.png">
        <div class="checkUsername" :class="stepIndex == 0 ? 'active' : null">
            <input-text 
                id="checkUsername"
                label="Enter your Apex username"
                @update="updateGameUsername"
            />
        </div>
        <div class="choosePlatform" :class="stepIndex == 1 ? 'active' : null">
            <sub-title title="Select your platform"/>
            <Radio 
                :inputArray="formData.platformArray"
                @select="updatePlatform"
            />
        </div>
        <div class="choseConnexionUsername" :class="stepIndex == 2 ? 'active' : null">
            <sub-title title="Do you want to login with your Apex username ?"/>
            <Radio 
                :inputArray="formData.usernameChoice"
                @select="updateUsernameChoice"
            />
        </div>
        <div class="final" :class="stepIndex == 3 ? 'active' : null">
            <input-text
                id="username"
                label="Username"
            />
            <input-password
                id="pwd"
                label="Enter a password"
            />
        </div>
        <div class="final" :class="stepIndex == 4 ? 'active' : null">
            <input-password
                id="pwd"
                label="Enter a password"
                @update="updatePassword"
            />
        </div>
        <div class="nextButton" v-if="stepIndex < 3">
            <Button @clicked="previousStep" v-if="stepIndex > 0" txt="Previous"/>
            <Button @clicked="nextStep" :disabled="isDisabled" txt="Next"/>
        </div>
        <div class="nextButton" v-else>
            <Button @clicked="previousStep" txt="Previous"/>
            <Button @clicked="validForm" :disabled="isDisabled" txt="Submit"/>
        </div>
    </div>
</template>

<script>
// Components
import InputPassword from '../../atoms/InputPassword.vue'
import InputText from '../../atoms/InputText.vue'
import Button from '../../atoms/Button.vue'
import Radio from '../../atoms/Radio.vue'
import SubTitle from '../../atoms/SubTitle.vue'

// Cookies
import Cookies from 'js-cookie'

// Toasts
import { useNotificationStore } from '@dafcoe/vue-notification'
const { setNotification } = useNotificationStore()
import notificationStore from '../../assets/notification.store'

export default {
    name: 'Register',
    components: {
        InputPassword,
        InputText,
        Button,
        Radio,
        SubTitle
    },
    data: function() {
        return {
            formData: {
                platformArray: [
                    {
                        id: 'PSN',
                        value: '2',
                        selected: false
                    },
                    {
                        id: 'XBL',
                        value: '1',
                        selected: false
                    },
                    {
                        id: 'PC',
                        value: '5',
                        selected: false
                    },
                ],
                usernameChoice: [
                    {
                        id: 'Yes',
                        value: true,
                        selected: false
                    },
                    {
                        id: 'No',
                        value: false,
                        selected: false
                    }
                ],
                game_username: '',
                platform: '',
                connexion_username: '',
                password: ''
            },
            useGameUsername: false,
            stepIndex: 0,
            isDisabled: true
        }
    },
    methods: {
        updateGameUsername: function(e) {
            this.formData.game_username = e
            this.formData.game_username.length > 0 ? this.isDisabled = false : this.isDisabled = true
        },
        updatePlatform: function() {
            const selectedPlatform = this.formData.platformArray.find(element => element.selected == true)
            this.formData.platform = selectedPlatform.value
            this.formData.platform.length > 0 ? this.isDisabled = false : this.isDisabled = true
        },
        updateUsernameChoice: function() {
            const usernameChoice = this.formData.usernameChoice.find(element => element.selected == true)
            this.useGameUsername = usernameChoice.value
            this.useGameUsername == true ? this.formData.connexion_username = this.formData.game_username : this.formData.connexion_username = ''
            usernameChoice ? this.isDisabled = false : this.isDisabled = true
        },
        updatePassword: function(e) {
            this.formData.password = e
            this.formData.password.length > 0 ? this.isDisabled = false : this.isDisabled = true
        },
        validForm: async function() {
            const url_register = process.env.NODE_ENV == 'development' ? 'http://localhost:2222/api/user/create' : 'https://api-apex-frag.herokuapp.com/api/user/create'
            const req_register = await fetch(url_register, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'game_username': this.formData.game_username,
                    'connexion_username': this.formData.connexion_username,
                    'platform': this.formData.platform,
                    'password': this.formData.password
                })
            })
            
            const res_register = await req_register.json()

            if (res_register.status == 201) {
                const url_login = process.env.NODE_ENV == 'development' ? 'http://localhost:2222/api/user/login' : 'https://api-apex-frag.herokuapp.com/api/user/login'
                const req_login = await fetch (url_login, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        password: this.formData.password,
                        connexion_username: this.formData.connexion_username
                    })
                })
                const res_login = await req_login.json()

                if (res_login.status == 200) {
                    Cookies.set('token', res_login.token)
                    this.$router.push('/')
                }
                else if (res_login.status == 403) {
                    setNotification(notificationStore.invalidPassword)
                    return
                }
                else if (res_login.status == 404) {
                    console.log('User not found')
                    return
                }
            }
            else if (res_register.status == 400) {
                console.log('User already registered')
                return
            }
            else if (res_register.status == 403) {
                console.log('You are not able to access this area')
                return
            }
        },
        nextStep: async function () {
            if (this.stepIndex == 0) {
                if (this.isDisabled == false) {
                    const url = process.env.NODE_ENV == 'development' ? 'http://localhost:2222/api/user/check' : 'https://api-apex-frag.herokuapp.com/api/user/check'
                    const req = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'game_username': this.formData.game_username
                        }
                    })
                    const res = await req.json()

                    if (res.isAuthorized) {
                        this.stepIndex++
                        this.isDisabled = true
                        return
                    }
                    if (res.isAuthorized == false) {
                        setNotification(notificationStore.forbiddenUser)
                    }
                }
                else {
                    console.log('enter a game username')
                }
            }
            if (this.stepIndex == 1) {
                this.stepIndex++
                this.isDisabled = true
                return
            }
            if (this.stepIndex == 2) {
                if (this.useGameUsername == true) {
                    this.stepIndex = 4
                    this.isDisabled = true
                    return
                }
                else {
                    this.stepIndex++
                    this.isDisabled = true
                    return
                }
            }
        },
        previousStep: function () {
            if(this.stepIndex == 4) {
                this.stepIndex = 2
            }
            else {
                this.stepIndex--
            }
        },
    },
}
</script>

<style lang="scss" scoped>
    .register {
        height: calc(100vh - 97px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;

        > div {
            &:not(.nextButton) {
                &.active {
                    display: block;
                    visibility: visible;
                }
                display: none;
                visibility: hidden;
            }
        }

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

        .nextButton {
            position: absolute;
            bottom: 40px;
            left: 0;
            right: 0;
            margin: 0 auto;
            display: flex;
            justify-content: center;
        }
    }
</style>