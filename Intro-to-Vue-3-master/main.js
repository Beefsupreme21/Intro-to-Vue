const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            details: ['detail1', 'detail2', 'detail3']
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeFromCart(id) {
            this.cart.pop(id)
        }
    }
})
