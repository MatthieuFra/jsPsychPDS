

   // If same array for all experiment. 
   var sounds = [
     'audio/0_ACDC.mp3',
     ];
 
    var resultsOp = [
     '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12', '13', '14', '15', '16', '17', '18'];
 
    var randomOrNot; // true/false for randomizing or not
    
    var timeDisplayNumb = 1000; // Digts time presentation
    var timeDisplayBlank = 1000; // ISI between the two digits.
    var timeDisplayResp = 3000; // Time to respond.
    var timeDisplayFeedback = 1000; //Time of blank screen or "too late"
    var numbOperation = 10; //Number of operations per serial
    var numbSerie = 2; //How many series

/* _______________________________________________________________________________________
CODE EXPE */


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
          // faire en sorte que ça soit pas pareil
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
           return `<p style="font-size: 30px"><b>Too late !</b></p>`
         } else {
           return `<p style="font-size: 70px"><b> </b></p>`
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
      stimulus: `<p style="font-size:25px; color:black;">End of the serial</p><hr>
                 <p>Please take a short break.</p>
                 <p>When you are ready, click <strong>continue</strong> to restart a serial.</p><p></p>`,
      choices: ['New serial'],
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