/*global createCanvas, background, rect, fill, noStroke, width, stroke, strokeWeight, line, ellipse, circle, keyIsPressed, keyCode, frameRate, textSize, text, UP_ARROW, random, mouseIsPressed, mouseX, mouseY */

var GameOn, lives, score, yPos_red;
var line1_x, line1_y, line1_length;
var line2_x, line2_y, line2_length;
var decreaseLength_line1, decreaseLength_line2;

function setup(){
  createCanvas(400, 400);
  frameRate(75);
  background(255, 237, 189);
  GameOn = true;
  lives = 3;
  score = 0;
  yPos_red = 200;
  
  line1_x = 440;
  line1_y = random(100, 350);
  line1_length = random(20, 320);
  
  line2_x = 640;
  line2_y = random(100, 350);
  line2_length = random(20, 320);
  
  decreaseLength_line1 = decreaseLength_line2 = 1;
  
}

function draw(){
  if(GameOn == true){
    background(255, 237, 189);
    noStroke();
    fill(240, 202, 14);
    
    if(lives == 3){
      ellipse(30, 30, 30);
      ellipse(30, 70, 30);
      ellipse(30, 110, 30);
    }
    else if(lives == 2){
      ellipse(30, 30, 30);
      ellipse(30, 70, 30);
    }
    else if(lives == 1){
      ellipse(30, 30, 30);
    }
    else{
      GameOn = false;
          }
    
    rect(180, 15, 200, 60, 60);
    fill(0);
    textSize(32);
    text("Score: " + score, 220, 55);
    fill(225, 0, 0);
    ellipse(100, yPos_red, 30, 30);
    
    
    if(keyIsPressed && keyCode == UP_ARROW){
      //(-=) is same as (= var - _)
      yPos_red -= 10
    }
    else{
      yPos_red += 10
    }
    
    //380 = canvas + radius of circle
    if(yPos_red >= 380){
      yPos_red = 380;
    }
    if(yPos_red <=20){
      yPos_red = 20;
    }
    
    stroke(0);
    strokeWeight(4);
    
    //line(x1, y1, x2, y2)
    line(line1_x, line1_y, line1_x + line1_length, line1_y);
    line(line2_x, line2_y, line2_x + line2_length, line2_y);
   
    line1_x = line1_x-decreaseLength_line1;
    line2_x = line2_x-decreaseLength_line2;
  
    if(line1_x < 0 - line1_length){
      line1_x = 400;
      line1_y = random(50, 300);
      line1_length = random(20, 320);
      decreaseLength_line1 += 0.5;
      lives--;
    }
    if(line2_x < 0 - line2_length){
      line2_x = 400;
      line2_y = random(50, 300);
      line2_length = random(20, 320);
      decreaseLength_line2 += 0.5;
      lives--;
    }
 
    if(line1_y < yPos_red + 15 && line1_y > yPos_red - 15){
      if(line1_x < 115 && line1_x + line1_length > 85){
        score++;
        line1_x = 400;
        line1_y = random(50, 300);
        line1_length = random(20, 320);
        decreaseLength_line1 += 0.5;
      }
    } 
    if(line2_y < yPos_red + 15 && line2_y > yPos_red - 15){
      if(line2_x < 115 && line1_x + line2_length > 85){
        score++;
        line2_x = 400;
        line2_y = random(50, 300);
        line2_length = random(20, 320);
        decreaseLength_line2 += 0.5;
      }
    } 
    
  } 
  
  else{
     background(255, 237, 189);
     noStroke();
     fill(240, 202, 14);
     rect(50, 100, 300, 200, 60);
     fill(255, 237, 189);
     rect(70, 120, 260, 56, 60);
     rect(70, 200, 260, 75, 60);
     
     fill(0);
     textSize(35);
     text("Score: " + score, 130, 159);
     text("Restart", 140, 245);
    
    if(mouseIsPressed){
      if(mouseX > 70 && mouseX < 300 && mouseY > 200 && mouseY < 275){
        GameOn = true;
        lives = 3;
        score = 0;
        yPos_red = 200;
  
        line1_x = 440;
  
        line1_y = random(100, 350);
        line1_length = random(20, 320);
  
        line2_x = 640;
        line2_y = random(100, 350);
        line2_length = random(20, 320);
  
        decreaseLength_line1 = decreaseLength_line2 = 1;
      }
    }
    
  }

}
