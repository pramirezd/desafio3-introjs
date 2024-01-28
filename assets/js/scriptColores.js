const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");

const changeToBlack = function (event) {
    event.target.style.backgroundColor = 'black';
}

div1.addEventListener("click", changeToBlack);
div2.addEventListener("click", changeToBlack);
div3.addEventListener("click", changeToBlack);
div4.addEventListener("click", changeToBlack);

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        key.style.backgroundColor = 'pink';
    } else if (event.key === 's' || event.key === 'S') {
        key.style.backgroundColor = 'orange';
    } else if (event.key === 'd' || event.key === 'D') {
        key.style.backgroundColor = 'lightblue';
    } else if (event.key === 'q' || event.key === 'Q') {
        addDiv(event.key);
    } else if (event.key === 'w' || event.key === 'W') {
        addDiv(event.key)
    } else if (event.key === 'e' || event.key === 'E') {
        addDiv(event.key)
    }
});

function addDiv(tecla) {
    let container = document.querySelector(".container-3");
    let newDiv = document.createElement("div");
    
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";

    if (tecla === 'q') {
        newDiv.style.backgroundColor = 'purple';
    } else if (tecla === 'w') {
        newDiv.style.backgroundColor = 'grey';
    } else if (tecla === 'e') {
        newDiv.style.backgroundColor = 'brown';
    }
    
    container.appendChild(newDiv);
}