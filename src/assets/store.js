import { reactive } from 'vue'

export const store = reactive({
    isActiveNav: false,
    toggleNav() {
        this.isActiveNav = !this.isActiveNav
    }
})