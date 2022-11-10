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
            this.playerList.push({Name: nameToUpper, Score: 0})
            this.newPlayerInput = ""
        },
        resetLobby() {
            alert("Lobby reset!")
            this.playerList = []
            this.newPlayerInput = ""
        }
    }
})

app.mount('#scoreboard-section')