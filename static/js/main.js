const list = document.getElementById('conversion-options');
const heading = document.getElementById('targetTag');

list.addEventListener('click', (event) => {
  const option = event.target.closest('a');

  if (!option) {
    return;
  }

  event.preventDefault();

  if (option.textContent.trim() === "Length") {
    heading.innerText = "Enter the Length to convert"
  }
  if (option.textContent.trim() === "Weight") {
    heading.innerText = "Enter the Weight to convert"
  }
  if (option.textContent.trim() === "Temperature") {
    heading.innerText = "Enter the Temperature to convert"
  }

});