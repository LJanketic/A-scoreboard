const app = Vue.createApp({
    data() {
        return {
            newPlayerInput: "",
            playerList: []
        }
    },
    methods: {
        addPlayer() {
            const nameToUpper = this.newPlayerInput[0].toUpperCase() + this.newPlayerInput.slice(1)
            this.playerList.push(nameToUpper)
            this.newPlayerInput = ""
            console.log('Current player list: ', this.playerList)
        }
    }
})

app.mount('#scoreboard-section')