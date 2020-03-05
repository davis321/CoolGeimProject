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
let w=4;
let h=4;

function boi(hx,wx) {
  w = wx;
  h = hx;
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
          let cardBack = document.createElement("DIV");
          cardBack.setAttribute("class", "flip-card-back");
          let cardFront = document.createElement("DIV");
          cardFront.setAttribute("class", "flip-card-front");
          let par = document.createElement("p");
          par.setAttribute("class", "rainbow-text");
          par.innerHTML = "ur mom <br>gay";
          let imag = document.createElement("IMG");
          imag.src = "images/" + pics[index] + ".jpg";
          imag.style = "width:100%;height:100%;";
          cardIn.addEventListener( 'click', function() {
            cardIn.classList.toggle('flipped');
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
  for(let i =0; i<w*h/2;i++){
    let r = Math.floor(Math.random() * pS.length);
    pics.push(pS[r] + "1");
    pics.push(pS[r] + "2");
    pS.splice(r,1);
  }
  pics = shuffle(pics);
}
