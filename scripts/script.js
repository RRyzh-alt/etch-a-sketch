//Grid Creation:
const container = document.querySelector(".container");
//function to create div with class

let gridNum = 16;

function createGrid () {
    for (let i = 0; i<gridNum; i++) {
            let div = document.createElement("div");
            div.className = "grid-row";
            container.appendChild(div)
             for  (let x = 0; x<gridNum; x++) {
                let box = document.createElement("div");
                box.className = "grid-column"
                div.appendChild(box)
             }
    }
}

createGrid()
activateColour()

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
     gridNum = sliderValue.value;
     createGrid()
     activateColour()

    
})

//Grid Coloring:
function activateColour() {
const gridSquares = container.querySelectorAll(".grid-column")


let isColouring = false;
function toggleColour(event) {
    if (isColouring === true) {
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

}



