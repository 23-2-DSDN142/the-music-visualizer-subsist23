
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (bass< 40){
    background(50,10,29)}
    else{
      background(20,20,20)
    }
  textFont('Monaco'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(23);


let orange = color(250,180,3);
let pink = color(235,80,180);

let LerpMap = map(drum,0,100,0,0)
let middleColor = lerpColor(orange, pink, LerpMap)

let Ellipsesize = map(bass,0,100,70,100);

let mappedXPost = map(drum,0,100,-100,100)

fill(middleColor)
ellipse (width/2 + mappedXPost,height/2,Ellipsesize,Ellipsesize);

   // display "words"
   fill(255);
   textAlign(CENTER);
   textSize(vocal);
   text(words,width/2,height/3);
}