// loader.js

document.addEventListener("DOMContentLoaded", function () {
  // Call a function to show the loader
  showLoader();

  // Simulate some delay or loading action
  setTimeout(function () {
    // Call a function to hide the loader when the loading is complete
    hideLoader();
  }, 600); // Adjust the time according to your loading time
});

function showLoader() {
  // Create the loader elements
  var loaderWrapper = document.createElement("div");
  loaderWrapper.className = "loader-wrapper";

  var loader = document.createElement("div");
  loader.className = "loader";

  var refreshIcon = document.createElement("div");
  refreshIcon.className = "refresh-icon";

  // Append elements to the loader
  loader.appendChild(refreshIcon);
  loaderWrapper.appendChild(loader);

  // Append the loader to the body
  document.body.appendChild(loaderWrapper);
}

function hideLoader() {
  // Remove the loader elements
  var loaderWrapper = document.querySelector(".loader-wrapper");
  loaderWrapper.parentNode.removeChild(loaderWrapper);
}
