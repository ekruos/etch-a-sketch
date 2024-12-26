const container = document.querySelector(".container");
const pixelButton = document.querySelector(".pixel-button");

let howMany = 16;
buildGrids(howMany);

pixelButton.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    howMany = +prompt("How many pixels per side do you want? Maximum is 50.");
    if (howMany > 50) {
        howMany = 50;
    }
    buildGrids(howMany);
});


function buildGrids(howMany) {
    for (i = 0; i < howMany*howMany; i++) {
        const pixel = document.createElement("div");
        pixel.setAttribute(`style`, `height: ${500/howMany}px; width: ${500/howMany}px; border: 1px solid black; box-sizing: border-box;`)
        container.appendChild(pixel);
        pixel.style.opacity = 0.9;
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = "blue";
            //pixel.style.opacity += 0.9;
            
        });
    }
}



