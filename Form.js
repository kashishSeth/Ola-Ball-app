class Form { 
        constructor() {
          this.input = createInput("Name");
          this.inputX = createInput("x");
          this.inputY = createInput("y");
          this.button = createButton('Play');
          this.greeting = createElement('h2');
          this.title = createElement('h2');
          this.reset = createButton('Reset');
        }
        hide(){
          this.greeting.hide();
          this.button.hide();
          this.input.hide();
          this.inputX.hide();
          this.inputY.hide();
          this.title.hide();
        }
      
        display(){
          this.title.html("Ola Ball");

          this.title.position(displayWidth/2 - 50, 0);
          this.input.position(displayWidth/2 - 50, displayHeight/2 - 300);
          this.inputX.position(displayWidth/2 - 50, displayHeight/2 - 280);
          this.inputY.position(displayWidth/2 - 50, displayHeight/2 - 260);
          this.button.position(displayWidth/2 + 100, displayHeight/2 - 250);
          this.reset.position(displayWidth-100,20);

          this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            player.x = this.inputX.value();
            player.y = this.inputY.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(displayWidth/2 - 50, displayHeight/2 - 400);
          });
          
          this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            database.ref("/").child("players").remove();
          });
      
        }
      }
      