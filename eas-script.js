//VARIABLES
let userInput;
let gridsize;

//CREATE THE INITIAL GRID
const workspace = document.querySelector("div.workspace");
createGrid(5);

//BUTTON EVENT LISTENERS
const button = document.querySelector("button");
button.addEventListener('click', clearSquares);
button.addEventListener('click', getInput);

//FUNCTIONS
function changeColor(e){
  this.classList.add("squareHover");
}

function clearSquares(){
  const hoveredSquares = document.querySelectorAll('div.squareHover');
  hoveredSquares.forEach(squareHover => squareHover.classList.remove('squareHover'));

}

function getInput(){
  userInput = prompt('Enter a grid size','5');
  if (!userInput){
    return
  }
  clearGrid();
  createGrid(userInput);
}

function createGrid(size){
for (i=0; i<(size*size); i++){
  const square = document.createElement("div");
  square.classList.add("square");
  workspace.appendChild(square);
  }
const allsquares = document.querySelectorAll("div.square");
allsquares.forEach(square => square.addEventListener('mouseover', changeColor));

gridsize = "auto";
for(i=0; i<(size-1); i++){
gridsize += " auto"
}document.getElementsByClassName('workspace')[0].style.gridTemplateColumns = gridsize; 
}

function clearGrid(){
    while (workspace.firstChild){
    workspace.removeChild(workspace.lastChild);
}}