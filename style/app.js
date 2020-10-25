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