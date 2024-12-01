
function second() {
    console.log("second printed");
}

function third() {
 console.log("third printed");
}

function first() {
    console.log("first printed");
    second();
    third();
}

first();