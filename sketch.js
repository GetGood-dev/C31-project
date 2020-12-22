const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var divisions;
var ground1;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() 
{
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,790,480,20);
  
   for(var k = 0; k <= 480; k = k + 80)
     {
      divisions.push(new Divisions(k, 800 -divisionHeight/2, 10, divisionHeight));
     }
   
   for(var j = 40;j<=440;j=j+40)
    {
      plinkos.push(new Plinko(j,75));
    }
    for(var j = 60;j<=420;j=j+40)
    {
      plinkos.push(new Plinko(j,175));
    }  
    for(var j = 40;j<=440;j=j+40)
    {
      plinkos.push(new Plinko(j,275));
    }  
    for(var j = 60;j<=420;j=j+40)
    {
      plinkos.push(new Plinko(j,375));
    } 
    
}


var divisionHeight = 200;

function draw(){
  background(0);  
  Engine.update(engine);

  console.log(particles)
  if(frameCount%60===0)
     {
       particles.push(new Particle(Math.round(random(220,260)),10));
     }
  for(let particle of particles)
  {
    particle.display();
  }
  for(let division of divisions)  
  {
    division.display();
  }
  for(let plinko of plinkos)  
  {
    plinko.display();
  }
  
  ground1.display();

  drawSprites();
}