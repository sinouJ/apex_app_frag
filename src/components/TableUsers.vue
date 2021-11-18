<template>
    <div class="table container">
        <header>
            <ul>
                <li>#</li>
                <li>Username</li>
            </ul>
        </header>
        <main>
            <div v-if="tableData && tableData.length > 0">
                <div v-for="user in tableData" :key="user.id" class="row">
                    <p> {{user.id}} </p>
                    <p> {{user.game_username}} </p>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'TableUsers',
    props: {
        tableData: Array
    }
}
</script>

<style>

</style>