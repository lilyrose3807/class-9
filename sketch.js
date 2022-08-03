var weights = [35,38,40,45]
var avage = 0


function setup() 
{

createCanvas(400,400);
  sum = weights[0] + weights[1] + weights[2] + weights[3]
  console.log (sum) 
 avage = sum/weights.length
 console.log (avage)
  
}

function draw() 
{

background(51);

}

