<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <div class="lang" v-if='userLang !== "fr"' @click="changeLanguage('fr')">
            <nuxt-link :to="switchLocalePath('fr')">
                <country-flag country='fr' size='small' />
            </nuxt-link>
        </div>
        <div class="lang" v-if="userLang !== 'en'" @click="changeLanguage('en')">
            <nuxt-link :to="switchLocalePath('en')">
                <country-flag country='gb' size='small' />
            </nuxt-link>
        </div>
    
        <b-navbar-nav class="ml-auto">
            <SideBar />
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
import SideBar from "@/components/SideBar";

export default {
    components: { SideBar },
    data() {
        return {
            userLang: 'en'
        }
    },
    methods: {
        changeLanguage: function(userLang) {
            this.userLang = userLang
 //           this.$translate.setLang(userLang)
        }
    },
    beforeMount() {
        // initialiation de la langue du navigateur 
        let browserLang = window.navigator.language
        if (browserLang != 'fr' && browserLang != 'en') {
            browserLang = 'fr'
        }
        this.changeLanguage(browserLang)
    }
};
</script>
        
<style lang="css">
.lang {

    max-width: 40px;
    max-height:40px;
}
</style>