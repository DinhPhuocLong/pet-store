require('dotenv').config()
export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'server',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Pet-Market',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Nunito&display=swap",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro",
            },
            {
                rel: 'stylesheet',
                href: '/uikit-core.min.css'
            },
        ],
        script: [{
            type: 'module',
            src: '/uikit.min.js',
            ssr: false
        }],

    },

    router: {
        prefetchLinks: false,
        extendRoutes(routes, resolve) {
            return [{
                    name: '404',
                    path: '*',
                    component: resolve(__dirname, 'pages/404.vue'),
                    chunkName: 'pages/404.vue'
                },
                {
                    name: 'home-page',
                    path: '/',
                    component: resolve(__dirname, 'pages/index.vue'),
                    chunkName: 'pages/index.vue',
                },
                {
                    name: 'shop-by-brand',
                    path: '/thuong-hieu/:slug',
                    component: resolve(__dirname, 'pages/product/brand.vue'),
                    chunkName: 'pages/product/brand.vue',
                },
                {
                    name: 'shop-by-category',
                    path: '/danh-muc/:slug',
                    component: resolve(__dirname, 'pages/product/index.vue'),
                    chunkName: 'pages/product/index.vue',
                },
                {
                    name: 'product-detail',
                    path: '/san-pham/:slug',
                    component: resolve(__dirname, 'pages/product/_slug.vue'),
                    chunkName: 'pages/product/_slug.vue',
                },
                {
                    name: 'cart',
                    path: '/gio-hang',
                    component: resolve(__dirname, 'pages/cart.vue'),
                    chunkName: 'pages/cart.vue',
                },
                {
                    name: 'checkout',
                    path: '/thanh-toan',
                    component: resolve(__dirname, 'pages/checkout.vue'),
                    chunkName: 'pages/checkout.vue',
                },
                {
                    name: 'contact',
                    path: '/lien-he',
                    component: resolve(__dirname, 'pages/contact.vue'),
                    chunkName: 'pages/contact.vue',
                },
                {
                    name: 'about',
                    path: '/gioi-thieu',
                    component: resolve(__dirname, 'pages/about.vue'),
                    chunkName: 'pages/about.vue',
                },
                {
                    name: 'thanks',
                    path: '/thanh-cong',
                    component: resolve(__dirname, 'pages/thanks.vue'),
                    chunkName: 'pages/thanks.vue',
                },
                {
                    name: 'login',
                    path: '/dang-nhap',
                    component: resolve(__dirname, 'pages/login.vue'),
                    chunkName: 'pages/login.vue',
                },
                {
                    name: 'register',
                    path: '/dang-ky',
                    component: resolve(__dirname, 'pages/register.vue'),
                    chunkName: 'pages/register.vue',
                },
                {
                    name: 'forgot-password',
                    path: '/quen-mat-khau',
                    component: resolve(__dirname, 'pages/forgot.vue'),
                    chunkName: 'pages/forgot.vue',
                },
                {
                    name: 'verify',
                    path: '/verify',
                    component: resolve(__dirname, 'pages/verify.vue'),
                    chunkName: 'pages/verify.vue',
                },

            ]
        }
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // 1. Configure the css location of element-ui in css
        'quill/dist/quill.snow.css',
        'quill/dist/quill.bubble.css',
        'quill/dist/quill.core.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{
            src: 'plugins/quill.js',
            ssr: false
        },
        'plugins/lazy-load.js',
        'plugins/services.js',
        'plugins/vee-validate.js',
        'plugins/filters.js',
        {
            src: 'plugins/uikit.js',
            ssr: false
        },
        {
            src: 'plugins/starRating.js',
            ssr: false
        }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        '@nuxtjs/dotenv',
    ],

    axios: {
        credentials: true // Attention, credentials not withCredentials
    },
    auth: {
        redirect: false,
        strategies: {
            'laravelJWT': {
                provider: 'laravel/jwt',
                url: process.env.BASE_URL,
                token: {
                    property: 'token',
                    required: true,
                    type: 'Bearer'
                },
                user: {
                    property: false, // <--- Default "user"
                    autoFetch: true
                },
                endpoints: {
                    login: {
                        url: '/login',
                    },
                    user: {
                        url: '/user',
                        method: 'get',
                    },
                    logout: {
                        url: '/logout'
                    }
                },
            }
        },
    },


    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['vee-validate'],
    },

    server: {
        port: 3000
    }
}
