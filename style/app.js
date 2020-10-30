
/** Players namn through the story*/
let myName 

/** Reload the page to reset all inputs for a new game*/
function restartGame() {
    location.reload();
}

// Function to get player name and some funny answer

/** Button to get the name from input*/
document.querySelector('#chooseName').addEventListener('click', getMyName);

/** Hide button to get to next scene*/
document.querySelector('.to-part-3').style.visibility = 'hidden';

/** Function to get players name*/
function getMyName() {

    const myNameText = document.querySelector('#myNameIs');   

    /** myName is also in the global scope, so you can re-use the name through the story*/
    myName = document.querySelector('#myNameInput').value;
    console.log(myName)    

    if (myName == "Claptrap" || myName == "claptrap") {
         document.querySelector('#myNameIs').innerText = "Du kan ju inte vara mig!"
     }

     else if (myName == "David" || myName == "david") {
         document.querySelector('#myNameIs').innerText = "Hehe, inte så troligt!"
     }

     else if (myName == "Tsourdox" || myName == "tsourdox") {
         document.querySelector('#myNameIs').innerText = "Är det du som heter David? Då får du välja ett nytt namn!"
     }

     else if (myName == "" || myName == " ") {
         document.querySelector('#myNameIs').innerText = "Vad är det för ett namn?"
     }

     else {
        myNameText.innerText = "Hej " + myName + ", det var ju ett fint namn. Men jag får se om jag kan komma ihåg det!"     
        document.querySelector('.to-part-3').style.visibility = 'visible';
        document.querySelector('#chooseName').style.display = 'none';
        document.querySelector('#myNameInput').readOnly = true;
    }
}

// Välj status, Vek eller Klippa

/** Button to get the status from input*/
document.querySelector('#chooseStatus').addEventListener('click', playerMorningStatus);

/** Hide button to get to next scene*/
document.querySelector('.to-part-4').style.visibility = 'hidden';

/** Function to get players status, vek or klippa*/
function playerMorningStatus() {

    /** Variable for status input field*/
    const myStatus = document.querySelector('#isStatus').value;

    if (myStatus == "Vek" || myStatus == "vek") {
        document.querySelector('#myStatus').innerText = "Oj oj oj..." + myName + " det är tyvärr inte tufft nog!!!";
        myStatus.value = "";
    }

    else if (myStatus == "Klippa" || myStatus == "klippa") {
        document.querySelector('#myStatus').innerText = "Intressant " + myName + ", nu får de allt se upp!"
        document.querySelector('.to-part-4').style.visibility = 'visible';
        document.querySelector('#chooseStatus').style.display = 'none';
        document.querySelector('#isStatus').readOnly = true;
    }

    else {
        document.querySelector('#myStatus').innerText = "Vaa?"
        myStatus.value = "";
    }
}

// Kassaskåpet

/** Button to get the code, player wrights in the input*/
document.querySelector('#lockUp').addEventListener('click', lockUp)

/** Hide button to get to next scene*/
document.querySelector('.to-part-7').style.visibility = 'hidden';

/** Variable for the p-tag that the functions answer use to show the player*/
const lockUpResult = document.querySelector('#lockIsUp');

/** Function to lockup the safe.
 * If correctly the button to the next scene will appear.*/
function lockUp() {

    /** Variable for the value from the safe input-field*/
    const getSafeNr = document.querySelector('#getNumber').value;

    if ( getSafeNr == 7274) {
        lockUpResult.innerText = myName + ", testa vänd på siffrorna! 7 kanske är 1 eller 2?";
    }

    else if ( getSafeNr == 1214) {
        lockUpResult.innerText = "Du är nästan där, lite till!";
    }

    else if ( getSafeNr == 1224) {
        lockUpResult.innerText = "Äntligen! Nu ska vi se vad " + myName + " har att leka med!";
        document.querySelector('.to-part-7').style.visibility = 'visible';
        document.querySelector('#lockUp').style.display = 'none';
        document.querySelector('#getNumber').readOnly = true;
    }
    else {
        lockUpResult.innerText = "Rösten talar till " + myName + " - testa 1224!";
    }
}

// Välj vapen

/** Button to get the players input for a weapon*/
document.querySelector('#chooseWeaponScene').addEventListener('click', playerWeapon);

/** Variable for the input field*/
const inputWeapon = document.querySelector('#whatWeapon');

/** Variable for the p-tag that the functions answer use to show the player*/
const textWeapon = document.querySelector('#textWeapon');

/** Function to choose a weapon. The player transfers directly to the next scene*/
function playerWeapon() {

    /** Variable for the value from the weapon input-field*/
    const whatWeapon = document.querySelector('#whatWeapon').value;

    if (whatWeapon == "Pistol" || whatWeapon == "pistol") {
        nextPartToPistolRegret()
        textWeapon.innerText = "";

    }
    else if (whatWeapon == "Shotgun" || whatWeapon == "shotgun") {
        nextPartToShotgunRegret()
        textWeapon.innerText = "";

    }
    else if (whatWeapon == "PSG" || whatWeapon == "psg") {
        nextPartToPsgRegret()
        textWeapon.innerText = "";

    }
    else if (whatWeapon == "Fatman" || whatWeapon == "fatman") {
        nextPartToFatmanRegret()
        textWeapon.innerText = "";
    }    
    else {
        textWeapon.innerText = "Det är tyvärr inget vapen!!!"
    }
}

// Buttonevents to change the scene
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

document.querySelector('#yesPlease').addEventListener('click', yesPlease);
document.querySelector('#noHell').addEventListener('click', noHell);
document.querySelector('#part-20-1').addEventListener('click', restartGame);

// Scene changeBtn
const startScreen = document.querySelector('#part-1').style.marginLeft = '0';

// Funtion to set the scenes in different positions

/** Function to get from scene 1-2*/
function nextPart2() {
    const partOneHeight = document.querySelector('#part-1').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-2').style.marginLeft = "0";
}
/** Function to get from scene 2-3*/
function nextPart3() {
    const partOneHeight = document.querySelector('#part-2').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-3').style.marginLeft = "0";
}
/** Function to get from scene 3-4*/
function nextPart4() {
    const partOneHeight = document.querySelector('#part-3').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-4').style.marginLeft = "0";
}
/** Function to get from scene 4-5*/
function nextPart5() {
    const partOneHeight = document.querySelector('#part-4').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-5').style.marginLeft = "0";
}
/** Function to get from scene 5-6*/
function nextPart6() {
    const partOneHeight = document.querySelector('#part-5').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-6').style.marginLeft = "0";
}
/** Function to get from scene 6-7*/
function nextPart7() {
    const partOneHeight = document.querySelector('#part-6').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-7').style.marginLeft = "0";
}

// Weapon choices

// Shotgun scenes

/** Function to get from scene 7-8*/
function nextPartToShotgunRegret() {
    const partOneHeight = document.querySelector('#part-7').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-8').style.marginLeft = "0";
}

// Shotgun change firearm
// Change weapon
/** Function to get from scene 8-7*/
function nextPartIfShotgunRegretYes() {
    const partOneHeight = document.querySelector('#part-8').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-7').style.marginLeft = "0";
}
// Continue
/** Function to get from scene 8-9*/
function nextPart8() {
    const partOneHeight = document.querySelector('#part-8').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-9').style.marginLeft = "0";
}
/** Function to get from scene 9-10*/
function nextPart9() {
    const partOneHeight = document.querySelector('#part-9').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-10').style.marginLeft = "0";
}
/** Function to get from scene 10-20*/
function nextPart10() {
    const partOneHeight = document.querySelector('#part-10').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-20').style.marginLeft = "0";
}

// Pistol scenes

/** Function to get from scene 7-11*/
function nextPartToPistolRegret() {
    const partOneHeight = document.querySelector('#part-7').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-11').style.marginLeft = "0";
}

// Pistol change firearm
// Change weapon
/** Function to get from scene 11-7*/
function nextPartIfPistolRegretYes() {
    const partOneHeight = document.querySelector('#part-11').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-7').style.marginLeft = "0";
}
// Continue
/** Function to get from scene 11-12*/
function nextPart11() {
    const partOneHeight = document.querySelector('#part-11').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-12').style.marginLeft = "0";
}
/** Function to get from scene 12-13*/
function nextPart12() {
    const partOneHeight = document.querySelector('#part-12').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-13').style.marginLeft = "0";
}
/** Function to get from scene 13-20*/
function nextPart13() {
    const partOneHeight = document.querySelector('#part-13').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-20').style.marginLeft = "0";
}

// PSG scenes

/** Function to get from scene 7-14*/
function nextPartToPsgRegret() {
    const partOneHeight = document.querySelector('#part-7').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-14').style.marginLeft = "0";
}

// PSG change firearm
// Change weapon
/** Function to get from scene 14-7*/
function nextPartIfPsgRegretYes() {
    const partOneHeight = document.querySelector('#part-14').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-7').style.marginLeft = "0";
}
// Continue
/** Function to get from scene 14-15*/
function nextPart14() {
    const partOneHeight = document.querySelector('#part-14').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-15').style.marginLeft = "0";
}
/** Function to get from scene 15-16*/
function nextPart15() {
    const partOneHeight = document.querySelector('#part-15').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-16').style.marginLeft = "0";
}
/** Function to get from scene 16-20*/
function nextPart16() {
    const partOneHeight = document.querySelector('#part-16').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-20').style.marginLeft = "0";
}

// Fatman scenes

/** Function to get from scene 7-17*/
function nextPartToFatmanRegret() {
    const partOneHeight = document.querySelector('#part-7').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-17').style.marginLeft = "0";
}

// Fatman change firearm
// Change weapon
/** Function to get from scene 17-7*/
function nextPartIfFatmanRegretYes() {
    const partOneHeight = document.querySelector('#part-17').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-7').style.marginLeft = "0";
}
// Continue
/** Function to get from scene 17-18*/
function nextPart17() {
    const partOneHeight = document.querySelector('#part-17').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-18').style.marginLeft = "0";
}
/** Function to get from scene 18-19*/
function nextPart18() {
    const partOneHeight = document.querySelector('#part-18').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-19').style.marginLeft = "0";
}
/** Function to get from scene 19-20*/
function nextPart19() {
    const partOneHeight = document.querySelector('#part-19').style.marginLeft = "-100%";
    const partTwoHeight = document.querySelector('#part-20').style.marginLeft = "0";
}

// Final scene

/** Hide button to get to restart the game*/
document.querySelector('#part-20-1').style.visibility = "hidden";

/** Function that show the "Yes" answer, hide Yes, No button and shows the Restart button */
function yesPlease() {
    document.querySelector('#textFinal').innerText = "Du tar ölen och lutar dig tillbaka å börjar halsa den."
    document.querySelector('#textFinal2').innerText = "- Va fan var det där för en dröm!?"
    document.querySelector('#yesPlease').style.display = "none";
    document.querySelector('#noHell').style.display = "none";
    document.querySelector('#part-20-1').style.visibility = "visible";    
}

/** Function that show the "No" answer, hide Yes, No button and shows the Restart button */
function noHell() {
    document.querySelector('#textFinal').innerText = "Du lyfter dig upp ur barstolen och börjar gå mot dörren."
    document.querySelector('#textFinal2').innerText = "- Va fan var det i den ölen!?"
    document.querySelector('#textFinal3').innerText = "Frågade " + myName + " bartendern innan han steg ut till Sanctuarys stökiga gator."
    document.querySelector('#yesPlease').style.display = "none";
    document.querySelector('#noHell').style.display = "none";
    document.querySelector('#part-20-1').style.visibility = "visible";
}