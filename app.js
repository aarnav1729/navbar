const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll(".menu-item").forEach(item => {
  // Store the original text value of the menu item
  item.dataset.originalValue = item.innerText;

  item.addEventListener("mouseover", event => {
    let iterations = 0;
    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
          if(index < iterations) {
            return event.target.dataset.originalValue[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= event.target.dataset.originalValue.length) {
        clearInterval(interval);
      }
      iterations += 1/3;
    }, 30);
  });

  item.addEventListener("mouseout", event => {
    let iterations = event.target.dataset.originalValue.length - 1;
    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
          if(index < iterations) {
            return event.target.dataset.originalValue[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations < 0) {
        clearInterval(interval);
        // Set the text back to the original value
        event.target.innerText = event.target.dataset.originalValue;
      }
      iterations -= 1/2;
    }, 30);
  });
});
