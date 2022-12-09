var sounds = [
   'audio/400.wav',
   'audio/1400.wav',
   'audio/6000.wav',
  ];
  



//creating of the pairs  
var arrayElements = sounds;


const pairsOfArray = array => (
  array.reduce((acc, val, i1) => [
    ...acc,
    ...new Array(array.length - 1 - i1).fill(0)
      .map((v, i2) => ([array[i1], array[i1 + 1 + i2]]))
  ], [])
) 

//The new array with all the pairs.
var pairsArray = pairsOfArray(jsPsych.randomization.shuffle(arrayElements));
pairsArray = jsPsych.randomization.shuffle(pairsArray)
console.log(pairsArray)





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

  var numbSoundsEvalPairs = pairsArray.length
  console.log(`Number of sounds pairs is: ${numbSoundsEvalPairs}`)
  

  var preTask = {
        
        type: jsPsychHtmlButtonResponse,
        stimulus: `<p style="font-size: 25px">
          <b>Start of the evaluation</b><p>
          <hr>
         <i>Thanks for taking part in this study.</i>
         <p>You're about to listen to <b>${numbSoundsEval}</b> sounds, displayed by <b>${numbSoundsEvalPairs}</b> pairs.
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
  
  var preferenceSnoundEval = {
    type: jsPsychHtmlSliderResponse, 
    stimulus: function(){
    
    return  `
      <p style="font-size: 25px">Paire <b>${q+1}</b></p><hr>
    
      <i><p>Please press the </i> 
      <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">Space bar</span>,
      <i>to listen to the two sounds.</p></i>
      <p style="color: white, font-size: 50px"></p>
      <hr>

      <p>How <b>similar</b> do you think these two sounds are? ?</p>
     
     
     
     <p style="color: white; font-size:10px">WWW</p>`},
    labels: ["Not similar", "Very similar"],   
    require_movement: true,
    slider_start: function(){
      return Math.floor(Math.random()*100)
    },
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

        var audio_A = new Audio(pairsArray[q][0]);
        var audio_B = new Audio(pairsArray[q][1]);
      
        audio_A.play()
        setTimeout(function(){audio_B.play();}, 1500);
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
  timeline: [preferenceSnoundEval],
  loop_function: function(){
    if(soundListened === true){
      console.log("soundListened: True")
      return false
    } else {
      console.log("soundListened: False")
      alert("You must listen to the sound before answer!")
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
      if(q < numbSoundsEvalPairs-1){
        q++
        console.log(`Sound ${q+1} : ${sounds[q]}`)
        return true
      } else {
        q = 0
        console.log('End sounds loop')
        return false 
       }
      },
    on_start: function(){
      
     },
  };
  
  
 timeline.push(loopEvalSound);
 
  
  
  