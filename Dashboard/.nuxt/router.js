import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _933d85b8 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404.vue" */))
const _72878a84 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index.vue" */))
const _3fcf9e80 = () => interopDefault(import('..\\pages\\category\\index.vue' /* webpackChunkName: "pages/category/index.vue" */))
const _3e18fd38 = () => interopDefault(import('..\\pages\\category\\_slug.vue' /* webpackChunkName: "pages/category/_slug.vue" */))
const _df384456 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login.vue" */))
const _d8362232 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register.vue" */))
const _53fb24c7 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index.vue" */))
const _5244837f = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug.vue" */))
const _7e2296f8 = () => interopDefault(import('..\\pages\\product\\rating.vue' /* webpackChunkName: "pages/product/rating.vue" */))
const _fdf1b156 = () => interopDefault(import('..\\pages\\product\\reviewOfProduct.vue' /* webpackChunkName: "pages/product/reviewOfProduct.vue" */))
const _0803a75c = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index.vue" */))
const _b9d20526 = () => interopDefault(import('..\\pages\\blog\\addBlog.vue' /* webpackChunkName: "pages/blog/addBlog.vue" */))
const _064d0614 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug.vue" */))
const _383e30da = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index.vue" */))
const _19e412b8 = () => interopDefault(import('..\\pages\\unauthorized.vue' /* webpackChunkName: "pages/index.vue" */))

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
    component: _933d85b8,
    name: "404"
  }, {
    path: "/",
    component: _72878a84,
    name: "dashboard"
  }, {
    path: "/category",
    component: _3fcf9e80,
    name: "category"
  }, {
    path: "/category/:slug",
    component: _3e18fd38,
    name: "category-slug"
  }, {
    path: "/login",
    component: _df384456,
    name: "login"
  }, {
    path: "/register",
    component: _d8362232,
    name: "register"
  }, {
    path: "/product",
    component: _53fb24c7,
    name: "product"
  }, {
    path: "/product/:slug",
    component: _5244837f,
    name: "product-detail"
  }, {
    path: "/product-review",
    component: _7e2296f8,
    name: "product-review"
  }, {
    path: "/product-review/:slug",
    component: _fdf1b156,
    name: "review-of-product"
  }, {
    path: "/blog",
    component: _0803a75c,
    name: "blog"
  }, {
    path: "/blog/add",
    component: _b9d20526,
    name: "add-blog"
  }, {
    path: "/blog/:slug",
    component: _064d0614,
    name: "blog-detail"
  }, {
    path: "/user",
    component: _383e30da,
    name: "user"
  }, {
    path: "/unauthorized",
    component: _19e412b8,
    name: "unauthorized"
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
