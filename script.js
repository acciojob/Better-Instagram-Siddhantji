document.addEventListener("DOMContentLoaded", function () {
    const divs = document.querySelectorAll(".image");

    let draggedItem = null;

    divs.forEach(div => {
        div.addEventListener("dragstart", function () {
            draggedItem = div;
        });

        div.addEventListener("dragend", function () {
            draggedItem = null;
        });

        div.addEventListener("dragover", function (event) {
            event.preventDefault();
        });

        div.addEventListener("drop", function (event) {
            event.preventDefault();
            if (draggedItem !== null && draggedItem !== div) {
                const temp = div.style.backgroundImage;
                div.style.backgroundImage = draggedItem.style.backgroundImage;
                draggedItem.style.backgroundImage = temp;
            }
        });
    });
});
