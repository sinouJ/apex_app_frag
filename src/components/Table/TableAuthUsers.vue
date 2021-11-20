<template>
    <div class="table container">
        <header>
            <ul>
                <li>#</li>
                <li>Username</li>
                <li>Action</li>
            </ul>
        </header>
        <header class="addUserForm">
            <input-text/>
            <button-icon class="create"> <add/> </button-icon>
        </header>
        <main>
            <div v-if="!loading && tableData && tableData.users.length > 0">
                <div v-for="user in tableData.users" :key="user.id" class="row">
                    <p> {{user.id}} </p>
                    <p> {{user.game_username}} </p>
                    <p> 
                        <button-icon class="delete"> <trash/> </button-icon> 
                        <button-icon class="edit"> <more/> </button-icon>
                    </p>
                </div>
            </div>
            <div v-else>
                No data
            </div>
        </main>
    </div>
</template>

<script>
// Components
import ButtonIcon from '../../atoms/buttons/ButtonIcon.vue'
import InputText from '../../atoms/forms/InputText.vue'

// Icons
import Trash from 'vue-ionicons/dist/ios-trash.vue'
import More from 'vue-ionicons/dist/ios-more.vue'
import Add from 'vue-ionicons/dist/ios-add.vue'

export default {
    name: 'TableUsers',
    components: {
        ButtonIcon,
        InputText,
        Trash,
        More,
        Add
    },
    data: function() {
        return {
            tableData: [],
            loading: true
        }
    },
    async mounted() {
        const url = process.env.NODE_ENV === 'development' ? 'http://localhost:2222/api/auth/all' : 'https://api-apex-frag.herokuapp.com/api/auth/all'

        const req = await fetch(url)
        const res = await req.json()
        this.tableData = res
        this.loading = false
        
        return
    }
}
</script>

<style lang="scss" scoped>
    .table {
        header {
            ul {
                li {
                    width: 15%;
                    &:not(:first-child) {
                        width: 42.5%;
                    }
                }
            }

            &.addUserForm {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        main {
            .row {
                display: flex;
                justify-content: space-around;
                border-bottom: 1px solid #636071;
                padding: 10px 0;

                p {
                    display: flex;
                    align-items: center;
                    width: 15%;
                    &:not(:first-child) {
                        width: 42.5%;
                    }

                    .button {
                        &:not(:first-child) {
                            margin-left: 5px;
                        }
                    }
                }
            }
        }
        .ion {
            fill: white;
            font-size: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>