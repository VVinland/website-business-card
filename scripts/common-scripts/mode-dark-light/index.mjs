import { detectDarkMode } from "./detect-Mode.mjs";
import { buttonMode } from "./button-mode.mjs";
const root = document.querySelector(":root");
const darkmode = document.querySelector(".header__darkmode");
const dark = document.querySelector(".header__dark");
const light = document.querySelector(".header__light");

function initThemeDarkLight(){
    const themeDark = localStorage.getItem("themeDark");
    if (themeDark || detectDarkMode() === "dark") {
        console.log(detectDarkMode());
        setThemeDark();
    }
}

initThemeDarkLight();

window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({ matches }) => {
        if (matches) {
            setThemeDark();
        } else {
            removeThemeDark();
        }
    })

export function setThemeDark() {
    localStorage.setItem("themeDark", "dark");
    root.classList.add("dark");
    darkmode.classList.add("visible");
    light.style.opacity = 0;
    dark.style.opacity = 1;
}

export function removeThemeDark() {
    localStorage.removeItem("themeDark");
    root.classList.remove("dark");
    darkmode.classList.remove("visible");
    light.style.opacity = 1;
    dark.style.opacity = 0;
}