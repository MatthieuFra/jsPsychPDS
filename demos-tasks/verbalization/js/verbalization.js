var sounds = [
   'audio/0_ACDC2.mp3',
   'audio/0_ACDC2.mp3',
   'audio/0_ACDC2.mp3',
   'audio/0_ACDC2.mp3',
   'audio/0_ACDC2.mp3',
  ];
  
var questions = [
  {prompt: "QUESTION 1", name: "Q1", rows: 3,required: true},
  {prompt: "QUESTION 2", name: "Q2", rows: 3,required: true},
  {prompt: "QUESTION 3", name: "Q3", rows: 3,required: true},
  {prompt: "QUESTION 4", name: "Q4", rows: 3,required: true},
  {prompt: "QUESTION 5", name: "Q5", rows: 3,required: true},
  {prompt: "QUESTION 6", name: "Q6", rows: 3,required: true},
];

        /* preload sounds */
        
    var preload = {
      type: jsPsychPreload,
      audio: sounds,
    };
    
    timeline.push(preload);
 

  var q = 0;
  var k = 0;
  
  var keyPress1;
  var rtKey1;
  var rtArray1 = [];
  
  var numbSoundsEval = sounds.length
  console.log(`Number of sounds is: ${numbSoundsEval}`)
  

  var preTask = {
        
        type: jsPsychHtmlButtonResponse,
        stimulus: `<p style="font-size: 25px">
          <b>Start of the experiment</b><p>
          <hr>
         <i>Thank for taking part in this experiment.</i>
         <p>You're going to listen to <b>${numbSoundsEval}</b> sounds, on witch you will have to responds to several questions.</p>
          `,
        on_start: function(){
          audio = new Audio('audio/Silence.mp3');
          audio.loop = false;
          audio.play()
           },
        on_finish: function(){
           audio.pause()
        },
        choices: ['Continue'],
        post_trial_gap: 0,
        
      };
      
    timeline.push(preTask);
    


  var soundListened = false;
  var audio;
  
  var verbalizationSoundEval = {
    type: jsPsychSurveyText, 
    preamble: function(){
    
    return  `
      <p style="font-size: 25px">Sound <b>${q+1}</b></p><hr>
    
      <i><p>Please press the </i> 
      <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">Space bar </span>,
      <i>to listen to the sound.</p></i>
     
     
     
     <p style="color: white; font-size:10px">WWW</p>`},
    button_label: ['Continue'],
    questions: function(){
    
    return questions

    },
  //  response_allowed_while_playing: true,
    
    on_start: function(){
      
        keyPress1 = null
        rtKey1 = null
        soundListened = false
        
        var press1 = function(info){
        audio.pause()
       // console.log("Touche 1 pressée à " + info.rt +  " ms")
        keyPress1 = true
        rtArray1.push(info.rt)
        rtKey1 = info.rt
        audio = new Audio(sounds[q]);
        audio.loop = false;
        audio.play()
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
    },
};

var evalSound = {
  timeline: [verbalizationSoundEval],
  loop_function: function(){
    if(soundListened === true){
      console.log("soundListened: True")
      return false
    } else {
      console.log("soundListened: False")
      alert("You should listen to the sound before answer!")
      return true
    }
  },
  on_finish: function(){
    soundListened = false
    return soundListened
  },
  
};

  var loopEvalSound = {
    timeline: [evalSound],
    loop_function: function(){
      if(q < numbSoundsEval-1){
        q++
        console.log(`Son ${q+1} : ${sounds[q]}`)
        return true
      } else {
        q = 0
        console.log('Fin boucle des son')
        return false 
       }
      },
    on_start: function(){
      
     },
  };
  
  
 timeline.push(loopEvalSound);