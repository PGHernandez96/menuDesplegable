 /* const numero = document.getElementById("number")
const boton = document.getElementById("boton")
const finalizar = document.getElementById("end-boton")

let a = 0

const lista = []

boton.addEventListener("click", (e) => {
    a = a + 1
    numero.textContent = a

    if(numero.textContent == 10) {
        alert("FUA EL DIEGO")
    }

    if(numero.textContent % 5 == 0) {
        boton.style.backgroundColor = "red"
        lista.push(numero.textContent)
    }
    else{
        boton.style.backgroundColor = "green"
    }
}) 

finalizar.addEventListener("click", (e) => {
    console.log(lista)
}) */

/*************************************************************/

/* const $numero2 = document.getElementById("number2")
const $boton2 = document.getElementById("boton2")
const $finalizar2 = document.getElementById("end-boton2")

const lista2 = []

let num = 0

$boton2.addEventListener("click", (e) => {
    num = num + 1
    $numero2.textContent = num

    if($numero2.textContent % 2 == 0 || $numero2.textContent % 3 == 0 || $numero2.textContent % 5 == 0){
        $boton2.style.backgroundColor = "red"
    }
    else{
        $boton2.style.backgroundColor = "green"
        lista2.push($numero2.textContent)
    }
})

$finalizar2.addEventListener("click", (e) => {
    console.log(lista2)
    num = 0
    $numero2.textContent = num
}) */


const $btn = document.getElementById("btn")
const $sideBar = document.querySelector(".sidebar")
const $srchBtn = document.querySelector(".bx-search-alt")

console.log($srchBtn)


$btn.addEventListener("click", (e) => {
    $sideBar.classList.toggle("active")
})

$srchBtn.addEventListener("click", (e) => {
    $sideBar.classList.toggle("active")
})










