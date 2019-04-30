







function getVal() {
  let selectVal=document.querySelector('select').value;
  console.log(selectVal);
  let inputVal=document.querySelector('input').value
  let inputP=parseInt(inputVal);
  console.log(typeof inputP);
  console.log(inputVal);
 let text= document.getElementById('divek');
 if(inputP>0 ){
  text.innerHTML="Do zapłaty"+" "+selectVal*inputP;
 }else {
  text.innerHTML='wybierz ilośc biletów';
 }

 const reszta = moneyValue();
 const wartosc = selectVal*inputP;

 if(moneyValue()>=selectVal*inputP){
  document.getElementById('reszta').innerHTML= "reszta"+" "+ (reszta-wartosc);
 }else {
   alert('Brakuje jeszcze'+ " "+(wartosc-reszta));
 }
 

}

function moneyValue(){
  let changeMoney = document.getElementById('moneyGet').value;
return  changeMoneyVal=parseFloat(changeMoney);
 
}


document.getElementById("sel").addEventListener('change',getVal);



let id = 1;
let user = 'admin';
const showUser = (user==='admin'&& id!==1)?true : false;

console.log(showUser);





