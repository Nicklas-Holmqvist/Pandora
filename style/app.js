
// Scenbyten

const partTwoDisplay = document.querySelector('#part-1').style.marginLeft = '0';

function nextPart() {
    const partOneHeight = document.querySelector('#part-1').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-2').style.marginLeft = "0";
}
function nextPart2() {
    const partOneHeight = document.querySelector('#part-2').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-3').style.marginLeft = "0";

}
function nextPart3() {
    const partOneHeight = document.querySelector('#part-3').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-4').style.marginLeft = "0";
}

// Välj ett namn
let myName 

document.querySelector('#chooseName').addEventListener('click', getMyName);

function getMyName() {

    myName = document.querySelector('#myNameInput').value;
    console.log(myName)

    document.querySelector('#myNameIs').innerText = "Hej " + myName + ", det var ju ett fint namn. Men jag får se om jag kan komma ihåg det!"

    // if (getName == "Karl" || getName == "karl") {
    //     document.querySelector('#myNameIs').innerText = "Du har bra smak!"

    // }

    // else if (getName == "David" || getName == "david") {
    //     document.querySelector('#myNameIs').innerText = "Hehe, inte så troligt! Hej Karl!"
    // }

    // else {
    //     document.querySelector('#myNameIs').innerText = "Hej " + myName + ", det var ju ett fint namn. Men jag tror jag kallar dig Karl!"
    // }
}

// Välj status, morgontrött eller ej

document.querySelector('#chooseStatus').addEventListener('click', playerMorningStatus);

function playerMorningStatus() {

    const myStatus = document.querySelector('#isTiredInMorning').value;

    if (myStatus == "Klösmage" || myStatus == "klösmage") {
        document.querySelector('#myStatus').innerText = "Oj oj oj..." + myName + " det här kommer inte bli lätt!";
    }

    else if (myStatus == "Klippa" || myStatus == "klippa") {
        document.querySelector('#myStatus').innerText = "Intressant " + myName + ", nu får de allt se upp!"
    }

    else {
        document.querySelector('#myStatus').innerText = "Det är tyvärr inget val!"
    }
}

// Välj transportmedel

const hideLockup = document.querySelector('#showLockUp');
hideLockup.style.display = "none";

document.querySelector('#chooseTransport').addEventListener('click', playerTransport);

const chooseTransport = document.querySelector('#chooseTransport');
const inputTransport = document.querySelector('#whatTransport');
const textTransport = document.querySelector('#textTransport');

function playerTransport() {

    const whatTransport = document.querySelector('#whatTransport').value;

    if (whatTransport == "Buss" || whatTransport == "buss") {
        textTransport.innerText = "Jag tar nog bussen, de går ju rätt ofta"
    }

    else if (whatTransport == "Bil" || whatTransport == "bil") {
        textTransport.innerText = "Hoppas jag slipper köerna bara!"
    }

    else if (whatTransport == "Cykel" || whatTransport == "cykel") {
        inputTransport.style.display = "none";
        chooseTransport.style.display = "none";

        hideLockup.style.display = "contents";
        document.querySelector('#textTransport').innerText = "Ska vi se om vi löser det! Fyra siffror ska matas in."
    }

    else {
        resultat.innerText = "Det är tyvärr inget val!"
    }
}

// Cykellåset

document.querySelector('#lockUp').addEventListener('click', lockUp)

const lockUpResult = document.querySelector('#resultat');

function lockUp() {
    const getNr1 = document.querySelector('#nr1').value;

    if ( getNr1 == 1224) {
        lockUpResult.innerText = "Äntligen! Nu får jag skynda mig."
    }
    else {
        lockUpResult.innerText = "Helvete då, vá det inte 1224?";
    }
}