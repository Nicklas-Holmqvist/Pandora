const partOneHeight = document.querySelector('#part-1').style.height = "100%";
const partOneDisplay = document.querySelector('#part-1').style.display = "flex";

const partTwoHeight = document.querySelector('#part-2').style.height = "0%";
const partTwoDisplay = document.querySelector('#part-2').style.display = 'none';

const partThreeHeight = document.querySelector('#part-3').style.height = "0%";
const partThreeDisplay = document.querySelector('#part-3').style.display = "none";

const partFourHeight = document.querySelector('#part-4').style.height = "0%";
const partFourDisplay = document.querySelector('#part-4').style.display = 'none';


function nextPart() {
    const partOneHeight = document.querySelector('#part-1').style.height = "0%";
    const partOneDisplay = document.querySelector('#part-1').style.display = "none";
    const partTwoHeight = document.querySelector('#part-2').style.height = "100%";
    const partTwoDisplay = document.querySelector('#part-2').style.display = 'flex';
}
function nextPart2() {
    const partTwoHeight = document.querySelector('#part-2').style.height = "0%";
    const partTwoDisplay = document.querySelector('#part-2').style.display = "none";
    const partThreeHeight = document.querySelector('#part-3').style.height = "100%";
    const partThreeisplay = document.querySelector('#part-3').style.display = 'flex';
}
function nextPart3() {
    const partThreeHeight = document.querySelector('#part-3').style.height = "0%";
    const partThreeDisplay = document.querySelector('#part-3').style.display = "none";
    const partFourHeight = document.querySelector('#part-4').style.height = "100%";
    const partFourDisplay = document.querySelector('#part-4').style.display = 'flex';
}

document.querySelector('#chooseName').addEventListener('click', getMyName);


function getMyName() {

    const getName = document.querySelector('#myNameInput').value;
    console.log(getName)

    if (getName == "Karl" || getName == "karl") {
        document.querySelector('#myNameIs').innerText = "Du har bra smak!"

    }

    else if (getName == "David" || getName == "david") {
        document.querySelector('#myNameIs').innerText = "Hehe, inte så troligt! Hej Karl!"
    }

    else {
        document.querySelector('#myNameIs').innerText = "Hej " + getName + ", det var ju ett fint namn. Men jag tror jag kallar dig Karl!"
    }
}

document.querySelector('#chooseStatus').addEventListener('click', playerMorningStatus);

function playerMorningStatus() {

    const myStatus = document.querySelector('#isTiredInMorning').value;

    if (myStatus == "Ja" || myStatus == "ja") {
        document.querySelector('#myStatus').innerText = "Nej, nej, nej... det blir inget roligt spel om du väljer detta. Välj det andra!"
    }

    else if (myStatus == "Nej" || myStatus == "nej") {
        document.querySelector('#myStatus').innerText = "Intressant, hoppas du inte får kicken!"
    }

    else {
        document.querySelector('#myStatus').innerText = "Det är tyvärr inget val!"
    }
}

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