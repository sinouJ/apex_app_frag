<template>
    <div class="table container">
        <header>
            <ul>
                <li>#</li>
                <li>Nom</li>
                <li>Région</li>
            </ul>
        </header>
        <main>
            <div v-if="data_departements.length > 0">
                <div v-for="departement in data_departements" :key="departement.id" class="row">
                    <p> {{departement.num_dep}} </p>
                    <p> {{departement.dep_name}} </p>
                    <p> {{departement.region_name}} </p>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: "Table",
    props: {
        data_departements: Array
    }
}
</script>

<style scoped lang="scss">
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