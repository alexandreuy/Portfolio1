export const state = () => ({
    WorkExperience: [
        {nomPoste: "Fullstack Web Developer", nomEntreprise: "JACK Agency", type:"Apprenticeship", description:"", periode:"September 2020 - Now"},
        {nomPoste: "Associate", nomEntreprise: "Time For The Planet", description:"", periode:"July 2020 - Now "},
        {nomPoste: "Chargé de développement outils Pilotage Métiers Junior", nomEntreprise: "AXA FRANCE", type:"Apprenticeship", description:"", periode:"September 2019 - August 2020"},
    ],
    
    Education: [
        {nomFormation: "Licence professionnelle Web, Mobile and Business Intelligence ", nomEcole: "CNAM", description:"", periode:"2020 - 2021"},
        {nomPoste: "Computer Science", nomEntreprise: "IUT DE MONTREUIL", description:"", periode:"2018 - 2020"},

    ]
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}