<template>
    <div>
        <Carrousel @sendid="setSlideID" />
        <br/>
        <Content v-if="slideID === 0|| slideID == 1" :items="section" :slideID="slideID"/>
        <ContentSI v-if="slideID === 2" :items="section" />

        <br />
    </div>
</template>

<script>
import Carrousel from '@/components/Carrousel'
import Content from '@/components/Content'
import ContentSI from '@/components/ContentSI'


export default {
    components: { Carrousel, Content, ContentSI },
    data: () => ({
        slideID: 0,
        section: [
            [
                { nomPoste: "Full-stack Web Developer", nomEntreprise: "JACK Agency", type: "Apprenticeship", description: "", periode: "September 2020 - September 2021", image:"https://zupimages.net/up/20/42/anld.png" },
                { nomPoste: "Shareholders", nomEntreprise: "Time For The Planet", type:"", description: "https://www.time-planet.com/fr", periode: "July 2020 - Now", image:"https://zupimages.net/up/20/42/4kky.png" },
                { nomPoste: "VBA Developer", nomEntreprise: "AXA FRANCE", type: "Apprenticeship", description: "Programming Access and Excel tools in VBA as part of a project", periode: "September 2019 - August 2020", image:"https://zupimages.net/up/20/42/45qe.png" }
            ],
            [
                { nomPoste: "Engineer's Degree in Computer Science", nomEntreprise: "CY TECH (EISTI)", periode: "2021 - 2024", image:"https://zupimages.net/up/21/15/fhhq.png", },
                { nomPoste: "Bachelor’s Degree in Web, Mobile and Business Intelligence", nomEntreprise: "CNAM",description: "Analysis and Design Web, Mobile and Business Intelligence Applications", periode: "2020 - 2021", image:"https://zupimages.net/up/20/42/iq8l.png" },
                { nomPoste: "Associate Degree in Computer Science", nomEntreprise: "IUT DE MONTREUIL", description: "2019 - 2020 : Year performed in apprenticeship", periode: "2018 - 2020",   image:"https://zupimages.net/up/20/42/3ehw.png" },
            ],
            [
                {nomCompetence: "Java", img:"https://zupimages.net/up/21/15/hrnc.png"},
                {nomCompetence: "C", img:"https://zupimages.net/up/21/15/zom9.png"},
                {nomCompetence: "Python", img:"https://zupimages.net/up/21/15/ob6t.png"},
                {nomCompetence: "HTML", img:"https://zupimages.net/up/20/44/6ype.png"},
                {nomCompetence: "CSS", img:"https://zupimages.net/up/20/44/lecy.png"},
                {nomCompetence: "MySQL", img:"https://zupimages.net/up/20/44/pdpx.png"},
                {nomCompetence: "PostgreSQL", img:"https://zupimages.net/up/21/15/swku.png"},
                {nomCompetence: "OracleSQLDeveloper", img:"https://zupimages.net/up/21/15/7jht.png"},
                {nomCompetence: "Firebase", img:"https://zupimages.net/up/21/15/u5u7.png"},
                {nomCompetence: "JavaScript", img:"https://zupimages.net/up/20/44/ly7k.png"}, 
                {nomCompetence: "VueJS", img:"https://zupimages.net/up/20/44/xb27.png"},
                {nomCompetence: "NuxtJS", img:"https://zupimages.net/up/20/44/883i.png"},
                {nomCompetence : "NodeJS", img:"https://zupimages.net/up/20/44/b2tc.png"},
                {nomCompetence: "PHP", img:"https://zupimages.net/up/20/30/tw67.png"},
                
                
                
            ]
        ]
    }),
    methods: {
        setSlideID(payload) {
            this.slideID = payload.slideID
            
        }
    }
}
</script>

<style lang="css" scoped>

</style>


