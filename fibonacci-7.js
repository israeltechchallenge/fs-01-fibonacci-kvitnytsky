let button=document.getElementById('buttonid');
let input=document.getElementById('inputid');
let result=document.getElementById('resultid');
let error=document.querySelector('.error');
let sErerror=document.getElementById('errorid');
let newContainer=document.querySelector('.newcontainer');
let spinner=document.getElementById('spinnerid');
let checkbox=document.getElementById('checkbox')

button.addEventListener('click',fibonacci)
function fibonacci(){
if(document.getElementById('checkbox').checked){
result.classList.add("spinner-border", "text-primary");
if(input.value>50){
input.classList.add("border-danger", "text-danger");
error.classList.remove("d-none");
}
if (input.value <= 0) {
 result.classList.remove(
"spinner-border",
"text-primary",
"font-weight-bold"
)
result.classList.add("text-danger");
result.innerText = "Error: number can't be smaller than 1";
}
else{
fetch(`http://localhost:5050/fibonacci/${input.value}`)
.then((res)=>{
if(res.ok) return res.json();{
return res.text().then((text) => {
throw new Error(text);
})
}
})
.then((data) => {
result.classList.remove(
"spinner-border",
"text-primary",
"text-danger"
);
result.classList.add("fs-4", "text-decoration-underline");
result.innerHTML=data.result;
})
.catch((error) => {
result.classList.remove(
"spinner-border",
"text-primary",
"font-weight-bold"
);
result.classList.add("text-danger");
result.innerText = error;
});};
}
else{
  function localfib(input) {
      
    fq = [0, 1];
    if (input <= 1) {
      return fq[0];
    }
    if (input == 2) {
      return fq[1];
    }
    console.log('output:', input)
    if (input > 2) {
  
      for (let i = 0; i <= input - 2; i++) {
        fq.push(fq[fq.length - 1] + fq[fq.length - 2]);
      }
      console.log('output:')
      let output = fq[fq.length - 1];
      console.log('output:', output)
      result.innerHTML = output;
  
    }
  }
  localfib(input.value);
}}

window.addEventListener("load", fetchRequests);

function fetchRequests(){
spinner.classList.remove("d-none");
fetch("http://localhost:5050/getFibonacciResults")
.then((response) => response.json())
.then((data) => {
spinner.classList.add("d-none");
let newList=data.results;
newContainer.innerHTML = '';
for(let item of newList){
let newElm = document.createElement("li");
newElm.innerHTML = `The Fibonnaci Of <b>${item.number}</b> is <b>${
item.result
}</b>. Calculated at: ${new Date(item.createdDate)}`;
newContainer.appendChild(newElm);
newElm.className = 
"fs-5 border-bottom pb-3 border-secondary mt-3 d-inline-block";
}
});
}
