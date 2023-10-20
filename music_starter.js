
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (bass< 40){
    background	(112,128,144)} //grey
    else{
      background	(255,250,250)


    }

  textFont('Monaco'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(23);


let orange = color(240,255,240);
let pink = color(	173,255,47);

let LerpMap = map(other,0,100,0,0)
let middleColor = lerpColor(orange, pink, LerpMap)

let Ellipsesize = map(vocal+200,0,100,100,-100);

let mappedXPost = map(drum+100,0,100,0,220)
let mappedXPostbass =map(bass+200,0,100,0,100)

//background 
//horizonline


noStroke();
fill(123,104,238)
rect(300,360,600,300)

strokeWeight(3)
stroke(176,224,230)
fill(128,0,128)
rect(300,380,200,30)
rect(300,410,100,30)
rect(300,710,80,630)
rect(300,710,80,530)
rect(300,710,80,530)
rect(300,710,80,430)
rect(300,710,80,330)
rect(300,710,80,230)
rect(300,710,80,130)
rect(300,710,80,30)





//SPEAKER
//chord
noFill()
strokeWeight(12)
stroke(0)
//ellipse(250,760,350,50)
arc(50, 990, 230, 480, -90, PI + QUARTER_PI, OPEN);
//mixer

strokeWeight(9)
stroke(176,224,230)
fill(123,104,238)
rect(110,600,220,320,50,50,0,0)
noStroke()
fill(128,0,128) //darkpurple
rect(110,600,180,260,50,50,0,0)
noFill();
stroke(0)
rect(110,650,160,260,50,50,0,0)
rect(110,600,120,220,50,50,0,0)
//speaker
stroke(176,224,230)
fill(0)
rect(110,680,120,230,9)
//speakerellipses
fill(255,215,0)
strokeWeight(6)
ellipse(110,630,30)
ellipse(110,700,60)
//vinyl
noStroke()
fill	(0)
ellipse(110,440,mappedXPostbass+10,33)
fill(255);
ellipse(110,440,mappedXPostbass-190,5)

//RIGHTARM
//shoulder
stroke	(0,206,209)
strokeWeight(6)
fill (176,224,230)
rect(300+170,80,160,60)
fill(255)
rect(300+170,80,80,30,23)
rect(300+170,80,80,10,23)
//arm
stroke	(0,206,209)
strokeWeight(6)
fill (176,224,230)
rect(510,330,60,530,23)
fill (255)
rect(510,330,30,530,23)
rect(510,330,10,530,23)
//fingers
fill(255)
rect(340,615,120,35,25)
rect(340,615,60,15,25)
rect(320,555,120,35,25)
rect(320,555,60,15,25)
rect(340,495,120,35,25) 
rect(340,495,60,15,25) 
rect(440,455,120,35,25)
rect(440,455,60,15,25)
//hand
fill(176,224,230)
rect(420,555,180,160,25)
rect(420,555,180,120,25)
rect(420,555,130,120,25)
//holeinhand
fill	(223,100,100)
ellipse(420,555,95)
//throughhandobjects
noStroke()
fill	(223,100,100)
rect(420,750,60,420,15,15,0,0)
rect(0,170,390,20,15,15,0,0)

//MACHINE
//head
stroke	(0,206,209)
strokeWeight(6)
fill (0)
rect(300,30,100,50,23)
//chest
strokeWeight(9)
fill(255)
rect(300,80,230,90,12)
strokeWeight(3)
rect(300,80,190,70,12)
rect(300,80,180,60,12)
rect(300,80,140,40,12)
rect(300,80,100,20,12)
//bottomtorso
strokeWeight(9)
rect(300,230,110,60,12)
//legleft
rect(300-30,300,40,110)
//legright
rect(300+30,310,40,110)


//shoes
fill(0)
rect(300+30,360,92,33,63,63,0,0)
rect(300-30,360,42,33,63,63,0,0)

//puku
stroke	(0,206,209)
strokeWeight(16)
fill	(176,224,230)
rect(300,175,200,100,0,0,25,25)
strokeWeight(3)
noFill()
rect(300,175,100,40,0,0,125,25)
rect(300,175,100,50,0,0,25,25)
rect(300,175,110,60,0,0,25,25)
rect(300,175,120,70,0,0,25,25)
rect(300,175,130,80,0,0,25,25)
rect(300,175,140,90,0,0,25,25)
rect(300,175,150,100,0,0,25,25)
rect(300,175,160,110,0,0,25,25)
rect(300,175,170,110,0,0,25,25)
rect(300,175,180,110,0,0,25,25)
//eyes
noStroke()
fill (127,255,212) //limegreen
ellipse(300-30,19,9)//left
ellipse(300+30,19,9)//right
//shoulder
stroke	(0,206,209)
strokeWeight(6)
fill (176,224,230)
rect(300-150,60,230,60,25)
fill(255)
rect(300-150,60,200,25,25)
//joints to arms
fill (176,224,230)
rect(mappedXPost-180,60,50,40,23)
//middlearm
fill (255)
rect(mappedXPost-230,145,120,210,25)
rect(mappedXPost-230,145,100,210,25)
fill (176,224,230)
rect(mappedXPost-230,145,80,210,25)
fill(255)
rect(mappedXPost-230,145,60,210,25)
strokeWeight(3)
fill (176,224,230)
rect(mappedXPost-230,145,40,170,25)
fill(255)
rect(mappedXPost-230,145,20,120,25)
//finger
strokeWeight(6)
rect(mappedXPost-195,355,26,bass+60,25)
rect(mappedXPost-265,355,26,bass+60,25)
rect(mappedXPost-230,355,26,bass+80,25)
//hand
fill(176,224,230)
rect(mappedXPost-230,295,120,100,25)
//thumb
rect(mappedXPost-155,315,26,100,25)
//orb in hand
fill(255)
ellipse(mappedXPost-230,295,50)
ellipse(mappedXPost-230,295,30)
//heart
noStroke()
fill	(223,120,100)
//rect(300,170,drum,drum,30)
rect(300,173,30,30,30)


























 














// display "words"
   fill(23);
   textAlign(CENTER);
   textSize(69);
   text(words,width/2,height/2);


}