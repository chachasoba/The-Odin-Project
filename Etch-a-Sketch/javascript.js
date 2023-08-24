//part 1
const grid = document.querySelector('.grid');
const GRID_SIZE = 16

for (let i=0; i<GRID_SIZE; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    //column.textContent = `column${i}`

    for (let i=0; i<GRID_SIZE; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        //row.textContent = `row${i}`

        column.appendChild(row);
    }
    grid.appendChild(column);
}

//part 2
const rows = document.querySelectorAll('.row');
rows.forEach(row => 
    row.addEventListener('mouseover', () =>
        row.classList.toggle('hover')));

