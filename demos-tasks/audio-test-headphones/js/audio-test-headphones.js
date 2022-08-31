
//test stimuli for the task
var soundsHeadphonesTest = [
"audio/200Hz_1000ms_100msFade_1.wav",
"audio/200Hz_1000ms_100msFade_2_-6dB.wav",
"audio/200Hz_1000ms_100msFade_3_Phase180Left.wav",
]; 


//to check the answers
var phase = "audio/200Hz_1000ms_100msFade_3_Phase180Left.wav";
var pad =   "audio/200Hz_1000ms_100msFade_2_-6dB.wav";


//count of answer to screen performance
var numbOfCorrectsAnswers = 0;
var numbOfFalsesAnswers = 0;

var currentAnswer; 

var optA;
var optB;
var optC;


//preloading the sounds
var preload = {
    type: jsPsychPreload,
    audio: soundsHeadphonesTest,
    };
    
    
timeline.push(preload);

//presentations of stimulis
var taskHeadphonesPlays = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p style="font-size:30px"><b>Lecture</b></p>`,
    choices: ["NO_KEYS"],
    trial_duration: 5000,
    on_start: function(){

    //randomization of the three sounds
    soundsHeadphonesTest = jsPsych.randomization.shuffle(soundsHeadphonesTest)

    var audio_A = new Audio(soundsHeadphonesTest[0]);
    var audio_B = new Audio(soundsHeadphonesTest[1]);
    var audio_C = new Audio(soundsHeadphonesTest[2]);

    optA = soundsHeadphonesTest[0];
    optB = soundsHeadphonesTest[1];
    optC = soundsHeadphonesTest[2];

    console.log(optA);
    console.log(optB);
    console.log(optC);
      
    audio_A.play()
    setTimeout(function(){audio_B.play();}, 1500);
    setTimeout(function(){audio_C.play();}, 3000);

    },
};

//answering part
var taskHeadphonesTest = {
  type: jsPsychHtmlButtonResponse,
  on_start: function(){
  },
  stimulus: "Lequel des trois sons que vous avez entendu a le niveau sonore le plus <b>faible</b> ?<hr>",
  choices: [
    "Le premier son",
    "Le second son",
    "Le troisième",
  ],
  on_finish: function(){
    currentAnswer = jsPsych.data.getLastTrialData().trials[0].response+1
    console.log(currentAnswer)
    if(currentAnswer === 1){
      currentAnswer = optA
      console.log(currentAnswer)
      return currentAnswer
    } else if(currentAnswer === 2){
      currentAnswer = optB
      console.log(currentAnswer)
      return currentAnswer
    } else if(currentAnswer === 3){
      currentAnswer = optC
      console.log(currentAnswer)
      return currentAnswer
    }
  },
};

//inter-trial interval
var taskHeadphonesCross = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p style="font-size:50px"><b>+</b></p>`,
    choices: ["NO_KEYS"],
    trial_duration: 1500,
};

//data processing function part
var taskHeadphonesData = {
  type: jsPsychCallFunction,
  func: function(){
    if(currentAnswer === phase){
      numbOfFalsesAnswers ++
      console.log(numbOfFalsesAnswers)
      console.log("Phase")
    } else if(currentAnswer === pad){
      numbOfCorrectsAnswers ++
      console.log(numbOfCorrectsAnswers)
      console.log("Pad")
    } else {
      numbOfFalsesAnswers ++
      console.log(numbOfFalsesAnswers)
      console.log("Wrong")
    }
  },
  data: function(){
    return {
          task: 'REPONSE SUJET',
          answer: `${currentAnswer}`,
          numbFalse: `${numbOfFalsesAnswers}`, 
          numbCorrect: `${numbOfCorrectsAnswers}`, 
         }
  },
};


//loop of the procedure
var taskHeadphonesLoop = {
  timeline: [taskHeadphonesPlays, taskHeadphonesTest, taskHeadphonesCross, taskHeadphonesData],
  repetitions: 6,
  on_finish: function(){

  },

};

	
	
	
timeline.push(taskHeadphonesLoop);
	
	