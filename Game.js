class Game {
    constructor(){
  this.display = createElement("h2");
    }
  
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
        console.log("GameState:"+gameState);
        form = new Form()
        form.display();
      }
      bg = createSprite(displayWidth/2,displayHeight/2);
      bird1 = createSprite(20,350,50,50);
      bird2 = createSprite(20,240,50,50);
      bird2.addImage(bird2image);
      bird1.addImage(bird1image);
      bird1.scale = 0.25;
      bird2.scale = 0.25;
      bg.visible = false
      bird1.visible = false
      bird2.visible = false
    }
 
   
    
    play(){

     // console.log("PLAY")
      form.hide();
      background("white");
      bg.visible = true
      bird1.visible = true
      bird2.visible = true
      bg.addImage(bgImage);
      bg.velocityX = -4;
      bg.scale = 1.37
      if(bg.x<0){
        bg.x = displayWidth/2
        
      }

      this.spawnObstacles();
     
      
     
    //  console.log(bg.x)
      

    }

    spawnObstacles(){
//code to spawn the obstacles randomly after 100 frames

    }
 
}