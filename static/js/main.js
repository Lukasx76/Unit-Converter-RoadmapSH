
function changeTagName(id, target) {

    const link = document.getElementById(id);
    link.addEventListener("click", function (event) {
        
        const tagToChange = document.getElementById(target)
        if (tagToChange.textContent === "Length") {
            tagToChange.textContent = "Enter the Length to convert"
        }

        else if (tagToChange.textContent === "Weight") {
            tagToChange.textContent = "Enter the Weight to convert"
        }

        else if (tagToChange.textContent === "Temperature") {
            tagToChange.textContent = "Enter the Temperature to convert"
        }
    
    })
}