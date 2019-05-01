const halfPrice = [
    {
        type: 'Ulgowy 20minutowy',
        price: 1.8
    },
    {
        type: 'Ulgowy 40minutowy',
        price: 3.6 
    }]

    console.log('testObject properties:');
for (var prop in halfPrice) {
    console.log('  ' + prop + ': ' + halfPrice[prop].type);
}

localStorage.setItem('reduced', JSON.stringify(halfPrice));

