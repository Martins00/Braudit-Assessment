export function useUserId() {
    const route = useRoute()
    const id = computed(() => route.params.id)

    return { id }
}