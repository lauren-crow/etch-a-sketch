//event listeners
clearBtn.addEventListener('click', () => clearGrid());
resizeBtn.addEventListener('click', () => resizeGrid());

//make initial grid container
const container = document.createElement('div');
container.classList.add('container');
container.setAttribute("style", "display:flex; flex-wrap: wrap; flex-direction: row; height: 300px; width: 300px; margin: auto; background-color: lightblue; border: solid black 2px;");
document.body.appendChild(container);
 
//make grid 
function makeGrid(number){
    //clear grid if function is called from clearGrid() or resizeGrid()

    container.innerHTML = '';

    //set square size variable
    let squareDimension = (300)/number;

    //build squares in rows
    for (i = 0; i < number; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < number; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = squareDimension.toString() + 'px';
            square.style.height = squareDimension.toString() + 'px';

            //add hover style
            square.addEventListener('mouseenter', e => {
                square.classList.add("drawn");
            });

            row.appendChild(square);
            }

            container.appendChild(row);
    }
    
}

//initial grid build
makeGrid(16);

function clearGrid(){
    //passes current number of squares into makeGrid()
    let currentNumber = Math.sqrt(document.querySelectorAll('.square').length);
    makeGrid(currentNumber);
    return currentNumber;
}

function resizeGrid() {
    //prompt user for how many squares
    let number = prompt('How many squares do you want?');

    //set range of possible number and re-prompts user if not in range
    if (number > 1 && number < 101 && Number.isInteger(+number)) {
        makeGrid(number);
    }
    else {
        alert('Please choose a whole number between 1 and 100');
        resizeGrid();
    }

}


