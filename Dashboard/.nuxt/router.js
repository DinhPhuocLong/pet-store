import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _284cabda = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404.vue" */))
const _7fcd27ed = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index.vue" */))
const _174dc622 = () => interopDefault(import('..\\pages\\category\\index.vue' /* webpackChunkName: "pages/category/index.vue" */))
const _1abb08b2 = () => interopDefault(import('..\\pages\\category\\_slug.vue' /* webpackChunkName: "pages/category/_slug.vue" */))
const _4974cb04 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login.vue" */))
const _26b38150 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register.vue" */))
const _b7bec710 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index.vue" */))
const _bb2c09a0 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug.vue" */))
const _32ac1567 = () => interopDefault(import('..\\pages\\product\\rating.vue' /* webpackChunkName: "pages/product/rating.vue" */))
const _2fb91474 = () => interopDefault(import('..\\pages\\product\\reviewOfProduct.vue' /* webpackChunkName: "pages/product/reviewOfProduct.vue" */))
const _df98956a = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index.vue" */))
const _e305d7fa = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug.vue" */))

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
    component: _284cabda,
    name: "404"
  }, {
    path: "/",
    component: _7fcd27ed,
    name: "dashboard"
  }, {
    path: "/category",
    component: _174dc622,
    name: "category"
  }, {
    path: "/category/:slug",
    component: _1abb08b2,
    name: "category-slug"
  }, {
    path: "/login",
    component: _4974cb04,
    name: "login"
  }, {
    path: "/register",
    component: _26b38150,
    name: "register"
  }, {
    path: "/product",
    component: _b7bec710,
    name: "product"
  }, {
    path: "/product/:slug",
    component: _bb2c09a0,
    name: "product-detail"
  }, {
    path: "/product-review",
    component: _32ac1567,
    name: "product-review"
  }, {
    path: "/product-review/:slug",
    component: _2fb91474,
    name: "review-of-product"
  }, {
    path: "/blog",
    component: _df98956a,
    name: "blog"
  }, {
    path: "/blog/:slug",
    component: _e305d7fa,
    name: "blog-detail"
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
