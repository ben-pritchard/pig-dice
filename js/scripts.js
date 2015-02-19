var Player = {
  name: null,
  totalScore: 0,
  turnScore: 0,
  currentRoll: null,
  turn: null,
  won: false,
  roll: function() {
    this.currentRoll = Math.floor(Math.random() * 6) + 1;
  },
  endTurn: function() {
    this.totalScore += this.turnScore;
    this.turnScore = 0;
    this.turn = false;
  },
  proceed: function() {
    if (this.currentRoll === 1) {
      this.turnScore = 0;
      this.endTurn();
    } else {
      this.turnScore += this.currentRoll;
      if ((this.turnScore + this.totalScore) >= 100) {
        alert(this.name + " wins the game of the piggies!")
        this.won = true;
      }
    }
  }
}
