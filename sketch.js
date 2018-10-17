function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40);
  angleMode(DEGREES);


}
var colors1 = ['#f58d78', '#8bf9b2', '#94e8b2', '#d3bbcd', '#f8a2df'];
var colors2 = ['#a31141', '#a30773', '#9f0297', '#610a98', '#161785'];
function draw() {
  for (var i = 50; i < windowWidth; i+=200) {
    for (var s = 50; s < windowHeight; s+=200) {
      push();
      translate(i, s);

       translate(50*sin(frameCount),50*cos(frameCount));

      stroke(lerpColor(color(random(colors1)),color(random(colors1)), frameCount/3000));
      line(0,0,50*cos(frameCount),50*sin(frameCount));

     pop();
     push();
     translate(i, s);
     translate(50*cos(frameCount),50*sin(frameCount));

     stroke(lerpColor(color(random(colors2)),color(random(colors2)), frameCount/3000));
     line(50*cos(frameCount),50*sin(frameCount),0,0);




     pop();
    }

  }




}
