let x = document.getElementById("input").value;
let button = document.getElementById("btn");


button.addEventListener("click", fF);

function fF()  {

document.getElementById("spinnerid").classList.remove("d-none");
document.getElementById("value").classList.remove("text-danger");
if(document.getElementById("input").value > 50){

  
  document.getElementById("spinner").classList.add("d-none");
  document.getElementById("value").classList.add("text-danger");
  document.getElementById("value").innerHTML = "Can’t be larger than 50";
} else {
document.getElementById("value").innerHTML = ''
x = document.getElementById("input").value;
server = `http:localhost:5050/fibonacci/${x}`;
fetch(server).then((response) => {
  if(!response.ok){
    document.getElementById("spinner").classList.add("d-none");
    document.getElementById("value").classList.add("text-danger");
    document.getElementById("value").innerHTML = `Server Error: 42 is the meaning of life`;
  }
  response.json().then( data => { document.getElementById("value").innerHTML = data.result});
  document.getElementById("spinner").classList.add("d-none");
});

}}