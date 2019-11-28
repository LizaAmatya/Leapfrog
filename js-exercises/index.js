var languages = [
    'js', 'php', 'java', 'python', 'go',
    'js', 'php', 'java', 'python', 'go', 'ruby', 'c', 'rust',
    'js', 'php', 'java', 'python', 'go', 'c++', 'c#', 'python'
]

function unique() {
    var uniqueArr = []
    for (var i = 0; i < languages.length; i++) {
        if (uniqueArr.indexOf(languages[i]) == -1)
            uniqueArr.push(languages[i]);

    }
    console.log('Unique Arr>>', uniqueArr)
}

unique();

function count() {
    var counts = {};
    languages.forEach(function(val, index) {
        if (typeof counts[val] === 'undefined')
            counts[val] = 1;

        else
            counts[val]++;

    })
    console.log(counts);

}

count();

// function countOccurance(arr) {
//     return arr.reduce(function(acc, curr, i, source) {
//         if (!acc[curr]) acc[curr] = 1;
//         else acc[curr]++;
//         return acc;
//     }, {});
// }