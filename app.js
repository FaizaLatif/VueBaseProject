const app = Vue.createApp({
    data() {
        return {
            message: 'Make a project',
            link: 'https://v3.vuejs.org',
            courseGoalA: 'learn',
            courseGoalB: '<h2>master</h2>'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return this.courseGoalA
            }
            if (randomNumber > 0.5) {
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal')
