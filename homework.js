document.addEventListener("DOMContentLoaded", function() {
    const mainDiv = document.getElementById("mainDiv");

    mainDiv.addEventListener("mouseover", () => {

        const newDiv = document.createElement("div");
        newDiv.textContent = "Це новий div";
        
        newDiv.style.backgroundColor = "lightblue";
        newDiv.style.padding = "10px";
        newDiv.style.margin = "5px";
        newDiv.style.float = "left";
        
        mainDiv.parentNode.insertBefore(newDiv, mainDiv.nextSibling);
    });

    mainDiv.addEventListener("mouseout", () => {
        const childDivs = mainDiv.parentNode.querySelectorAll("div");
        childDivs.forEach((childDiv) => {
            if (childDiv !== mainDiv) {
                mainDiv.parentNode.removeChild(childDiv);
            }
        });
    })
});
