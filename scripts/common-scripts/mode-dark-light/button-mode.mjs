import { setThemeDark, removeThemeDark } from "./index.mjs";
const root = document.querySelector(":root");
const buttonDarkmode = document.querySelector(".header__darkmode");

export const buttonMode = buttonDarkmode.addEventListener("click", (event) => {
    if (root.classList.contains("dark")) {
        removeThemeDark();
    } else {
        setThemeDark();
    }
})



