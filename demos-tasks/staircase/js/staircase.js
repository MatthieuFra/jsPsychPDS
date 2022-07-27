
    var preloadB = {
      
      type: jsPsychPreload,
      audio: [
        "audio/1000_-20dBFS_-1.wav",
        "audio/1000_-20dBFS_-2.wav",
        "audio/1000_-20dBFS_-3.wav",
        "audio/1000_-20dBFS_-4.wav",
        "audio/1000_-20dBFS_-5.wav",
        "audio/1000_-20dBFS_-6.wav",
        "audio/1000_-20dBFS_-7.wav",
        "audio/1000_-20dBFS_-8.wav",
        "audio/1000_-20dBFS_-9.wav",
        "audio/1000_-20dBFS_-10.wav",
        "audio/1000_-20dBFS_-11.wav",
        "audio/1000_-20dBFS_-12.wav",
        "audio/1000_-20dBFS_-13.wav",
        "audio/1000_-20dBFS_-14.wav",
        "audio/1000_-20dBFS_-15.wav",
        "audio/1000_-20dBFS_-16.wav",
        "audio/1000_-20dBFS_-17.wav",
        "audio/1000_-20dBFS_-18.wav",
        "audio/1000_-20dBFS_-19.wav",
        "audio/1000_-20dBFS_-20.wav",
        "audio/1000_-20dBFS_-21.wav",
        "audio/1000_-20dBFS_-22.wav",
        "audio/1000_-20dBFS_-23.wav",
        "audio/1000_-20dBFS_-24.wav",
        "audio/1000_-20dBFS_-25.wav",
        "audio/1000_-20dBFS_-26.wav",
        "audio/1000_-20dBFS_-27.wav",
        "audio/1000_-20dBFS_-28.wav",
        "audio/1000_-20dBFS_-29.wav",
        "audio/1000_-20dBFS_-30.wav",
        "audio/1000_-20dBFS_-31.wav",
        "audio/1000_-20dBFS_-32.wav",
        "audio/1000_-20dBFS_-33.wav",
        "audio/1000_-20dBFS_-34.wav",
        "audio/1000_-20dBFS_-35.wav",
        "audio/1000_-20dBFS_-36.wav",
        "audio/1000_-20dBFS_-37.wav",
        "audio/1000_-20dBFS_-38.wav",
        "audio/1000_-20dBFS_-39.wav",
        "audio/1000_-20dBFS_-40.wav",
        "audio/1000_-20dBFS_-41.wav",
        "audio/1000_-20dBFS_-42.wav",
        "audio/1000_-20dBFS_-43.wav",
        "audio/1000_-20dBFS_-44.wav",
        "audio/1000_-20dBFS_-45.wav",
        "audio/1000_-20dBFS_-46.wav",
        "audio/1000_-20dBFS_-47.wav",
        "audio/1000_-20dBFS_-48.wav",
        "audio/1000_-20dBFS_-49.wav",
        "audio/1000_-20dBFS_-50.wav",
        "audio/1000_-20dBFS_-51.wav",
        "audio/1000_-20dBFS_-52.wav",
        "audio/1000_-20dBFS_-53.wav",
        "audio/1000_-20dBFS_-54.wav",
        "audio/1000_-20dBFS_-55.wav",
        "audio/1000_-20dBFS_-56.wav",
        "audio/1000_-20dBFS_-57.wav",
        "audio/1000_-20dBFS_-58.wav",
        "audio/1000_-20dBFS_-59.wav",
        "audio/1000_-20dBFS_-60.wav",
        "audio/1000_-20dBFS_-61.wav",
        "audio/1000_-20dBFS_-62.wav",
        "audio/1000_-20dBFS_-63.wav",
        "audio/1000_-20dBFS_-64.wav",
        "audio/1000_-20dBFS_-65.wav",
        "audio/1000_-20dBFS_-66.wav",
        "audio/1000_-20dBFS_-67.wav",
        "audio/1000_-20dBFS_-68.wav",
        "audio/1000_-20dBFS_-69.wav",
        "audio/1000_-20dBFS_-70.wav",
        "audio/1000_-20dBFS_-71.wav",
        "audio/1000_-20dBFS_-72.wav",
        "audio/1000_-20dBFS_-73.wav",
        "audio/1000_-20dBFS_-74.wav",
        "audio/1000_-20dBFS_-75.wav",
        "audio/1000_-20dBFS_-76.wav",
        "audio/1000_-20dBFS_-77.wav",
        "audio/1000_-20dBFS_-78.wav",
        "audio/1000_-20dBFS_-79.wav",
        "audio/1000_-20dBFS_-80.wav",
        "audio/1000_-20dBFS_-81.wav",
        "audio/1000_-20dBFS_-82.wav",
        "audio/1000_-20dBFS_-83.wav",
        "audio/1000_-20dBFS_-84.wav",
        "audio/1000_-20dBFS_-85.wav",
        "audio/1000_-20dBFS_-86.wav",
        "audio/1000_-20dBFS_-87.wav",
        "audio/1000_-20dBFS_-88.wav",
        "audio/1000_-20dBFS_-89.wav",
        "audio/1000_-20dBFS_-90.wav",
        "audio/1000_-20dBFS_-91.wav",
        "audio/1000_-20dBFS_-92.wav",
        "audio/1000_-20dBFS_-93.wav",
        "audio/1000_-20dBFS_-94.wav",
        "audio/1000_-20dBFS_-95.wav",
        "audio/1000_-20dBFS_-96.wav",
        "audio/1000_-20dBFS_-97.wav",
        "audio/1000_-20dBFS_-98.wav",
        "audio/1000_-20dBFS_-99.wav",
        "audio/1000_-20dBFS_-100.wav",
    
     
      ]
    };
    
 
    
    var chooseFreq;
    var chooseMethod;
    
    var configExpB = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "Choisissez la <b>fréquence</b> du stimuli <i>(Hz)</i> (not implemented yet)", 
      name: 'Freq', 
      options: [200, 500, 1000, 5000], 
      required: true
    }, 
    {
      prompt: "Méthode adaptative (not implemented yet)", 
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
           return `audio/${witchFreq}_-20dBFS_-${volSound}.wav` 
         } else if(soundHeard === false){
           volSound --
          console.log("On monte le son !")
          console.log(`volSound = -${volSound}`)
           return `audio/${witchFreq}_-20dBFS_-${volSound}.wav`
         } else {
           console.log("Première écoute")
           console.log(`initVol = -${initVol}`)
           return `audio/${witchFreq}_-20dBFS_-${initVol}.wav`
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
      while(count < 10){
        count++
        console.log(`Count is ${count}`)
        return true
      }
    },

  }
  
