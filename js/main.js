//set dom consts
const container = document.createElement('div');
const clearBrn = document.querySelector('#clearBtn');
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
function makeGrid(squaresNumber){
    for (i = 0; i<squaresNumber; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        square.setAttribute("style", "margin: 1.5px; height: 18vh; width: 18vh; border: solid black 2px;")
        
        //sets size of new squares
        /*square.setAttribute("style", "10vh");
        square.setAttribute ("style", "10vh");*/
        
        //add hover style
        square.addEventListener('mouseenter', e => {
            square.classList.add("drawn");
        });
    }
    
}

makeGrid(16);

function resetGrid() {
    //prompts user for how many squares
    squaresNumber = prompt('How many squares do you want?');
    console.log(squaresNumber);

    //clear grid
    var i = squares.length;
    while( i-- ) {
        if( squares[i].className && squares[i].className.indexOf("square") > -1 ) {
        squares[i].parentNode.removeChild( squares[i] );
        }
    }

    makeGrid(squaresNumber);
}

