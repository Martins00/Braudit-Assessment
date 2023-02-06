// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Braudit Assessment",
            link: [
                { rel: "icon", href: "/favicon.png" },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@400;500&display=swap"
                },
            ],

        },
    },
    ssr: false,
    modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
    tailwindcss: {
        cssPath: "~/assets/styles/tailwind.css",
        configPath: "tailwind.config.js",
    },
    runtimeConfig: {
        public: {
            api: {
                baseURL: process.env.API_BASE_URL,
            }
        }
    }
})
