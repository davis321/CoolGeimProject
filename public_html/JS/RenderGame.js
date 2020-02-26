const picSets = [
    "shrek",
    "disappointed",
    "paul",
    "belle",
    "pewds",
    "pyro",
    "saitama",
    "rock"
];
let pics = [];

for (let i = 0; i < picSets.length; i++) {
    pics.push(picSets[i] + "1");
    pics.push(picSets[i] + "2");
}
;
pics = shuffle(pics);

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

console.log(pics);

window.addEventListener("load", function () {
    let main = document.getElementById("main");
    let size = 4;
    let index = 0;
    for (let i = 0; i < size; i++) {
        let div = document.createElement("DIV");
        for (let j = 0; j < size; j++) {
            let pic = document.createElement("IMG");
            pic.src = "images/" + pics[index] + ".jpg";
            pic.style.width = "300px";
            pic.style.height = "300px";
            let card = document.createElement("DIV");
            card.classList.add("flip-card-inner");
            card.appendChild(pic);
            div.appendChild(card);
            index++;
        }
        main.appendChild(div);
    }
});