//https://confettijs.org/confetti.min.js
//https://codepen.io/Malia_Horton4/pen/qBYLawe.js
//https://codepen.io/Malia_Horton4/pen/yLjZjKX.js

// My Scripts

new CircleType(document.getElementById("demo3"));

//Run it
let confetti = new Confetti("confetti");
// let confetti2 = new Confetti('confetti2');


// Optionalize it- Edit given parameters
confetti.setCount(100);
confetti.setSize(2);
confetti.setPower(25);
confetti.setFade(false);
confetti.destroyTarget(false);

console.log("Page Loaded");
