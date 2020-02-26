window.addEventListener("load", function() {
let main = document.getElementById("main");
let size = 4;
console.log(1);
for(let i = 0; i < size; i++) {
    let div = document.createElement("DIV");
    for (let j = 0; j < size; j++) {
        let pic = document.createElement("DIV");
        div.appendChild(pic);
    }
    console.log(2)
    main.appendChild(div);
}
});