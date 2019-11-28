var arr = [{
    id: 1,
    name: 'John',
}, {
    id: 2,
    name: 'Mary',
}, {
    id: 3,
    name: 'Andrew',
}];

function sortBy(array, key) {
    var arcpy = array.map(function(item) {
        return Object.assign({}, item) //slice, concat, object.assign is used for shallow copy; and for deep copy map or loop is used;
    })
    arcpy.sort(function(a, b) {
        if (a[key] > b[key]) return 1; //return 1 and -1 -> 1 stays at exact position, -1 is for swap
        else return -1;

    })
    return arcpy;
}

var sorted = sortBy(arr, 'name');
console.log(sorted);
console.log(arr);