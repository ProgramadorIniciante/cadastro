'use strict';
/*
let person ={
    saldo : 20,
    nome : "kakashi-senpai",
    cc : 12587,
}

let operation = {
    sacar : (saldo,valor)=>{
        return saldo-=valor
    },
    debitar : (saldo,valor)=>{
        return person.saldo = saldo+=valor
    }
}


let banco = {
    person : person,
    operation : operation
}

let array = [1,2,1,3,1,10]

let x = array.every(
    function very(elem,index,obj) {
        return (typeof(elem) == "number") 
    }
)


let y = array.filter(
    (elem,ind,obj)=>{
        if(elem >2){
            return elem
        }
    }
)

let u = array.lastIndexOf(1)

let Redu = array.reduce((v1,v2,elem,ind,obj)=>{
        return v1+v2
})

let shift = array.shift()


let slice = array.slice(1,4)





let splice = array.splice(2,3)


let seguidores = document.querySelectorAll(".y3zKF")

for(let c = 0 ; c<seguidores.length ; c++){
    let seguir = setInterval(()=>{
        if(seguidores[c].classList[2] == "y3zKF"){
            seguidores[c].click()
        }else{
            console.log("voce ja segui esse")
        }
    },30000)
}*/

function mostrar(event){
    let gale = document.querySelector("#galeria")
    let dados = event.target.files
    let reader = new FileReader()
    reader.onload = (event)=>{
        let url = event.target.result

    let foto = document.createElement("img")
    foto.setAttribute("src",url)
    foto.id = "fotos"
    gale.appendChild(foto)
    }
    

    reader.readAsDataURL(dados[0])
    
    
}


document.querySelector("#btn2").addEventListener("change",mostrar)

