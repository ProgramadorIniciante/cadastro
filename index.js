((doc,win)=>{
    function mostrar(event){
        let gale = doc.querySelector("#galeria")
        let dados = event.target.files
        let reader = new FileReader()
        reader.onload = (event)=>{
            let url = event.target.result
    
        let foto = doc.createElement("img")
        foto.setAttribute("src",url)
        foto.id = "fotos"
        gale.appendChild(foto)
        }
        
    
        reader.readAsDataURL(dados[0])
        
        
    }
    
    
    doc.querySelector("#btn2").addEventListener("change",mostrar)
})(document,window)


