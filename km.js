function switchOff() {
    document.getElementById("bulbImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src =
        "https://res.cloudinary.com/krishnamohan479/image/upload/v1632333888/PKM_PIC-removebg-preview_dmyltk.jpg";
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("onSwitch").style.backgroundColor = "green";
    document.getElementById("offSwitch").style.backgroundColor = "silver";
    document.getElementById("my-h5").style.color = "#3b3939";
}

function switchOn() {
    document.getElementById("my-h5").style.color = "black";
    document.getElementById("bulbImage").src =
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src =
        "https://res.cloudinary.com/krishnamohan479/image/upload/v1632333489/PKM_PIC-removebg-preview_vudt98.png";
    document.getElementById("switchStatus").textContent = "Switched On";
    document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
}