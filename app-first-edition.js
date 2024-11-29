const c1 = document.querySelector('#c1');
const c2 = document.querySelector('#c2');
const c3 = document.querySelector('#c3');
const c4 = document.querySelector('#c4');
const c5 = document.querySelector('#c5');
const c6 = document.querySelector('#c6');
const c7 = document.querySelector('#c7');
const c8 = document.querySelector('#c8');
const c9 = document.querySelector('#c9');

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

let playedCells = new Array(9);


//Initialization the game

//add an event listener to each cell.
document.addEventListener('click', e => {
    if(e.target.matches('#c1')){
        c1.style.backgroundColor = 'red';
    }
    if(e.target.matches('#c2')){
        c2.style.backgroundColor = 'red';
    }
    if(e.target.matches('#c3')){
        c3.style.backgroundColor = 'red';
    }
    if(e.target.matches('#c4')){
        c4.style.backgroundColor = 'red';
    }
    if(e.target.matches('#c5')){
        c5.style.backgroundColor = 'red';
    }
    if(e.target.matches('#c6')){
        c6.style.backgroundColor = 'red';
    }
    if(e.target.matches('#c7')){
        c7.style.backgroundColor = 'red';
    }
    if(e.target.matches('#c8')){
        c8.style.backgroundColor = 'red';
    }
    if(e.target.matches('#c9')){
        c9.style.backgroundColor = 'red';
    }
    if(e.target.matches('button')){
        
    } 
})