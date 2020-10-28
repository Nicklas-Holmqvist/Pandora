
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

// Välj status, Klösmage eller Klippa

document.querySelector('#chooseStatus').addEventListener('click', playerMorningStatus);

function playerMorningStatus() {

    const myStatus = document.querySelector('#isTiredInMorning').value;

    if (myStatus == "Vek" || myStatus == "vek") {
        document.querySelector('#myStatus').innerText = "Oj oj oj..." + myName + " det här kommer inte bli lätt!";
    }

    else if (myStatus == "Klippa" || myStatus == "klippa") {
        document.querySelector('#myStatus').innerText = "Intressant " + myName + ", nu får de allt se upp!"
    }

    else {
        document.querySelector('#myStatus').innerText = "Det är tyvärr inget val!"
    }
}

// Välj vapen

document.querySelector('#chooseWeaponScene').addEventListener('click', playerWeapon);

const inputWeapon = document.querySelector('#whatWeapon');
const textWeapon = document.querySelector('#textWeapon');

function playerWeapon() {

    const whatWeapon = document.querySelector('#whatWeapon').value;

    if (whatWeapon == "Pistol" || whatWeapon == "pistol") {
        nextPartToPistolRegret()
    }
    else if (whatWeapon == "Shotgun" || whatWeapon == "shotgun") {
        nextPartToShotgunRegret()
    }
    else if (whatWeapon == "PSG" || whatWeapon == "psg") {
        nextPartToPsgRegret()
    }
    else if (whatWeapon == "Fatman" || whatWeapon == "fatman") {
        nextPartToFatmanRegret()
    }    
    else {
        resultat.innerText = "Det är tyvärr inget vapen!!!"
    }
}

// Kassaskåpet

document.querySelector('#lockUp').addEventListener('click', lockUp)

const lockUpResult = document.querySelector('#lockIsUp');

function lockUp() {
    const getSafeNr = document.querySelector('#getNumber').value;

    if ( getSafeNr == 7274) {
        lockUpResult.innerText = "Testa vänd på siffrorna! 7 kanske är 1 eller 2?";
    }

    else if ( getSafeNr == 1224) {
        lockUpResult.innerText = "Äntligen! Nu ska vi se vad myName har att leka med!";
    }
    else {
        lockUpResult.innerText = "Rösten talar till " + myName + " - testa 1224!";
    }
}

document.querySelector('#part-1-2').addEventListener('click', nextPart2);
document.querySelector('#part-2-3').addEventListener('click', nextPart3);
document.querySelector('#part-3-4').addEventListener('click', nextPart4);
document.querySelector('#part-4-5').addEventListener('click', nextPart5);
document.querySelector('#part-5-6').addEventListener('click', nextPart6);
document.querySelector('#part-6-7').addEventListener('click', nextPart7);

document.querySelector('#part-8-7').addEventListener('click', nextPartIfShotgunRegretYes);
document.querySelector('#part-8-9').addEventListener('click', nextPart8);
document.querySelector('#part-9-10').addEventListener('click', nextPart9);
document.querySelector('#part-10-20').addEventListener('click', nextPart10);

document.querySelector('#part-11-7').addEventListener('click', nextPartIfPistolRegretYes);
document.querySelector('#part-11-12').addEventListener('click', nextPart11);
document.querySelector('#part-12-13').addEventListener('click', nextPart12);
document.querySelector('#part-13-20').addEventListener('click', nextPart13);

document.querySelector('#part-14-7').addEventListener('click', nextPartIfPsgRegretYes);
document.querySelector('#part-14-15').addEventListener('click', nextPart14);
document.querySelector('#part-15-16').addEventListener('click', nextPart15);
document.querySelector('#part-16-20').addEventListener('click', nextPart16);

document.querySelector('#part-17-7').addEventListener('click', nextPartIfFatmanRegretYes);
document.querySelector('#part-17-18').addEventListener('click', nextPart17);
document.querySelector('#part-18-19').addEventListener('click', nextPart18);
document.querySelector('#part-19-20').addEventListener('click', nextPart19);


// Scene changeBtn

const startScreen = document.querySelector('#part-1').style.marginLeft = '0';

// Intro before choices

function nextPart2() {
    const partOneHeight = document.querySelector('#part-1').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-2').style.marginLeft = "0";
}
function nextPart3() {
    const partOneHeight = document.querySelector('#part-2').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-3').style.marginLeft = "0";
}
function nextPart4() {
    const partOneHeight = document.querySelector('#part-3').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-4').style.marginLeft = "0";
}
function nextPart5() {
    const partOneHeight = document.querySelector('#part-4').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-5').style.marginLeft = "0";
}
function nextPart6() {
    const partOneHeight = document.querySelector('#part-5').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-6').style.marginLeft = "0";
}
function nextPart7() {
    const partOneHeight = document.querySelector('#part-6').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-7').style.marginLeft = "0";
}

// Weapon choices

// Shotgun scenes

function nextPartToShotgunRegret() {
    const partOneHeight = document.querySelector('#part-7').style.marginRight = "-100%";
    const partTwoHeight = document.querySelector('#part-8').style.marginLeft = "0";
}

// Shotgun change firearm
// Change weapon
function nextPartIfShotgunRegretYes() {
    const partOneHeight = document.querySelector('#part-8').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-7').style.marginLeft = "0";
}
// Continue
function nextPart8() {
    const partOneHeight = document.querySelector('#part-8').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-9').style.marginLeft = "0";
}
function nextPart9() {
    const partOneHeight = document.querySelector('#part-9').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-10').style.marginLeft = "0";
}
function nextPart10() {
    const partOneHeight = document.querySelector('#part-10').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-20').style.marginLeft = "0";
}

// Pistol scenes

function nextPartToPistolRegret() {
    const partOneHeight = document.querySelector('#part-7').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-11').style.marginLeft = "0";
}

// Pistol change firearm
// Change weapon
function nextPartIfPistolRegretYes() {
    const partOneHeight = document.querySelector('#part-11').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-7').style.marginLeft = "0";
}
// Continue
function nextPart11() {
    const partOneHeight = document.querySelector('#part-11').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-12').style.marginLeft = "0";
}
function nextPart12() {
    const partOneHeight = document.querySelector('#part-12').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-13').style.marginLeft = "0";
}
function nextPart13() {
    const partOneHeight = document.querySelector('#part-13').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-20').style.marginLeft = "0";
}

// PSG scenes

function nextPartToPsgRegret() {
    const partOneHeight = document.querySelector('#part-7').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-14').style.marginLeft = "0";
}

// PSG change firearm
// Change weapon
function nextPartIfPsgRegretYes() {
    const partOneHeight = document.querySelector('#part-14').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-7').style.marginLeft = "0";
}
// Continue
function nextPart14() {
    const partOneHeight = document.querySelector('#part-14').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-15').style.marginLeft = "0";
}
function nextPart15() {
    const partOneHeight = document.querySelector('#part-15').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-16').style.marginLeft = "0";
}
function nextPart16() {
    const partOneHeight = document.querySelector('#part-16').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-20').style.marginLeft = "0";
}

// Fatman scenes

function nextPartToFatmanRegret() {
    const partOneHeight = document.querySelector('#part-7').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-17').style.marginLeft = "0";
}

// Fatman change firearm
// Change weapon
function nextPartIfFatmanRegretYes() {
    const partOneHeight = document.querySelector('#part-17').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-7').style.marginLeft = "0";
}
// Continue
function nextPart17() {
    const partOneHeight = document.querySelector('#part-17').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-18').style.marginLeft = "0";
}
function nextPart18() {
    const partOneHeight = document.querySelector('#part-18').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-19').style.marginLeft = "0";
}
function nextPart19() {
    const partOneHeight = document.querySelector('#part-19').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-20').style.marginLeft = "0";
}