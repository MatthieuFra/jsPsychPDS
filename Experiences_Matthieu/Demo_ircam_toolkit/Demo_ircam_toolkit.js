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
      ]
    };
    
    timeline.push(preload);
  
   
/* _______________________________________________________________________________________
ACCUEIL EXPERIENCE */

    var welcome = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:25px;border: 0px solid #000;border-radius: 5px; color:#222;padding: 8px; font-family: sans-serif"><b>DEMONSTATEUR</b> - JsPsych PDS ToolKit</p><hr>
      <p><img src="/LOGO.png"width="375" height="160"></p>
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
    
    // Les taches au choix ! 
    var BWS;
    var adaptPsycho;
    var sart;
    var rappel;
    
    // Le sélecteur pour choisir les bouts de codes qui vont marcher.
    var selectDemo = {
  type: jsPsychSurveyMultiChoice,
  button_label: 'Continuer',
  questions: [
    {
      prompt: `
      <p style="font-size: 25px"><b>DEMO</b> - JsPsych PDS ToolKit</p>
      <!-- <img src="https://pbs.twimg.com/profile_images/1214182825630396417/Y5wSfG45_400x400.jpg"width="100" height="100"> -->
      <p>Quelles démonstrations souhaitez-vous essayer ?</p>
      <hr>
      `, 
      options: ["BWS", "Adaptative Psychoacoustic", "Tache SART", "Tache Rappel libre"], 
      horizontal: false,
      required: false,
      name: 'Demo',
    }
  ], 
  on_finish: function(){
  //console.log(`Rep is ${jsPsych.data.getLastTrialData().trials[0].response.Demo}`)
 
    var choice = jsPsych.data.getLastTrialData().trials[0].response.Demo
 
    if(choice === 'BWS'){
      
       BWS = true
       adaptPsycho = false
       sart = false
       rappel = false
       
       console.log('Choice is BWS')
      
    } else if(choice === 'Adaptative Psychoacoustic'){
      
       BWS = false
       adaptPsycho = true
       sart = false
       rappel = false
       
       console.log('Adaptative')
       
    } else if(choice === 'Tache SART'){
      
       BWS = false
       adaptPsycho = false
       sart = true
       rappel = false
       
       console.log('SART')
       
    } else if(choice === 'Tache Rappel libre'){
      
       BWS = false
       adaptPsycho = false
       sart = false
       rappel = true
       
       console.log('Rappel')
    }
  },
  randomize_question_order: true
};

//timeline.push(selectDemo);
    
    var enter_fullscreen = {
      type: jsPsychFullscreen,
      message: "<p><i>Vous allez entrer en plein écran.</i></p>",
      button_label: "Continuer",
      fullscreen_mode: true

      } 

timeline.push(enter_fullscreen) 

 /* _______________________________________________________________________________________
DEMO A */

var A = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size: 25px"><b>DEMO</b> - BWS</p><hr>
      <p><i></i></p>`,
      choices: ['Continuer'],
    };
    
 /* _______________________________________________________________________________________
CODE A */

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
        audio = new Audio('n_Acc-ord-C2-ff.wav');
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
        audio = new Audio('n_Acc-ord-C2-pp.wav');
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
        audio = new Audio('n_Acc-ord-C3-ff.wav');
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
        audio = new Audio('n_Acc-ord-C3-pp.wav');
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



 /* _______________________________________________________________________________________
FIN CODE A */

var finA = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size: 25px"><b>FIN DEMO</b></p><hr>
      <p><i></i></p>`,
      choices: ['Continuer'],
    };

var demoA = {
       timeline: [A, loopTaskBWS, finA],
       conditional_function: function(){
         if(BWS === true){
           return true
         } else {
           return false
         }
       },
 }

timeline.push(demoA);


 /* _______________________________________________________________________________________
DEMO B */

var B = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size: 25px"><b>DEMO</b> - Tache adaptative</p><hr>
      <p><i></i></p>`,
      choices: ['Continuer'],
    };


 /* _______________________________________________________________________________________
CODE B */


    var preloadB = {
      
      type: jsPsychPreload,
      audio: [
        "1000_-20dBFS_-1.wav",
        "1000_-20dBFS_-2.wav",
        "1000_-20dBFS_-3.wav",
        "1000_-20dBFS_-4.wav",
        "1000_-20dBFS_-5.wav",
        "1000_-20dBFS_-6.wav",
        "1000_-20dBFS_-7.wav",
        "1000_-20dBFS_-8.wav",
        "1000_-20dBFS_-9.wav",
        "1000_-20dBFS_-10.wav",
        "1000_-20dBFS_-11.wav",
        "1000_-20dBFS_-12.wav",
        "1000_-20dBFS_-13.wav",
        "1000_-20dBFS_-14.wav",
        "1000_-20dBFS_-15.wav",
        "1000_-20dBFS_-16.wav",
        "1000_-20dBFS_-17.wav",
        "1000_-20dBFS_-18.wav",
        "1000_-20dBFS_-19.wav",
        "1000_-20dBFS_-20.wav",
        "1000_-20dBFS_-21.wav",
        "1000_-20dBFS_-22.wav",
        "1000_-20dBFS_-23.wav",
        "1000_-20dBFS_-24.wav",
        "1000_-20dBFS_-25.wav",
        "1000_-20dBFS_-26.wav",
        "1000_-20dBFS_-27.wav",
        "1000_-20dBFS_-28.wav",
        "1000_-20dBFS_-29.wav",
        "1000_-20dBFS_-30.wav",
        "1000_-20dBFS_-31.wav",
        "1000_-20dBFS_-32.wav",
        "1000_-20dBFS_-33.wav",
        "1000_-20dBFS_-34.wav",
        "1000_-20dBFS_-35.wav",
        "1000_-20dBFS_-36.wav",
        "1000_-20dBFS_-37.wav",
        "1000_-20dBFS_-38.wav",
        "1000_-20dBFS_-39.wav",
        "1000_-20dBFS_-40.wav",
        "1000_-20dBFS_-41.wav",
        "1000_-20dBFS_-42.wav",
        "1000_-20dBFS_-43.wav",
        "1000_-20dBFS_-44.wav",
        "1000_-20dBFS_-45.wav",
        "1000_-20dBFS_-46.wav",
        "1000_-20dBFS_-47.wav",
        "1000_-20dBFS_-48.wav",
        "1000_-20dBFS_-49.wav",
        "1000_-20dBFS_-50.wav",
        "1000_-20dBFS_-51.wav",
        "1000_-20dBFS_-52.wav",
        "1000_-20dBFS_-53.wav",
        "1000_-20dBFS_-54.wav",
        "1000_-20dBFS_-55.wav",
        "1000_-20dBFS_-56.wav",
        "1000_-20dBFS_-57.wav",
        "1000_-20dBFS_-58.wav",
        "1000_-20dBFS_-59.wav",
        "1000_-20dBFS_-60.wav",
        "1000_-20dBFS_-61.wav",
        "1000_-20dBFS_-62.wav",
        "1000_-20dBFS_-63.wav",
        "1000_-20dBFS_-64.wav",
        "1000_-20dBFS_-65.wav",
        "1000_-20dBFS_-66.wav",
        "1000_-20dBFS_-67.wav",
        "1000_-20dBFS_-68.wav",
        "1000_-20dBFS_-69.wav",
        "1000_-20dBFS_-70.wav",
        "1000_-20dBFS_-71.wav",
        "1000_-20dBFS_-72.wav",
        "1000_-20dBFS_-73.wav",
        "1000_-20dBFS_-74.wav",
        "1000_-20dBFS_-75.wav",
        "1000_-20dBFS_-76.wav",
        "1000_-20dBFS_-77.wav",
        "1000_-20dBFS_-78.wav",
        "1000_-20dBFS_-79.wav",
        "1000_-20dBFS_-80.wav",
        "1000_-20dBFS_-81.wav",
        "1000_-20dBFS_-82.wav",
        "1000_-20dBFS_-83.wav",
        "1000_-20dBFS_-84.wav",
        "1000_-20dBFS_-85.wav",
        "1000_-20dBFS_-86.wav",
        "1000_-20dBFS_-87.wav",
        "1000_-20dBFS_-88.wav",
        "1000_-20dBFS_-89.wav",
        "1000_-20dBFS_-90.wav",
        "1000_-20dBFS_-91.wav",
        "1000_-20dBFS_-92.wav",
        "1000_-20dBFS_-93.wav",
        "1000_-20dBFS_-94.wav",
        "1000_-20dBFS_-95.wav",
        "1000_-20dBFS_-96.wav",
        "1000_-20dBFS_-97.wav",
        "1000_-20dBFS_-98.wav",
        "1000_-20dBFS_-99.wav",
        "1000_-20dBFS_-100.wav",
    
     
      ]
    };
    
 
    
    var chooseFreq;
    var chooseMethod;
    
    var configExpB = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "Choisissez la <b>fréquence</b> du stimuli <i>(Hz)</i>", 
      name: 'Freq', 
      options: [200, 500, 1000, 5000], 
      required: true
    }, 
    {
      prompt: "Méthode adaptative", 
      name: 'Method', 
      options: ['Standard staircase', '3 up 2 down', 'Method 3', 'Method 4', 'Method 5'], 
      required: false
    }
  ],
  on_finish: function(){
    chooseFreq = jsPsych.data.getLastTrialData().trials[0].response.Freq
    chooseMethod = jsPsych.data.getLastTrialData().trials[0].response.Method
    console.log(`Freq = ${chooseFreq} Method = ${chooseMethod}`)
  }
};

  
    
    var instructionsB = {
    type: jsPsychInstructions,
    pages: [
    'Nous allons diffuser plusieurs sons, les uns à la suite des autres.',
    'Vous devez dire si vous avez entendu le son joué ou non. ',
    'La tache dure environ 5min, merci pour votre participation.'
    ],
    button_label_next: "Continuer",
    button_label_previous: "Retour",
    show_clickable_nav: true,
    post_trial_gap: 100,
}
 
    
      var startExpB = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: "<p>Cliquez sur continuer pour lancer la tache.</p><hr><p></p>",
      choices: ['Continuer'],
      post_trial_gap: 1000,
    };
    


    var soundHeard;
    var count = 1;
    var witchFreq = 1000 // chooseFreq;
    var initVol = Math.floor(Math.random()*100);
    var volSound = initVol;
    
    var playSound = {
      
       type: jsPsychAudioKeyboardResponse,
       stimulus: function(){
         if(soundHeard === true){
           volSound ++
           console.log("On baisse le son !")
           console.log(`volSound = -${volSound}`)
           return `${witchFreq}_-20dBFS_-${volSound}.wav` 
         } else if(soundHeard === false){
           volSound --
          console.log("On monte le son !")
          console.log(`volSound = -${volSound}`)
           return `${witchFreq}_-20dBFS_-${volSound}.wav`
         } else {
           console.log("Première écoute")
           console.log(`initVol = -${initVol}`)
           return `${witchFreq}_-20dBFS_-${initVol}.wav`
         }
         
       },
       choices: "NO_KEYS",
       prompt: "<p></p>",
       trial_ends_after_audio: true,
       response_ends_trial: false,
       response_allowed_while_playing: false,
       post_trial_gap: 10,
    };

      //timeline.push(playSound);
    
    var heardYesNo = {
        type: jsPsychHtmlButtonResponse,
        stimulus: '<p style="font-size:28px; color:black;">Avez-vous entendu le son ?</p>',
        choices: ['Oui', 'Non'],
        prompt: "<p></p>",
        on_finish: function(){
          soundHeard = jsPsych.data.getLastTrialData().trials[0].response
          
          if(soundHeard === 0){
            soundHeard = true
            console.log(`Response: ${soundHeard}`)
            return soundHeard
          } else if(soundHeard === 1){
            soundHeard = false
            console.log(`Response: ${soundHeard}`)
            return soundHeard
          }
        },
        post_trial_gap: 1000,
    };

//    timeline.push(heardYesNo);
    
    var loopTaskB = {
    timeline: [playSound, heardYesNo],
    post_trial_gap: 0,
    on_start: function(){
      
    },
    loop_function: function(){        
      while(count < 5){
        count++
        console.log(`Count is ${count}`)
        return true
      }
    },

  }
  

 /* _______________________________________________________________________________________
FIN CODE B */

var finB = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size: 25px"><b>FIN DEMO</b></p><hr>
      <p><i></i></p>`,
      choices: ['Continuer'],
    };

var demoB = {
       timeline: [
         B,
         preloadB,
         configExpB,
         instructionsB,
         startExpB,
         loopTaskB,
         finB
         ],
         
       conditional_function: function(){
         if(adaptPsycho === true){
           return true
         } else {
           return false
         }
       },
 }


timeline.push(demoB);
 /* _______________________________________________________________________________________
DEMO C */

var C = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size: 25px"><b>DEMO</b> - SART</p><hr>
      <p><i></i></p>`,
      choices: ['Continuer'],
    };
    
/* _______________________________________________________________________________________
CODE C */

    var stimuliTemps = 250;               // Temps presentation stimuli
    var allowedTime = 900;                // Temps de réponse
    var numberPossible = 8;          // Intervalle possible check écoute
    var chooseTarget = "5,a";               // Cible SART brute     ex: "a,B,2"
    var chooseTarget2 = ['5','A'];              // Cible SART tableau   ex: ['A','B','2'] avec A, B et 2 en cibles.
    var chooseProb = 5;                 // Probabilité de cible, combien de fois plus probable ? 2X ? 3X ? 
    
    // DEF TEMPS SART (en minutes)
    var timeSart1 = 0.5;              // TRAINING 1
    var timeSart2 = 0.5;              // TRAINING 2
    var timeSart3 = 0.5;              // SART 1 
    var timeSart4 = 0.5;             // SART 2 
    
    // SOUND USED
    var soundForSartSlow = [        // Sons pour la SART lente
     '0_ACDC.mp3',
     '1_ACDC.mp3',
     '2_ACDC.mp3',
     '4_ACDC.mp3',
     '5_ACDC.mp3',
     '6_ACDC.mp3',
     '7_ACDC.mp3',
     '8_ACDC.mp3',
     '9_ACDC.mp3',
      ];
    var soundForSartFast = [        // Sons pour la SART Rapide
     '0_ACDC.mp3',
     '1_ACDC.mp3',
     '2_ACDC.mp3',
     '4_ACDC.mp3',
     '5_ACDC.mp3',
     '6_ACDC.mp3',
     '7_ACDC.mp3',
     '8_ACDC.mp3',
     '9_ACDC.mp3',
      ]; 
      
      var preloadC = {
      
      type: jsPsychPreload,
      audio: [
      '0_ACDC.mp3',
     '1_ACDC.mp3',
     '2_ACDC.mp3',
     '4_ACDC.mp3',
     '5_ACDC.mp3',
     '6_ACDC.mp3',
     '7_ACDC.mp3',
     '8_ACDC.mp3',
     '9_ACDC.mp3',
      ]
    };
    
        
  var startEtape2 = {
      
      type: jsPsychHtmlButtonResponse,
      //prompt: "<p></p><b>Etape 2</b>",
      stimulus: `<p style="font-size:30px; color:black;">Partie 2</p><hr>
                 <p>Veuillez cliquer sur <strong>continuer</strong></p><p></p>`,
      choices: ['Continuer'],
    };
    
//  timeline.push(startEtape2);

    var instructions3 = {
    type: jsPsychInstructions,
    pages: [
    `<p style="font-size:30px; color:black;">Instructions partie <b>2</b></p><hr>
     <p><i>Veuillez lire pour continuer.</i></p>`,
    `<p><b>Instructions</b></p><hr><p><i>Cette seconde partie consiste en la réalisation de deux taches simultanées</i></p><p><i>Une SART et une tache secondaire</i></p>`,
    `<p><b>Instructions</b></p><hr><p><i>Insérer instructions</p>`,
    "<p><b>Instructions</b></p><hr><p><i>Un entrainement précède la tache.</i><p>"
    ],
    button_label_next: "Continuer",
    button_label_previous: "Retour",
    show_clickable_nav: true,
    on_start: function(){
      console.log(chooseTarget2)
    },
}

var afterInstruction3 = {
      
      type: jsPsychHtmlButtonResponse,
      //prompt: "<p></p><b>Etape 2</b>",
      stimulus: function(){
     return `<p style="font-size:30px; color:black;">Cibles à éviter :</p><hr>
                 <p><i>Ne cliquez pas si les cibles suivantes s'affichent.</i></p><p><strong>${chooseTarget2.join(" -  ")}</strong></p><p></p>`
      }, 
      choices: ['Continuer'],
    };
    

 //timeline.push(instructions3);
      var possibleTrack =  jsPsych.randomization.shuffle([soundForSartFast, soundForSartSlow]);
   /* var possibleTrack = [
          "TEST1.wav",
          "TEST2.wav",
      ]; */
      
    var chooseTrack;

    
    var startTask22 = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:25px; color:black;">Lancement Partie 2</p><hr>
                 <p>Veuillez cliquer sur <strong>continuer</strong> pour débuter la tache.</p><p></p>`,
      choices: ['Continuer'],
       on_finish: function(){
      chooseTrack = jsPsych.randomization.shuffle(possibleTrack[0])
      chooseTrack = chooseTrack.slice(0,1)
      audio = new Audio(`${chooseTrack}`)//Audio('TEST1.wav');
      audio.play()
      return audio
      },
    };
    
//    timeline.push(startTask22);

      var training2 = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:30px; color:black;">Entrainement Partie 2</p><hr>
                 <p>Veuillez cliquer sur <strong>continuer</strong> pour débuter la tache.</p><p></p>`,
      choices: ['Continuer'],
      /*on_finish: function(){
      audio = new Audio('TEST2.wav');
      audio.play()
      return audio
      },*/
    };
    
    var aftertraining2 = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:28px; color:black;">Fin entrainement</p><hr>
                 <p>Vous avez compris ? C'est parti pour le vrai essai.</p>
                 <p>Veuillez cliquer sur <strong>continuer</strong> pour lancer l'écoute.</p><p></p>`,
      choices: ['Continuer'],
    };
    
    var aftertraining22 = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:28px; color:black;">Entrainement</p><hr>
                 <p>Vous avez compris ? Maintenant nous ajoutons le son et on recommence une seconde fois.</p>
                 <p>Veuillez cliquer sur <strong>continuer</strong> pour lancer l'écoute.</p><p></p>`,
      choices: ['Continuer'],
      on_finish: function(){
      chooseTrack = jsPsych.randomization.shuffle(possibleTrack[0])
      chooseTrack = chooseTrack.slice(0,1)
      audio = new Audio(`${chooseTrack}`)//Audio('TEST1.wav');
      audio.play()
      return audio
      },
    };
    
        var afterLoop1 = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:30px; color:black;">Pause</p><hr>
                 <p>Prenez une petite pause et on recommence une seconde fois.</p>
                 <p>Veuillez cliquer sur <strong>continuer</strong> pour lancer l'écoute.</p><p></p>`,
      choices: ['Continuer'],
      on_finish: function(){
      chooseTrack = jsPsych.randomization.shuffle(possibleTrack[1])
      chooseTrack = chooseTrack.slice(0,1)
      audio = new Audio(`${chooseTrack}`)//Audio('TEST1.wav');
      audio.play()
      return audio
      },
    };
    
//    timeline.push(aftertraining2);
    
//    timeline.push(training2);
    
   var subjectResponse = null;
   var subjectResponseA = null;
   var isTarget;
   var target = 1; 
   var stimNumber;
   
   // Pour les résultats ! 
   var numbOfMistake = 0;
   var numbOfCorrect = 0;
   var numbOfTarget = 0;
   var numbOfSlow = 0;
   
  
  var targetNumber = ['0', '1', '2', '3', '4', '5', '6', '7' ,'8', '9']
  var targetLetter = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Y', 'Z']
  var possibleTarget = targetNumber.concat(targetLetter).concat(targetNumber)
  
  //var possibleTarget = ['0', '1', '2', '3', '4', '5', '6', '7' ,'8', '9']
  var weightedProba
  var j = 1
  
  var falsed = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `<b>Chargement en cours</b>`,
      choices: "NO_KEYS",     
      post_trial_gap: 0,
      trial_duration: 50, // value in ms
    };
    
  //timeline.push(falsed);
    
  var weightTarget = {
    timeline: [falsed],
    post_trial_gap: 0,
    on_start: function(){
      weightedProba = parseInt(chooseProb)
          console.log(weightedProba)
          return weightedProba
    },
    loop_function: function(){        
      while(j < weightedProba){
          if(j === weightedProba-1){
             j ++
             possibleTarget = possibleTarget.concat(chooseTarget2)
             console.log(possibleTarget)
             possibleTarget = jsPsych.randomization.shuffle(possibleTarget)
             console.log(possibleTarget)
             return true
          } else {
             j ++
             possibleTarget = possibleTarget.concat(chooseTarget2)
             console.log(possibleTarget)
             return true
          }
        }
    }
  }
  
//  timeline.push(weightTarget);
  
  // _______________________________________________________________________________________
  // ICI CODE TACHE
 
   var newTarget
  
  //stim 
   var taskA = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(){
      //stimNumber = Math.floor(Math.random()*10)
      stimNumber = jsPsych.randomization.shuffle(possibleTarget)
    //  console.log(stimNumber)
      stimNumber = stimNumber.slice(0, 1).toString()
      console.log(stimNumber)
      let sizeRandom = Math.floor((Math.random()*100)+10)
      target = chooseTarget
      console.log(`stim: ${stimNumber} target: ${target}`)
      
      return `<p style="font-size:${sizeRandom}px; color:black;">${stimNumber}</p>`
    },
    post_trial_gap: 0,
    trial_duration: function(){ // value in ms
      if(stimuliTemps === ""){
        return 250
      } else {
        return stimuliTemps
      }
    }, 
    response_ends_trial: true, //false prec.
    choices: " ", //"NO_KEYS" prec.
    prompt: "",
    on_finish: function(){
      
      subjectResponse = jsPsych.data.getLastTrialData().trials[0].response
      console.log(`rep is ${subjectResponse}`)
        if(subjectResponse === null) {
        subjectResponse = false
        console.log(`rep: ${subjectResponse}`)
        console.log(chooseTarget2.indexOf(stimNumber))
       // return subjectResponse
           if(chooseTarget2.indexOf(stimNumber) == "-1"){
            isTarget = false
            console.log(`target: ${isTarget}`)
            return isTarget
          } else {
            isTarget = true
             numbOfTarget ++
            console.log(`target: ${isTarget}`)
           return isTarget
           }
      } else {
        subjectResponse = true
        repTaskA = true
        jsPsych.data.write({repA: [true]})
        console.log(`rep: ${subjectResponse}`)
       // return subjectResponse
           if(chooseTarget2.indexOf(stimNumber) == "-1"){
            isTarget = false
            console.log(`target: ${isTarget}`)
            return isTarget
          } else {
            isTarget = true
             numbOfTarget ++
            console.log(`target: ${isTarget}`)
           return isTarget
           }
      }
      
    },
    data: {
        task: 'REPONSE'
      }
};

 // timeline.push(taskA);
 
   var repTaskA = false;
  
  //masque
   var taskB = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(){
      return '<img src="0_NOIR.png" width="100" height="100" />'//'<p style="font-size:80px; color:black;">X</p>'
    },
    post_trial_gap: 0,
    trial_duration: function(){ // value in ms
      if(repTaskA === true){
        return 50
      }else if(allowedTime === ""){
        return 900
      } else {
        return allowedTime
      }
    }, 
    response_ends_trial: true, //false,
    //'<p style="font-size:48px; color:green;">BLUE</p>'
    choices: " ",
    prompt: "",
    on_finish: function(){
      if(repTaskA === true){
        repTaskA = false
        console.log("Deja rep")
      } else {
      subjectResponse = jsPsych.data.getLastTrialData().trials[0].response
      console.log(`rep is ${subjectResponse}`)
        if(subjectResponse === null) {
        subjectResponse = false
        console.log(`rep: ${subjectResponse}`)
       // return subjectResponse
      } else {
        subjectResponse = true
        jsPsych.data.write({repA: [false]})
        console.log(`rep: ${subjectResponse}`)
       // return subjectResponse
        }
      }
    },
    data: {
        task: 'REPONSE'
      }
};

 // timeline.push(taskB);
  
     var taskC = {
    type: jsPsychHtmlKeyboardResponse,
    on_start: function(){
      console.log(`Target: ${target} Stim: ${stimNumber} Response: ${subjectResponse}`)
    },
    stimulus: function(){
        if(subjectResponse === false  && isTarget === true){
         return '<img src="0_VERT.png" width="100" height="100" />'//'<p style="font-size:30px; color:green;"><b>Bonne réponse !</b></p><p style="font-size:30px; color:green;">Bien vu !</p>'
      } else if(subjectResponse === true && isTarget === false){
         return '<img src="0_VERT.png" width="100" height="100" />'//'<p style="font-size:30px; color:green;"><b>Bonne réponse !</b></p>'
      } else if(subjectResponse === true && isTarget === true){
         return '<img src="0_ROUGE.png" width="100" height="100" />'//'<p style="font-size:30px; color:red;"><b>Mauvaise réponse...</b></p>'
      } else if(subjectResponse === false){
        return '<img src="0_NOIR.png" width="100" height="100" />'//'<p style="font-size:30px; color:black;">Trop lent..</p>'
      }
    },
    post_trial_gap: 500,
    trial_duration: function(){
      return 1000
    }, // value in ms
    response_ends_trial: false,
    //'<p style="font-size:48px; color:green;">BLUE</p>'
    choices: "NO_KEYS",
    prompt: "",
    on_finish: function(){
      if(subjectResponse === false  && isTarget === true){
        numbOfCorrect ++
        console.log(`Nombre bonne: ${numbOfCorrect}`)
         return numbOfCorrect
      } else if(subjectResponse === true && isTarget === false){
        numbOfCorrect ++
        console.log(`Nombre bonne: ${numbOfCorrect}`)
         return numbOfCorrect
      } else if(subjectResponse === true && isTarget === true){
        numbOfMistake ++
        console.log(`Nombre erreur: ${numbOfMistake}`)
         return numbOfMistake
      } else if(subjectResponse === false){
        numbOfSlow ++
        console.log(`Nombre retard: ${numbOfSlow}`)
        return numbOfSlow
      }
    },
      
    data: {
        task: 'REPONSE'
      }
};

//  timeline.push(taskC);

var taskCbis = {
    type: jsPsychHtmlKeyboardResponse,
    on_start: function(){
      console.log(`Target: ${target} Stim: ${stimNumber} Response: ${subjectResponse}`)
    },
    stimulus: function(){
        if(subjectResponse === false  && isTarget === true){
         return '<img src="0_VERT.png" width="100" height="100" /><p><b>Bien vu !</b></p>'//'<p style="font-size:30px; color:green;"><b>Bonne réponse !</b></p><p style="font-size:30px; color:green;">Bien vu !</p>'
      } else if(subjectResponse === true && isTarget === false){
         return '<img src="0_VERT.png" width="100" height="100" /><p><b>Bonne réponse!</b></p>'//'<p style="font-size:30px; color:green;"><b>Bonne réponse !</b></p>'
      } else if(subjectResponse === true && isTarget === true){
         return '<img src="0_ROUGE.png" width="100" height="100" /><p><b>Ne pas appuyer pour la cible !</b></p>'//'<p style="font-size:30px; color:red;"><b>Mauvaise réponse...</b></p>'
      } else if(subjectResponse === false){
        return '<img src="0_NOIR.png" width="100" height="100" /><p><b>Trop lent !</b></p>'//'<p style="font-size:30px; color:black;">Trop lent..</p>'
      }
    },
    post_trial_gap: 500,
    trial_duration: function(){
      return 1000
    }, // value in ms
    response_ends_trial: false,
    //'<p style="font-size:48px; color:green;">BLUE</p>'
    choices: "NO_KEYS",
    prompt: "",
    on_finish: function(){
      if(subjectResponse === false  && isTarget === true){
        numbOfCorrect ++
        console.log(`Nombre bonne: ${numbOfCorrect}`)
         return numbOfCorrect
      } else if(subjectResponse === true && isTarget === false){
        numbOfCorrect ++
        console.log(`Nombre bonne: ${numbOfCorrect}`)
         return numbOfCorrect
      } else if(subjectResponse === true && isTarget === true){
        numbOfMistake ++
        console.log(`Nombre erreur: ${numbOfMistake}`)
         return numbOfMistake
      } else if(subjectResponse === false){
        numbOfSlow ++
        console.log(`Nombre retard: ${numbOfSlow}`)
        return numbOfSlow
      }
    },
      
    data: {
        task: 'REPONSE'
      }
};
   
    // pour le timer des loop
    var timeStartLoop;
    var timeEndLoop;
    var timeTargetSart1 = timeSart1*60;
    var timeTargetSart2 = timeSart2*60;
    var timeTargetSart3 = timeSart3*60;
    var timeTargetSart4 = timeSart4*60;
    // pour le compteur des loop 
    var k = 0;
   
    var loopTaskTraining = {
      timeline: [taskA, taskB, taskCbis],
      loop_function: function(){
        timeEndLoop = (Date.now()- timeStartLoop)/1000
        console.log(`Time spent is ${timeEndLoop}`)
        if(timeEndLoop < timeTargetSart1){
          return true 
        } else {
        console.log(`K is reset`)
        return k = 0
        }
      }, 
   //   repetitions: 10,
      on_start: function(){
        if(k === 0){
          k ++
          timeStartLoop = Date.now()
          console.log(`Date start is ${timeStartLoop}`)
        } else {
          
        }
      },
      randomize_order: false, 
    }; 
    
//   timeline.push(loopTask);

var loopTaskTraining2 = {
      timeline: [taskA, taskB, taskCbis],
      loop_function: function(){
        timeEndLoop = (Date.now()- timeStartLoop)/1000
        console.log(`Time spent is ${timeEndLoop}`)
        if(timeEndLoop < timeTargetSart2){
          return true 
        } else {
        console.log(`K is reset`)
        return k = 0
        }
      }, 
   //   repetitions: 10,
      on_start: function(){
        if(k === 0){
          k ++
          timeStartLoop = Date.now()
          console.log(`Date start is ${timeStartLoop}`)
        } else {
          
        }
      },
     // repetitions: 10,
      randomize_order: false, 
    }; 
    
//   timeline.push(loopTask);

  
    var loopTask1 = {
      timeline: [taskA, taskB, taskC],
      loop_function: function(){
        timeEndLoop = (Date.now()- timeStartLoop)/1000
        console.log(`Time spent is ${timeEndLoop}`)
        if(timeEndLoop < timeTargetSart3){
          return true 
        } else {
        console.log(`K is reset`)
        return k = 0
        }
      }, 
   //   repetitions: 10,
      on_start: function(){
        if(k === 0){
          k ++
          timeStartLoop = Date.now()
          console.log(`Date start is ${timeStartLoop}`)
        } else {
          
        }
      },
     // repetitions: 10,
      randomize_order: false, 
    }; 
    
//   timeline.push(loopTask);

var loopTask2 = {
      timeline: [taskA, taskB, taskC],
      loop_function: function(){
        timeEndLoop = (Date.now()- timeStartLoop)/1000
        console.log(`Time spent is ${timeEndLoop}`)
        if(timeEndLoop < timeTargetSart4){
          return true 
        } else {
        console.log(`K is reset`)
        return k = 0
        }
      }, 
   //   repetitions: 10,
      on_start: function(){
        if(k === 0){
          k ++
          timeStartLoop = Date.now()
          console.log(`Date start is ${timeStartLoop}`)
        } else {
          
        }
      },
     // repetitions: 10,
      randomize_order: false, 
    }; 
    
//   timeline.push(loopTask);


var resultsTraining0 = {
        type: jsPsychHtmlButtonResponse,
        stimulus:  function() {
        return     `<p style="font-size:30px; color:black;"><b>Résultats :</b></p><hr><p><b>${numbOfCorrect}</b> bonnes réponses.<p><p><b>${numbOfMistake}</b> erreurs.<p><p><b>${numbOfSlow}</b> fois trop lent.</p><p><i>Une cible est apparue <b>${numbOfTarget}</b> fois.</i></p>`
          
        },
        choices: ['Continuer'],
        post_trial_gap: 0,
      //  trial_duration: 50, // value in ms
        on_start: function(){
          //audio.pause()
          numbOfTarget --
        console.log(`Bon : ${numbOfCorrect} Mauvaise : ${numbOfMistake} Cible :${numbOfTarget} Lent :${numbOfSlow} `)
        },
        on_finish: function(){
          numbOfSlow = 0
          numbOfTarget = 0
          numbOfMistake = 0
          numbOfCorrect = 0
          console.log("RESET counter")
        },
      };
      
var resultsTraining1 = {
        type: jsPsychHtmlButtonResponse,
        stimulus:  function() {
        return     `<p style="font-size:30px; color:black;"><b>Résultats :</b></p><hr><p><b>${numbOfCorrect}</b> bonnes réponses.<p><p><b>${numbOfMistake}</b> erreurs.<p><p><b>${numbOfSlow}</b> fois trop lent.</p><p><i>La cible est apparue <b>${numbOfTarget}</b> fois.</i></p>`
          
        },
        choices: ['Continuer'],
        post_trial_gap: 0,
      //  trial_duration: 50, // value in ms
        on_start: function(){
          audio.pause()
          numbOfTarget --
        console.log(`Bon : ${numbOfCorrect} Mauvaise : ${numbOfMistake} Cible :${numbOfTarget} Lent :${numbOfSlow} `)
        },
        on_finish: function(){
          numbOfSlow = 0
          numbOfTarget = 0
          numbOfMistake = 0
          numbOfCorrect = 0
          console.log("RESET counter")
        },
      };
 //     timeline.push(resultsTraining1);
  
  // Fonction de condition qui contient tout le reste! 
  var ifFailedPreExp = {
    timeline: [
      startTask22, 
      loopTask1,
      resultsTraining1,
      afterLoop1,
      loopTask2,
      resultsTraining1
      ],
    conditional_function: function(){
       return true
    }
}

//timeline.push(ifFailedPreExp);



 /* _______________________________________________________________________________________
FIN CODE C */

var finC = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size: 25px"><b>FIN DEMO</b></p><hr>
      <p><i></i></p>`,
      choices: ['Continuer'],
    };

var demoC = {
       timeline: [
         C, 
         preloadC,
        // weightedProba,
         ifFailedPreExp,
         finC
         ],
       conditional_function: function(){
         if(sart === true){
           return true
         } else {
           return false
         }
       },
 }


timeline.push(demoC);

 /* _______________________________________________________________________________________
DEMO D */

var D = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size: 25px"><b>DEMO</b> - Rappel libre</p><hr>
      <p><i></i></p>`,
      choices: ['Continuer'],
    };

 /* _______________________________________________________________________________________
CODE D */

   var letters = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Y', 'Z'];  
   var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
   
   var sounds = [
     '0_ACDC.mp3',
     '1_ACDC.mp3',
     '2_ACDC.mp3',
     '4_ACDC.mp3',
     '5_ACDC.mp3',
     '6_ACDC.mp3',
     '7_ACDC.mp3',
     '8_ACDC.mp3',
     '9_ACDC.mp3',
     ];
     
   var itemNumber = null;
   var numbLoop = 1;
   var numbTrials = 2;
   var numbItem = 9;
   var timePause = null;
   var numbSoundsEnd = null;
   
   var preloadD = {
      
      type: jsPsychPreload,
      audio: [
     '0_ACDC.mp3',
     '1_ACDC.mp3',
     '2_ACDC.mp3',
     '4_ACDC.mp3',
     '5_ACDC.mp3',
     '6_ACDC.mp3',
     '7_ACDC.mp3',
     '8_ACDC.mp3',
     '9_ACDC.mp3',
      ]
    };

var instructionD = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size: 20px"><b>Instructions</b></p><hr>
      <p><i>9 items vont vous être présentés à la suite.</i><i> Essayez de les retenirs dans leur ordre d'apparition.</i></p>
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
    
   // timeline.push(instructionD);
    
 var words = [
   'Pomme',
   'Platre',
   'Ours',
   'Serviette',
   'Voiture',
   'Balise',
   'Clavier',
   'Téléphone',
   'Lentille',
   'Horloge',
   ];
   
 var downWords = words.map(words => words.toLowerCase());
  
 var shuffledWords = jsPsych.randomization.shuffle(words);
 var shuffledLetters = jsPsych.randomization.shuffle(letters);
 var shuffledNumbers = jsPsych.randomization.shuffle(numbers);
 var shuffledSounds = jsPsych.randomization.shuffle(sounds);
 
 var i = 1;
 var j = 1;
 var k = 1;
 
 var stimDisplayed;
 var stimTotalDisplayed = [];
 var stimRem = [];
 
 var displayCross = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function(){
        return `<p style="font-size: 50px"><b>+</b></p>`
      },
      on_start: function(){
        console.log(`Playing sound ${j} : ${shuffledSounds[j]}`)
         audio = new Audio(shuffledSounds[j]);
         audio.loop = false;
         audio.play()
      },
      choices: "NO_KEYS",
      trial_duration: 2000,
      post_trial_gap: 0,
      
    };
 
 var test = []; 
 
 var displayItem = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function(){
        stimDisplayed = shuffledLetters[i-1]
        console.log(`Stim is ${stimDisplayed}`)
        stimTotalDisplayed = stimTotalDisplayed.concat(stimDisplayed)
        console.log(stimTotalDisplayed)
        return `<p style="font-size: 50px"><b>${shuffledLetters[i-1]}</b></p>`
      },
      on_start: function(){
      },
      on_finish: function(){
      },
      choices: "NO_KEYS",
      trial_duration: 1000,
      post_trial_gap: 0,
      
    };
    
  var displayBlank = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function(){
        return `<p style="font-size: 50px"><i>Pause</i></p>`
      },
      on_start: function(){
        audio.pause()
         },
      choices: "NO_KEYS",
      trial_duration: 5000,
      post_trial_gap: 0,
      
    };
    
  var surveyWord = {
  type: jsPsychSurveyText,
  button_label: "Valider",
  questions: [
    {prompt: `<i>Veuillez cliquer sur 
      <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">Barre espace</span>
      si vous avez fini.</i></p>
      <b>Rappel :</b> Ecrivez les items dans l'ordre d'apparition, séparés par une virgule`, required: true},
  ],
  on_finish: function(){
       //jsPsych.data.getLastTrialData())
       stimRem = jsPsych.data.getLastTrialData().trials[0].response.Q0.split(',')
       console.log(stimRem)
       return stimRem
  },
      randomize_order: false, 
};


  var displayBlank2 = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function(){
        return `<p style="font-size: 50px"><i>Pause</i></p>`
      },
      choices: "NO_KEYS",
      trial_duration: 2000,
      post_trial_gap: 0,
      data: {
        stimulus_remembered: stimRem,
      },
      
    };
  
  var loopTask = {
      timeline: [displayItem],
      loop_function: function(){
        if(i < numbItem){
          i++
          console.log(`Item ${i}`)
          return true
        } else {
          i = 1
          console.log("loopisover")
          return false
        }
      }, 

      on_start: function(){
        console.log(shuffledLetters)
        shuffledLetters = jsPsych.randomization.shuffle(letters)
      },
      on_finish: function(){
      },
      data: {
        stimulus_showed: shuffledLetters.slice(0,8),
      },
      randomize_order: false, 
    }; 
    
    
  var loopProcedure = {
    
      timeline: [
        displayCross, 
        loopTask, 
        displayBlank, 
        surveyWord, 
        displayBlank2
                 ],
                 
      loop_function: function(){
        if(j < 3){
          j++
          console.log(`Loop ${j}`)
          shuffledLetters = jsPsych.randomization.shuffle(letters)
          stimTotalDisplayed = []
          return true
        } else {
          j = 1
          return false
        }
      }, 

      on_start: function(){
      },
      randomize_order: false, 
    }; 
    
//  timeline.push(loopProcedure);
  
  var loopProcedureGlobal = {
    
      timeline: [
        loopProcedure
                 ],
                 
      loop_function: function(){
        return false
      }, 

      on_start: function(){
      },
      randomize_order: false, 
    }; 
    
 // timeline.push(loopProcedureGlobal);


 /* _______________________________________________________________________________________
FIN CODE D */

var finD = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size: 25px"><b>FIN DEMO</b></p><hr>
      <p><i></i></p>`,
      choices: ['Continuer'],
    };


var demoD = {
       timeline: [
       D, 
       preloadD,
       instructionD,
       loopProcedureGlobal,
       finD,
       ],
       conditional_function: function(){
         if(rappel === true){
           return true
         } else {
           return false
         }
       },
 }


timeline.push(demoD);

 /* _______________________________________________________________________________________
GLOBAL LOOP */

var loopYesNo;

var loopAgain = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size: 25px">Souhaitez-vous revenir à la page de choix des démonstrations ?</p><hr>`,
      choices: ['Revenir au début','Continuer'],
      on_finish: function(){
        var choice = jsPsych.data.getLastTrialData().trials[0].response
        if(choice == 0){
          loopYesNo = true
        } else {
          loopYesNo = false
        }
      },
    };

var loopGlobal = {
       timeline: [selectDemo, demoA, demoB, demoC, demoD, loopAgain],
       loop_function: function(){
         if(loopYesNo === true){
           return true
         } else {
           return false
         }
       },
 }


timeline.push(loopGlobal);

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