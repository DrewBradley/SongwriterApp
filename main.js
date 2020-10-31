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
var writeSong = document.querySelector('.write-song');
var verseOne = document.querySelector('.verse');
var chorus = document.querySelector('.chorus');

var key = chords[0];

writeSong.addEventListener('click', chordProgression);

function randomChordGenerator(array) {
  var randomNum = Math.floor(Math.random()*6);
  var newChord = key[randomNum];
  array.push(newChord);
};

function chordProgression(event){
  event.preventDefault();
  keySelector();
  verseMaker();
  chorusMaker();
  showChords();
  console.log(verseChords);
}

function verseMaker() {
  verseChords = [];
  verseOne.innerHTML = '';
  verseChords.push(key[0]);
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

function keySelector() {
  switch(keySignature.value) {
  case 'c':
    key = chords[0];
    break;
  case 'c#/db':
    key = chords[1];
    break;
    case 'd':
    key = chords[2];
    break;
    case 'd#/eb':
    key = chords[3];
    break;
    case 'e':
    key = chords[4];
    break;
    case 'f':
    key = chords[5];
    break;
    case 'f#/gb':
    key = chords[6];
    break;
    case 'g':
    key = chords[7];
    break;
    case 'g#/ab':
    key = chords[8];
    break;
    case 'a':
    key = chords[9];
    break;
    case 'a#/bb':
    key = chords[10];
    break;
    case 'b':
    key = chords[11];
    break;
  default:
  }
}
