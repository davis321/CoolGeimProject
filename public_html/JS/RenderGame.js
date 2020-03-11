function preset() {
    boi(4, 4);
}

const picSets = [
    "shrek",
    "disappointed",
    "eilish",
    "eminem",
    "harvey",
    "joji",
    "khaled",
    "malone",
    "miley",
    "ninja",
    "paul",
    "pooh",
    "belle",
    "pewds",
    "pyro",
    "saitama",
    "trump",
    "zucc",
    "rock"
];
let pics = [];
let w = 4;
let h = 4;
let blocks = w*h;
let count = 0;

function boi(hx, wx) {
    w = wx;
    h = hx;
    blocks = w*h;
    count = 0;
    makePics();
    makeGrid();
}

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

function makeGrid() {
    document.getElementById("x").innerHTML = "";
    let index = 0;
    for (let i = 0; i < w; i++) {
        let div = document.createElement("DIV");
        div.setAttribute("class", "row");
        for (let j = 0; j < h; j++) {

            let card = document.createElement("DIV");
            card.setAttribute("class", "flip-card");
            let cardIn = document.createElement("DIV");
            cardIn.setAttribute("class", "flip-card-inner");
            cardIn.classList.add(pics[index].substring(0, pics[index].length - 1))
            let cardBack = document.createElement("DIV");
            cardBack.setAttribute("class", "flip-card-back");
            let cardFront = document.createElement("DIV");
            cardFront.setAttribute("class", "flip-card-front");
            let par = document.createElement("p");
            par.setAttribute("class", "rainbow-text");
            par.innerHTML = "???";
            let imag = document.createElement("IMG");
            imag.src = "images/" + pics[index] + ".jpg";
            imag.style = "width:100%;height:100%;";
            cardIn.addEventListener('click', function () {
                let cond = document.getElementsByClassName('flipped')
                if(!cardIn.classList.contains('flipped') && !cardIn.classList.contains('fixed') && cond.length<2) {
                    cardIn.classList.toggle('flipped');
                    setTimeout(Match(),10);
                }
            });
            cardFront.appendChild(par);
            cardBack.appendChild(imag);
            cardIn.appendChild(cardBack);
            cardIn.appendChild(cardFront);
            card.appendChild(cardIn);
            div.appendChild(card);
            index++;
        }
        document.getElementById("x").appendChild(div);
    }
}

function makePics() {
    pics = [];
    let pS = picSets.slice(0);
    for (let i = 0; i < w * h / 2; i++) {
        let r = Math.floor(Math.random() * pS.length);
        pics.push(pS[r] + "1");
        pics.push(pS[r] + "2");
        pS.splice(r, 1);
    }
    pics = shuffle(pics);
}


function Match() {
    let flips = document.getElementsByClassName("flipped")

    if (flips.length > 1) {
        count++;
        let meme = testClass(flips[0]);
        let pair = document.getElementsByClassName(meme);
        document.getElementById('count').innerHTML = "Count:" + count;
        if(pair[0].classList.contains("flipped") && pair[1].classList.contains("flipped")) {
            setTimeout(function() {
                pair[0].classList.add('fixed')
                pair[1].classList.add('fixed')
                pair[0].classList.toggle('flipped')
                pair[1].classList.toggle('flipped')
                checkWin();
            }, 500);

        } else {
            setTimeout(function() {
                const len = flips.length;
                for(let j= 0; j < len; j++) {
                    flips[0].classList.toggle('flipped');
                }
            }, 1000);
        }

    }

}

function checkWin() {
    const guessed = document.getElementsByClassName('fixed');
    if(guessed.length == blocks) {
        alert("VICTORY ROYALE");
    }
}

function testClass(elem) {
    let value;
    for (let i = 0; i < picSets.length; i++) {
        if (elem.classList.contains(picSets[i])) {
            value = picSets[i];
        }
    }
    return value;
}
