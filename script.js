const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
    
  };
};
  
let myElem = document.getElementById('myBtn');
myElem.onclick = function() {
    let row = prompt("Please enter number of rows", "16 grids");
    let col = prompt("Please enter number of columns", "16 grids");

    if ((row != null) && (col != null)) {

        if ((row <= 100) && (col <= 100)){
            makeRows(row,col);
        
        }

        else {
            alert("Your number is above 100, please enter a number that is below 100");

        };

    };

};