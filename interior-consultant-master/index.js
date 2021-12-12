window.onload = function () {
  const menuBtn = document.querySelector(".menu-btn")
  const menu = document.querySelector(".menu")
  const logo = document.querySelector(".logo")
  
  if (menuBtn) {
    let menuOpened = false
    menuBtn.addEventListener("click", () => {
      if (menuOpened) {
        menuBtn.classList.remove("open")
        menu.style.display = "none"
        logo.style.visibility = "visible"
        menuOpened = false
      } else {
        menuBtn.classList.add("open")
        menu.style.display = "flex"
        logo.style.visibility = "hidden"
        menuOpened = true
      }
    })
  }
}
