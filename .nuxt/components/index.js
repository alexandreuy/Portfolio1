export { default as Carrousel } from '../../components/Carrousel.vue'
export { default as Content } from '../../components/Content.vue'
export { default as ContentAboutMe } from '../../components/ContentAboutMe.vue'
export { default as ContentSi } from '../../components/ContentSI.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as SideBar } from '../../components/SideBar.vue'
export { default as Skills } from '../../components/Skills.vue'

export const LazyCarrousel = import('../../components/Carrousel.vue' /* webpackChunkName: "components/Carrousel" */).then(c => c.default || c)
export const LazyContent = import('../../components/Content.vue' /* webpackChunkName: "components/Content" */).then(c => c.default || c)
export const LazyContentAboutMe = import('../../components/ContentAboutMe.vue' /* webpackChunkName: "components/ContentAboutMe" */).then(c => c.default || c)
export const LazyContentSi = import('../../components/ContentSI.vue' /* webpackChunkName: "components/ContentSI" */).then(c => c.default || c)
export const LazyNavbar = import('../../components/Navbar.vue' /* webpackChunkName: "components/Navbar" */).then(c => c.default || c)
export const LazySideBar = import('../../components/SideBar.vue' /* webpackChunkName: "components/SideBar" */).then(c => c.default || c)
export const LazySkills = import('../../components/Skills.vue' /* webpackChunkName: "components/Skills" */).then(c => c.default || c)
