// Selecting the largest image
const image = document.querySelector("img.community");

// When page is loaded, hide the loader and enable scrolling
const loaded = () => {
  document.querySelector(".loader").style.display = "none";
  document.body.style.overflowY = "auto";
};

// Add an event listener to when the webpage content is loaded
document.addEventListener("DOMContentLoaded", () => {
  // After the fonts are loaded, check if the image is loaded and run the function
  document.fonts.ready.then(() => {
    if (image.complete) {
      loaded();
    } else {
      // If is not loaded, add an event listener for when it will be and set the callback to the loaded function
      image.addEventListener("load", loaded);
    }
  });
});
