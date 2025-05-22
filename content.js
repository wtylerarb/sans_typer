const keySounds = {
    // TODO: make Megalovania notes bound to the number keys
    "`": "megalovania0.mp3",
    "1": "megalovania1.mp3",
    "2": "megalovania2.mp3",
    "3": "megalovania3.mp3",
    "4": "megalovania4.mp3",
    "5": "megalovania5.mp3",
    "6": "megalovania6.mp3",
    "7": "megalovania7.mp3",
    "8": "megalovania8.mp3",
    "9": "megalovania9.mp3",
    "0": "megalovania10.mp3",
    "-": "megalovania11.mp3",
    "=": "megalovania12.mp3"
};


document.addEventListener("keydown", (e) => {
    const sound = keySounds[e.key] || "sans_voice.mp3";
    const audio = new Audio(browser.runtime.getURL(`sounds/${sound}`));
    audio.play();
});