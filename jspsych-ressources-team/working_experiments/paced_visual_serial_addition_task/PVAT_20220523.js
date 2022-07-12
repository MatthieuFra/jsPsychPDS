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
     'sequence_1.wav',
     'sequence_2.wav',
     'sequence_1.wav',
     'sequence_2.wav',
     'sequence_1.wav',
     'sequence_2.wav',
     'sequence_1.wav',
     'sequence_2.wav',
     ];
 
    var resultsOp = [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12', '13', '14', '15', '16', '17', '18'];
 
/* _______________________________________________________________________________________
CODE EXPE */

var test = {
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:22px; color:black;">Test</p><hr>
                `,
      choices: ["Continuer"],
    };
    
timeline.push(test);


var opA;
var opB;
var correctAnsw;
var answ;
var isCorrect;

var task0 = {
    type: jsPsychCallFunction,
    func: function(){
        opA = Math.round(Math.random()*9)
        opB = Math.round(Math.random()*9)
        console.log(`A = ${opA}`)
        console.log(`B = ${opB}`)
    },
};

//timeline.push(task0);

var task1 = {
      type: jsPsychHtmlButtonResponse,
      stimulus: function(){
      return ` <p style="font-size:35px; color:black;"><b>${opA} + ${opB}</b><p>
                <hr>
                <p><i>Sélectionnez le bon résultat :</i></p>`},
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
      trial_duration: 3000,
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
       trial_duration: 500,
       choices: ["NO_KEYS"],
       data: function(){
         return {
         answer: `${isCorrect}`,
         }
       },
};

//timeline.push(task2);

var i = 1;

var loopTask = {
    timeline: [task0, task1, task2],
    loop_function: function(){
        if(i < 5){
          i++
          console.log(`Trial: ${i}`)
          return true
        } else {
          console.log(`End loop`)
          i = 1
          return false
        }
      },
    on_start: function(){
      
    },
    on_finish: function(){
      
    },
};

timeline.push(loopTask);







    
 /* _______________________________________________________________________________________
DATA PART */


/* start the experiment */
jsPsych.run(timeline);