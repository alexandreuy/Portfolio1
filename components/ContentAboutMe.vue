<template>
    <div>
        <b-card style="font-size:13px; text-align:justify;">
            <h3 style="font-size:20px; font-weight:bold;"> {{ $t("title") }} </h3>
            <b-card-text> 
                <p> {{ $t("text") }} </p> 
            </b-card-text>
            
            <div class="text-center">
                <svg width="30" height="20">
                    <a href="mailto:?to=uy.alexandre@yahoo.com"> <image xlink:href="@/assets/email.svg" src="email.svg" width="20" height="20"/> </a>
                </svg>
                <svg width="30" height="20">
                    <a href="https://www.linkedin.com/in/alexandre-uy"> <image xlink:href="@/assets/linkedin.svg" src="www.linkedin.com/in/alexandre-uy" width="20" height="20"/> </a>
                </svg>
                <svg width="30" height="20">
                    <a href="https://github.com/alexandreuy"><image xlink:href="@/assets/github.svg" src="github.png" width="20" height="20"/></a>
                </svg>
                <svg width="30" height="20">
                    <a href="https://www.canva.com/design/DAEauZYpaj4/yCUxUkiszx5KtuVxdHlZ1Q/view?utm_content=DAEauZYpaj4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"><image xlink:href="@/assets/fichier.svg" width="20" height="20"/></a>
                </svg>
            </div>
        </b-card>
        <hr/>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
    </div>
</template>

<script>

export default {
    data: () => ({
        title : "Who am I ?",
        text: " Hi ! I'm Alexandre UY, I'm a student in Bachelor's degree in Web, Mobile and Business Intelligence "
        + " at CNAM and an apprentice as a Fullstack Web Developer at Jack Agency."
        + " I'm looking for my new apprenticeship as a Data Scientist"
        + " or as a Software Engineer.",

    }),


}

</script>

<style lang="css" scoped>

</style>