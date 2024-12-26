const container = document.querySelector(".container");

for (i = 0; i < 16*16; i++) {
    const pixel = document.createElement("div");
    pixel.setAttribute("style", "height: 30px; width: 30px; border: 2px solid black;")
    container.appendChild(pixel);

    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = "black";
    });
}


