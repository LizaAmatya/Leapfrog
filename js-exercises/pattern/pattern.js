function getPattern(num) {
    var pattern = '';
    for (var i = 0; i < num; i++) {
        var linePattern = ''
        for (var j = num - i; j > 0; j--) {
            linePattern = linePattern + '*';
            //or use concat 
            //linePattern = linePattern.concat('*')

        }
        //console.log(linePattern);
        pattern += linePattern + '\n';
    }
    return pattern

}

function htmlPattern(num) {
    var store = '';
    var newpattern = '';
    var pattern = getPattern(num);

    store = pattern.split('\n');
    // console.log(typeof(store));
    // return store


    newpattern = store.join("<br>");
    // console.log(typeof(newpattern));
    return newpattern
}
console.log(htmlPattern(7));

//console.log(getPattern(7));

// document.getElementById('pat').innerHTML = htmlPattern(8);