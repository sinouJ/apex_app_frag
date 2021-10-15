<template>
    <div class="register">
        <img src="../assets/logo.png">
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
            />
        </div>
        <div class="nextButton" v-if="stepIndex < 3">
            <Button @clicked="previousStep" v-if="stepIndex > 0" txt="Previous"/>
            <Button @clicked="nextStep" :disabled="isDisabled" txt="Next"/>
        </div>
        <div class="nextButton" v-else>
            <Button @clicked="validForm" :disabled="isDisabled" txt="Submit"/>
        </div>
    </div>
</template>

<script>
import InputPassword from '../atoms/InputPassword.vue'
import InputText from '../atoms/InputText.vue'
import Button from '../atoms/Button.vue'
import Radio from '../atoms/Radio.vue'
import SubTitle from '../atoms/SubTitle.vue'

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
            console.log(this.formData.platform)
        },
        updateUsernameChoice: function() {
            const usernameChoice = this.formData.usernameChoice.find(element => element.selected == true)
            this.useGameUsername = usernameChoice.value
            this.useGameUsername == true ? this.formData.connexion_username = this.formData.game_username : this.formData.connexion_username = ''
            console.log(this.formData.connexion_username)
        },
        validForm: async function() {
            const url = process.env.NODE_ENV == 'development' ? 'http://localhost:2222/api/user/create' : 'https://api-apex-frag.herokuapp.com/api/user/create'
            const req = await fetch(url, {
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
            
            const res = await req.json()

            res.status == 200 ? console.log('okok') : null
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
                        return
                    }
                    if (!res.isAuthorized) return {'error': res.msg}
                }
                else {
                    console.log('enter a game username')
                }
            }
            if (this.stepIndex == 1) {
                this.stepIndex++
                return
            }
            if (this.stepIndex == 2) {
                if (this.useGameUsername == true) {
                    this.stepIndex = 4
                    return
                }
                else {
                    this.stepIndex++
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