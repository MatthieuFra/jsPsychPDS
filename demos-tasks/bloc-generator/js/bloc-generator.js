//PARAMETERS 

var blocLength = 10; //Numb of sounds contained in each bloc.


//The array with the originals elements to create the blocs of stimuli 
var soundsTotal = [
"Sound1.wav",
"Sound2.wav",
"Sound3.wav",
"Sound4.wav",
"Sound5.wav",
"Sound6.wav",
"Sound7.wav",
"Sound8.wav",
"Sound9.wav",
"Sound10.wav",
"Sound11.wav",
"Sound12.wav",
"Sound13.wav",
"Sound14.wav",
"Sound15.wav",
"Sound16.wav",
"Sound17.wav",
"Sound18.wav",
"Sound19.wav",
"Sound20.wav",
"Sound21.wav",
"Sound22.wav",
"Sound23.wav",
"Sound24.wav",
"Sound25.wav",
"Sound26.wav",
"Sound27.wav",
"Sound28.wav",
"Sound29.wav",
"Sound30.wav",
];

soundsTotal = jsPsych.randomization.shuffle(soundsTotal)
console.log(soundsTotal)

var howManyBloc = (soundsTotal.length)/blocLength
console.log(howManyBloc)

var stimBloc1 = soundsTotal.slice(0, blocLength);
console.log(stimBloc1)

var stimBloc2 = soundsTotal.slice(blocLength, blocLength*2);
console.log(stimBloc2)

var stimBloc3 = soundsTotal.slice(blocLength*2, blocLength*3);
console.log(stimBloc3)