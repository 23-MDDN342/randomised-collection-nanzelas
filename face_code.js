/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function orangeAlienFace(tilt_value, eye_value, mouth_value) {
    const bg_color3 = [71, 222, 219];
    const fg_color3 = [255, 93, 35];

    let headSize = 20
    let eyeSize = 5;
    let centerX = 0;
    let Iy = -4
    let distactBetweenEyes = 5
    let MouthDrop = 7

    // rotation in degrees
    angleMode(DEGREES);
    rotate(tilt_value);

    // head
    noStroke();
    fill(fg_color3);
    ellipse(centerX, 0, headSize, headSize);

    // 2 traditonal eyes
    if (eye_value === 1 || eye_value == 3) {
        fill(bg_color3);
        ellipse(centerX, Iy, eyeSize - 1, eyeSize);

    }
// middle eye
    if (eye_value >= 2) {
        fill(bg_color3);
        ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
        ellipse(centerX + distactBetweenEyes, Iy, eyeSize);
    }

    // mouth
    fill(bg_color3);
    ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
}

function blockFace(eye_value, mouth_value) {
    rectMode(CENTER);
    const bg_color3 = [71, 222, 219];
    const fg_color3 = [255, 93, 35];

    let headSize = 20
    let eyeSize = 5;
    let centerX = 0;
    let Iy = -4
    let distactBetweenEyes = 5
    let MouthDrop = 7

    // rotation in degrees
    // angleMode(DEGREES);
    // rotate(tilt_value);

    // body
    noStroke();
    let randomColorByBody = random(1);
    if(randomColorByBody<0.2){
        fill(1,252,252);
    }
   else if(randomColorByBody>0.1&&randomColorByBody<0.2){
        fill(142,194,31);
    }

    else if(randomColorByBody<0.8&&randomColorByBody>0.6){
        fill(152,53,143);
    }

    else if(randomColorByBody>0.2&&randomColorByBody<0.5){
        fill(242,151,0);
    }
    else  if(randomColorByBody>0.8&&randomColorByBody<1){
        fill(255,66,68);
    }else{
        fill(255,66,68);
    }



    rect(centerX, 0, headSize, headSize, 2);
    //eye
    if (eye_value == 1) {
        fill(0);
        ellipse(centerX - 5, Iy, 1, 3);
        ellipse(centerX + 5, Iy, 1, 3);
    }
    if (eye_value ==2) {
        fill(0);
        ellipse(centerX - 5, Iy, 3, 3);
        ellipse(centerX + 5, Iy, 3, 3);
    }
    if (eye_value==3) {
        fill(255);
        ellipse(centerX - 5, Iy, 3, 3);
        ellipse(centerX + 5, Iy, 3, 3);
        fill(0);
        ellipse(centerX - 5, Iy, 1.5, 1.5);
        ellipse(centerX + 5, Iy, 1.5, 1.5);
    }
    if (eye_value == 4) {

        drawStar(centerX - 5, Iy);
        drawStar(centerX + 5, Iy);
    }

    if (eye_value ==5) {

        push();
        translate(centerX-7 , Iy );

        drawEye();
        pop();
        push();
        translate(centerX+7 , Iy );
        scale(-1,1);
        drawEye();
        pop();
        // fill(0);
        // textSize(8);
        // text(">", centerX - 7, Iy + 3);
        // text("<", centerX + 1, Iy + 3);
    }
    if (mouth_value == 1) {

        fill(0);
        rect(centerX, Iy + MouthDrop, 8, 1);

    }


    if (mouth_value == 2) {

        push();
        translate(centerX, Iy);

        drawMoth2();
        pop();

    }

    if (mouth_value == 3) {


        noStroke();

        fill(255, 192, 203);

        strokeWeight(2);
        beginShape();

        arc(centerX + 2, Iy + 7, 3, 8, TWO_PI, PI);
        endShape();
        fill(0);
        rect(centerX + 2, Iy + MouthDrop + 1, 0.2, 2);
        fill(0);
        rect(centerX, Iy + MouthDrop, 8, 1);
    }
    if (mouth_value == 4) {


        push();
        translate(centerX, Iy);
        drawMoth3();
        pop();
    }

    if (mouth_value == 5) {

        fill(0);
        ellipse(centerX, Iy + MouthDrop, 4, 8);


    }

}

function drawEye() {
    push();
    scale(0.05);
    noFill();
    stroke(0);
    strokeWeight(20);
    strokeJoin(BEVEL);
    beginShape();
    vertex(35, 20);
    vertex(65, 50);
    vertex(35
        , 80);
    endShape();
    pop();
}

function drawMoth2() {
    push();
    scale(0.05);
    push();
    translate(-190, -120);

    noStroke();
    fill(0);
    beginShape();
    vertex(114, 300);
    bezierVertex(133, 221, 222, 193, 262, 298);
    bezierVertex(181, 268, 137, 288, 114, 300);
    endShape();

    pop();
    pop();
}

function drawMoth3() {
    push();
    scale(0.05);
    push();
    translate(-190, -120);

    noStroke();
    fill(0);
    beginShape();
    vertex(109, 234);
    bezierVertex(111, 346, 265, 328, 258, 234);
    bezierVertex(265, 260, 111, 260, 109, 234);
    endShape();


    pop();
    pop();
}

function drawStar(x, y) {

    let size = 2;

    push();
    noStroke();
    fill(255, 255, 0);
    beginShape();
    for (let i = 0; i < TWO_PI; i += TWO_PI / 5) {
        let angle1 = i + (PI / 10);
        let angle2 = i + TWO_PI / 10 + (PI / 10);
        let x1 = x + cos(angle1) * size / 2;
        let y1 = y + sin(angle1) * size / 2;
        let x2 = x + cos(angle2) * size;
        let y2 = y + sin(angle2) * size;
        vertex(x1, y1);
        vertex(x2, y2);
    }
    endShape(CLOSE);
    pop();

}

function simplePurpleFace() {
    fill(234, 122, 244);
    noStroke();
    // head
    ellipse(0, 0, 20);
    // eyes
    fill(255, 217, 114);
    ellipse(-3, -3, 3);
    ellipse(3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
    // head
    noStroke();
    fill(134, 19, 136);
    let head_width = map(thinness_value, 0, 100, 8, 20);
    rect(-head_width / 2, -9, head_width, 18);


    // eyes
    fill(234, 122, 244);
    ellipse(-2, -4, 1);
    ellipse(2, -4, 1);
}
