const shareButton = document.getElementById("normalButton");
const shareButtonActive = document.getElementById("activeButton");
const active = document.getElementById("active");
const normal = document.getElementById("normal");

shareButton.addEventListener("click", function () {
  active.style.display = "flex";
  normal.style.display = "none";
});

shareButtonActive.addEventListener("click", function () {
  active.style.display = "none";
  normal.style.display = "flex";
});
