var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0ae25dda-f089-4f41-8116-e7daeb0c07ea","ee4fe4e7-5733-4d9b-92f8-083a91e85774","6abcbde9-087d-410a-b246-b0c7475849fe","4b90e915-bd76-4dba-af9c-919394f3f4b8","f73065f4-6ed8-4d1d-a02f-6c3f8330674e","0459d44a-4e77-4c8b-a1d5-37bf7ea7d956","44934b83-99c9-4ec7-be68-427d5f31be2d","d9176b8a-1a68-48ee-b42d-ebd32475395f","605fb51f-4034-4a24-9acd-f035d2e7df2b","e56045be-63ef-470e-b93d-e1799145d2f2","b307ca14-2cea-416c-a219-6e37672bee21","a9d62dff-67ce-451c-8033-c68a5ca9591f","9ea9dfa7-11c5-4a21-81d1-79ff6f786465","42ba3e70-5b8a-4899-a512-f7a23e391f91","5b859d40-bfdf-4b7e-80e4-91de20d14a18","3cd8a381-a10b-4de3-9086-036c3b74a7ec","dffae625-aa9d-4370-9357-dad18acf9f8c","2cc11125-ae86-41cf-b76a-71e0b6142582","b5c33dfd-aa82-4707-b641-24d88b2591a5","7dcda303-622e-44f7-89cb-69af13cbc3e8","01fec8c8-fa2d-484f-a164-a0b21cc0d373","e6e71f2d-ee5a-4555-a975-ccddefab2dd8","7e8d6cb9-df8c-4851-a1dc-dbb5007a7d05","2a0e92d2-3d68-4a80-91e4-e843d720a104","0ed798ca-6fd6-4220-bf6e-033c83447876","e5959e2f-7bac-4225-a87c-fc409e012329","ea7d55b9-6e53-41fa-b2b1-4035073d7613","0c7267dd-154f-4709-9169-8e91329b0e33","65e716ce-be59-4e68-a2f3-636bac8f45f3","000a6e20-d29d-4d91-a6c2-16806b17a026","6ebc83ab-17c3-4354-8269-9de176c8687f","c9244cd9-3711-4e7c-a71b-db681cb0d9bc","84385a46-c2ee-4d15-b88c-771ddb24d529","811c8d2c-3a3e-420f-81a5-62799e98d111","b9b77fc7-7196-46ee-ad2b-6e2c8e12b2c4","1213fa04-a39a-4083-8bba-e1353ebb2242","d5bf283d-1b4c-4e00-a804-271d5f45767f"],"propsByKey":{"0ae25dda-f089-4f41-8116-e7daeb0c07ea":{"name":"Luffy","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":5,"version":"b_TEOISciZ3VmbrIS9QI6hjrjB_hxGgy","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/0ae25dda-f089-4f41-8116-e7daeb0c07ea.png"},"ee4fe4e7-5733-4d9b-92f8-083a91e85774":{"name":"Luffy2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":4,"version":"opyOUCZIGFiTCbTLRzOCiHCzxek91aJc","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/ee4fe4e7-5733-4d9b-92f8-083a91e85774.png"},"6abcbde9-087d-410a-b246-b0c7475849fe":{"name":"Skil1-mochi","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":6,"looping":true,"frameDelay":2,"version":"r_ql8ZzRoaJzLBwWxMqUnphcNzK1wWux","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/6abcbde9-087d-410a-b246-b0c7475849fe.png"},"4b90e915-bd76-4dba-af9c-919394f3f4b8":{"name":"katakuri","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":12,"version":"LT25hFOmOJcOUIVm7eXbjAHTeo_kHwFI","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/4b90e915-bd76-4dba-af9c-919394f3f4b8.png"},"f73065f4-6ed8-4d1d-a02f-6c3f8330674e":{"name":"katakuri2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":12,"version":"3PEJoRNX29wcdohfQ.X4qSZ2Idyz3ZET","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/f73065f4-6ed8-4d1d-a02f-6c3f8330674e.png"},"0459d44a-4e77-4c8b-a1d5-37bf7ea7d956":{"name":"katakuri2_copy_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":12,"version":"1P5v1fVLrR2U9RUmUn8KjtrtOKHmpTLW","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/0459d44a-4e77-4c8b-a1d5-37bf7ea7d956.png"},"44934b83-99c9-4ec7-be68-427d5f31be2d":{"name":"skil1_gomu2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":3,"looping":true,"frameDelay":3,"version":"l7YCUXzr3aq2QZRI4ytxJxRFyCm1K7mX","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/44934b83-99c9-4ec7-be68-427d5f31be2d.png"},"d9176b8a-1a68-48ee-b42d-ebd32475395f":{"name":"skil1_gomu","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":3,"looping":true,"frameDelay":1,"version":"eY4Pa2_yxFa7hUmOZ9fAKa5KUHdUoQf7","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/d9176b8a-1a68-48ee-b42d-ebd32475395f.png"},"605fb51f-4034-4a24-9acd-f035d2e7df2b":{"name":"tomi","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":8,"looping":true,"frameDelay":3,"version":"a6mXl8JsblfgZBeyyLi2l_SKDSyYZoGv","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/605fb51f-4034-4a24-9acd-f035d2e7df2b.png"},"e56045be-63ef-470e-b93d-e1799145d2f2":{"name":"run1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":12,"version":"ymObz3eJjIIe4iOQh3qBP8F9i3tbbyf3","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/e56045be-63ef-470e-b93d-e1799145d2f2.png"},"b307ca14-2cea-416c-a219-6e37672bee21":{"name":"run2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":12,"version":"F3KDn5EemiB85lHN_Yn87ceCQAzfnauT","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/b307ca14-2cea-416c-a219-6e37672bee21.png"},"a9d62dff-67ce-451c-8033-c68a5ca9591f":{"name":"ru","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":3,"version":"6yK6X92aSx.v4i0bCPzUoIHcze8lREX7","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/a9d62dff-67ce-451c-8033-c68a5ca9591f.png"},"9ea9dfa7-11c5-4a21-81d1-79ff6f786465":{"name":"run11","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"pVVjvQa.CpruvPfooryoHiY85Nxg5ngU","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9ea9dfa7-11c5-4a21-81d1-79ff6f786465.png"},"42ba3e70-5b8a-4899-a512-f7a23e391f91":{"name":"run22","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"5agU5Sc1_ohV8Xmtg9UjqfQHqgITCuSx","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/42ba3e70-5b8a-4899-a512-f7a23e391f91.png"},"5b859d40-bfdf-4b7e-80e4-91de20d14a18":{"name":"frita","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":3,"looping":true,"frameDelay":3,"version":"kxt0bQEUFV_5h12VxUjw5hBIdL85t7oK","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/5b859d40-bfdf-4b7e-80e4-91de20d14a18.png"},"3cd8a381-a10b-4de3-9086-036c3b74a7ec":{"name":"frita1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"yh8x2yvX8D7zrbhYyLnsa0XkgtoUzp1v","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/3cd8a381-a10b-4de3-9086-036c3b74a7ec.png"},"dffae625-aa9d-4370-9357-dad18acf9f8c":{"name":"pistol","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":7,"looping":true,"frameDelay":4,"version":"0P.o5usEfZLvOoa4pM5gs7.DMNUnRIlc","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/dffae625-aa9d-4370-9357-dad18acf9f8c.png"},"2cc11125-ae86-41cf-b76a-71e0b6142582":{"name":"pistol2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"jEIqNShKluNL0O4SRIochZqXEQI6NN6.","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/2cc11125-ae86-41cf-b76a-71e0b6142582.png"},"b5c33dfd-aa82-4707-b641-24d88b2591a5":{"name":"m","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"pdSOwE3dFg2lq04isHmQmExSBWqaFWJx","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b5c33dfd-aa82-4707-b641-24d88b2591a5.png"},"7dcda303-622e-44f7-89cb-69af13cbc3e8":{"name":"ooo","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":4,"version":"F.myRtogBvp49pLTKD7S_ZBQfl_FVVYZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/7dcda303-622e-44f7-89cb-69af13cbc3e8.png"},"01fec8c8-fa2d-484f-a164-a0b21cc0d373":{"name":"pistola","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":7,"looping":false,"frameDelay":12,"version":"WX0Vg1YL10jvCoyI.IcfRoWWW7153OI9","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/01fec8c8-fa2d-484f-a164-a0b21cc0d373.png"},"e6e71f2d-ee5a-4555-a975-ccddefab2dd8":{"name":"haki","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":4,"version":"vMMebY6egi4MkYHACx5F5hc5F5bXdbE8","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/e6e71f2d-ee5a-4555-a975-ccddefab2dd8.png"},"7e8d6cb9-df8c-4851-a1dc-dbb5007a7d05":{"name":"hakiL","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":2,"version":"ebvj82LTj8aXlargVIld.AnusMZJUMRA","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/7e8d6cb9-df8c-4851-a1dc-dbb5007a7d05.png"},"2a0e92d2-3d68-4a80-91e4-e843d720a104":{"name":"win1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"46shLOqEWYzyIRrXsN2.I.p4AzQMb0yV","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/2a0e92d2-3d68-4a80-91e4-e843d720a104.png"},"0ed798ca-6fd6-4220-bf6e-033c83447876":{"name":"win2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"He8ZPBC64pxE6YJ4eMivjD1VooOuJm3u","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0ed798ca-6fd6-4220-bf6e-033c83447876.png"},"e5959e2f-7bac-4225-a87c-fc409e012329":{"name":"colide","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":9,"looping":true,"frameDelay":4,"version":"XYBpY8MpYOc_3fveXuu6dwJQrCqVJyj5","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/e5959e2f-7bac-4225-a87c-fc409e012329.png"},"ea7d55b9-6e53-41fa-b2b1-4035073d7613":{"name":"espisnho","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":3,"version":"u84GE6Jv4.KLysLh7U44oCxbDbd4SpYm","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/ea7d55b9-6e53-41fa-b2b1-4035073d7613.png"},"0c7267dd-154f-4709-9169-8e91329b0e33":{"name":"bazoca","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":19,"looping":true,"frameDelay":1,"version":"QReAzUsReOnmDPvqiXxLZRbdGhrTdzfh","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":500},"rootRelativePath":"assets/0c7267dd-154f-4709-9169-8e91329b0e33.png"},"65e716ce-be59-4e68-a2f3-636bac8f45f3":{"name":"fusem","sourceUrl":null,"frameSize":{"x":91,"y":41},"frameCount":1,"looping":true,"frameDelay":12,"version":"cZkDjYGoPKfN_etORvLwnNq5BrwjBL08","loadedFromSource":true,"saved":true,"sourceSize":{"x":91,"y":41},"rootRelativePath":"assets/65e716ce-be59-4e68-a2f3-636bac8f45f3.png"},"000a6e20-d29d-4d91-a6c2-16806b17a026":{"name":"o","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"RYmI66RFBXvTKvBgyACZ4l1bbqj.cJaC","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/000a6e20-d29d-4d91-a6c2-16806b17a026.png"},"6ebc83ab-17c3-4354-8269-9de176c8687f":{"name":"l","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":3,"looping":true,"frameDelay":3,"version":"xcCYz1mqf1wt7NtvXne1Uj_XoBzeKcLM","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/6ebc83ab-17c3-4354-8269-9de176c8687f.png"},"c9244cd9-3711-4e7c-a71b-db681cb0d9bc":{"name":"u","sourceUrl":null,"frameSize":{"x":99,"y":82},"frameCount":1,"looping":true,"frameDelay":12,"version":"cWm3FzvOIEsZKAVM8jyxB5HhM_ybxdqJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":82},"rootRelativePath":"assets/c9244cd9-3711-4e7c-a71b-db681cb0d9bc.png"},"84385a46-c2ee-4d15-b88c-771ddb24d529":{"name":"p","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"mVacGfDLfOp6yuWGYbusmMG35p3Cngzl","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/84385a46-c2ee-4d15-b88c-771ddb24d529.png"},"811c8d2c-3a3e-420f-81a5-62799e98d111":{"name":"p1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"T6v1vTfjNZwaN6UMP1TUl9wF8GjubqKy","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/811c8d2c-3a3e-420f-81a5-62799e98d111.png"},"b9b77fc7-7196-46ee-ad2b-6e2c8e12b2c4":{"name":"n","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":3,"looping":true,"frameDelay":4,"version":"SXp833LCHPyjyJ5d0NGK06V.I138uJr5","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/b9b77fc7-7196-46ee-ad2b-6e2c8e12b2c4.png"},"1213fa04-a39a-4083-8bba-e1353ebb2242":{"name":"k","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"bQSY4c8AfZSPKXhuT4U3jbbu2hpmeBLx","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/1213fa04-a39a-4083-8bba-e1353ebb2242.png"},"d5bf283d-1b4c-4e00-a804-271d5f45767f":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":10,"looping":true,"frameDelay":3,"version":"rIIIbm8Pxn0kzzPPiPD9LGlIMHkh3mU3","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":400},"rootRelativePath":"assets/d5bf283d-1b4c-4e00-a804-271d5f45767f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var r = createSprite(0,400,1000,10);

var life = 3000;

var life2 = 2500;

var Lenergia = 100;

var Kenergia = 100;

var a = true;

var p = createSprite(0,250);
p.setAnimation("o");
p.scale = 0.7;

var l = createSprite(200,100,400,10);
l.visible = false;

var ki = createSprite(100,100);
ki.setAnimation("ooo");
ki.visible = false;

var ki1 = createSprite(100,100);
ki1.setAnimation("ooo");
ki1.visible = false;

var pistol;

var frita;

var espinho = createSprite(300,100);
espinho.visible = false;

var luffy = createSprite(300,390,20,20);
luffy.setAnimation("Luffy");
luffy.scale=0.7;
luffy.setCollider("rectangle",0,0,80,100);
luffy.debug = true;  
    
var katakuri = createSprite(100,390);
katakuri.scale = 1.1;
katakuri.setCollider("rectangle",0,0,60,100);
katakuri.debug = true; 

var skil1 = createSprite(200,200,20,20);
skil1.setAnimation("Skil1-mochi");

var haki = createSprite(100,100);
haki.setAnimation("haki");
haki.visible = false;

var haki1 = createSprite(100,100);
haki1.setAnimation("hakiL");
haki1.visible = false;

var colide = createSprite(200,200,1,1);
colide.setAnimation("colide");
colide.visible = false;
colide.scale = 3;

var fusem;

var o = createSprite(300,200,200,400);
o.visible = false;

var l = createSprite(100,200,200,400);
l.visible = false;

var po = true;

var w;

function draw() {
  background("brown");
  
  stroke("white");
  text("Katakuri = "+life,50,100);
  
  text("Luffy = "+life2,300,100);
  
  text("energia = " + Kenergia,50,120);
  
  text("energia =  " + Lenergia,300,120);

  
  if(keyDown("u") ){
    katakuri.velocityX =+19;
  }
  
  if(!keyDown("u") ){
  katakuri.velocityX =0;
  }
  
  if(keyWentUp("c") && Lenergia >70){
    fusem = createSprite(100,359);
    fusem.setAnimation("fusem");
    fusem.scale = 3;
    fusem.x = luffy.x;
    fusem.velocityX = -19;
    Lenergia -=70;
    luffy.setAnimation("pistola");
    fusem.debug=true;
    fusem.setCollider("rectangle",-100,0,500,50);
    if(katakuri.isTouching(fusem)){
      life -=300;
    }
  if(keyDown("c") && Lenergia >70){
    fusem.velocityX = 0;
  }
  }
 
 else if(mousePressedOver(o)){
     w = createSprite(220,20);
     w.y = p.y;
     w.x = p.x;
     w.velocityY = +6;
     w.velocityX = +6;
     p.x = katakuri.x ;
     w.timeLife = 50;
     w.scale = 0.5;
     w.setAnimation("k");
     if(w.isTouching(luffy)){
       
     }
  }
  
 else if(mousePressedOver(l)){
     w = createSprite(220,20);
     w.y = p.y;
     w.x = p.x;
     w.velocityY = +6;
     w.velocityX = -6;
     p.x = katakuri.x ;
     w.timeLife = 50;
     w.scale = 0.5;
     w.setAnimation("p1");
     if(w.isTouching(luffy)){
       
     }
  }
 
  if(keyDown("b") && keyDown("r")){
    colide.vesible = true;
  }
  
  if(keyDown("e") && Kenergia >50){
    espinho.visible = true;
    espinho.y = 300;
    espinho.x = luffy.x;
    espinho.setAnimation("espisnho");
    espinho.scale = 2;
    espinho.velocityY = -9;
    Kenergia -=49;
  }
  
  if(!keyDown("e") && Kenergia >0){
    espinho.visible = false;
    espinho.y = 30;
  }  
  
  if(luffy.isTouching(espinho)){
    life2 -=30;
    po = false;
    toma();
  }
  
    if(!luffy.isTouching(espinho)){
    po = true;
  }
  
  if(keyDown("q")){
    ki.visible = true;
    ki.x = katakuri.x;
    ki.y = katakuri.y;
    Kenergia +=0.5;
  }
  
  if(Kenergia >100){
    Kenergia = 100;
  }
  
    if(keyDown("z")){
    ki1.visible = true;
    ki1.x = luffy.x;
    ki1.y = luffy.y;
    Lenergia +=0.5;
  }
  
  if(Lenergia >100){
    Lenergia = 100;
  }
  
  
  if(!keyDown("q")){
    ki.visible = false;
  }
  
  if(!keyDown("z")){
    ki1.visible = false;
  }  
  
  if(keyDown("Y") && Kenergia >0){
  skill();
  }
  
  if(!keyDown("Y")){
    skil1.y = 200;
    skil1.visible = false;
  }
  
  
//gun  
  if(keyDown("M") && Lenergia >1){
    skil1_gomu();
    luffy.scale = 0.8;
  }
  if(!keyDown("M") && !luffy.isTouching(skil1)){
    luffy.setAnimation("Luffy");
    luffy.scale = 0.7;
  }

 if(Lenergia <0){
   Lenergia = 0;
 }
 
  if(keyDown("LEFT_ARROW") && !keyDown("RIGHT_ARROW") && a === true && po === true){
    luffy.x -=5;
    luffy.setAnimation("run1");
  }
  if(keyDown("right")&& !keyDown("left") && a === true && po === true){
    luffy.x +=5;
    luffy.setAnimation("run2");
  }
  
    if(keyDown("a") && !keyDown("d")){
    katakuri.x -=8;
    katakuri.setAnimation("run22");
  }
  
  
  if(keyDown("d")&& !keyDown("a")){
    katakuri.x +=8;
    katakuri.setAnimation("run11");
  }
  
    if(!keyDown("a") && !keyDown("d") && !keyDown("u")){
    katakuri.setAnimation("katakuri2");
}
  
  
  if(keyDown("w") && katakuri.y >= 112){
    katakuri.velocityY =-10;
  }
  
  if(keyDown("UP_ARROW") && Lenergia >0){
    luffy.velocityX =-80;
    Lenergia -=3;
    luffy.setAnimation("l");
  }
  
  if(!luffy.isTouching(katakuri) && !keyDown("m")){
  katakuri.velocityX = -0;
  }
  
  
    if(keyDown("DOWN_ARROW") && Lenergia >0 && a === true){
    luffy.velocityX =80;
    Lenergia -=3;
    luffy.setAnimation("l");    
  }
  
  if(!keyDown("DOWN_ARROW")  && !keyDown("UP_ARROW") ){
    luffy.velocityX =0;
  }
  
  //luffy.y = luffy.y -0.8;
 
  if(keyWentDown("t") && Kenergia >0){
    frita = createSprite(100,100);
    frita.setAnimation("frita");
    frita.y = katakuri.y;
    frita.x = katakuri.x;
    frita.velocityX = 11;
    katakuri.setAnimation("m");
    frita.setCollider("rectangle",190,0,400,11);
    frita.debug = true;
    Kenergia -=25;
    
    
    if(frita.isTouching(luffy)){
      life2 -=8;
    }
  }
  

  if(keyWentDown("n") && Lenergia >10){
    pistol = createSprite(100,100);
    pistol.setAnimation("pistol");
    pistol.y = luffy.y;
    pistol.x = luffy.x;
    pistol.velocityX = -90;
    luffy.setAnimation("pistola");
    pistol.setCollider("rectangle",-190,0,400,11);
    pistol.debug = true;
    Lenergia -=10; 
    if(katakuri.isTouching(pistol)){
      life-=50;
    }
  }
  
  if(keyDown("r") && Kenergia >3){
    haki.x = katakuri.x;
    haki.y = katakuri.y;
    haki.visible = true;
    haki.scale = 1.5;
    Kenergia -=3;
  }
  
  if(!keyDown("r")){
    haki.y = 300;
    haki.visible = false;
  }
  
  if(haki1.isTouching(katakuri)){
    life -=0.5;
    Kenergia -=0.5;
  }
  
  if(keyDown("b") && Lenergia >3){
    haki1.x = luffy.x;
    haki1.y = luffy.y;
    haki1.visible = true;
    haki1.scale = 1.5;
    Lenergia -=3;
  }
  
    if(!keyDown("r")){
    haki.x = 50;
    haki.y = 50;
    haki.visible = false;
  }
  
  if(!keyDown("b")){
    haki1.y = 100;
    haki1.visible = false;
  }
  
  if(haki.isTouching(luffy) ){
    life2 -=0.5;
    Lenergia -=0.5;
     a = false;
  }
  
 if(!haki.isTouching(luffy) ){
     a = true;
  }
  
  if(Kenergia < 0){
    Kenergia = 0;
  }
  
  skil1.x = World.mouseX;
  createEdgeSprites();
  katakuri.collide(r);
  luffy.collide(r);
  
  drawSprites();
}

function skil1_gomu(){
  luffy.setAnimation("skil1_gomu");
  luffy.scale = 1.2;
  Lenergia -=0.5;

  if(luffy.isTouching(katakuri) && keyDown("m")){
    life -=5;
    katakuri.velocityX = -0.8;
  }
  
  if(luffy.isTouching(katakuri) && keyDown("m") && !keyDown("space")){
  life -=5;
  katakuri.velocityX = -0.8;
  }
}

function toma(){
  luffy.setAnimation("tomi");
}

function skill(){
    skil1.y = 320;
    skil1.visible = true;
    Kenergia-=1;
  if(luffy.isTouching(skil1)){
  luffy.x = skil1.x;
  life2 -=5;
  toma();
  }
}

function cannon(){
  luffy.scale = 1.2;
  Lenergia -=0.5;
  if(luffy.isTouching(katakuri)){
    life -=5;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
