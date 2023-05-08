let boxOne = document.querySelector("#box-one")

boxOne.addEventListener("click", (eo) => {

    let pop1 = document.querySelector(".pop1")

    pop1.style.display = "flex";
    document.querySelector("#pic").src = "imges/1683358337343.jpg";
    document.querySelector("h4").innerHTML = `fresh orange`

    document.querySelector(".fa-xmark").addEventListener("click", (eo) => {
        document.querySelector(".pop1").style.display = "none"
    })

})

let boxTwo = document.querySelector("#box-two");


boxTwo.addEventListener("click", (eo) => {
    let pop1 = document.querySelector(".pop1")

    pop1.style.display = "flex";
    document.querySelector("#pic").src = "imges/1683356462474.jpg";
    document.querySelector("h4").innerHTML = `fresh strawberries`

    document.querySelector(".fa-xmark").addEventListener("click", (eo) => {
        document.querySelector(".pop1").style.display = "none"
    })
})

let boxThree = document.querySelector("#box-three");

boxThree.addEventListener("click", (eo) => {

    let pop1 = document.querySelector(".pop1")

    pop1.style.display = "flex";
    document.querySelector("#pic").src = "imges/1683356347879.jpg";
    document.querySelector("h4").innerHTML = `fresh onion`

    document.querySelector(".fa-xmark").addEventListener("click", (eo) => {
        document.querySelector(".pop1").style.display = "none"
    })
})

let boxFour = document.querySelector("#box-four");

boxFour.addEventListener("click", (eo) => {

    let pop1 = document.querySelector(".pop1")

    pop1.style.display = "flex";
    document.querySelector("#pic").src = "imges/1683440261030.jpg";
    document.querySelector("#pic").style.height = "190px";
    document.querySelector("h4").innerHTML = `fresh peach`;


    document.querySelector(".fa-xmark").addEventListener("click", (eo) => {
        document.querySelector(".pop1").style.display = "none"
    })
})


let boxFive = document.querySelector("#box-five");

boxFive.addEventListener("click", (eo) => {

    let pop1 = document.querySelector(".pop1")

    pop1.style.display = "flex";
    document.querySelector("#pic").src = "imges/1683358007746.jpg";
    document.querySelector("h4").innerHTML = `fresh lettuce`

    document.querySelector(".fa-xmark").addEventListener("click", (eo) => {
        document.querySelector(".pop1").style.display = "none"
    })
})


let boxsix = document.querySelector("#box-six");

boxsix.addEventListener("click", (eo) => {

    let pop1 = document.querySelector(".pop1")

    pop1.style.display = "flex";
    document.querySelector("#pic").src = "imges/1683440100527.jpg";
    document.querySelector("h4").innerHTML = `fresh banana`;

    document.querySelector(".fa-xmark").addEventListener("click", (eo) => {
        document.querySelector(".pop1").style.display = "none"
    })
})


