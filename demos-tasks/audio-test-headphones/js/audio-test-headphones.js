var soundsHeadphonesTest = [
"200Hz_1000ms_100msFade_1.wav",
"200Hz_1000ms_100msFade_2.wav",
"200Hz_1000ms_100msFade_phase180.wav",
];


var numbOfCorrectsAnswers = null;
var numbOfFalsesAnswers = null;

var currentAnswer; 


var preload = {
    type: jsPsychPreload,
    audio: soundsHeadphonesTest,
    };
    
    
timeline.push(preload);



var taskHeadphonesTest = {
	type: jsPsychHtmlButtonResponse,
	on_start: function(){

		//randomization of the three sounds
		soundsHeadphonesTest = jsPsych.randomization.shuffle(soundsHeadphonesTest)

		var audio_A = new Audio(soundsHeadphonesTest[0]);
        var audio_B = new Audio(soundsHeadphonesTest[1]);
        var audio_C = new Audio(soundsHeadphonesTest[2]);
      
        audio_A.play()
        setTimeout(function(){audio_B.play();}, 1500);
        setTimeout(function(){audio_C.play();}, 3000);

	},
	stimulus: "Le quel des trois sons que vous avez entendu a le niveau sonore le plus <b>faible</b> ?",
	choices: [
		"Le premier son est le plus faible",
		"Le second son est le plus faible",
		"Le troisième son est le plus faible",
	],
	on_finish: function(){
		console.log(jsPsych.data.getLastTrialData().trials[0])
		currentAnswer = jsPsych.data.getLastTrialData().trials[0].response+1

		return currentAnswer
	},
};



var taskHeadphonesData = {
	type: jsPsychCallFunction,
	func: function(){

	},
};


var taskHeadphonesLoop = {
	timeline: [taskHeadphonesTest, taskHeadphonesData],
	repetitions: 6,
	on_finish: function(){

	},

};
