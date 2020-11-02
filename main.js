var chords = [['C', 'Dm', 'Em', 'F', 'G', 'Am'], 
              ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm'], 
              ['D', 'Em', 'F#m', 'G', 'A', 'Bm'], 
              ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm'], 
              ['E', 'F#m', 'G#m', 'A', 'B', 'C#m'], 
              ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm'], 
              ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m'], 
              ['G', 'Am', 'Bm', 'C', 'D', 'Em'], 
              ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm'], 
              ['A', 'Bm', 'C#m', 'D', 'E', 'F#m'], 
              ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm'], 
              ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m']]

var verseChords = [];
var chorusChords = [];

var keySignature = document.querySelector('#key-sign');
var majMin = document.querySelector('#maj-min');
var writeSong = document.querySelector('.write-song');
var song = document.querySelector('.full-song');
var verseOne = document.querySelector('.verse');
var chorus = document.querySelector('.chorus');


var key = chords[0];

writeSong.addEventListener('click', chordProgression);

song.addEventListener('mousedown', function(event) {
    if (event.target.className === 'chord') {
        playSound(event.target);
    }
});
song.addEventListener('touchstart', function(event) {
  if (event.target.className === 'chord') {
      playSound(event.target);
  }
});

function playSound(e) {
  var eventText = e.innerText
  const audio = document.querySelector(`audio[class="${eventText}"]`);
  if (!audio) return;
  e.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

song.addEventListener('mouseup', function(event) {
  if (event.target.className === 'chord playing') {
    if (event.target.propertyName !== 'transform') {
      event.target.classList.remove('playing');
      }
      var eventText = event.target.innerText;
      var audio = document.querySelector(`audio[class="${eventText}"]`);
      audio.pause();
      audio.currentTime = 0;
    }
  });

  song.addEventListener('touchend', function(event) {
    if (event.target.className === 'chord playing') {
      if (event.target.propertyName !== 'transform') {
        event.target.classList.remove('playing');
        }
        var eventText = event.target.innerText;
        var audio = document.querySelector(`audio[class="${eventText}"]`);
        audio.pause();
        audio.currentTime = 0;
      }
    });

function randomChordGenerator(array) {
  var randomNum = Math.floor(Math.random()*6);
  var newChord = key[randomNum];
  array.push(newChord);
};

function chordProgression(event){
  event.preventDefault();
  if (majMin.value === 'major'){
    keySelectorMajor();
  }else if (majMin.value === 'minor'){
    keySelectorMinor();;
  }
  verseMaker();
  chorusMaker();
  showChords();
}

function verseMaker() {
  verseChords = [];
  verseOne.innerHTML = '';
  if (majMin.value === 'major'){
    verseChords.push(key[0]);
  }else if (majMin.value === 'minor'){
    verseChords.push(key[5]);
  }
  for (var i = 0; i < 3; i++){
    randomChordGenerator(verseChords);
  }
}

function chorusMaker() {
  chorusChords = [];
  chorus.innerHTML = '';
  for (var i = 0; i < 4; i++){
    randomChordGenerator(chorusChords);
  }
}

function showChords(){  
  for (var i = 0; i < verseChords.length; i++){
    verseOne.innerHTML += `
      <div class='chord'>${verseChords[i]}</div>
    `
  }
  for (var i = 0; i < chorusChords.length; i++){
    chorus.innerHTML += `
      <div class='chord'>${chorusChords[i]}</div>
    `
  }
}

function keySelectorMajor() {
  switch(keySignature.value) {
    case 'c':
    key = chords[0];
    break;
    case 'c-sharp-d-flat':
    key = chords[1];
    break;
    case 'd':
    key = chords[2];
    break;
    case 'd-sharp-e-flat':
    key = chords[3];
    break;
    case 'e':
    key = chords[4];
    break;
    case 'f':
    key = chords[5];
    break;
    case 'f-sharp-g-flat':
    key = chords[6];
    break;
    case 'g':
    key = chords[7];
    break;
    case 'g-sharp-a-flat':
    key = chords[8];
    break;
    case 'a':
    key = chords[9];
    break;
    case 'a-sharp-b-flat':
    key = chords[10];
    break;
    case 'b':
    key = chords[11];
    break;
  default:
  }
}

function keySelectorMinor() {
  switch(keySignature.value) {
    case 'c':
    key = chords[3];
    break;
    case 'c-sharp-d-flat':
    key = chords[4];
    break;
    case 'd':
    key = chords[5];
    break;
    case 'd-sharp-e-flat':
    key = chords[6];
    break;
    case 'e':
    key = chords[7];
    break;
    case 'f':
    key = chords[8];
    break;
    case 'f-sharp-g-flat':
    key = chords[9];
    break;
    case 'g':
    key = chords[10];
    break;
    case 'g-sharp-a-flat':
    key = chords[11];
    break;
    case 'a':
    key = chords[0];
    break;
    case 'a-sharp-b-flat':
    key = chords[1];
    break;
    case 'b':
    key = chords[2];
    break;
  default:
  }
}

// var sounds = Array.from(document.querySelectorAll('.playing'));
// sounds.forEach(sound => sound.addEventListener('transitionend', removeTransition));
// window.addEventListener('click', playSound)