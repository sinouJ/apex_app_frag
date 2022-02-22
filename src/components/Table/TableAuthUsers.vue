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
            <input-text-table
                id="authUsername"
                @update="updateUsername"
            />
            <button-icon class="create" @clicked="addAuthUser"> <add/> </button-icon>
        </header>
        <main>
            <div v-if="!loading && tableData && tableData.users.length > 0">
                <div v-for="user in tableData.users" :key="user.id" class="row">
                    <p> {{user.id}} </p>
                    <p> {{user.game_username}} </p>
                    <p> 
                        <button-icon class="delete" @clicked="deleteAuthUser(user.id)"> <trash/> </button-icon> 
                        <button-icon class="edit" @clicked="editAuthUser(user.id)"> <more/> </button-icon>
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
import InputTextTable from '../../atoms/forms/InputTextTable.vue'

// Icons
import Trash from 'vue-ionicons/dist/ios-trash.vue'
import More from 'vue-ionicons/dist/ios-more.vue'
import Add from 'vue-ionicons/dist/ios-add.vue'

// Toasts
import { useNotificationStore } from '@dafcoe/vue-notification'
const { setNotification } = useNotificationStore()
import notificationStore from '../../assets/notification.store'

// Utils
import {FetchData} from '@/utils/fetch'

export default {
    name: 'TableUsers',
    components: {
        ButtonIcon,
        InputTextTable,
        Trash,
        More,
        Add
    },
    data: function() {
        return {
            tableData: [],
            loading: true,
            username: String
        }
    },
    async mounted() {
        const url = process.env.NODE_ENV === 'development' ? 'http://localhost:2222/api/auth/all' : 'https://api-apex-frag.herokuapp.com/api/auth/all'

        const req = await fetch(url)
        const res = await req.json()
        this.tableData = res
        this.loading = false
        
        return
    },
    methods: {
        updateUsername: function(e) {
            this.username = e
        },
        addAuthUser: async function() {
            const body = {game_username: this.username}

            const res = await FetchData.post('auth/create', body)

            if (res.status === 409) {
                setNotification(notificationStore.userExists)
                return
            }
            if (res.status === 500) {
                setNotification(notificationStore.unableUser)
                return
            }
            
            this.tableData.users.push(res.user.user)
            return
        },
        deleteAuthUser: async function(id) {
            const elementIndex = this.tableData.users.findIndex( user => user.id === id)
            const body = {id}

            const req = await FetchData.delete('auth/delete', body)
            this.tableData.users.splice(elementIndex, 1)
            
            return req
        },
        editAuthUser: function(id) {
            console.log('edit', id)
        }
    }
}
</script>

<style lang="scss" scoped>
    .table {
        header {
            ul {
                font-weight: bold;

                li {
                    width: 15%;
                    &:not(:first-child) {
                        width: 42.5%;
                    }
                }
            }

            &.addUserForm {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                width: 100%;
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