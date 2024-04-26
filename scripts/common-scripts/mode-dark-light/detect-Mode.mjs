import { setThemeDark, removeThemeDark } from "./index.mjs";

export const detectDarkMode = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return "dark";
    } else {
        return "light";
    }
}
