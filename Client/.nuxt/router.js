import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cefa2778 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404.vue" */))
const _b1a2bc44 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index.vue" */))
const _2aa0fc48 = () => interopDefault(import('..\\pages\\product\\brand.vue' /* webpackChunkName: "pages/product/brand.vue" */))
const _2d0a7cb2 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index.vue" */))
const _1cc766ba = () => interopDefault(import('..\\pages\\product\\search.vue' /* webpackChunkName: "pages/product/search.vue" */))
const _3077bf42 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug.vue" */))
const _17c95fc4 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart.vue" */))
const _720cc8ea = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout.vue" */))
const _f1438da8 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact.vue" */))
const _f11271ce = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about.vue" */))
const _53b7e826 = () => interopDefault(import('..\\pages\\thanks.vue' /* webpackChunkName: "pages/thanks.vue" */))
const _70d644f5 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login.vue" */))
const _95d89872 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register.vue" */))
const _0288bb47 = () => interopDefault(import('..\\pages\\forgot.vue' /* webpackChunkName: "pages/forgot.vue" */))
const _a8c533d4 = () => interopDefault(import('..\\pages\\resetPassword.vue' /* webpackChunkName: "pages/resetPassword.vue" */))
const _51aa74c6 = () => interopDefault(import('..\\pages\\verify.vue' /* webpackChunkName: "pages/verify.vue" */))
const _5a5d62e8 = () => interopDefault(import('..\\pages\\blog\\blog.vue' /* webpackChunkName: "pages/blog/blog.vue" */))
const _f044d598 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug.vue" */))
const _657176b3 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/profile.vue" */))
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
    path: "/search",
    component: _1cc766ba,
    name: "search-page"
  }, {
    path: "/san-pham/:slug",
    component: _3077bf42,
    name: "product-detail"
  }, {
    path: "/gio-hang",
    component: _17c95fc4,
    name: "cart"
  }, {
    path: "/thanh-toan",
    component: _720cc8ea,
    name: "checkout"
  }, {
    path: "/lien-he",
    component: _f1438da8,
    name: "contact"
  }, {
    path: "/gioi-thieu",
    component: _f11271ce,
    name: "about"
  }, {
    path: "/thanh-cong",
    component: _53b7e826,
    name: "thanks"
  }, {
    path: "/dang-nhap",
    component: _70d644f5,
    name: "login"
  }, {
    path: "/dang-ky",
    component: _95d89872,
    name: "register"
  }, {
    path: "/quen-mat-khau",
    component: _0288bb47,
    name: "forgot-password"
  }, {
    path: "/reset-password",
    component: _a8c533d4,
    name: "reset-pasword"
  }, {
    path: "/verify-email",
    component: _51aa74c6,
    name: "verify"
  }, {
    path: "/loai-tin/:slug",
    component: _5a5d62e8,
    name: "blog"
  }, {
    path: "/tin-tuc/:slug",
    component: _f044d598,
    name: "blog-detail"
  }, {
    path: "/profile",
    component: _657176b3,
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
