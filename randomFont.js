//create consts
//The first conten with "randomFont" class will be selected.
const mainBox = document.querySelector(".randomFont");
const sourceText = mainBox.textContent; 
const fontList = ['Libre Bodoni', 'Inconsolata', 'Helvetica','BIZ UDGothic'];

//Vars
var tick = 0;
var seed; //font select seed

//An array to store each letter from source texts.
let letterItem = [];
for (const i in sourceText) {
    letterItem.push(sourceText[i]);
}

//Get random number from number-min to number-max;
let randomNum = (min, max) => {
    return Math.random() * (max - min) + min;
};

//Render all the letter with random font inside tag <p>.
//A basic CSS style for each letter is already set in the code below. 
function render() {
    let letterTag = ""
    for (let i = 0; i < letterItem.length; i++) {
        seed = Math.round(randomNum(0,fontList.length - 1)); //This is how random-font function is actually done.
        letterTag += `
            <p id="cha" style="font-family:${fontList[seed]};
                                margin: 0;
                                padding: 10px;
                                cursor:default;">
            ${letterItem[i]}</p>`
    };
    mainBox.innerHTML = letterTag;
};

//Make it animated
function loop() {
    window.requestAnimationFrame( loop );
    tick++;
    if (tick > 25) { //The shuffle speed can be adjusted by variable 'tick'.
        render(); //Every 'tick' times, the render() will run once.
        tick = 0;
    }
}
loop();