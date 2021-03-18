class Player{
     constructor(){
       this.x = null;
       this.y = null;
       this.index = null;
       this.score = null;
       this.name = null;
     }

     getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
    
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }

    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        x: this.x,
        y: this.y
      });
    }
    
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }

    /*getPlayersAtEnd() {
      database.ref('PlayersAtEnd').on("value",(data)=>{
        this.rank = data.val();
      })
    }

    static updatePlayersAtEnd(rank) {
      database.ref('/').update({
        PlayersAtEnd:rank
      })
    }*/
    
     readBall(){
       database.ref("ball").on("value", (data)=>{
         ballPosition = data.val()
       })
     }

     writeBall(X, Y){
       database.ref("ball").update({
         x: X,
         y: Y
       })
      }
    }
