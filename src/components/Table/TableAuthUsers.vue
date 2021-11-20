<template>
    <div class="table container">
        <header>
            <ul>
                <li>#</li>
                <li>Username</li>
            </ul>
        </header>
        <main>
            <div v-if="!loading && tableData && tableData.users.length > 0">
                <div v-for="user in tableData.users" :key="user.id" class="row">
                    <p> {{user.id}} </p>
                    <p> {{user.game_username}} </p>
                </div>
            </div>
            <div v-else>
                No data
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'TableUsers',
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
        }
        main {
            .row {
                display: flex;
                justify-content: space-around;
                border-bottom: 1px solid #636071;
                padding: 10px 0;

                p {
                    width: 15%;
                    &:not(:first-child) {
                        width: 42.5%;
                    }
                }
            }
        }
    }
</style>