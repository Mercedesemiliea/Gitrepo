import './style.css'



function createHeader (){
  const containerHeader = document.getElementById("header");
const titleHeader = document.createElement("h1");
titleHeader.innerHTML = "Testing";


const buttonHeader = document.createElement("button");
buttonHeader.innerHTML = "hämta titel";

buttonHeader.addEventListener("click", () => {
  const containerHeader = document.getElementById("header");
const titleHeader = document.createElement("h1");
titleHeader.innerHTML = "Testing";
containerHeader?.appendChild(titleHeader);

})

containerHeader?.appendChild(buttonHeader);
}
 createHeader();