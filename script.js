// Create 16 x 16 worth of divs. 

const container = document.querySelector('#container');

function createGrid() {
    for (let i = 1; i <= 256; i ++) {
        let cell = document.createElement('div');
        
        container.appendChild(cell).classList = "grid-item";
    }
}

createGrid();

