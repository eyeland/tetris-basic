document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay = grid.querySelector('#score')
    const StartBtn = grid.querySelector('#start-button')
    const width = 10

    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2]
    ]
    
    const zTetromino = [
        [0, width, width+1, width*2+1], 
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1], 
        [width+1, width+2, width*2, width*2+1]
    ]
    
    const tTetromino = [
        [1, width, width+1, width+2], 
        [1, width+1, width+2, width*2+1], 
        [width, width+1, width+2, width*2+1], 
        [1, width, width+1, width*2+1]
    ]
    
    const oTetromino = [
        [0, 1, width, width+1], 
        [0, 1, width, width+1], 
        [0, 1, width, width+1], 
        [0, 1, width, width+1]
    ]

    const iTetromino = [
        [1, width+1, width*2+1, width*3+1], 
        [width, width+1, width+2, width+3], 
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]
    ]
    
    const theTetrominos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]
    
    let currentPosition = 4
    let currrentRotation = 1

    //randomly select a Tetromino and its first rotation
    let random = Math.floor(Math.random() * theTetrominos.length)
    let current = theTetrominos[random][currrentRotation]


    //draw the Tetromino
    function draw(){
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }

    draw()
    
    //undraw the Tetromino
    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index ].classList.remove('tetromino')
        })
    }

    //make the tetromino move down every second

    timerID = setInterval(moveDown, 1000)

    //move down function
    function moveDown() {
        undraw()
        currentPosition += width
        draw()
    }











} )

