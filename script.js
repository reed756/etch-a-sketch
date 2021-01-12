// Create 16 x 16 worth of divs. 

const container = document.querySelector('#container');
const reset = document.querySelector('button');
const grid = document.querySelectorAll('.grid-item');

function createGrid() {
    for (let i = 1; i <= 256; i ++) {
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

createGrid();
