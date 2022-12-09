var soundSystem1;

var trialSystem = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "With which device do you listen ?", 
      name: 'soundSystem', 
      options: ['Earplugs', 'Headphones', "Laptop speakers", 'Hi-fi speakers'], 
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