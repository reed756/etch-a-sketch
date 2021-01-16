// Create 16 x 16 worth of divs. 

const container = document.querySelector('#container');
const reset = document.querySelector('button');
const grid = document.querySelectorAll('.grid-item');
let cell = document.createElement('div');

function createGrid() {
    for (let i = 1; i <= 256; i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', (event) => {
            cell.style.backgroundColor = "black";
        });
        container.appendChild(cell).classList = "grid-item";
        reset.addEventListener('click', (event) => {
            cell.style.backgroundColor = "white";
        })
    }
}
/*
reset.addEventListener('click', (event) => {
    reset.addEventListener('click', (event) => {
        container.removeChild(cell);
    })
    newGrid();
})
*/
function newGrid() {
    for (let i = 1; i <= 256; i++) {
        let newCell = document.createElement('div');
        container.appendChild(newCell).classList = "new-grid";
    }
}

createGrid();
/*
reset.addEventListener('click', (event) => {
    cell.style.backgroundColor = "white";
})
*/