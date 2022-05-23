// DEF VALEURS EXP
    var stimuliTemps = 250;               // Temps presentation stimuli
    var allowedTime = 900;                // Temps de réponse
    var numberPossible = 8;          // Intervalle possible check écoute
    var chooseTarget = "5,a";               // Cible SART brute     ex: "a,B,2"
    var chooseTarget2 = ['5','A'];              // Cible SART tableau   ex: ['A','B','2'] avec A, B et 2 en cibles.
    var chooseProb = 5;                 // Probabilité de cible, combien de fois plus probable ? 2X ? 3X ? 
    
    // DEF TEMPS SART (en minutes)
    var timeSart1 = 0.5;              // TRAINING 1
    var timeSart2 = 0.5;              // TRAINING 2
    var timeSart3 = 1;              // SART 1 
    var timeSart4 = 1;              // SART 2 
    
    // SOUND USED
    var soundForSartSlow = [        // Sons pour la SART lente
      "TEST2.wav",
      ];
    var soundForSartFast = [        // Sons pour la SART Rapide
      "TEST1.wav",
      ]; 
    var soundForLastSurvey = [        // Sons pour les questions de fin (si diff)
      "silence.mp3",
      "silence.mp3",
      ]; 
      
//_______________________________________________________________________________________
//CODE BELOW_______________________________________________________________________________________
  
/* 

Si jamais quelque chose n'est pas clair, ne pas hésiter à 
m'appeler ! :-) 
M.

*/

/* _______________________________________________________________________________________
Lancement jsPsych 


   /* Initialiser jsPsych */
    var keyPressC;
    var rtKey;
    var rtArray = [];
    
    var jsPsych = initJsPsych({
       //show_progress_bar: true,
       on_finish: function() {
         jsPsych.data.displayData();
       },
      on_trial_start: function() {
        keyPressC = null
        rtKey = null
        var pressC = function(info){
        console.log("Touche ENTREE pressée à " + info.rt +  " ms")
        keyPressC = true
        rtArray.push(info.rt)
        rtKey = info.rt
        }
        var keyboardC = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: pressC,
          valid_responses: ['enter'],
          rt_method: 'performance',
          persist: true,
          allow_held_key: true,
        })
        
       //console.log('Pouf');
  },
    on_trial_finish: function(){
     var keyboardC
     
     jsPsych.pluginAPI.cancelAllKeyboardResponses(keyboardC)
     
     //var dataC ={keypress: true};
     if(keyPressC === true){
     jsPsych.data.write({keypress: [true, rtKey, rtArray]})
     console.log(rtArray)
     rtArray = []
     }
     
    },
    });

    /* création timeline */

    var timeline = [];
    
    /* Preload stimuli */
    var preload = {
      
      type: jsPsychPreload,
      audio: [
          "TEST1.wav",
          "TEST2.wav",
      ]
    };
    
    timeline.push(preload);
    
    var preload2 = {
      
      type: jsPsychPreload,
      image: [
          "0_NOIR",
          "0_ROUGE",
          "0_VERT",
      ]
    };
    
    timeline.push(preload2);
        
    
/* _______________________________________________________________________________________
DEF PARAM (old for exp design) */

/*    var preExp = {
     type: jsPsychSurveyText,
     questions: [
      // {prompt: '<p>Nombre <b>n</b> sons possibles <i>random < n</i></p><p><i>default = 10</i></p>', name: 'numberPossible', required: true},
       {prompt: '<p>Durée stimuli avant masque <b>(ms)</b></p><p><i>default SART= 250ms</i></p>', name: 'stimuliTemps'},
       {prompt: '<p>Temps pour répondre <b>(ms)</b></p><p><i>default SART= 900ms</i></p>', name: 'allowedTime'},
       {prompt: '<p>Cible SART <b>(separe with ,)</b></p><p><i>default SART= 0</i></p>', name: 'chooseTarget', required: true},
       {prompt: '<p>Prob. Target <b>(%)</b></p><p><i>default SART= 10%</i></p>', name: 'chooseProb'},
      ],
      on_finish: function() { 
      stimuliTemps = jsPsych.data.getLastTrialData().trials[0].response.stimuliTemps;
      allowedTime = jsPsych.data.getLastTrialData().trials[0].response.allowedTime;
  //    numberPossible = jsPsych.data.getLastTrialData().trials[0].response.numberPossible;
      chooseTarget = jsPsych.data.getLastTrialData().trials[0].response.chooseTarget.toUpperCase();
      chooseTarget2 = chooseTarget.split(',');
      chooseProb = jsPsych.data.getLastTrialData().trials[0].response.chooseProb;
      console.log(` n: ${numberPossible} Stimuli: ${stimuliTemps} Réponse: ${allowedTime} Targetchoose: ${chooseTarget} Probchoose: ${chooseProb} `);
      },
    };

timeline.push(preExp); */

   
/* _______________________________________________________________________________________
ACCUEIL EXPERIENCE */

    var welcome = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:30px;border: 2px solid black; color:black;padding: 8px; font-family: sans-serif">Bienvenue dans cette expérience, et merci d'avoir accepté de participer</p><hr><p>Pour débuter, veuillez cliquer sur <strong>continuer</strong></p><p></p>`,
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
        console.log(chooseTarget2)
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

/* _______________________________________________________________________________________
INSRUCTIONS 1*/

var instructions = {
    type: jsPsychInstructions,
    pages: [
    `<p style="font-size:30px; color:black;">Indications générales</p><hr>
     <p><i>Veuillez lire pour continuer.</i></p>`,
    "<p><b>Indications générales</b></p><hr><p><i>Merci d'avoir accepté de participer à cette expérience.</i></p><p><i>Votre participation devrait durer environ 20 minutes.</i></p>",
    "<p><b>Indications générales</b></p><hr><p><i>Cette expérience est divisée en deux parties. La première partie consiste en une tache d'écoute, la seconde en une double tache mobilisant votre écoute et votre attention.</i><p>",
    "<p><b>Indications générales</b></p><hr><p><i>XXX</i><p>"
    ],
    button_label_next: "Continuer",
    button_label_previous: "Retour",
    show_clickable_nav: true
}

 timeline.push(instructions); 

 
 /* _______________________________________________________________________________________
ETAPE 1 -- TEST ECOUTE */

     var numberOfSounds
      
     var startEtape1 = {
      
      type: jsPsychHtmlButtonResponse,
      //prompt: "<p></p><b>Etape 1</b>",
      stimulus: `<p style="font-size:30px; color:black;">Partie 1</p><hr>
                 <p>Veuillez cliquer sur <strong>continuer</strong></p><p></p>`,
      choices: ['Continuer'],
      on_finish: function(){
        numberOfSounds = Math.floor((Math.random()*(numberPossible-1))+2);
        console.log(`result randomization: ${numberOfSounds}`);
      }
    };
    
    timeline.push(startEtape1);
    
    var instructions2 = {
    type: jsPsychInstructions,
    pages: [
    `<p style="font-size:30px; color:black;">Instructions partie <b>1</b></p><hr>
     <p><i>Veuillez lire pour continuer.</i></p>`,
    "<p><b>Instructions</b></p><hr><p><i>Cette première partie consiste en l'écoute de différents sons.</i></p><p><i>Vous allez entendre successivement différents sons.</i></p>",
    "<p><b>Instructions</b></p><hr><p><i>Vous devrez ensuite indiquer le nombre de sons que vous avez entendus.</i><p>",
    "<p><b>Instructions</b></p><hr><p><i>Un entrainement précède la tache.</i><p>"
    ],
    button_label_next: "Continuer",
    button_label_previous: "Retour",
    show_clickable_nav: true
}

 timeline.push(instructions2); 
    
      
    var numberHeard;
    var successPreExp;
    var randomFreq;
    var randomSample;
    var randomSliceSample;

    var training1 = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:30px; color:black;">Lancement Partie 1</p><hr>
                 <p>Veuillez cliquer sur <strong>continuer</strong></p><p></p>`,
      choices: ['Continuer'],
    };
    
    timeline.push(training1);
    
      
    var soundPlayedHigh = [
          "3150.wav",
          "4000.wav",
          "5000.wav",
          "6300.wav",
          "8000.wav",
          "10000.wav",
          "12500.wav",
          "16000.wav",
      ]
      
    var soundPlayedMedium = [
          "315.wav",
          "400.wav",
          "500.wav",
          "630.wav",
          "800.wav",
          "1000.wav",
          "1250.wav",
          "1600.wav",
          "2000.wav",
      ]
    
    var soundPlayedLow = [
          "100.wav",
          "125.wav",
          "160.wav",
          "200.wav",
          "250.wav",
      ]  
      
    var soundPlayedSelect
    var soundPlayed = [soundPlayedHigh, soundPlayedMedium, soundPlayedLow]
    var parseNumbOfSound
      
      var parserNumb = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: "",
        choices: "NO_KEYS",
        post_trial_gap: 0,
        trial_duration: 50, // value in ms
        on_finish: function(){
          parseNumbOfSound = parseInt(numberOfSounds)
          console.log(parseNumbOfSound)
          return parseNumbOfSound
        }
      };
      
      timeline.push(parserNumb);
      
      var shuffleSample = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: " ",
      choices: "NO_KEYS",
      post_trial_gap: 0,
      trial_duration: 50, // value in ms
      response_ends_trial: false,
      on_finish: function(){
      randomFreq = jsPsych.randomization.shuffle(soundPlayed)
      randomSample = jsPsych.randomization.shuffle(randomFreq[0])
      randomSliceSample = randomSample.slice(0, 1)
      soundPlayedSelect = randomSliceSample
      console.log(soundPlayedSelect)
      return soundPlayedSelect
      }
    };
    
    timeline.push(shuffleSample);
      
      var listen0 = {
     
      type: jsPsychAudioKeyboardResponse,
      stimulus: function(){
        return soundPlayedSelect
      },
      choices: "NO_KEYS",
      trial_ends_after_audio: true,
      post_trial_gap: 200,
      on_finish: function(){
        
      },
      randomize_order: false,
    }; 
     
    // timeline.push(listen0);
      var i = 1
     
      var loopPreTask0 = {
      timeline: [shuffleSample, listen0],
      loop_function: function(){
        while(i < parseNumbOfSound){
          i ++
          console.log(i)
          return true
        }
      },
      //repetitions: parseNumbOfSound,
      randomize_order: false, 
      on_finish: function(){
        console.log(soundPlayedSelect)
      },
    }; 
    
    timeline.push(loopPreTask0);

    
    var trial1 = {
     type: jsPsychSurveyText,
     questions: [
       {prompt: 'Combien de sons différents avez-vous entendu ?', name: 'numberHeard', required: true},
      ],
      on_finish: function() { 
        console.log(jsPsych.data.getLastTrialData())
        numberHeard = jsPsych.data.getLastTrialData().trials[0].response.numberHeard;
        console.log(`numberHeard: ${numberHeard} numberOfSounds: ${numberOfSounds}`)
        if(numberHeard == numberOfSounds){
          successPreExp = true
          console.log(`PreExp: ${successPreExp}`)
        } else {
          successPreExp = false
          console.log(`PreExp: ${successPreExp}`)
        };
      },
      data: {
        task: 'REPONSE'
      }
    };

timeline.push(trial1);  


 /* _______________________________________________________________________________________
ETAPE 2 SART */
      
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
  
  timeline.push(weightTarget);
  
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
      startEtape2, 
      instructions3,
      afterInstruction3,
      training2,
      loopTaskTraining,
      resultsTraining0,
      aftertraining22,
      loopTaskTraining2,
      resultsTraining1,
      aftertraining2,
      startTask22, 
      loopTask1,
      resultsTraining1,
      afterLoop1,
      loopTask2,
      resultsTraining1
      ],
    conditional_function: function(){
        console.log(successPreExp)
        if(successPreExp === false){
            return false;
        } else {
            return true;
        }
    }
}

timeline.push(ifFailedPreExp);

      
   
 /* _______________________________________________________________________________________
Questionnaire Fin Exp. */

      var finalPart = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:26px; color:black;"><b>Questionnaire</b> de fin</p><hr>
                 <p>Nous avons quelques questions avant de finir.</p>
                 <p>Veuillez cliquer sur <strong>continuer</strong></p><p></p>`,
      choices: ['Continuer'],
    };
    
    timeline.push(finalPart);
    
    var slider = Math.floor(Math.random()*100)
    
        var trialSurvey1 = {
    type: jsPsychAudioSliderResponse,
    stimulus: 'silence.mp3',
    labels: ['Option Non-B', 'Option B'],
    prompt: '<p>Question 1 ?</p>',
    response_allowed_while_playing: true,
    slider_start: slider,
    require_movement: true,
    button_label: "Continuer",
    post_trial_gap: 500,
    on_start: function(){
       audio = new Audio('TEST2.wav');
       audio.loop = true;
      audio.play()
      return audio
    },
    on_finish: function(){
      audio.pause()
      slider = Math.floor(Math.random()*100)
    },
    data: {
        task: 'REPONSE' //audio.loop = true
      }
}
    
    timeline.push(trialSurvey1);
    
    var trialSurvey2 = {
    type: jsPsychAudioSliderResponse,
    stimulus: 'silence.mp3',
    labels: ['Option Non-B', 'Option B'],
    prompt: '<p>Question 1 ?</p>',
    response_allowed_while_playing: true,
    slider_start: slider,
    require_movement: true,
    button_label: "Continuer",
    post_trial_gap: 500,
    on_start: function(){
       audio = new Audio('TEST1.wav');
       audio.loop = true;
      audio.play()
      return audio
    },
    on_finish: function(){
      audio.pause()
    },
    data: {
        task: 'REPONSE' //audio.loop = true
      }
}
    
    timeline.push(trialSurvey2);
    
    

 /* _______________________________________________________________________________________
Questionnaire informations participant */



 /* _______________________________________________________________________________________
Sortie experience */


    var finexp = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `<p style="font-size:30px; color:black;">Merci d'avoir participé !</p><hr>
                 <p>Pressez la barre <strong>ESPACE</strong> pour clore l'expérience.</p><p></p>`,
      choices: " ",
    };
    
timeline.push(finexp);
    
 /* _______________________________________________________________________________________
DATA PART */


/* start the experiment */
jsPsych.run(timeline);