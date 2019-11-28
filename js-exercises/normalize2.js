var input = {
    '1': {
        id: 1,
        name: 'John',
        children: [
            { id: 2, name: 'Sally' },
            { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] }
        ]
    },
    '5': {
        id: 5,
        name: 'Mike',
        children: [{ id: 6, name: 'Peter' }]
    }
};

var op = {};

id = 1;

function normal(input) {
    Object.values(input).map(function(el) {

        op[id] = { id: el.id, name: el.name };
        // console.log('output>>', op);
        id++;
        var res = [];
        res = check(el);

        if (res) {
            // console.log('child returned')
            op[el.id] = { id: el.id, name: el.name, children: res };

        }
        return el;
    })

    return op;
}

function check(item) {

    if (item.hasOwnProperty('children')) {

        normal(item.children);
        var child = [];
        for (var i = 0; i < item.children.length; i++) {
            // console.log('children found', item.children[i].id);
            child.push(item.children[i].id);
        }
        // console.log('child>>', child);

        return child;
    }
}

console.log(normal(input));