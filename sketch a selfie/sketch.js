function setup() {
  createCanvas(400, 400)
  ellipseMode(CENTER)
  rectMode(CENTER)
}

function draw() {
  background(80,90,15)
  //hair behind my head
  strokeWeight(40)
  stroke(40,5,20)
  point(156,286)
  point(233,288)
  point(250,275)
  point(130,282)
  point(269,287)
  point(176,289)
  point(120,289)
  point(120,240)
  point(130,263)
  point(267,262)
  point(279,237)

  //my torso and shirt
  fill(115,50,30)
  strokeWeight(3)
  stroke(100,30,35)  
  rect(200, 379, 120, 140, 100)
  strokeWeight(13)
  stroke(210,210,170)
  line(165,325,165,346)
  line(236,325,236,348)
  strokeWeight(3)
  fill(240,240,190)
  rect(200,395,120,100,20)

  //my arms
  fill(115,50,30)
  strokeWeight(3)
  stroke(100,30,35)  
  rect(127, 380, 20, 70, 100)
  rect(273, 380, 20, 70, 100)

  //my neck
  fill(115,50,30)
  strokeWeight(3)
  stroke(100,30,35)
  rect(199,307,40,60,25);

  //my head/face
  fill(115,50,30)
  strokeWeight(3)
  stroke(100,30,35)
  ellipse(200,200,145,190);
 
  //my hair
  stroke(40,5,20)
  strokeWeight(40)
  point(180,110)
  point(216,106)
  point(155,133)
  point(240,126)
  point(134,158)
  point(260,152)
  point(271,179)
  point(127,130)
  point(151,109)
  point(174,100)
  point(233,102)
  point(255,123)
  point(273,141)
  point(180,99)
  point(109,153)
  point(115,178)
  point(288,165)
  point(99,180)
  point(296,186)
  point(116,210)
  point(277,207)
  point(221,99)
  point(270,165)
  point(245,145)
  point(145,147)
  point(183,124)
  point(222,127)
  point(92,206)
  point(108,226)
  point(293,215)
  point(92,237)
  point(107,263)
  point(294,239)
  point(291,269);
 
  //faccial features: my eyes, eyebrows, mouth, nose
  strokeWeight(0)
  fill(255,255,255)
  ellipse(171,193,32,17)
  ellipse(224,193,32,17)
  fill(50,10,25)
  ellipse(171,193,13,18)
  ellipse(224,193,13,18)
  fill(0,0,0)
  ellipse(171,193,5,5)
  ellipse(224,193,5,5)
  strokeWeight(3);
  stroke(50,10,25)
  fill(130,50,30)
  arc(191, 197, 90, 60, 1, HALF_PI, CHORD)
  strokeWeight(0)
  fill(68,5,20)
  ellipse(199,255,47,18)
  stroke(68,5,20)
  strokeWeight(14)
  point(195.5,251.5)
  point(202.5,251.5)
  strokeWeight(2)
  stroke(105,0,0)
  fill(120,18,50)
  arc(199, 254, 45, 25, 0, PI, CHORD)
  strokeWeight(1.5)
  stroke(40,5,20)
  line(157,188,153,184)
  line(161,186,159,183)
  line(155,192,148,186)
  line (240,191,246,185)
  line(237,187,240,183)
  line(233,185,235,182)
  stroke(95,40,30)
  strokeWeight(2.5)
  line(183,175,158,172)
  line(158,172,146,178)
  line(209,178,234,172)
  line(234,172,248,179)

  //my earrings
  strokeWeight(3)
  stroke(255,210,0)
  fill(40,5,20)
  arc(129, 230, 20, 20, 19, PI + QUARTER_PI, PIE);
  arc(272, 231, 20, 20, 19, PI + QUARTER_PI, PIE);
  
  //my glasses
  strokeWeight(2)
  stroke(255,210,0) 
  noFill()  
  rect(171, 195, 47, 35, 25)
  rect(224, 196, 47, 35, 25)
  line(194.5,195,200,195)
  line(148,198,136,208)
  line(247.5,196,257,207)

  //my necklace
  strokeWeight(2)
  stroke(255,210,0)
  line(174,315,198,364)
  line(226,315,198,364)
  fill(255,210,0)
  rect(198,364,9,11,20)



}
//so i dont have to guess every coordinate and can locate points the inspect feature
function mousePressed(){
  console.log(mouseX + "," + mouseY)
}
  

