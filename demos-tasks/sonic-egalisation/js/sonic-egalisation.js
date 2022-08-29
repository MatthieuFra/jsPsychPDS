
//The sound to wich you're going to compare all others stimuli.
var soundRef = 'audio/mrsl_base.wav';

//The sounds to egalise
var soundEval = [
  'audio/mrsl_brillant_8dB.wav',
  'audio/mrsl_rugueux_8dB.wav',
  'audio/kw9_base_8dB.wav',
  'audio/kw9_brillant_8dB.wav',
  'audio/kw9_rugueux_8dB.wav'
];

soundEval=soundEval.concat(soundEval,soundEval);

var q = 0;

var audio_ref = new Audio(soundRef);
var audio = new Audio(soundEval[q]);

var volume;
  
var keyPress1;
var rtKey1;
var rtArray1 = [];


//Add instructions
var instructionsD = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<p style="font-size:30px; color:black;"><b>Egalisation en sonie</b></p><hr><p><i>Pour chaque essai, deux sons vont vous être présentés successivement. Veuillez régler le volume du deuxième à l'aide du slider afin que les deux vous semblent être joués au même niveau sonore.</i><p>`,
  choices: ["Continuer"]
};


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
  <p>Déplacez le slider pour que vous ayez la sensation d'un même <b>niveau sonore</b> entre les deux sons.</p>
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
      task: 'REPONSE SUJET',
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
      alert("Vous devez écouter le son avant de répondre.")
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
  


timeline.push(instructionsD, loopSlider);
