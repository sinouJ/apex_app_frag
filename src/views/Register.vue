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
            <Radio 
                :inputArray="formData.platformArray"
                @clicked="updatePlatform"
            />
        </div>
        <div class="choseConnexionUsername" :class="stepIndex == 2 ? 'active' : null">
            <Radio 
                :inputArray="formData.platformArray"
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
        <div class="nextButton">
            <Button @clicked="previousStep" v-if="stepIndex > 0" txt="Previous"/>
            <Button @clicked="nextStep" :disabled="isDisabled" txt="Next"/>
        </div>
    </div>
</template>

<script>
import InputPassword from '../atoms/InputPassword.vue'
import InputText from '../atoms/InputText.vue'
import Button from '../atoms/Button.vue'
import Radio from '../atoms/Radio.vue'

export default {
    name: 'Register',
    components: {
        InputPassword,
        InputText,
        Button,
        Radio
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
                game_username: '',
                platform: ''
            },
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

                    if (res.isAuthorized) this.stepIndex++
                    if (!res.isAuthorized) return {'error': res.msg}
                }
                else {
                    console.log('enter a game username')
                }
            }
            if (this.stepIndex == 1) {
                if (this.isDisabled == false) {
                    this.stepIndex++
                }
                else {
                    console.log('enter a game username')
                }
            }
        },
        previousStep: function () {
            this.stepIndex--
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