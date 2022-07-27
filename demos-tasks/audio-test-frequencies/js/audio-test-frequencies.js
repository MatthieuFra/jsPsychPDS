
     var numberOfSounds
      
     var startEtape1 = {
      
      type: jsPsychHtmlButtonResponse,
      //prompt: "<p></p><b>Etape 1</b>",
      stimulus: `<p style="font-size:25px; color:black;">Pré-test d'écoute</p><hr>
                 <p><i>Dans un premier temps, vérifions que vous pouvez entendre correctement sur votre appareil d'écoute.</i></p>
                 <p>Veuillez cliquer sur <strong>continuer</strong></p><p></p>`,
      choices: ['Continuer'],
      on_finish: function(){
        numberOfSounds = Math.floor((Math.random()*(8))+2);
        console.log(`result randomization: ${numberOfSounds}`);
      }
    };
    
    timeline.push(startEtape1);
    

var startEtape3 = {
      
      type: jsPsychHtmlButtonResponse,
      //prompt: "<p></p><b>Etape 1</b>",
      stimulus: `
                 <p><i>Une suite de sons va maintenant vous être présentée.</i></p>
                 <p><i>Veuillez compter le nombre de sons que vous entendez.</i></p>
                 <p>Appuyer sur <strong>commencer</strong>.</p><p></p>`,
      choices: ['Commencer'],
      on_finish: function(){
        numberOfSounds = 5;//Math.floor((Math.random()*(1))+2);
        console.log(`result randomization: ${numberOfSounds}`);
      }
    };
    
    timeline.push(startEtape3);
    
      
    var numberHeard;
    var successPreExp;
    var randomFreq;
    var randomSample;
    var randomSliceSample;
    
      
    var soundPlayedMedium = [
          "audio/400.wav",
          "audio/800.wav",
          "audio/1400.wav",
          "audio/3000.wav",
          "audio/6000.wav",
      ]
    
      
    var soundPlayedSelect
    var soundPlayed1 = [soundPlayedMedium]
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
      randomFreq = jsPsych.randomization.shuffle(soundPlayed1)
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
    
      var z = 1
     
      var loopPreTask0 = {
      timeline: [shuffleSample, listen0],
      loop_function: function(){
        while(z < parseNumbOfSound){
          z ++
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
       {prompt: 'Combien de sons avez-vous entendu ?', name: 'numberHeard', required: true},
      ],
      on_finish: function() { 
    //  console.log(jsPsych.data.getLastTrialData())
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

