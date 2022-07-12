/* _______________________________________________________________________________________
ON LANCE jsPsych 


   /* Initialiser jsPsych */
    
    var jsPsych = initJsPsych({
       //show_progress_bar: true,
       on_finish: function() {
         jsPsych.data.displayData();
       }
    });

    /* création timeline */

    var timeline = [];
    
    /* Preload stimuli */
    
   /* _______________________________________________________________________________________
PRE_TASK */

    var preload = {
      
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
    
    timeline.push(preload);
    
    
    var welcome = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: "<p>Bienvenue dans cette expérience</p><hr><p></p>",
      choices: ['Continuer'],
      post_trial_gap: 100,
    };
    
    timeline.push(welcome);
    
    var chooseFreq;
    var chooseMethod;
    
    var configExp = {
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

    timeline.push(configExp);
    
    var instructions = {
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
    timeline.push(instructions);
    
      var startExp = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: "<p>Cliquez sur continuer pour lancer la tache.</p><hr><p></p>",
      choices: ['Continuer'],
      post_trial_gap: 1000,
    };
    
    timeline.push(startExp);

 /* _______________________________________________________________________________________
TASK PERFORM */

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
           console.log(`volSound = ${volSound}`)
           return `${witchFreq}_-20dBFS_-${volSound}.wav` 
         } else if(soundHeard === false){
           volSound --
          console.log("On monte le son !")
          console.log(`volSound = ${volSound}`)
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
    
    var loopTask = {
    timeline: [playSound, heardYesNo],
    post_trial_gap: 0,
    on_start: function(){
      
    },
    loop_function: function(){        
      while(count < 30){
        count++
        console.log(`Count is ${count}`)
        return true
      }
    },

  }
  
  timeline.push(loopTask);
  
  
      var endExp = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: "<p style='font-size:28px; color:black;'>Merci d'avoir participé à cette expérience</p><hr><p>Appuyez sur espace pour terminer</p>",
      choices: [' ']
    };
    
    timeline.push(endExp);

    
    
 /* _______________________________________________________________________________________
DATA PART */


/* start the experiment */
jsPsych.run(timeline);