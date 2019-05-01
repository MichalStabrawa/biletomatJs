







function getVal() {
  let selectVal=document.querySelector('select').value;
  console.log(selectVal);
  let inputVal=document.getElementById('input1').value;
  let inputP=parseInt(inputVal);
  
  console.log("Ilość:" +""+inputP);
 let text= document.getElementById('divek');
 if(inputP>0 ){
  text.innerHTML="Do zapłaty"+" "+selectVal*inputP + "PLN";
 }else {
  text.innerHTML='wybierz ilośc biletów';
 }

 const reszta = moneyValue();
 const wartosc = selectVal*inputP;

 if(moneyValue()>=selectVal*inputP){
  document.getElementById('reszta').innerHTML= "reszta"+" "+ (reszta-wartosc)+"PLN";
 }else {
   alert('Brakuje jeszcze'+ " "+(wartosc-reszta) +"PLN");
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





