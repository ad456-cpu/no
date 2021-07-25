// creating snow class
class Snow{
  constructor(x,y){
    //creating a snow sprite
    snow=createSprite(400,400,50,50);
    //adding snow image
    this.image = loadImage("snow4.webp");
    
  }


display(){
 //displaying snow image  
 image(this.image, 5,10,50,50);
      
   }
}