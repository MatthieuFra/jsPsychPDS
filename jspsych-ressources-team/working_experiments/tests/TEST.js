/* Initialiser jsPsych */
    var jsPsych = initJsPsych({
       //show_progress_bar: true,
      on_finish: function() {
      //   jsPsych.data.displayData();
       },
      on_trial_start: function() {
  
       },
      on_trial_finish: function(){
   
    },
    });

    /* création timeline */

    var timeline = [];
    
    /* Preload stimuli */
    var preload = {
      
      type: jsPsychPreload,
      video: [
        "Supp video-trial -VideoCompressed.mp4"
      ]
    };
    
    timeline.push(preload);
  
   
/* _______________________________________________________________________________________
ACCUEIL EXPERIENCE */


    var keyPress1;
    var rtKey1;
    var rtArray1 = [];
    
    var keyPress2;
    var rtKey2;
    var rtArray2 = [];
    
    var keyPress3;
    var rtKey3;
    var rtArray3 = [];
    
    var keyPress4;
    var rtKey4;
    var rtArray4 = [];


    var soundBWS = [
      'Son <b>1</b>',
      'Son <b>2</b>',
      'Son <b>3</b>',
      'Son <b>4</b>'
      ];

    var maxdiff_page = {
    type: jsPsychMaxdiff,
    alternatives: soundBWS,
    labels: ['<p style="font-size: 30px">-</p>', '<p style="font-size: 30px">+</p>'],
    preamble: `
      <i><p>Veuillez appuyer sur</i> 
      <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">1</span>,
       <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">2</span>,
       <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">3</span>
       <i>et</i>
       <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">4</span>
      </p>
      <p><i>pour écouter les différents sons.</p></i><hr>
      <p style="font-size: 20px">Quel est le son le <b>plus</b> amical?</p>
      <p style="font-size: 20px">Quel est le son le <b>moins</b> amical?</p>
      <hr>
  `,
     required: true,
     randomize_alternative_order: true,
     button_label: 'Continuer',
     post_trial_gap: 500,
     on_start: function() {
       
        keyPress1 = null
        rtKey1 = null
        var press1 = function(info){
        console.log("Touche 1 pressée à " + info.rt +  " ms")
        keyPress1 = true
        rtArray1.push(info.rt)
        rtKey1 = info.rt
        audio = new Audio('500.wav');
        audio.loop = false;
        audio.play()
        }
        
        keyPress2 = null
        rtKey2 = null
        var press2 = function(info){
        console.log("Touche 2 pressée à " + info.rt +  " ms")
        keyPress2 = true
        rtArray2.push(info.rt)
        rtKey2 = info.rt
        audio = new Audio('630.wav');
        audio.loop = false;
        audio.play()
        }
        
        keyPress3 = null
        rtKey3 = null
        var press3 = function(info){
        console.log("Touche 3 pressée à " + info.rt +  " ms")
        keyPress3 = true
        rtArray3.push(info.rt)
        rtKey3 = info.rt
        audio = new Audio('800.wav');
        audio.loop = false;
        audio.play()
        }
        
        keyPress4 = null
        rtKey4 = null
        var press4 = function(info){
        console.log("Touche 4 pressée à " + info.rt +  " ms")
        keyPress4 = true
        rtArray4.push(info.rt)
        rtKey4 = info.rt
        audio = new Audio('2000.wav');
        audio.loop = false;
        audio.play()
        }
        
        var keyboard1 = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: press1,
          valid_responses: ['1','&'],
          rt_method: 'performance',
          persist: true,
          allow_held_key: true,
        })
        
        var keyboard2 = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: press2,
          valid_responses: ['2','é'],
          rt_method: 'performance',
          persist: true,
          allow_held_key: true,
        })
        
        var keyboard3 = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: press3,
          valid_responses: ['3','"'],
          rt_method: 'performance',
          persist: true,
          allow_held_key: true,
        })
        
        var keyboard4 = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: press4,
          valid_responses: ['4',"'"],
          rt_method: 'performance',
          persist: true,
          allow_held_key: true,
        })
        
       //console.log('Pouf');
  },
   /* on_finish: function(){
     var keyboard1
     
     jsPsych.pluginAPI.cancelAllKeyboardResponses(keyboard1)
     
     //var dataC ={keypress: true};
     if(keyPress1 === true){
     jsPsych.data.write({keypress: [true, rtKey, rtArray1]})
     console.log(rtArray1)
     rtArray1 = []
     }
     
    },*/
};

//timeline.push(maxdiff_page);

var loopTaskBWS = {
      timeline: [maxdiff_page],
     // loop_function: function(){
     // }, 

      on_start: function(){
      },
      repetitions: 2,
      randomize_order: false, 
    }; 
    
  timeline.push(loopTaskBWS); 

    var welcome = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:25px;border: 1px solid #000;border-radius: 5px; color:#222;padding: 8px; font-family: sans-serif">Bienvenue dans cette expérience</p><hr>
      <p>Veuillez cliquer sur 
      <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">Continuer</span>
      pour débuter.</p>
  `,
      choices: ['Continuer'],
      on_start: function(){
        var IDLetter = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Y', 'Z']
        var IDLetterChoose = jsPsych.randomization.shuffle(IDLetter).slice(0, 3).join('')
        var randomNumberID = `${Math.floor((Math.random()*1000))}`
        var uniqueID = `${Math.floor((Math.random()*100))}`+`-${IDLetterChoose}`+`-${Math.floor(Date.now()-1000000000000)}`; 
        console.log(uniqueID)
        jsPsych.data.addProperties({subject: uniqueID});
      },
      on_finish: function(){
      }
    };
    
    timeline.push(welcome);
    
    var enter_fullscreen = {
      type: jsPsychFullscreen,
      message: "<p><i>Vous allez entrer en plein écran.</i></p>",
      button_label: "Continuer",
      fullscreen_mode: true

      } 

timeline.push(enter_fullscreen) 

var instruction = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size: 20px"><b>Instructions</b></p><hr>
      <p><i>Choississez à chaque fois la personne à qui vous pensez qu'appartient le battement de coeur indiqué.</i></p>
      <p style="font-size:18px">Veuillez cliquer sur 
      <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">Continuer</span>
      pour lancer la tache.</p>
  `,
      choices: ['Continuer'],
      on_start: function(){
      },
      on_finish: function(){
      }
    };
    
    timeline.push(instruction);
    
    
  var trialVid = {
  type: jsPsychVideoKeyboardResponse,
  stimulus: [
    'Supp video-trial -VideoCompressed.mp4'
  ],
  choices: ['ArrowLeft','ArrowRight'],
  width:720,
  height:400,
  trial_ends_after_video: false,
  response_allowed_while_playing: true,
  response_ends_trial: true,
  controls: false,
  post_trial_gap: 500,
 // css_classes: "",
  prompt: `<hr>
      <p>Auquel des sujets appartient le battement de coeur ?</p>
      <p style="font-size: 15px"><i>Utilisez les flèches du clavier pour faire votre choix. 
      </i>
      </p>
      <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 20px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;"><b style="font-size: 18px">←</b></span>
      <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 20px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;"><b style="font-size: 18px">→</b></span>
    
      <p></p>`,
  
};

 // timeline.push(trialVid);
 
 var interCross = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `<p style="font-size: 50px">+</p>
  `,
      choices: "NO_KEYS",
      trial_duration: 2000,
      
    };
    
//    timeline.push(interCross);
  
  var loopTask = {
      timeline: [interCross,trialVid],
     // loop_function: function(){
     // }, 

      on_start: function(){
      },
      repetitions: 2,
      randomize_order: false, 
    }; 
    
  timeline.push(loopTask);
  
  var choiceButton;
  
  var trial1 = {
  type: jsPsychVideoButtonResponse,
  stimulus: [
    'Supp video-trial -VideoCompressed.mp4'
  ],
  choices: ['Sujet 1', 'Sujet 2','Silence', 'Continuer'],
  width:720,
  height:400,
  prompt: `<p>Appuyez sur les boutons pour entendre les sons.</p>
  <p style="font-size: 15px"><i>Utilisez les flèches du clavier pour faire votre choix. 
      </i>
      </p>
      <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 20px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;"><b style="font-size: 18px">←</b></span>
      <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 20px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;"><b style="font-size: 18px">→</b></span>
    
      <p></p>`,
  response_allowed_while_playing: true,
  on_finish: function(){
     console.log(jsPsych.data.getLastTrialData())
     choiceButton = jsPsych.data.getLastTrialData().trials[0].response;
     console.log(`Reponse = ${choiceButton}`)
  },
};

timeline.push(trial1);

 var loopTask2 = {
      timeline: [trial1],
      loop_function: function(){
        if(choiceButton === 0){
           audio = new Audio('500.wav');
           audio.loop = false;
           audio.play()
          return true
        } else if(choiceButton === 1){
           audio = new Audio('630.wav');
           audio.loop = false;
           audio.play()
          return true
        } else if(choiceButton === 2){
          audio.pause()
          return true
        } else if(choiceButton === 3){
          return false
        }
      }, 

      on_start: function(){
      },
  //    repetitions: 2,
      randomize_order: false, 
    }; 
    
  timeline.push(loopTask2);

    

 /* _______________________________________________________________________________________
Questionnaire informations participant */



 /* _______________________________________________________________________________________
Sortie experience */


    var finexp = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `<p style="font-size:22px; color:black;">Merci d'avoir participé !</p><hr>
                 <p>Pressez la barre <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">Espace</span> pour clore l'expérience.</p><p></p>`,
      choices: " ",
    };
    
timeline.push(finexp);
    
 /* _______________________________________________________________________________________
DATA PART */


/* start the experiment */
jsPsych.run(timeline);