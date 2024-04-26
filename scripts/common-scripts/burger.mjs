const bodyWrapper = document.querySelector(".body__wrapper");
const headerWrapper = document.querySelector(".header__wrapper");


bodyWrapper.addEventListener("click", (event) => {
    if (event.target.closest(".header__menu-burger")) {
        headerWrapper.classList.toggle("open")
    }

    if (event.target.closest(".nav")) {
        return;
    }

    if (!event.target.closest(".header__menu-burger")) {
        headerWrapper.classList.remove("open")
    }
})

