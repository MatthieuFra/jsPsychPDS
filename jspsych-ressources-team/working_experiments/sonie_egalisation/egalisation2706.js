var jsPsych = initJsPsych({});

var timeline = [];


//EXPERIENCE

var id_expe = 'egalisation';

var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
};

timeline.push(enter_fullscreen);


var welcome = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
  <p><img src="data:image/png;base64,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" width="200" height="auto"></p>
  <p style="font-size:25px;border: 0px solid #000;border-radius: 5px; color:#222;padding: 8px; font-family: sans-serif">Bienvenue</p><hr>
  <p>Merci d'avoir accepté de participer.</p>
  <p style="font-size:18px">Pour commencer, veuillez cliquer sur <i>Continuer</i>.</p>
  `,
  choices: ['Continuer'],
  on_start: function(){
    var IDLetter = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Y', 'Z']
    var IDLetterChoose = jsPsych.randomization.shuffle(IDLetter).slice(0, 3).join('')
    var randomNumberID = `${Math.floor((Math.random()*1000))}`
    uniqueID = `${Math.floor((Math.random()*100))}`+`-${IDLetterChoose}`+`-${Math.floor(Date.now()-1000000000000)}`; 
    console.log(uniqueID)
    jsPsych.data.addProperties({subject: uniqueID});
    console.log(Date(Date.now()).toLocaleString().split(',')[0])
    return uniqueID
  },
};

timeline.push(welcome);


 /* _______________________________________________________________________________________
Questionnaire sur les sons */

//var soundRef = 'mrsl_base.wav';
var soundRef = 'mrsl_base.wav';

var soundEval = [
  'mrsl_brillant_8dB.wav',
  'mrsl_rugueux_8dB.wav',
  'kw9_base_8dB.wav',
  'kw9_brillant_8dB.wav',
  'kw9_rugueux_8dB.wav'
];

soundEval=soundEval.concat(soundEval,soundEval);

var q = 0;

var audio_ref = new Audio(soundRef);
var audio = new Audio(soundEval[q]);

var volume;
  
var keyPress1;
var rtKey1;
var rtArray1 = [];


var startTask = {
    
  type: jsPsychHtmlButtonResponse,
  stimulus: function(){
    return `<p style="font-size: 30px">
    <b>Egalisation en sonie</b></p>
      <hr>
      <p></p>
      `
  },
  on_start: function(){
     },
  choices: ['Continuer'],
  post_trial_gap: 0,
    
};
    
timeline.push(startTask);

//a modifier en mettant les instructions
var instructionsD = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<p style="font-size:30px; color:black;"><b>Egalisation en sonie</b></p><hr><p><i>Pour chaque essai, deux sons vont vous être présentés successivement. Veuillez régler le volume du deuxième à l'aide du curseur afin que les deux vous semblent être joués au même niveau sonore.</i><p>`,
  choices: ["Continuer"]
};
// timeline.push(instructionsD);

var soundListened = false;
var resultSlider;

var sliderSoundEval = {
  type: jsPsychHtmlSliderResponse, //jsPsychAudioSliderResponse,
  stimulus: `<i><p>Veuillez appuyer sur</i> 
    <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">Barre espace</span>,
   <i>pour écouter les sons.</p></i><hr><p style="color: white; font-size:30px">WWW</p>`,//soundEval[q],
  labels: [],
  button_label: ['Continuer'],
  prompt: `
  <p>Bougez le curseur pour que vous ayez la sensation d'un même <b>niveau sonore</b> entre les deux sons.</p>
  `,
//  response_allowed_while_playing: true,
  require_movement: true,
  slider_start: function(){
    slider_value = Math.floor(Math.random()*100)
    return slider_value
  },
  on_start: function(){
    
    keyPress1 = null
    rtKey1 = null
    soundListened = false
    
    var press1 = function(info){
      audio_ref.pause()
      audio.pause()
      console.log("Touche 1 pressée à " + info.rt +  " ms")
      keyPress1 = true
      rtArray1.push(info.rt)
      rtKey1 = info.rt
      
      slider_value = jsPsych.getDisplayElement().querySelector("#jspsych-html-slider-response-response").valueAsNumber
      console.log(slider_value) // to see it on the console
      
      audio_ref.loop = false;
      audio = new Audio(soundEval[q]);
      audio.loop = false;
      //audio.volume = 0.1+(1-0.1)*slider_value/100;
      audio.volume = slider_value/100;
      
      audio_ref.play()
      setTimeout(function(){audio.play();}, 1000);
      soundListened = true
    }
    
    var keyboard1 = jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: press1,
      valid_responses: [' '],
      rt_method: 'performance',
      persist: true,
      allow_held_key: true,
    })
    
  },
    
  on_finish: function(){
    audio.pause()
    console.log(jsPsych.data.getLastTrialData().trials[0].response)
    resultSlider = jsPsych.data.getLastTrialData().trials[0].response
    volume = 0.1+(1-0.1)*resultSlider/100;
    return resultSlider
  },
};


var dataSlider = {
    
    type: jsPsychHtmlKeyboardResponse,
    stimulus: " ",
    on_start: function(){
      
    },
    
    on_finish: function(){
    },
    
    data: function(){ 
      return {
      id_expe: id_expe,
      task: 'REPONSE SUJET',
      id: uniqueID,
      date: Date(Date.now()).toLocaleString().split(',')[0],
      sound: soundEval[q],
      evalResult: `${resultSlider}`,
      volumeResult: volume,

     }
    },
    
    choices: "NO_KEYS",
    trial_duration: 10,
    post_trial_gap: 0,
    
  };
  

var sliderSound = {
  timeline: [sliderSoundEval, dataSlider],
  loop_function: function(){
    if(soundListened === true){
      console.log("GOOD")
      return false
    } else {
      console.log("BAD")
      alert("Vous devez écouter le son avant de répondre")
      return true
    }
  },
  on_finish: function(){
    soundListened = false
    return soundListened
  },
  
};

var loopSlider = {
  timeline: [sliderSound],
  loop_function: function(){
    if(q < soundEval.length-1){
      q++
      return true
    } else {
      return false 
     }
    },
  on_start: function(){
    
   },
  };
  
 // timeline.push(loopSlider);
 
var finexp = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<p style="font-size:22px; color:black;">Fin de l'évaluation</p><hr>
            `,
  choices: ["Terminer"],
};

//timeline.push(finexp1);


timeline.push(instructionsD, loopSlider, finexp);




var exit_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: false,
  delay_after: 0
};

timeline.push(exit_fullscreen);

jsPsych.run(timeline);