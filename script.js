// cashing the dom :
const sketchpad_div = document.querySelector('.sketchpad');
const rainbow = document.getElementById('rainbow');
const darken = document.getElementById('darken');
const clear = document.getElementById('clear');
const color = document.getElementById('color');
const colorInput = document.getElementById('colorinput');
const size = document.getElementById('size');
hexInput = document.querySelector('#hex');
let setcolor = 'black';
let click = true;



function generateGrid(size) {
    let squares = sketchpad_div.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    sketchpad_div.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchpad_div.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size
    for (let i=0; i<amount;i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
        square.style.border = '1px solid black'
        square.style.backgroundColor = 'white'
        sketchpad_div.insertAdjacentElement('beforeend', square);
    }
}

generateGrid(16);

function changeSize(input) {
    if (input>=2 || input <=100) {
    generateGrid(input)
    } else {
        console.log('Too many/too little squares')
    }
}

function colorSquare() {
    if (click) {
    if(setcolor === 'rainbow'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
    this.style.backgroundColor = setcolor;
    }
    }
}

function changeColor(choice) {
    setcolor = choice;
}

function clearBoard() {
    const sketchpad_div = document.querySelector('.sketchpad');
    let squares = sketchpad_div.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e)=>{
    if(e.target.tagName != "BUTTON"){
        click =!click;
        if (click) {
            document.querySelector('.mode').textContent = 'Mode: Coloring (≧◡≦) '
        } else {
            document.querySelector('.mode').textContent = 'Mode: Not Coloring (」°ロ°)」'
        
        }
    }
});


// add "mode" display
// add functionality to "darken button" -> gradual change in opacity