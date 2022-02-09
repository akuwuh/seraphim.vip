if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 350);

}

var x = 0;

var titleText = ["⠀", "s", "se", "ser", "sera", "serap", "seraph", "seraphi", "seraphim", "seraphim ", "seraphi", "seraph", "serap", "sera", "ser", "se", "s", "⠀", ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];

}