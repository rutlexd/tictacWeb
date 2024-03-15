const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
const message = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

restartBtn.addEventListener('click', restartGame);

function handleClick() {
    if (!this.textContent) {
        this.textContent = currentPlayer;
        if (checkWinner()) {
            message.textContent = `Гравець ${currentPlayer} переміг!`;
            cells.forEach(cell => {
                cell.removeEventListener('click', handleClick);
            });
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            message.textContent = `Хід гравця: ${currentPlayer}`;
        }
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // рядки
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // стовпці
        [0, 4, 8], [2, 4, 6]              // діагоналі
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && 
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent) {
            return true;
        }
    }
    return false;
}

function restartGame() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.addEventListener('click', handleClick);
    });
    currentPlayer = 'X';
    message.textContent = 'Почніть гру. Хід гравця: Х';
}