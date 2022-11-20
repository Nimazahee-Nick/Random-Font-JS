//Available fonts
const fontList = [
    'Libre Bodoni', 
    'Inconsolata',
    'Press Start 2P',
    'Abril Fatface'];
//Defualt landing page titles
const defaultTitles = [
    'HELLO WORLD', 
    'HEY', 
    'HI! How are you?',  
    'Easy-peasy',
    'Music Lover',
    'PEACE & LOVE',]

const colors = ['#80a69b', '#bec4aa','#f2d7b6', '#d94f30', '#40261d']

//Variables & consts
var tick = 0;
var seed;
const mainBox = document.querySelector(".output");
const txt1 = document.getElementById('input-1');
const btn1 = document.getElementById('btn-1');
let letterItem = [];

//Functions
let randomNum = (min, max) => {
    return Math.random() * (max - min) + min;
};

function defaultTitle() {
    defaulText = defaultTitles[Math.round(randomNum(0,defaultTitles.length - 1))];
}

// Customized paragraph
function enterText() {
    const sourceText = txt1.value;
    letterItem = [];
    for (const i in sourceText) {
        letterItem.push(sourceText[i]);
    }
}

function render() {
    let randomNum = (min, max) => {
        return Math.random() * (max - min) + min;
    };
    let letterTag = ""
    for (let i = 0; i < letterItem.length; i++) {
        seed = Math.round(randomNum(0,fontList.length - 1)); //This is how random-font function is actually done.
        letterTag += `
            <p id="cha" style="font-family:${fontList[seed]};
                                margin: 0;
                                
                                cursor:default;
                                color:${colors[Math.round(randomNum(0, colors.length-1))]}">
            ${letterItem[i]}</p>`
    };
    mainBox.innerHTML = letterTag;
};

function loop() {
    window.requestAnimationFrame(loop);
    tick++;
    if (tick > 25) { //The shuffle speed can be adjusted by variable 'tick'.
        render(); //Every 'tick' times, the render() will run once.   
        tick = 0;
    }
}

//Landing page default titles
defaultTitle();
for (const i in defaulText) {
    letterItem.push(defaulText[i]);
}
//Button functions
btn1.addEventListener('click', enterText);

loop();