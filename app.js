const app = Vue.createApp({
    data() {
        return {
            newPlayerInput: "",
            playerList: [],
            maxScore: 5
        }
    },
    methods: {
        addPlayer() {
            if (this.newPlayerInput !== "") {
                const nameToUpper = this.newPlayerInput[0].toUpperCase() + this.newPlayerInput.slice(1)
                this.playerList.push({ Name: nameToUpper, Score: 0 })
                this.newPlayerInput = ""
            } else {
                alert('Please enter a valid player name!')
            }
        },
        resetLobby() {
            alert("Lobby reset!")
            this.playerList = []
            this.newPlayerInput = ""
        },
        endGame(player) {
            if (player.Score === 5) {
                alert('Game over ' + player.Name + ' has won!')
                this.playerList = []
                this.newPlayerInput = ""
            }
        }
    }
})

app.mount('#scoreboard-section')