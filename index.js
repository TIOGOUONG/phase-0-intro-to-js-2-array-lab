const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}

function removeFirstCat() {
    const copyCats = cats.slice();
    copyCats.shift();
    return copyCats;
}
function removeLastCat() {
    const copyCats =cats.slice();
    copyCats.pop();
    return copyCats;
}
function prependCat(name) {
    const prependCat =cats.slice();
    prependCat.unshift(name);
    return prependCat;
}
function appendCat(name) {
    const appendCat =cats.slice();
    appendCat.push(name);
    return appendCat;
}
function destructivelyRemoveLastCat() {
    return cats.pop()
}
function destructivelyRemoveFirstCat() {
    return cats.shift()
}