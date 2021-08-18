import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cefa2778 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404.vue" */))
const _b1a2bc44 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index.vue" */))
const _2aa0fc48 = () => interopDefault(import('..\\pages\\product\\brand.vue' /* webpackChunkName: "pages/product/brand.vue" */))
const _2d0a7cb2 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index.vue" */))
const _3077bf42 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug.vue" */))
const _17c95fc4 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart.vue" */))
const _f1438da8 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact.vue" */))
const _66fccea4 = () => interopDefault(import('..\\pages\\dashboard\\category\\index.vue' /* webpackChunkName: "pages/dashboard/category/index.vue" */))
const _e4b7aa0e = () => interopDefault(import('..\\pages\\dashboard\\login.vue' /* webpackChunkName: "pages/dashboard/login.vue" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "*",
    component: _cefa2778,
    name: "404"
  }, {
    path: "/",
    component: _b1a2bc44,
    name: "home-page"
  }, {
    path: "/thuong-hieu/:slug",
    component: _2aa0fc48,
    name: "shop-by-brand"
  }, {
    path: "/danh-muc/:slug",
    component: _2d0a7cb2,
    name: "shop-by-category"
  }, {
    path: "/san-pham/:slug",
    component: _3077bf42,
    name: "product-detail"
  }, {
    path: "/gio-hang",
    component: _17c95fc4,
    name: "cart"
  }, {
    path: "/lien-he",
    component: _f1438da8,
    name: "contact"
  }, {
    path: "/dashboard/category",
    component: _66fccea4,
    name: "dashboard-category"
  }, {
    path: "/login",
    component: _e4b7aa0e,
    name: "login"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
