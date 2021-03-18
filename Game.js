class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
          
        }
        form = new Form()
        form.display();
      }

      /*ball1 = Bodies.circle(400,500,10,{isStatic:true});
      await World.add(world, ball1);
      console.log(ball1)
      obj1 = Bodies.circle(400,550,10,{isStatic:true});
      await World.add(world, obj1);
      obj2 = Bodies.circle(400,550,10,{isStatic:true});
      await World.add(world, obj2);
      obj3 = Bodies.circle(400,550,10,{isStatic:true});
      await World.add(world, obj3);
      obj4 = Bodies.circle(400,550,10,{isStatic:true});
      await World.add(world, obj4);
      objs = [obj1, obj2, obj3, obj4]
*/
      ball = createSprite(400,500);
      ball.addImage(Ball);
      ball.scale = 0.15; 
      player1 = createSprite(400, 550);
      player1.addImage(Elena);
      player1.scale = 0.1; 
      player2 = createSprite(400, 950);
      player2.addImage(Naomi);
      player2.scale = 0.1;  
      player3 = createSprite(400, 450);
      player3.addImage(Mateo);
      player3.scale = 0.12;  
      player4 = createSprite(400, 50);
      player4.addImage(Gabe); 
      player4.scale = 0.1; 
      players = [player1, player2, player3, player4];
    }
  
    play(){
      form.hide();
      Player.getPlayerInfo();
    
      background(235,214,145);  
  angleMode(DEGREES);

  stroke("Green");
  strokeWeight(3);
  line(0,100,800,100);

  stroke("white");  
  strokeWeight(3);
  line(0,500,800,500);

  stroke("Red");
  strokeWeight(3);
  line(0,900,800,900);

  stroke("White");
  strokeWeight(3);
  fill("Red");
  arc(765, 500, 70, 70, 0, 360);

  stroke("White");
  strokeWeight(5);
  fill(235,214,145);
  arc(765, 500, 35, 35, 0, 360);

  stroke("White");
  strokeWeight(5);
  fill("Green");
  arc(35, 500, 70, 70, 0, 360);

  stroke("White");
  strokeWeight(5);
  fill(235,214,145);
  arc(35, 500, 35, 35, 0, 360);

  stroke("White");
  strokeWeight(5);
  noFill();
  arc(400,500,200,200,0,360) ;

      var index = 0;
      //var x = 150 ;
      //var y;

        for(var plr in allPlayers){
          index = index + 1;
          //x = x + 200;    
          //y = displayHeight - allPlayers[plr].distance;

           if (index === player.index){
            push();   
            //objs[index-1].position.x = player.x;
            //objs[index-1].position.y = player.y;
            players[index-1].x = player.x;
            players[index-1].y = player.y; 
            noStroke();
            fill("red");
            //ellipse(x,y,40,40);
            players[index - 1].shapeColor = "red";
            pop();
        }
    }
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.y-=4
        player.update();
      } 
      if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.x-=4
        player.update();
      } 
      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.x+=4
        player.update();
      } 
      if(keyIsDown(DOWN_ARROW) && player.index !== null){
        player.y+=4
        player.update();
      } 
      drawSprites();
    }
  }

