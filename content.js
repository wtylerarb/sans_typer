const keySounds = {
    // TODO: make Megalovania notes bound to the number keys
    "1": "megalov1.mp3"
};


document.addEventListener("keydown", (e) => {
    const sound = "sans_voice.mp3";
    const audio = new Audio(browser.runtime.getURL(`sounds/${sound}`));
    audio.play();
});