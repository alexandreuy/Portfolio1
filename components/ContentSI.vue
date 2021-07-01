<template>
    <div>
        <Skills :items="items" />
        
    </div>
</template>

<script>
import Skills from '@/components/Skills'

    export default {
        name:"ContentSI",
        props: ['items']
    }
</script>

<style lang="scss" scoped>

</style>