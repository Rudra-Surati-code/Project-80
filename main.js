function getParagraph1() {
    var inputs = [];
    for(var i = 1; i<7; i++) {
        inputs.push(document.getElementById("first_row_"+i).value);
    }
    inputs.join(". ");
    document.getElementById("showPragarph1").innerHTML = inputs.join(". ");
}

function getParagraph2() {
    var inputs = [];
    for(var i = 1; i<7; i++) {
        inputs.push(document.getElementById("second_row_"+i).value);
    }
    inputs.join(". ");
    document.getElementById("showPragarph2").innerHTML = inputs.join(". ");
}