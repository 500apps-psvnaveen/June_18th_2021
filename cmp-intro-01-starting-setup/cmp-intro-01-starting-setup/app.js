const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'julie Jones',
                    phone: '09876543 221',
                    email: 'julie@localhost.com',
                },
            ],
            toggleDataValue: false
        };
    },
    methods: {
        toggleData() {

            this.toggleDataValue = !this.toggleDataValue;

        }
    }
});

app.mount('#app');