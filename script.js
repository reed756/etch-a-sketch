// Create 16 x 16 worth of divs. 

const container = document.querySelector('#container');
const reset = document.querySelector('button');

function createGrid() {
    for (let i = 1; i <= 256; i++) {
        document.documentElement.style.setProperty("--columns-row", 16);
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', (event) => {
            cell.style.backgroundColor = "black";
        });
        container.appendChild(cell).classList = "grid-item";
    }
}

function resetGrid() {
    reset.addEventListener('click', (event) => {
    container.innerHTML = '';
    let answer = prompt('type a number between 1 and 100', '');
    document.documentElement.style.setProperty("--columns-row", answer);
    for (let i = 1; i <= answer * answer; i++) {
        let newCell = document.createElement('div');
        newCell.addEventListener('mouseover', (event) => {
            newCell.style.backgroundColor = "black";
        });
        container.appendChild(newCell).classList = "new-grid";
    }
    });
}

createGrid();

reset.addEventListener('click', resetGrid());

/*
reset.addEventListener('click', (event) => {
    reset.addEventListener('click', (event) => {
        container.removeChild(cell);
    })
    newGrid();
})
*/
/*
function newGrid() {
    for (let i = 1; i <= 256; i++) {
        let newCell = document.createElement('div');
        container.appendChild(newCell).classList = "new-grid";
    }
}
*/
