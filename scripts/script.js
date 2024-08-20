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
activateColor()

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
     createGrid();
     activateColor();
});

//Grid Coloring:

function activateColor() {

const gridSquares = container.querySelectorAll(".grid-column");
const selectColor = document.querySelector(".color-selector");
let isColoring = false;
let isRainbow = false;
let isRainbowPaint = false;
let isShading = false;
let isShadingPaint = false;
let isLighten = false;
let isLightenPaint = false;
let isEraser = false;
let isEraserPaint = false; 
let color = selectColor.value;

const rainbowButton = document.querySelector("#rainbow");
const shadingButton = document.querySelector("#shade");
const lightenButton = document.querySelector("#lighten");
const eraserButton = document.querySelector("#eraser");

//color selector
selectColor.addEventListener("change", (event) => {
        color = event.target.value;
    })
selectColor.addEventListener("click", () => {
    isRainbow = false;
    isShading = false;
    isLighten = false; 
    isEraser = false;
    if (isRainbow === false) {
    eraserButton.style.backgroundColor = "rgb(229, 229, 229)"
    shadingButton.style.backgroundColor = "rgb(229, 229, 229)"
    lightenButton.style.backgroundColor = "rgb(229, 229, 229)"
    rainbowButton.style.backgroundColor = "rgb(229, 229, 229)"
    }
})

//generate rainbow colours
function getRandomRgb() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256); 
    randomRgb = `rgb(${red}, ${green}, ${blue})`;
    return randomRgb;
}

//rainbow button toggle
rainbowButton.addEventListener("click", (e) => {
   if (isRainbow === false) {
    isRainbow = true;
    isShading = false;
    isLighten = false; 
    isEraser = false;
    eraserButton.style.backgroundColor = "rgb(229, 229, 229)"
    shadingButton.style.backgroundColor = "rgb(229, 229, 229)"
    lightenButton.style.backgroundColor = "rgb(229, 229, 229)"
    selectColor.style.backgroundColor = "rgb(229, 229, 229)"
    e.target.style.backgroundColor = "rgb(173, 173, 173)"
   } else { 
    isRainbow = false;
    e.target.style.backgroundColor = "rgb(229, 229, 229)"
   }  
})


//shading button toggle
shadingButton.addEventListener("click", (e) => {
    if ( isShading === false) {
     isShading = true;
     isLighten = false;
     isEraser = false;
     eraserButton.style.backgroundColor = "rgb(229, 229, 229)"
     rainbowButton.style.backgroundColor = "rgb(229, 229, 229)"
     lightenButton.style.backgroundColor = "rgb(229, 229, 229)"
     selectColor.style.backgroundColor = "rgb(229, 229, 229)"
     e.target.style.backgroundColor = "rgb(173, 173, 173)"
    } else { 
     isShading = false;
     e.target.style.backgroundColor = "rgb(229, 229, 229)"
    }  
 })

//lighten button toggle

 lightenButton.addEventListener("click", (e) => {
    if ( isLighten === false) {
     isLighten = true;
     isShading = false;
     isEraser = false;
     eraserButton.style.backgroundColor = "rgb(229, 229, 229)"
     shadingButton.style.backgroundColor = "rgb(229, 229, 229)"
     rainbowButton.style.backgroundColor = "rgb(229, 229, 229)"
     selectColor.style.backgroundColor = "rgb(229, 229, 229)"
     e.target.style.backgroundColor = "rgb(173, 173, 173)"
    } else { 
     isLighten= false;
     e.target.style.backgroundColor = "rgb(229, 229, 229)"
    }  
 })
 //eraser button toggle
 eraserButton.addEventListener("click", (e) => {
    if ( isEraser === false) {
     isEraser = true;
     isShading = false;
     isLighten = false;
     rainbowButton.style.backgroundColor = "rgb(229, 229, 229)"
     shadingButton.style.backgroundColor = "rgb(229, 229, 229)"
     lightenButton.style.backgroundColor = "rgb(229, 229, 229)"
     selectColor.style.backgroundColor = "rgb(229, 229, 229)"
     e.target.style.backgroundColor = "rgb(173, 173, 173)"
    } else { 
     isEraser= false;
     e.target.style.backgroundColor = "rgb(229, 229, 229)"
    }  
 })
 //get colorvalue
 let colorValue; 
 let r;
 let g 
 let b 
 let shadeRgbArray;
 let lightenRgbArray;

 //get rgb values for lighten and shade
    gridSquares.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
           let a = e.target.style.backgroundColor;
           colorValue = a;
           var rgbArray = colorValue.split(/[(,)]/);
           r = rgbArray[1];
           g = rgbArray[2];
           b = rgbArray[3];
           let shadeNewR = +r - 10; 
           let shadeNewG = +g - 10;
           let shadeNewB = +b - 10;
           shadeRgbArray = [`rgb(${shadeNewR}, ${shadeNewG}, ${shadeNewB})`]
           let lightenNewR = +r + 10;
           let lightenNewG = +g + 10;
           let lightenNewB = +b +  10; 
           lightenRgbArray = [`rgb(${lightenNewR}, ${lightenNewG}, ${lightenNewB})`]
    
        }) 
    })

//toggle color type
function toggleColor(event) {
    if (isEraser === true && isEraserPaint === true) {
        event.target.style.backgroundColor = "rgb(256, 256, 256)"
    } else if (isShading === true && isShadingPaint === true) {
        event.target.style.backgroundColor = shadeRgbArray;
    } else if (isLighten === true && isLightenPaint === true) {
        event.target.style.backgroundColor = lightenRgbArray;
    } else if (isRainbow === true && isRainbowPaint === true) {
        event.target.style.backgroundColor = getRandomRgb();
    } else if (isColoring === true) {
        event.target.style.backgroundColor = color;
    }
}

//mouse event for coloring
gridSquares.forEach((div) => {
    div.addEventListener("mousedown", () => {
        isColoring = true;
        isRainbowPaint = true;
        isShadingPaint = true;
        isLightenPaint = true;
        isEraserPaint = true;
    });
    div.addEventListener("mouseup", () => {
        isColoring = false;
        isRainbowPaint = false;
        isShadingPaint = false;
        isLightenPaint = false;
        isEraserPaint = false;
    });
    div.addEventListener("mousemove", toggleColor);

});

container.addEventListener("mouseleave", () => {
    isColoring = false;
    isRainbowPaint = false;
    isShadingPaint = false;
    isLightenPaint = false;
    isEraserPaint = false;
})

//Mouse behaviours:

const dragOff = container.addEventListener("dragstart", (event) => {
    event.preventDefault(); 
});

const dropOff = container.addEventListener("drop", (event) => {
    event.preventDefault();
});

//Clear Grid:
const reset = document.querySelector(".reset");

function defaultColor() { 
gridSquares.forEach((div) => {
    div.style.backgroundColor = "white";
})
}

reset.addEventListener("click", () => {
    defaultColor()
});

//toggle grid lines:
let gridButton = document.querySelector("#grid-lines")
gridButton.addEventListener("click", () => {
    gridSquares.forEach((div) => {
        div.classList.toggle("grid-column"); 
        div.classList.toggle("grid-column-active");
    })
})
}