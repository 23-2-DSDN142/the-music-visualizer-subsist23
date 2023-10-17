
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (bass< 40){
    background(189,183,107)} //dark khaki
    else{
      background(240,230,140) //khaki
    }
  textFont('Monaco'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(23);


let orange = color(25,25,112);
let pink = color(	173,255,47);

let LerpMap = map(other,0,100,0,0)
let middleColor = lerpColor(orange, pink, LerpMap)

let Ellipsesize = map(drum+200,0,100,100,-100);

let mappedXPost = map(drum+100,0,100,0,220)




//an eye guided by others

noStroke();
fill(240,230,140) //khaki
ellipse (mappedXPost, mappedXPost/2,other+360,other+360);

stroke(75,0,130) //indigo;
strokeWeight(9)
fill(middleColor)
ellipse (mappedXPost, mappedXPost/2,other+300,other+300);

stroke(0)
strokeWeight(9)
fill(65,105,225) //royal blue
ellipse (mappedXPost, mappedXPost/2,300,other*3);

strokeWeight(3)
noFill();
ellipse (mappedXPost, mappedXPost/2,300,other*3+19);
strokeWeight(3)
noFill();
ellipse (mappedXPost, mappedXPost/2,300,other*3+29);

fill(220,20,60);
noStroke()
ellipse (mappedXPost, mappedXPost/2,other+10,other);









//sonbut
fill(75,0,130) //indigo
stroke(240,230,140) //khaki
strokeWeight(45)
rect (80, 600,bass+300,80);

strokeWeight(10)
rect (80, 600,bass+300, 180);


fill(65,105,225)
stroke(72,61,139) // dark slate blue
strokeWeight(32)
rect (0, 600,bass+300,100);

 






















// display "words"
   fill(23);
   textAlign(CENTER);
   textSize(69);
   text(words,width/2,height/2);





}