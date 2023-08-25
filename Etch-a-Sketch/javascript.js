//part 1
const grid = document.querySelector('.grid');
let gridSize = 10;

function removeGrid() {
    columns = document.querySelectorAll('.column');
    columns.forEach(column => grid.removeChild(column)); 
}

function createGrid () {
    for (let i=0; i<gridSize; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        //column.textContent = `column${i}`
    
        for (let i=0; i<gridSize; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            //row.textContent = `row${i}`
            
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
}

const button = document.querySelector('.grid-size');
button.addEventListener('click', () => 
    {   
        let userInput = prompt('Enter grid size');
        gridSize = parseInt(userInput); 
        removeGrid();
        createGrid();
        sketchGrid();
    }
);


//part 2
function sketchGrid(){
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => 
        row.addEventListener('mouseover', () =>
            row.classList.add('hover')
        )
    );
}



