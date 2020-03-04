window.addEventListener("load", function() {
//let main = document.getElementById("main");
//let size = 4;
//console.log(1);
//for(let i = 0; i < size; i++) {
//    let div = document.createElement("DIV");
//    for (let j = 0; j < size; j++) {
//        let pic = document.createElement("DIV");
//        div.appendChild(pic);
//    }
//    console.log(2)
//    main.appendChild(div);
//}
    let divs0 = document.createElement("DIV");
    divs0.setAttribute("class", "flip-card");
    let divs1 = document.createElement("DIV");
    divs1.setAttribute("class", "flip-card-inner");
    let divs2 = document.createElement("DIV");
    divs2.setAttribute("class", "flip-card-back");
    let divs3 = document.createElement("DIV");
    divs3.setAttribute("class", "flip-card-front");
    let imag = document.createElement("IMG");
    imag.src="images/paul1.jpg";
    imag.style="width:200px;height:200px;";
    divs1.onclick=()=>{
        divs1.style = "transform: rotateY(180deg);";
    };
    divs2.appendChild(imag);
    divs1.appendChild(divs2);
    divs1.appendChild(divs3);
    divs0.appendChild(divs1);
    document.getElementById("x").appendChild(divs0);
});