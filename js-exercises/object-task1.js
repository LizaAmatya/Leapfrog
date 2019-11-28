var person = {
    name: 'liza amatya',
    email: 'lizaamatya@gmail.com',
    address: 'kupondole',
    education: [
        { name: 'nightingale', date: 2068 },
        { name: 'united', date: 2070 },
        { name: 'kec', date: 2075 }
    ]
}

person.education.forEach(function(item) {
    console.log('Name:', item.name, ',', 'Passed Out Year:', item.date);
});