/* _______________________________________________________________________________________
Lancement jsPsych 


   /* Initialiser jsPsych */
   
    var jsPsych = initJsPsych({
      //show_progress_bar: true,
      on_finish: function() {
      //jsPsych.data.displayData(); 
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
      audio: sounds
      
    };
    
    timeline.push(preload);
  
    
/* _______________________________________________________________________________________
PARAMETRES */

   // If same array for all experiment. 
   var sounds = [
     '0_ACDC.mp3',
     ];
 
    var resultsOp = [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12', '13', '14', '15', '16', '17', '18'];
 
    var timeDisplayNumb = 1000; // Le temps de présentation des chiffres.
    var timeDisplayBlank = 1000; // Le temps de blanc entre les deux.
    var timeDisplayResp = 3000; // Le temps pour répondre.
    var timeDisplayFeedback = 1000; //Le temps qui affiche le blanc ou "trop tard".
    var numbOperation = 2; //Nombre d'opération par série
    var numbSerie = 1; //Combien de séries

/* _______________________________________________________________________________________
CODE EXPE */

var test = {
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:22px; color:black;">TEMPORAIRE</p><hr>
                `,
      choices: ["Continuer"],
    };
    
timeline.push(test);


var opA = null;
var opB = null;
var correctAnsw;
var answ;
var isCorrect;
var isFirst;


var chooseSound;

var preloadSound = {
      
      type: jsPsychPreload,
      audio: sounds
      
    };
    
    //timeline.push(preload);

var playSound = {
  type: jsPsychCallFunction,
  func: function(){
      var chooseTrack = jsPsych.randomization.shuffle(sounds)
      chooseTrack = chooseTrack.slice(0,1)
      audio = new Audio(`${chooseTrack}`)//Audio('TEST1.wav');
      audio.play()
      return audio
  },
};

//timeline.push(playSound);

var stopSound = {
  type: jsPsychCallFunction,
  func: function(){
      audio.pause()
  },
};

//timeline.push(stopSound);

var task0 = {
    type: jsPsychCallFunction,
    func: function(){
        if(opA === null){
          console.log('Premier A')
          opA = Math.round(Math.random()*8+1)
          opB = Math.round(Math.random()*8+1)
          isFirst = true
          console.log(`A = ${opA}`)
          console.log(`B = ${opB}`)
        } else {
          opA = opB
          opB = Math.round(Math.random()*8+1)
          isFirst = false
          console.log(`A = ${opA}`)
          console.log(`B = ${opB}`)
        }
    },
    on_finish: function(){
      },
};

//timeline.push(task0);

var displayA = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function(){
        return `<p style="font-size:35px; color:black;"><b>${opA}</b><p>`
      },
      choices: "NO_KEYS",
      post_trial_gap: 0,
      trial_duration: timeDisplayNumb, // value in ms
      response_ends_trial: false,
      on_finish: function(){
      }
    };
    
  //  timeline.push(displayA);
    
    
var displayBlank = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: ` `,
      choices: "NO_KEYS",
      post_trial_gap: 0,
      trial_duration: timeDisplayBlank, // value in ms
      response_ends_trial: false,
      on_finish: function(){
      }
    };
    
 //   timeline.push(displayBlank);
    
var condDisplayA = {
  
    timeline: [displayA, displayBlank],
    conditional_function: function(){
      if(isFirst === true){
        return true
      } else if(isFirst === false){
        return false
      }
    },
};
    
var displayB = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function(){
        return `<p style="font-size:35px; color:black;"><b>${opB}</b><p>`
      },
      choices: "NO_KEYS",
      post_trial_gap: 0,
      trial_duration: timeDisplayNumb, // value in ms
      response_ends_trial: false,
      on_finish: function(){
        
      }
    };
    
//    timeline.push(displayB);
    


var task1 = {
      type: jsPsychHtmlButtonResponse,
      stimulus: function(){
      return ``},
        /*
        <hr>
        <p><i>Sélectionnez le bon résultat :</i></p>
        */
      choices: resultsOp,
      on_start: function(){
        correctAnsw = opA + opB
        console.log(`Correct resp is : ${correctAnsw}`)
        return correctAnsw
      },
      on_finish: function(){
        var repOrNot; 
        repOrNot = jsPsych.data.getLastTrialData().trials[0].response
       // console.log(repOrNot)
        answ = jsPsych.data.getLastTrialData().trials[0].response+1
        console.log(`User resp is : ${answ}`)
        if(repOrNot != null){
          if(answ === correctAnsw){
            console.log(`TRUE`)
            isCorrect = true
            return isCorrect
          } else {
            console.log(`FALSE`)
            isCorrect = false
            return isCorrect
          }
        } else {
          console.log(`Time out !`)
          isCorrect = null
          return isCorrect
        }
      },
      trial_duration: timeDisplayResp,
      response_ends_trial: true, 
    };
  
//timeline.push(task1);

var task2 = {
       type: jsPsychHtmlKeyboardResponse,
       stimulus: function(){
         if(isCorrect === null){
           return `<p style="font-size: 30px"><b>Trop tard !</b></p>`
         } else {
           return `<p style="font-size: 70px"><b>+</b></p>`
         }
         
       },
       on_start: function(){
       },
       trial_duration: timeDisplayFeedback,
       choices: ["NO_KEYS"],
       data: function(){
         return {
         answer: `${isCorrect}`,
         }
       },
};

//timeline.push(task2);

var loopi = 1;

var pause2 = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:25px; color:black;">Fin de la série</p><hr>
                 <p>Prenez le temps de faire une petite pause.</p>
                 <p>Lorsque vous êtes prêts, cliquez sur <strong>continuer</strong> pour relancer une série.</p><p></p>`,
      choices: ['Nouvelle série'],
    };

var loopTask = {
  
    timeline: [
      task0, 
      condDisplayA, 
      displayB,
      task1, 
      task2],
      
    loop_function: function(){
        if(loopi < numbOperation){
          loopi++
          console.log(`Trial: ${loopi}`)
          return true
        } else {
          console.log(`End loop`)
          loopi = 1
          return false
        }
      },
    on_start: function(){
      
    },
    on_finish: function(){
      
    },
};

//timeline.push(loopTask);

var loopGi

var loopGlobal = {
  
  timeline: [
    preloadSound,
    playSound,
    loopTask,
    stopSound,
    pause2,
    ],
    
  loop_function: function(){
    if(loopGi < numbSerie){
      loopGi++
      console.log(`Serie: ${loopGi}`)
      return true
    } else {
      console.log(`End loopGlobal`)
      loopGi = 1
      return false
    }
  },
};

timeline.push(loopGlobal);


    
 /* _______________________________________________________________________________________
DATA PART */


/* start the experiment */
jsPsych.run(timeline);
