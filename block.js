class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){

      push(); 
      
      if(this.body.speed < 3){
        //console.log(this.body.speed);
      var angle = this.body.angle;
      var pos= this.body.position;
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      }
      else{
        World.remove(world, this.body);
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
      }
  
     
      if (this.Visiblity < 0 && this.Visiblity > -52.5){
        score++;
      }
      pop();
    }
  };
  