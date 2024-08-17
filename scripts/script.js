//Grid Creation:
const container = document.querySelector(".container");
//function to create div with class
function createDiv() {
    let div = document.createElement("div");
    div.className = "grid-div";
    container.appendChild(div);

    return div;
}
let gridRow = 16;
let gridColumn = 16;

function createGrid () {
    for (i = 0; i<(gridRow * gridColumn); i++) {
        createDiv();
    }
}

createGrid()

//Grid Coloring:

const gridSquares = container.querySelectorAll(".grid-div")


let isColouring = false;
function toggleColour(event) {
    if (isColouring) {
        event.target.style.backgroundColor = "red";
    }  
}

gridSquares.forEach((div) => {
    div.addEventListener("mousedown", (event) => {
        isColouring = true;
    });
    div.addEventListener("mouseup", () => {
        isColouring = false;
    });
    div.addEventListener("mousemove", toggleColour);

});

//Mouse behaviours:

const dragOff = container.addEventListener("dragstart", (event) => {
    event.preventDefault(); 
});

const dropOff = container.addEventListener("drop", (event) => {
    event.preventDefault();
});

//Clear Grid:
const eraser = document.querySelector(".reset");

function defaultColor() { 
gridSquares.forEach((div) => {
    div.style.backgroundColor = "white";
})
}

eraser.addEventListener("click", () => {
    defaultColor()
});

// Change Grid:

let sliderValue = document.querySelector("#range");
let valueOutput = document.querySelector("#output");
function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

valueOutput.textContent = sliderValue.value;
sliderValue.oninput = function () {
    valueOutput.textContent = this.value; 
}

sliderValue.addEventListener("change", (event) => {
    removeGrid();
     gridRow = sliderValue.value;
     gridColumn = sliderValue.value;
     createGrid()

    
})



