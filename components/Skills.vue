<template>
    <div class="container">
        <el-col :gutter="12" v-for="item in items[2]" :key="item.nomCompetence">
            <el-row  :span="10" style="margin:9px;">
                <el-card shadow="always">
                <img :src="item.img" alt="Card Image" class="mb-2" img-right>
                   {{ item.nomCompetence }}
                </el-card>
            </el-row>
        </el-col>
    </div>
</template>

<script>
export default {
    name: "Skills",
    props: ['items', 'name']
    
}
</script>

<style lang="css" scoped>

img {
    max-width:2.5%;
}

</style>