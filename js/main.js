//todo: Make button nicer, adjust no. squares

//set dom consts
const container = document.createElement('div');
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => resetGrid());

//makes grid space
container.classList.add('container');
container.innerHTML = "";
container.setAttribute("style", "display:flex; flex-wrap: wrap; flex-direction: row; height: 60vh; width: 60vh; margin: auto; background-color: lightblue; border: solid black 1px;");
document.body.appendChild(container);

//set squares variable to be used in clearing
const square = document.querySelector('.square');
let squares = container.childNodes;
 
//makes grid squares
function makeGrid(number){
    let squareDimension = (500)/number;
    
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

            //square.setAttribute("style", "margin: none; height: 18vh; width: 18vh; border: solid hsl(195, 53%, 65%) 0.5px;")
            container.appendChild(row);
    }
    
}

makeGrid(16);

/*
function resetGrid() {
    //prompts user for how many squares
    let rowsNumber = prompt('How many squares do you want?');
    //console.log(squaresNumber)

    //clear grid
    var i = squares.length;
    while( i-- ) {
        if( squares[i].className && squares[i].className.indexOf("square") > -1 ) {
        squares[i].parentNode.removeChild( squares[i] );
        }
    }

    if (rowsNumber > 1 && rowsNumber < 51 && Number.isInteger(+rowsNumber)) {
        makeGrid(rowsNumber);
    }
    else {
        alert('Please choose a whole number between 1 and 50');
        resetGrid();
    }

}
*/

