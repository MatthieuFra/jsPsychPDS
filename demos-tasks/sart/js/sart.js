
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
     'audio/0_ACDC.mp3',
     'audio/1_ACDC.mp3',
     'audio/2_ACDC.mp3',
     'audio/4_ACDC.mp3',
     'audio/5_ACDC.mp3',
     'audio/6_ACDC.mp3',
     'audio/7_ACDC.mp3',
     'audio/8_ACDC.mp3',
     'audio/9_ACDC.mp3',
      ];
    var soundForSartFast = [        // Sons pour la SART Rapide
     'audio/0_ACDC.mp3',
     'audio/1_ACDC.mp3',
     'audio/2_ACDC.mp3',
     'audio/4_ACDC.mp3',
     'audio/5_ACDC.mp3',
     'audio/6_ACDC.mp3',
     'audio/7_ACDC.mp3',
     'audio/8_ACDC.mp3',
     'audio/9_ACDC.mp3',
      ]; 
      
      var preloadC = {
      
      type: jsPsychPreload,
      audio: [
      'audio/0_ACDC.mp3',
     'audio/1_ACDC.mp3',
     'audio/2_ACDC.mp3',
     'audio/4_ACDC.mp3',
     'audio/5_ACDC.mp3',
     'audio/6_ACDC.mp3',
     'audio/7_ACDC.mp3',
     'audio/8_ACDC.mp3',
     'audio/9_ACDC.mp3',
      ]
    };
    
        

  

var targetAvoid = {
      
      type: jsPsychHtmlButtonResponse,
      //prompt: "<p></p><b>Etape 2</b>",
      stimulus: function(){
     return `<p style="font-size:30px; color:black;">Cibles à éviter :</p><hr>
                 <p><i>Ne cliquez pas si les cibles suivantes s'affichent.</i></p><p><strong>${chooseTarget2.join(" -  ")}</strong></p><p></p>`
      }, 
      choices: ['Continuer'],
    };
    


      var possibleTrack =  jsPsych.randomization.shuffle([soundForSartFast, soundForSartSlow]);

      
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
      return '<img src="img/0_NOIR.png" width="100" height="100" />'//'<p style="font-size:80px; color:black;">X</p>'
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
         return '<img src="img/0_VERT.png" width="100" height="100" />'//'<p style="font-size:30px; color:green;"><b>Bonne réponse !</b></p><p style="font-size:30px; color:green;">Bien vu !</p>'
      } else if(subjectResponse === true && isTarget === false){
         return '<img src="img/0_VERT.png" width="100" height="100" />'//'<p style="font-size:30px; color:green;"><b>Bonne réponse !</b></p>'
      } else if(subjectResponse === true && isTarget === true){
         return '<img src="img/0_ROUGE.png" width="100" height="100" />'//'<p style="font-size:30px; color:red;"><b>Mauvaise réponse...</b></p>'
      } else if(subjectResponse === false){
        return '<img src="img/0_NOIR.png" width="100" height="100" />'//'<p style="font-size:30px; color:black;">Trop lent..</p>'
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
         return '<img src="img/0_VERT.png" width="100" height="100" /><p><b>Bien vu !</b></p>'//'<p style="font-size:30px; color:green;"><b>Bonne réponse !</b></p><p style="font-size:30px; color:green;">Bien vu !</p>'
      } else if(subjectResponse === true && isTarget === false){
         return '<img src="img/0_VERT.png" width="100" height="100" /><p><b>Bonne réponse!</b></p>'//'<p style="font-size:30px; color:green;"><b>Bonne réponse !</b></p>'
      } else if(subjectResponse === true && isTarget === true){
         return '<img src="img/0_ROUGE.png" width="100" height="100" /><p><b>Ne pas appuyer pour la cible !</b></p>'//'<p style="font-size:30px; color:red;"><b>Mauvaise réponse...</b></p>'
      } else if(subjectResponse === false){
        return '<img src="img/0_NOIR.png" width="100" height="100" /><p><b>Trop lent !</b></p>'//'<p style="font-size:30px; color:black;">Trop lent..</p>'
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
      targetAvoid,
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

timeline.push(ifFailedPreExp);
