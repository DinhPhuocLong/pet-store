import { wrapFunctional } from './utils'

export { default as NavBar } from '../..\\components\\NavBar.vue'
export { default as SideBar } from '../..\\components\\SideBar.vue'
export { default as CategoryShow } from '../..\\components\\Category\\Show.vue'
export { default as UIcomponentsAlert } from '../..\\components\\UIcomponents\\Alert.vue'
export { default as UIcomponentsAlertIcon } from '../..\\components\\UIcomponents\\alertIcon.js'
export { default as UIcomponentsModal } from '../..\\components\\UIcomponents\\Modal.vue'
export { default as UIcomponentsSlideOver } from '../..\\components\\UIcomponents\\SlideOver.vue'

export const LazyNavBar = import('../..\\components\\NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
export const LazySideBar = import('../..\\components\\SideBar.vue' /* webpackChunkName: "components/side-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyCategoryShow = import('../..\\components\\Category\\Show.vue' /* webpackChunkName: "components/category-show" */).then(c => wrapFunctional(c.default || c))
export const LazyUIcomponentsAlert = import('../..\\components\\UIcomponents\\Alert.vue' /* webpackChunkName: "components/u-icomponents-alert" */).then(c => wrapFunctional(c.default || c))
export const LazyUIcomponentsAlertIcon = import('../..\\components\\UIcomponents\\alertIcon.js' /* webpackChunkName: "components/u-icomponents-alert-icon" */).then(c => wrapFunctional(c.default || c))
export const LazyUIcomponentsModal = import('../..\\components\\UIcomponents\\Modal.vue' /* webpackChunkName: "components/u-icomponents-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyUIcomponentsSlideOver = import('../..\\components\\UIcomponents\\SlideOver.vue' /* webpackChunkName: "components/u-icomponents-slide-over" */).then(c => wrapFunctional(c.default || c))
