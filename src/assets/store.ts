import { reactive } from 'vue'

export const store = reactive({
    isActiveNav: false,
    toggleNav() {
        this.isActiveNav = !this.isActiveNav
        const body = document.querySelector('body');
        if (this.isActiveNav) {
            body.classList.add('active');
        }
        else {
            body.classList.remove('active');
        }
    }
})