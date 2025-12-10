const ticTacToe = () => {
    const gridItems = document.querySelectorAll('.grid-item');

    const gameState = {
        currentState: 'x'
    };

    gridItems.forEach((gridItem, index) => {
        gridItem.addEventListener('click', (e) => {
            console.log(`clicked ${ index + 1 }`);
        });
    });
};

ticTacToe();
