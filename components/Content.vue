<template>
    <div class="container">
        <b-card title-variant="card_title" style="margin-bottom: 10px;" v-for="item in items[slideID]" :key="item.nomPoste" text-variant="dark">
            <img  v-if='item.image!==""' :src="item.image" alt="Card Image" class="mb-2" img-left>
            <div class="container-fluid">
                <h2> {{ $t(item.nomPoste) }}</h2>
                <p class="para"> {{ item.nomEntreprise }} </p>
                <p v-if='item.type!==""'> {{ $t(item.periode) }}  </p>
                <p v-else> {{ $t(item.periode)  }} </p>
                <b-card-text>
                    <a  href="item.description" v-if='item.description==="https://www.time-planet.com/fr"'> {{ $t(item.description) }} </a>
                    <p class="colorp" v-else> {{ $t(item.description) }} </p>
                </b-card-text>
            </div>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "Content",
    props: ['slideID', 'items']
}
</script>

<style scoped>
.card-card_title {
    font-size: 5px;
    font-weight: 500;
}

h2 {
    font-size: 1.30em;
    font-weight: bold;
}

p {
    font-size: 1em;
}

img {
    width: 10%;
    float: right;
}

</style>