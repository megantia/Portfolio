const sidebar = document.getElementById("sidebar");
const openBtn = document.querySelector(".open-btn");

function openNav() {
  sidebar.classList.add("active");
  sidebar.inert = false;
  openBtn.setAttribute("aria-expanded", "true");
  // Move keyboard focus into the menu
  sidebar.querySelector(".menu a").focus();
}

// returnFocus is true when closed with the × button or Escape,
// so keyboard users land back on the menu button
function closeNav(returnFocus) {
  sidebar.classList.remove("active");
  sidebar.inert = true;
  openBtn.setAttribute("aria-expanded", "false");
  if (returnFocus) {
    openBtn.focus();
  }
}

// Close the menu with the Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && sidebar.classList.contains("active")) {
    closeNav(true);
  }
});
