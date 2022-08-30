  

  /* _______________________________________________________________________________________
PARAMETRES */


var sounds = [
   'audio/400.wav',
   'audio/800.wav',
   'audio/1400.wav',
   'audio/3000.wav',
   'audio/6000.wav',
  ];
  

var descripteurs = [
  'TEST1',
  'TEST2',
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

  var numbDescripteursEval = descripteurs.length
  console.log(`Number of descriptors is: ${numbDescripteursEval}`)
  

  var preTask = {
        
        type: jsPsychHtmlButtonResponse,
        stimulus: `<p style="font-size: 25px">
          <b>Début de l'évaluation</b><p>
          <hr>
         <i>Merci de participer à cette évaluation.</i>
         <p>Vous allez écouter <b>${numbSoundsEval}</b> sons sous la forme de <b>${numbSoundsEvalPairs}</b> paires de sons, selon <b>${numbDescripteursEval}</b> descripteurs.</p>
          `,
        on_start: function(){
          audio = new Audio('audio/Silence.mp3');
          audio.loop = false;
          audio.play()
           },
        on_finish: function(){
           audio.pause()
        },
        choices: ['Continuer'],
        post_trial_gap: 0,
        
      };
      
    timeline.push(preTask);


 var displayDescriptor = {
        
        type: jsPsychHtmlButtonResponse,
        stimulus: function(){
        return `<p style="font-size: 25px"><b>Nouveau descripteur</b><p><hr>
        <p>Le descripteur est <b>${descripteurs[k]}</b></p>
        <p><i><b>Définition : </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</i></p>
          `},
        on_start: function(){
           },
        on_finish: function(){
           },
        choices: ['Continuer'],
        post_trial_gap: 0,
        
      };
      
  //  timeline.push(displayDescriptor);
    
  var endSerial = {
          
          type: jsPsychHtmlButtonResponse,
          stimulus: function(){
          return `<p style="font-size: 25px"><b>Fin série ${k+1}</b><p><hr>
          <p>Prenez le temps d'une pause.</p>
            `},
          on_start: function(){
             },
          on_finish: function(){
             },
          choices: ['Commencer une nouvelle série'],
          post_trial_gap: 0,
          
        };
        
   //   timeline.push(endSerial);

    


  var soundListened = false;
  var audio;
  
  var preferenceSnoundEval = {
    type: jsPsychHtmlButtonResponse, 
    stimulus: function(){
    
    return  `
      <p style="font-size: 25px">Paire <b>${q+1}</b></p><hr>
    
      <i><p>Veuillez appuyer sur</i> 
      <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">Barre espace</span>,
      <i>pour écouter les deux sons.</p></i>
      <p style="color: white, font-size: 50px"></p>
      <hr>

      <p>Quel est le son le plus <b>${descripteurs[k]}</b> ?</p>
     
     
     
     <p style="color: white; font-size:10px">WWW</p>`},
    choices: ["Son A", "Son B"],   
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
      alert("Vous devez écouter le son avant de répondre")
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
  
 
  
  
  var loopSliderDescripteur = {
    timeline: [displayDescriptor, loopEvalSound, endSerial],
    loop_function: function(){
      if(k < numbDescripteursEval-1){
        k++
        console.log(`Descripteur ${k+1} : ${descripteurs[k]}`)
        return true
      } else {
        k = 0
        console.log('Fin boucle totale descripteurs')
        return false 
       }
      },
    on_start: function(){
      
     },
  };
  
 timeline.push(loopSliderDescripteur);
  