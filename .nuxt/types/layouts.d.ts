import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "dashboard" | "default" | "website"
declare module "/Users/martins/Desktop/Projects/Braudit-Assessment/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}