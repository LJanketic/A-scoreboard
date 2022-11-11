const app = Vue.createApp({
    data() {
        return {
            newPlayerInput: "",
            playerList: [],
            maxScore: 5,
            isDisabled: true
        }
    },
    methods: {
        addPlayer() {
            if (this.newPlayerInput !== "") {
                let nameToUpper = this.newPlayerInput[0].toUpperCase() + this.newPlayerInput.slice(1)
                nameToUpper = nameToUpper.substring(0, 8)
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
            this.isDisabled = true
        },
        endGame(player) {
            if (player.Score === 5) {
                alert('Game over ' + player.Name + ' has won!')
                this.playerList = []
                this.newPlayerInput = ""
                this.isDisabled = true
            }
        },
        startGame() {
            this.isDisabled = false
        }
    }
})

app.mount('#scoreboard-section')