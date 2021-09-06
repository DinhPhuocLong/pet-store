import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  NavBar: () => import('../..\\components\\NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c)),
  SideBar: () => import('../..\\components\\SideBar.vue' /* webpackChunkName: "components/side-bar" */).then(c => wrapFunctional(c.default || c)),
  CategoryShow: () => import('../..\\components\\Category\\Show.vue' /* webpackChunkName: "components/category-show" */).then(c => wrapFunctional(c.default || c)),
  UIcomponentsAlert: () => import('../..\\components\\UIcomponents\\Alert.vue' /* webpackChunkName: "components/u-icomponents-alert" */).then(c => wrapFunctional(c.default || c)),
  UIcomponentsModal: () => import('../..\\components\\UIcomponents\\Modal.vue' /* webpackChunkName: "components/u-icomponents-modal" */).then(c => wrapFunctional(c.default || c)),
  UIcomponentsSlideOver: () => import('../..\\components\\UIcomponents\\SlideOver.vue' /* webpackChunkName: "components/u-icomponents-slide-over" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
