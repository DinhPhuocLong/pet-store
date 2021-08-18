require('dotenv').config()
export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'server',
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Pet-Market admin',
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
                href: '/logo.png'
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Nunito&display=swap",
            },
            {
                rel: 'stylesheet',
                href: '/uikit-core.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
            }
        ],
        script: [{
            type: 'module',
            src: '/uikit.min.js',
            ssr: false
        }],

    },

    router: {
        extendRoutes(routes, resolve) {
            return [{
                    name: '404',
                    path: '*',
                    component: resolve(__dirname, 'pages/404.vue'),
                    chunkName: 'pages/404.vue'
                },
                {
                    name: 'dashboard',
                    path: '/',
                    component: resolve(__dirname, 'pages/index.vue'),
                    chunkName: 'pages/index.vue'
                },
                {
                    name: 'category',
                    path: '/category',
                    component: resolve(__dirname, 'pages/category/index.vue'),
                    chunkName: 'pages/category/index.vue'
                },
                {
                    name: 'category-slug',
                    path: '/category/:slug',
                    component: resolve(__dirname, 'pages/category/_slug.vue'),
                    chunkName: 'pages/category/_slug.vue'
                },
                {
                    name: 'login',
                    path: '/login',
                    component: resolve(__dirname, 'pages/login.vue'),
                    chunkName: 'pages/login.vue'
                },
                {
                    name: 'register',
                    path: '/register',
                    component: resolve(__dirname, 'pages/register.vue'),
                    chunkName: 'pages/register.vue'
                },
                {
                    name: 'product',
                    path: '/product',
                    component: resolve(__dirname, 'pages/product/index.vue'),
                    chunkName: 'pages/product/index.vue'
                },
                {
                    name: 'product-detail',
                    path: '/product/:slug',
                    component: resolve(__dirname, 'pages/product/_slug.vue'),
                    chunkName: 'pages/product/_slug.vue'
                },

                // blog routes
                {
                    name: 'blog',
                    path: '/blog',
                    component: resolve(__dirname, 'pages/blog/index.vue'),
                    chunkName: 'pages/blog/index.vue'
                },
                {
                    name: 'blog-detail',
                    path: '/blog/:slug',
                    component: resolve(__dirname, 'pages/blog/_slug.vue'),
                    chunkName: 'pages/blog/_slug.vue'
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
        {
            src: 'plugins/vue-good-table.js',
            ssr: false
        },
        'plugins/services.js',
        'plugins/vee-validate.js',
        'plugins/filters.js',
        {
            src: 'plugins/uikit.js',
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
            },
        },
    },


    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['vee-validate'],
    },

    server: {
        port: 4000
    }
}
