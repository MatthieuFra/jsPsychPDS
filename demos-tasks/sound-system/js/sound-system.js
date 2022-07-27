var soundSystem1;

var trialSystem = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "Avec quel appareil écoutez-vous ?", 
      name: 'soundSystem', 
      options: ['Écouteurs', 'Casque', "Haut-parleur de l'ordinateur", 'Enceintes'], 
      required: true
    }, 
  ],
  on_finish: function(){
    soundSystem1 = jsPsych.data.getLastTrialData().trials[0].response.soundSystem
    console.log(soundSystem1)
    return soundSystem1
  },
};  
  
  
  
timeline.push(trialSystem);  
