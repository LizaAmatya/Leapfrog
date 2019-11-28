var fruits = [
    { id: 1, name: 'Banana', color: 'Yellow' },
    { id: 2, name: 'Apple', color: 'Red' }
]

searchByName(fruits, 'apple');

function searchByName(arr, val) {
    arr.forEach(function(item) {
        if (item.name.toLowerCase() === val.toLowerCase()) {
            console.log(item);
        }
    })
}