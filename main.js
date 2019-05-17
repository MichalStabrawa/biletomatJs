function getVal () {
  let selectVal = document.querySelector('select').value
  console.log(selectVal)
  let inputVal = document.getElementById('input1').value
  let inputP = parseInt(inputVal)

  console.log('Ilość:' + '' + inputP)
  let text = document.getElementById('divek')
  if (inputP > 0) {
    text.innerHTML = 'Do zapłaty' + ' ' + selectVal * inputP + 'PLN'
  } else {
    text.innerHTML = 'wybierz ilośc biletów'
  }

  const reszta = moneyValue()
  const wartosc = selectVal * inputP

  if (moneyValue() >= selectVal * inputP) {
    document.getElementById('reszta').innerHTML =
      'reszta' + ' ' + (reszta - wartosc) + 'PLN'
  } else {
    alert('Brakuje jeszcze' + ' ' + (wartosc - reszta) + 'PLN')
  }
}

function moneyValue () {
  let changeMoney = document.getElementById('moneyGet').value
  return (changeMoneyVal = parseFloat(changeMoney))
}

document.getElementById('sel').addEventListener('change', getVal)

let id = 1
let user = 'admin'
const showUser = !!(user === 'admin' && id !== 1)

console.log(showUser)

function dataOne1 () {
  let dataOne = localStorage.getItem('reduceTicket')
}

console.log(dataOne1())

const daneUlgowy = [2.5, 4, 4.5]
const daneNormal = [3.2, 5, 6, 7]

for (var i = 0; i < daneUlgowy.length; i++) {
  console.log(daneUlgowy[i])
}

function showUlgowy () {
  const selectOne = document.getElementById('sel')

  while (selectOne.firstChild) {
    selectOne.removeChild(selectOne.firstChild)
  }

  for (let i = 0; i < daneUlgowy.length; i++) {
    let selectOption = document.createElement('option')
    let selectOptiontext = document.createTextNode(daneUlgowy[i])
    selectOption.appendChild(selectOptiontext)
    selectOne.appendChild(selectOption)
  }
}

function ticketNormal () {
  const selectTwo = document.getElementById('sel')
  while (selectTwo.firstChild) {
    selectTwo.removeChild(selectTwo.firstChild)
  }

  for (let i = 0; i < daneNormal.length; i++) {
    let selectOption2 = document.createElement('option')
    let selectOption2text = document.createTextNode(daneNormal[i])
    selectOption2.appendChild(selectOption2text)
    selectTwo.appendChild(selectOption2)
  }
}

document.getElementById('inputNormal').addEventListener('change', showUlgowy)
document.getElementById('inputTwo').addEventListener('change', ticketNormal)
