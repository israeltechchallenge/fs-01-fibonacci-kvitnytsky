document.getElementById(id='x').innerHTML='x';
document.getElementById(id='y').innerHTML='y';

let x

function f(x){
    fq=[0,1];
    if (x<=1){return fq[0]};
    if (x==2){return fq[1]};
    if(x>2){
        for(let i=1; i<=x-2; i++){
        fq.push(fq[fq.length-1]+fq[fq.length-2])
        }
       return (fq[fq.length - 1]);
    }
};
document.getElementById(``).innerHTML=f(5);
document.getElementById(`y`).innerHTML=f(5);






    

