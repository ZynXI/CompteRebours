
    const head = `<link rel="stylesheet" href="style.css">` 
    document.querySelector('head').insertAdjacentHTML('afterbegin', head);   
    
    const paradays = `

<div class="j">
            <div id="jours">{days}</div>
            <div class="jours">Jours</div>

        </div>
        <div class="h">
            <div id="heures">{hours}</div>
            <div class="heures">Heures</div>

        </div>
        <div class="m">
            <div id="minutes">{minutes}</div>
            <div class="minutes">Minutes</div>

        </div>
        <div class="s">
            <div id="secondes">{secondes}</div>
            <div class="secondes">Secondes</div>


        </div>

`


document.querySelector('.ParadaysContainer').innerHTML = paradays;

function getChrono(){

const text = document.querySelector('#DateParadays');
const textDays = document.querySelector('#jours');
const textHours = document.querySelector('#heures');
const textMinutes = document.querySelector('#minutes');
const textSecondes = document.querySelector('#secondes');


const now = new Date().getTime();
const countdownDate = new Date('September 16, 2021').getTime();


const distanceBase = countdownDate - now;

const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));

const hours = Math.floor(distanceBase % ((1000 * 60 * 60 * 24 )) / ( 1000 * 60 * 60 ))

const minutes = Math.floor((distanceBase % (1000 * 60 * 60 )) / (1000 * 60))

const secondes = Math.floor((distanceBase % (1000 * 60)) / 1000 );

//text.innerText = `${days} ${hours} ${minutes} ${secondes}`;
textDays.innerText = `${days}`;
textHours.innerText = `${hours}`;
textMinutes.innerText = `${minutes}`;
textSecondes.innerText = `${secondes}`;


}

getChrono()

const countDownInterval =  setInterval(() => { 

    getChrono()
}, 1000);


/* function getDays(){

    const now = new Date().getTime();
    const countdownDate = new Date('September 16, 2021').getTime();


const distanceBase = countdownDate - now;
    const d = document.querySelector('#jours');
    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
    
    d.innerText = `${days}`;

}

getDays() */