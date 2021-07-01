<template>
    <div>
        <b-carousel v-model="slideID" @input="getID" id="carousel-fade" style="text-shadow: 1px 1px 2px #333;" fade indicators controls :interval="5000" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <b-carousel-slide class="carousel-inner" v-for="carousel in carouselInfo" :key="carousel.caption">
                <h2> {{ $t(carousel.caption) }} </h2>
                <template v-slot:img>
                        <img
                        class="d-block img-fluid w-100"
                        :src="carousel.src"
                        alt="image slot"
                        >
                </template>
                </b-carousel-slide>
            </b-carousel>
        </div>
</template>

<script>
import Content from '@/components/Content'

export default {
    components: { Content },
    data: () => ({
        slideID: 0,
        slide: 0,
        sliding: null,
        carouselInfo: [
            { caption: "Work Experience", src: "https://zupimages.net/up/20/40/n798.jpg" },
            { caption: "Education", src: "https://zupimages.net/up/20/42/o5bf.jpg" },
            { caption: "Key Skills", src: "https://zupimages.net/up/20/44/j450.jpg" },
        ]
    }),

    methods: {
        getID(caption) {
            this.slideID = caption
            this.$emit('sendid', { slideID: this.slideID })
        },
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    }

}
</script>

<style lang="css" scoped>
.carousel-inner
{
    max-height:500px;
}

h2 {
    font-size:1.8em;
    color:white;
}

</style>
