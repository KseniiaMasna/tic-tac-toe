const message = document.querySelector('.message')

const board = [];
for (let i = 1; i < 10; i++) {
  board.push(document.querySelector(`#c${i}`))
}

const freeCells = [];
for (let i = 1; i < 10; i++) {
    freeCells.push(i)
}


const X = [];
const O = [];
let move = 0;
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

//Function to pick random number for move
const moveRandom = (freeCells) => {    
    const index = Math.floor(Math.random() * (freeCells.length-1));    
    console.log('Random index: ', index, 'Value of this index: ', freeCells[index])
    return freeCells[index];
}

//Function to remove cell from free cells
const bookCell = (freeCells, cellToRemove) => {
    let index = freeCells.indexOf(cellToRemove);
    if (index !== -1) { 
        freeCells.splice(index, 1);
      }
    console.log(freeCells)
}


//Function to check the match of board state with win combination
const checkWin = (X, winCombinations) => {
    return winCombinations.some(combination =>
        combination.every(element => X.includes(element))             
    )    
}

//Function to check who is moving
const checkMove = (cell) => {
    if(move % 2 !== 0){
        cell.innerText = 'X' 
        X.push(board.indexOf(cell));
        return checkWin(X, winCombinations)
    } else if (move % 2 === 0){
        cell.innerText = 'O' 
        O.push(board.indexOf(cell));
        return checkWin(O, winCombinations)
    } else {
        console.log('Error')
    }
}

//Function to reset data to restart the game
const resetData = () => {
    board.forEach(cell =>{
        cell.innerText = ''
        message.innerText = 'The restart button is over here...';          
    })        
    for (let i = 1; i < 10; i++) {
        freeCells.push(i)
    }
    X.length = 0;  
    O.length = 0;    
    move = 0;   
}


//Initialization the game
document.addEventListener('click', e => {
    board.forEach(cell =>{
        if(e.target.matches(`#${cell.id}`)){            
            move ++;
            bookCell(freeCells, parseInt(cell.id.slice(1), 10))
            if (checkMove(cell)){                
                if (move % 2 !== 0){
                    message.innerText = 'Game over. X won!'
                    return
                } else if (move % 2 === 0){
                    message.innerText = 'Game over. O won!'
                    return
                }
            } else if (move === 9){
                message.innerText = 'Draw!'
                return
            }

            //computer move
            let moveComputer = moveRandom(freeCells)        
            let cellComputer = document.querySelector(`#c${moveComputer}`)
            move ++;
            bookCell(freeCells, moveComputer)  
            if (checkMove(cellComputer)){                
                if (move % 2 !== 0){
                    message.innerText = 'Game over. X won!'
                    return
                } else if (move % 2 === 0){
                    message.innerText = 'Game over. O won!'
                    return
                }
            } else if (move === 9){
                message.innerText = 'Draw!'
                return
            }            
        }
    })
    if(e.target.matches('button')){
        resetData();   
    } 
})