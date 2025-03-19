function generateBox() {
    const size = parseInt(document.getElementById("size").value);
    if (size < 1 || size > 10) {
        alert("Enter a valid number between 1-10.");
        return;
    }

    const boxElement = document.getElementById("box");
    boxElement.innerHTML = "";
    boxElement.style.gridTemplateColumns = `repeat(${size}, 40px)`;
    boxElement.classList.add("grid-container");

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = "*"; 
            boxElement.appendChild(cell);
        }
    }
}

