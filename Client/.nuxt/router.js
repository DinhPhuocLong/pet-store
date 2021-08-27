import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3d6d7c80 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404.vue" */))
const _5094ef4c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index.vue" */))
const _401e26e0 = () => interopDefault(import('..\\pages\\product\\brand.vue' /* webpackChunkName: "pages/product/brand.vue" */))
const _3ee966ab = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index.vue" */))
const _3d32c563 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug.vue" */))
const _30648c70 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart.vue" */))
const _d6e6fe24 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout.vue" */))
const _9c751eb0 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact.vue" */))
const _9004a4d6 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about.vue" */))
const _930c161e = () => interopDefault(import('..\\pages\\thanks.vue' /* webpackChunkName: "pages/thanks.vue" */))
const _bd45a91e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login.vue" */))
const _50d9286a = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register.vue" */))
const _3a42b76a = () => interopDefault(import('..\\pages\\forgot.vue' /* webpackChunkName: "pages/forgot.vue" */))
const _90fea2be = () => interopDefault(import('..\\pages\\verify.vue' /* webpackChunkName: "pages/verify.vue" */))

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
    component: _3d6d7c80,
    name: "404"
  }, {
    path: "/",
    component: _5094ef4c,
    name: "home-page"
  }, {
    path: "/thuong-hieu/:slug",
    component: _401e26e0,
    name: "shop-by-brand"
  }, {
    path: "/danh-muc/:slug",
    component: _3ee966ab,
    name: "shop-by-category"
  }, {
    path: "/san-pham/:slug",
    component: _3d32c563,
    name: "product-detail"
  }, {
    path: "/gio-hang",
    component: _30648c70,
    name: "cart"
  }, {
    path: "/thanh-toan",
    component: _d6e6fe24,
    name: "checkout"
  }, {
    path: "/lien-he",
    component: _9c751eb0,
    name: "contact"
  }, {
    path: "/gioi-thieu",
    component: _9004a4d6,
    name: "about"
  }, {
    path: "/thanh-cong",
    component: _930c161e,
    name: "thanks"
  }, {
    path: "/dang-nhap",
    component: _bd45a91e,
    name: "login"
  }, {
    path: "/dang-ky",
    component: _50d9286a,
    name: "register"
  }, {
    path: "/quen-mat-khau",
    component: _3a42b76a,
    name: "forgot-password"
  }, {
    path: "/verify",
    component: _90fea2be,
    name: "verify"
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
