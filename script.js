// Create 16 x 16 worth of divs. 

const container = document.querySelector('#container');

function createGrid() {
    for (let i = 1; i <= 256; i ++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', (event) => {
            cell.style.backgroundColor = "black";
        });
        container.appendChild(cell).classList = "grid-item";
    }
}

/*
const grid = document.querySelectorAll('span');
grid.forEach((span) => {
    span.addEventListener('mouseover', () => {
        box.style.backgroundColor = "black";
});
*/

/*
const grid = document.querySelector('span');
grid.addEventListener('mouseover', () => {
    grid.style.backgroundColor = "black";
});
*/
/*
a = document.getElementsByTagName('span');
for (i in a) {
    a[i].onmouseover = a[i].style.backgroundColor = "black";
}
*/
/*
const box = document.getElementsByClassName('grid-item');
box.addEventListener('mouseover', () => {
    box.style.background = "black";
});
*/

createGrid();

