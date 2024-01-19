const board = document.getElementById('board');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        renderBoard();
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function renderBoard() {
    board.innerHTML = '';
    gameBoard.forEach((value, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = value;
        cell.addEventListener('click', () => handleCellClick(index));
        board.appendChild(cell);
    });
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert(`Player ${gameBoard[a]} wins!`);
            gameActive = false;
            break;
        }
    }

    if (!gameBoard.includes('') && gameActive) {
        alert('It\'s a draw!');
        gameActive = false;
    }
}

renderBoard();
