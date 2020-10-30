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

var keySignature = document.querySelector('#key-sign');
var writeSong = document.querySelector('.write-song');
var verseOne = document.querySelector('.one');

var key = chords[0];

writeSong.addEventListener('click', chordProgression);

function randomChordGenerator() {
  var randomNum = Math.floor(Math.random()*6);
  var newChord = key[randomNum];
  verseChords.push(newChord);
};

function chordProgression(event){
  event.preventDefault();
  keySelector();
  verseChords.push(key[0]);
  for (var i = 0; i < 3; i++){
    randomChordGenerator();
  }
  showChords();
  console.log(verseChords);
}

function showChords(){
  verseOne.innerHTML = '';
  for (var i = 0; i < verseChords.length; i++){
    verseOne.innerHTML += `
      <div class='chord'>${verseChords[i]}</div>
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
  default:
  }
}
