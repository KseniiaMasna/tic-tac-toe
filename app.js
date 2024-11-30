const message = document.querySelector('.message')

const board = [];

//Function to generate board to track free cells to make move
const generateBoard = () => {
    for (let i = 1; i < 10; i++) {
        board.push(document.querySelector(`#c${i}`))
      }
}
generateBoard();


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
const moveRandom = (board) => {    
    const index = Math.floor(Math.random() * (board.length-1));    
    console.log(board)
    console.log('Random index: ', index, 'Value of this index: ', board[index].id)
    return board[index];
}

//Function to remove cell from free cells
const bookCell = (border, cellToRemove) => {
    let index = border.indexOf(cellToRemove);
    if (index !== -1) { 
        border.splice(index, 1);
      }    
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
        X.push(parseInt(cell.id.slice(1), 10)-1);
        return checkWin(X, winCombinations)
    } else if (move % 2 === 0){
        cell.innerText = 'O' 
        O.push(parseInt(cell.id.slice(1), 10)-1);
        return checkWin(O, winCombinations)
    } else {
        console.log('Error')
    }
}

//Function to reset data to restart the game
const resetData = () => {  
    const cells = document.querySelectorAll('.cell');    
    cells.forEach(cell => {
        cell.innerText = ''
        
    })  
    message.innerText = 'The restart button is over here...';                
    X.length = 0;  
    O.length = 0;    
    move = 0;   
    generateBoard();
}

//Function to make move
const makeMove = (cell) => {
    move++
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

}


//Initialization the game
document.addEventListener('click', e => {
    board.forEach(cell =>{
        if(e.target.matches(`#${cell.id}`)){                    
            //my move
            bookCell(board, cell)
            makeMove(cell)
            
            
            
            //computer move
            let cellComputer = moveRandom(board)                       
            
            bookCell(board, cellComputer)  
            makeMove(cellComputer)  
        }
    })
    if(e.target.matches('button')){
        resetData();   
    } 
})