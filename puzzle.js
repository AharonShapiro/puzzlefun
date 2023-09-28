var rows = 5;
var columns = 5;

var currTile;
//tile you are dragging
var otherTile;
//tile your are switching out

var turns =0;

window.onload = function() {
  //intialize the 5x5 game board 
  for (let r=0; r< rows;r++) {
    for (let c=0; c< columns; c++){

      let tile =document.createElement("img");
      tile.src = "/Users/aharon.shapiro/Downloads/Puzzletime images/blank.jpg";
      tile.addEventListener("dragstart", dragStart); //To click and drag
      tile.addEventListener("dragover",dragOver); //When dragging an image on it has been clicked on
      tile.addEventListener("dragenter",dragEnter); //If you drag the image into another one
      tile.addEventListener("dragleave",dragLeave); //dragging an image away from another one
      tile.addEventListener("drop",dragDrop); //Drop img onto another one
      tile.addEventListener("dragend",dragEnd); //Release the dragged image 
      document.getElementById("board").append(tile);
    }
  }

  //populate images into pieces area
  let pieces = [];
  for (let i=1; i <= rows*columns; i++){
    pieces.push(i.toString()); //put 1 to 25 in the array
  }

  pieces.reverse();
  for (let i=0; i < pieces.length; i++){
    let j = Math.floor(Math.random()*pieces.length);

    let tmp = pieces[i];
    pieces[i] = pieces[j];
    pieces[j] = tmp;
  }

  for (let i = 0; i < pieces.length; i++) {
    let tile = document.createElement("img");
    tile.src = "/Users/aharon.shapiro/Downloads/Puzzletime images/" + pieces[i] + ".jpg";
    
    tile.addEventListener("dragstart", dragStart); //To click and drag
    tile.addEventListener("dragover",dragOver); //When dragging an image on it has been clicked on
    tile.addEventListener("dragenter",dragEnter); //If you drag the image into another one
    tile.addEventListener("dragleave",dragLeave); //dragging an image away from another one
    tile.addEventListener("drop",dragDrop); //Drop img onto another one
    tile.addEventListener("dragend",dragEnd); //Release the dragged image 

    document.getElementById("pieces").append(tile);
  }

//drag tiles
function dragStart () {
  currTile = this; //referring to image that was clicked on for dragging
}

function dragOver(e){
  e.preventDefault();
}

function dragEnter(e){
  e.preventDefault();
}

function dragLeave(e){
  
}

function dragDrop(e){
  otherTile = this; //img being dropped on
}

function dragEnd () {
  if (currTile.src.includes("blank")){
    return;
  }
  let currImg = currTile.src
  let otherImg = otherTile.src
  currTile.src = otherImg;
  otherTile.src = currImg;

  turns += 1;
  document.getElementById("turns").innerText =turns;
}

}


