const halfPrice = [
  {
    type: 'Ulgowy 20minutowy',
    price: 1.8
  },
  {
    type: 'Ulgowy 40minutowy',
    price: 3.6
  }
]

console.log('halfPrice properties:')
for (var prop in halfPrice) {
  console.log('  ' + prop + ': ' + halfPrice[prop].type)
}

localStorage.setItem('reducedTicket', JSON.stringify(halfPrice))

const normalTicket = [
  {
    type: 'Normalny 20minutowy',
    price: 2.8 
  },
  {
    type: 'Normalny 40 minutowy',
    price: 3.8
  }
]

localStorage.setItem('normalTicket', JSON.stringify(normalTicket))

let childFirst = document.querySelector('#sel')
console.log(childFirst.children)
let childObcject = childFirst.children

console.log(childObcject.length)
