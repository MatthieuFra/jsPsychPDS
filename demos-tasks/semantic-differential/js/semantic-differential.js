/* _______________________________________________________________________________________
PARAMETRES */


var sounds = [
   'audio/0_ACDC2.mp3',
   'audio/0_ACDC2.mp3',
   'audio/0_ACDC2.mp3',
   'audio/0_ACDC2.mp3',
   'audio/0_ACDC2.mp3',
  ];
  
var descripteurs = [
  'TEST1',
  'TEST2',
  ];


var email = 'example@ircam.fr';




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
  
  var numbDescripteursEval = descripteurs.length
  console.log(`Number of descriptors is: ${numbDescripteursEval}`)

  var preTask = {
        
        type: jsPsychHtmlButtonResponse,
        stimulus: `<p style="font-size: 25px">
          <b>Début de l'évaluation</b><p>
          <hr>
         <i>Merci de participer à cette évaluation.</i>
         <p> Vous allez écouter <b>${numbSoundsEval}</b> sons,</p>
         <p>Selon <b>${numbDescripteursEval}</b> descripteurs.</p>
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
  
  var sliderSoundEval = {
    type: jsPsychHtmlSliderResponse, //jsPsychAudioSliderResponse,
    stimulus: function(){
    
    return  `
      <p style="font-size: 25px">Son <b>${q+1}</b></p><hr>
    
      <i><p>Veuillez appuyer sur</i> 
      <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">Barre espace</span>,
      <i>pour écouter le son.</p></i>
     
     
     
     <p style="color: white; font-size:10px">WWW</p>`},//soundEval[q],
    labels: ['0', '25', '50', '75', '100'],
    button_label: ['Continuer'],
    prompt: function(){
    
    return `
    <p>A quel point le son est <b>${descripteurs[k]}</b> ?</p>
    `
      
    },
  //  response_allowed_while_playing: true,
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

var sliderSound = {
  timeline: [sliderSoundEval],
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

  var loopSliderSound = {
    timeline: [sliderSound],
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
  
 
 var loopSliderDescripteur = {
    timeline: [displayDescriptor, loopSliderSound, endSerial],
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
 
  