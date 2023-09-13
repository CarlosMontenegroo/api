let ApiBoton = document.getElementById("boton");
let LlamarAPI = document.getElementById("LlamarAPI");

let callAPI = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(res => res.json())
  .then(data => {
    LlamarAPI.innerText = JSON.stringify(data);


  })
}
ApiBoton.addEventListener("click", callAPI);


        

        
        
        
        
        
        
    



    











