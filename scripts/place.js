document.getElementById("last-modified").textContent = document.lastModified;



let imgOriginal = true;
document.getElementById("change-img").addEventListener("click", function () {
    if (imgOriginal) {
        document.getElementById("large-img").setAttribute("srcset", "images/Puno-picture-1-desktop-large.webp")
        document.getElementById("medium-img").setAttribute("srcset", "images/Puno-picture-1-desktop-medium.webp")
        document.getElementById("small-img").setAttribute("srcset", "images/Puno-picture-1-mobile-small.webp")
    }
    else {
        document.getElementById("large-img").setAttribute("srcset", "images/Puno-picture-desktop-large.webp")
        document.getElementById("medium-img").setAttribute("srcset", "images/Puno-picture-desktop-medium.webp")
        document.getElementById("small-img").setAttribute("srcset", "images/Puno-picture-mobil-small.webp")
    }
    imgOriginal = !imgOriginal;
});

function calculateWindChill(tempF, windSpeedMph) {
    return (
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(windSpeedMph, 0.16) +
        0.4275 * tempF * Math.pow(windSpeedMph, 0.16)
    ).toFixed(2);
}

function displayWindChill() {
    let tempF = parseFloat(document.getElementById("temperature").textContent);
    let windSpeedMph = parseFloat(document.getElementById("wind-speed").textContent);

    const windchillElement = document.getElementById("windchill");
    if (tempF <= 50 && windSpeedMph > 3) {
        const windChillFactor = calculateWindChill(tempF, windSpeedMph);
        windchillElement.textContent = `${windChillFactor}°F`;
    } else {
        windchillElement.textContent = "N/A";
    }
}

window.onload = displayWindChill;
