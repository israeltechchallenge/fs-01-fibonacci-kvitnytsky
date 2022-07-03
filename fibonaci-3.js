let x = document.getElementById('x');
let y = document.getElementById('result');


function f(x){
    fq=[0,1];
    if (x<=1){return fq[0]};
    if (x==2){return fq[1]};
    if(x>2){
        for(let i=1; i<=x-2; i++){
        fq.push(fq[fq.length-1]+fq[fq.length-2])
        }
       let result=(fq[fq.length - 1]);
       y.innerText = result;
       return result;
    }
};

document.getElementById('btn').addEventListener("click", ()=>f(x.value));




