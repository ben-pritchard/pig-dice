describe("Player", function() {
  describe("roll", function() {
    it("rolls a d6 and sets the player's current role property to a random number between 1 and 6", function() {
      var player = Object.create(Player);
      player.roll()
      expect(player.currentRoll).to.equal(5)
    });
  });

  describe("endTurn", function() {
    it("will aggregate the turn score and total score and make turn false", function() {
      var player = Object.create(Player);
      player.turnScore = 7;
      player.endTurn();
      expect(player.totalScore).to.equal(7);
    });
  });

  describe("proceed", function() {
    it("will end turn if currentRoll equal to 1", function() {
      var player = Object.create(Player);
      player.currentRoll = 1;
      player.proceed();
      expect(player.turn).to.equal(false);
    });

    it("will add currentRoll to turnScore if currentRoll is not 1", function() {
      var player = Object.create(Player);
      player.currentRoll = 5;
      player.proceed();
      expect(player.turnScore).to.equal(5);
    });

    it("will add currentRoll to turnScore if currentRoll is not 1", function() {
      var player = Object.create(Player);
      player.currentRoll = 100;
      player.proceed();
      expect(player.won).to.equal(true);
    });
  });
});
