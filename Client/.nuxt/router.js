import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c7d4ca5a = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404.vue" */))
const _10cfe8ad = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index.vue" */))
const _627f73ed = () => interopDefault(import('..\\pages\\product\\brand.vue' /* webpackChunkName: "pages/product/brand.vue" */))
const _614ab3b8 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index.vue" */))
const _73ca9cb2 = () => interopDefault(import('..\\pages\\product\\search.vue' /* webpackChunkName: "pages/product/search.vue" */))
const _5f941270 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug.vue" */))
const _f2e6f9d6 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart.vue" */))
const _8e08488a = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout.vue" */))
const _0dc9083b = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact.vue" */))
const _1dcfe430 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about.vue" */))
const _bea8c204 = () => interopDefault(import('..\\pages\\thanks.vue' /* webpackChunkName: "pages/thanks.vue" */))
const _4b10e878 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login.vue" */))
const _07fa72d0 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register.vue" */))
const _65df6350 = () => interopDefault(import('..\\pages\\forgot.vue' /* webpackChunkName: "pages/forgot.vue" */))
const _7dee6de5 = () => interopDefault(import('..\\pages\\resetPassword.vue' /* webpackChunkName: "pages/resetPassword.vue" */))
const _bc9b4ea4 = () => interopDefault(import('..\\pages\\verify.vue' /* webpackChunkName: "pages/verify.vue" */))
const _bc59f50e = () => interopDefault(import('..\\pages\\blog\\blog.vue' /* webpackChunkName: "pages/blog/blog.vue" */))
const _2f1c44c3 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug.vue" */))
const _0cb02642 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/profile.vue" */))
const _36f68f4c = () => interopDefault(import('..\\pages\\user\\userInfo.vue.vue' /* webpackChunkName: "" */))
const _5ad8ea74 = () => interopDefault(import('..\\pages\\user\\changePassword.vue' /* webpackChunkName: "" */))

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
    component: _c7d4ca5a,
    name: "404"
  }, {
    path: "/",
    component: _10cfe8ad,
    name: "home-page"
  }, {
    path: "/thuong-hieu/:slug",
    component: _627f73ed,
    name: "shop-by-brand"
  }, {
    path: "/danh-muc/:slug",
    component: _614ab3b8,
    name: "shop-by-category"
  }, {
    path: "/search",
    component: _73ca9cb2,
    name: "search-page"
  }, {
    path: "/san-pham/:slug",
    component: _5f941270,
    name: "product-detail"
  }, {
    path: "/gio-hang",
    component: _f2e6f9d6,
    name: "cart"
  }, {
    path: "/thanh-toan",
    component: _8e08488a,
    name: "checkout"
  }, {
    path: "/lien-he",
    component: _0dc9083b,
    name: "contact"
  }, {
    path: "/gioi-thieu",
    component: _1dcfe430,
    name: "about"
  }, {
    path: "/thanh-cong",
    component: _bea8c204,
    name: "thanks"
  }, {
    path: "/dang-nhap",
    component: _4b10e878,
    name: "login"
  }, {
    path: "/dang-ky",
    component: _07fa72d0,
    name: "register"
  }, {
    path: "/quen-mat-khau",
    component: _65df6350,
    name: "forgot-password"
  }, {
    path: "/reset-password",
    component: _7dee6de5,
    name: "reset-pasword"
  }, {
    path: "/verify-email",
    component: _bc9b4ea4,
    name: "verify"
  }, {
    path: "/loai-tin/:slug",
    component: _bc59f50e,
    name: "blog"
  }, {
    path: "/tin-tuc/:slug",
    component: _2f1c44c3,
    name: "blog-detail"
  }, {
    path: "/profile",
    component: _0cb02642,
    children: [{
      path: "",
      component: _36f68f4c,
      name: "user-info"
    }, {
      path: "change-password",
      component: _5ad8ea74,
      name: "change-password"
    }]
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
