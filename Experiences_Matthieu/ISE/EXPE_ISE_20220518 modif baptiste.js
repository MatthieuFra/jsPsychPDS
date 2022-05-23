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
      
  var expliTache1 = `
  Des séries de neuf chiffres vont vous être présentées successivement. 
  Veuillez retenir à chaque fois les neufs chiffres dans l'ordre.
  `;  
  
  var expliRestit1 = `
  A la fin de chaque série, un champ de réponse vous permettra de restituer dans l'ordre les chiffres que vous avez mémorisés.
  Renseignez obligatoirement <b>neuf</b> items.
  Si vous n'avez pas retenu un ou plusieurs chiffres de la série, renseignez "<b>x</b>" à la place du chiffre oublié.
  `; 
  
  var exempleRestit1 = `
  <p><u>Exemple d'une série mémorisée entièrement :</u></p>
  <img src="/reponsecorrecte2.png" width="300" height="auto">
  
  <p><u>Exemple d'une série mémorisée partiellement :</u></p>
  <p><i>(Renseignez "<b>x</b>" à la place des chiffres oubliés dans la série)</i></p>
  <img src="/reponseincorrecte2.png" width="300" height="auto">
  `; 
      
   var letters = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Y', 'Z'];  
   var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
   
   
   // If same array for all experiment. 
   var sounds = [
     'sequence_1.wav',
     'sequence_2.wav',
     ];
     
     
    // If differents array. 
    var sounds1 = [
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     ];
     
    var sounds2 = [
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     ];
     
    var sounds3 = [
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     ];
     
    var sounds4 = [
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     ];
     
    var sounds5 = [
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     'sequence_1.wav',
     ];
     
    var soundTraining = [
     'sequence_1.wav',
     ];
     
    var soundEval = [
     'sequence_1.wav',
     'sequence_2.wav',
     ];
     
   var email = "ise@ircam.fr";
     
   var itemNumber = null;
   var numbLoop = 2;        //3
   var numbTrials = 1;      //3
   var numbItem = 9;        //9
   var timePause = 5000;
   var numbSoundsEval = 2;
   var numbTrialTraining = 2;
   var lengthItem = 700;
   var evalEnd = false; 
   var diffSerie = false;   //For switching from one array common to all series or one array per serie.
   
   
/* _______________________________________________________________________________________
ACCUEIL EXPERIENCE */

var uniqueID; 

    var welcome = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `
       <p><img src="data:image/png;base64,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" width="200" height="auto"></p>
      
       <p style="font-size:25px;border: 0px solid #000;border-radius: 5px; color:#222;padding: 8px; font-family: sans-serif">Bienvenue dans cette expérience</p><hr>
       <p>Merci d'avoir accepté de participer.</p>
       <p style="font-size:18px">Pour commencer, veuillez cliquer sur <i>Continuer</i>.</p>
  `,
      choices: ['Continuer'],
      on_start: function(){
        var IDLetter = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Y', 'Z']
        var IDLetterChoose = jsPsych.randomization.shuffle(IDLetter).slice(0, 3).join('')
        var randomNumberID = `${Math.floor((Math.random()*1000))}`
        uniqueID = `${Math.floor((Math.random()*100))}`+`-${IDLetterChoose}`+`-${Math.floor(Date.now()-1000000000000)}`; 
        console.log(uniqueID)
        jsPsych.data.addProperties({subject: uniqueID});
        console.log(Date(Date.now()).toLocaleString().split(',')[0])
        return uniqueID
      },
      on_finish: function(){
      },
    };
    
    timeline.push(welcome);

/*

    var enter_fullscreen = {
      type: jsPsychFullscreen,
      message: "<p><i>Vous allez entrer en plein écran.</i></p>",
      button_label: "Continuer",
      fullscreen_mode: true

      } 

timeline.push(enter_fullscreen) 

*/
/*
 var trialDemo = {
  type: jsPsychSurveyText,
  button_label: "Continuer",
  preamble : `
      <p style="font-size: 20px"><b>Questionnaire d'information</b></p><hr>
      <p><i>Avant toute chose, nous avons besoins de quelques informations.</i></p>
  `,
  questions: [
    {prompt: 'Quel <b>âge</b> avez vous ?', required: true},
    {prompt: 'Quel est votre <b>sexe</b> ?', placeholder: 'M/F', required: true},
  ],
  on_finish: function(){
    console.log(`Age : ${jsPsych.data.getLastTrialData().trials[0].response.Q0}`)
    console.log(`Sexe : ${jsPsych.data.getLastTrialData().trials[0].response.Q1}`)
    age = jsPsych.data.getLastTrialData().trials[0].response.Q0
    sex = jsPsych.data.getLastTrialData().trials[0].response.Q1
  }
}
    timeline.push(trialDemo); */
    

var surveyNew = {
  type: jsPsychSurveyHtmlForm,
  preamble: `
      <p style="font-size: 20px"><b>Questionnaire d'information</b></p><hr>
      <p><i>Avant toute chose, nous avons besoins de quelques informations.</i></p>
  `,
  html: `
  <p>Quel <b>âge</b> avez vous ?</p>
  <p><input name="first" type="number" size="30" required="true"/></p>
  <p><label for="sexe">Quel est votre <b>sexe</b></label></p>
<p><select id="sexe" name="sexe" size="1" required="true">
  <option value="M">M</option>
  <option value="F">F</option>
</select></p>
  
  `,
  
  /*
  <p>Quel est votre <b>sexe</b></p>
  <p><input name="second" type="text" placeholder="M/F" /></p>
  */
  on_finish: function(){
    console.log(jsPsych.data.getLastTrialData().trials[0].response.first)
    console.log(jsPsych.data.getLastTrialData().trials[0].response.sexe)
    age = jsPsych.data.getLastTrialData().trials[0].response.first
    sex = jsPsych.data.getLastTrialData().trials[0].response.sexe
  },
};

timeline.push(surveyNew); 
    
    
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

/*    ANCIEN TEST D'ECOUTE

var intro = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'test_stereo2.mp3',
    choices: ['Continuer'],
    response_allowed_while_playing: false,
    prompt: "<p>Vérifiez que votre casque est bien positionné.</p><p>Vous devez entendre le chiffre <strong>1</strong> dans votre oreille gauche.<p><p>Vous devez entendre le chiffre <strong>2</strong> dans votre oreille droite.<p> "

};

timeline.push(intro)
          
var intro2 = {
    type: jsPsychAudioButtonResponse,
    stimulus: '400-hz-test-tone2.mp3',
    choices: ['Continuer'],
    response_allowed_while_playing: true,
    prompt: ` <p>Réglez le volume de votre casque de façon confortable.<p>
<p>Le son ne doit être ni trop <strong>fort</strong> ni trop <strong>faible</strong>.</p>
`
};
timeline.push(intro2);

*/

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
    
    var intro2 = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'bruitrose.wav',
    choices: ['Continuer'],
    response_allowed_while_playing: true,
    prompt: ` <p>Réglez le volume de votre casque de façon confortable.<p>
<p>Vous devez entendre clairement le son, et il ne doit être ni trop <strong>fort</strong> ni trop <strong>faible</strong>.</p>
`
};

timeline.push(intro2);

var startEtape3 = {
      
      type: jsPsychHtmlButtonResponse,
      //prompt: "<p></p><b>Etape 1</b>",
      stimulus: `
                 <p><i>Une suite de sons va vous être présentée.</i></p>
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
          "400.wav",
          "800.wav",
          "1400.wav",
          "3000.wav",
          "6000.wav",
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



var instruction1 = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size: 25px"><b>Début du test</b></p><hr>
  `,
      choices: ['Continuer'],
      on_start: function(){
      },
      on_finish: function(){
      }
    };
    
    timeline.push(instruction1);
    
    var age;
    var sex;
    
   
var instructionsTache1 = {
    type: jsPsychInstructions,
    pages: [
    `<p><b>Instructions</b></p><hr><p>${expliTache1}</p>`,
    `<p><b>Instructions</b></p><hr><p>${expliRestit1}</p>`,
    `<p><b>Instructions</b></p><hr><p>${exempleRestit1}</p>`,
  
    ],
    button_label_next: "Continuer",
    button_label_previous: "Retour",
    show_clickable_nav: true
}

 timeline.push(instructionsTache1); 
 
    
 var words = [
   'Pomme',
   'Platre',
   'Ours',
   'Serviette',
   'Voiture',
   'Balise',
   'Clavier',
   'Téléphone',
   'Lentille',
   'Horloge',
   ];
   
 var downWords = words.map(words => words.toLowerCase());
  
 var shuffledWords = jsPsych.randomization.shuffle(words);
 var shuffledLetters = jsPsych.randomization.shuffle(letters);
 var shuffledNumbers = jsPsych.randomization.shuffle(numbers);
 var shuffledSounds = jsPsych.randomization.shuffle(sounds);
 
 var i = 1;
 var j = 1;
 var k = 1;
 
 var stimDisplayed;
 var stimTotalDisplayed = [];
 var stimRem = [];
 var soundPlayed;
 var training = "yes";
 
 // Invisible plugin just to calculate the sounds to be played.
 var diffSerieCompute = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: " ",
      on_start: function(){
        
      },
      on_finish: function(){
        
        if(diffSerie === false){
          console.log(`DiffSerie = False`)
          shuffledSounds = jsPsych.randomization.shuffle(sounds);
          
          return shuffledSounds
          
        } else if (diffSerie === true){
          console.log(`DiffSerie = False`)
          shuffledSounds = []
          shuffledSounds.push(
            jsPsych.randomization.shuffle(sounds1),
            jsPsych.randomization.shuffle(sounds2),
            jsPsych.randomization.shuffle(sounds3),
            jsPsych.randomization.shuffle(sounds4),
            jsPsych.randomization.shuffle(sounds5),
          )
          console.log(shuffledSounds)
          return shuffledSounds
        }
        
      },
      
      choices: "NO_KEYS",
      trial_duration: 10,
      post_trial_gap: 0,
      
    };
    
  timeline.push(diffSerieCompute);
 
     var preloadTask = {
      
      type: jsPsychPreload,
      audio: function(){
        console.log("CHARGEMENT SON")
        if(diffSerie === false){
          
          return shuffledSounds[j-1]
          
        } else if(diffSerie === true){
          
          return shuffledSounds[k-1][j-1]
        }
        
      },
      on_start: function(){
        stimTotalDisplayed = []
        shuffledNumbers = jsPsych.randomization.shuffle(numbers)
      },
      
    };
 
 var displayCross = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function(){
        return `<p style="font-size: 70px"><b>+</b></p>`
      },
      on_start: function(){
        //diffSerie (pour les diffénts tableaux)
        
        if(diffSerie === false){
          
          
         console.log(`Playing sound ${j} : ${shuffledSounds[j-1]}`)
         soundPlayed = shuffledSounds[j-1]
         audio = new Audio(shuffledSounds[j-1]);
         audio.loop = false;
         audio.play()
         console.log(soundPlayed)
         return soundPlayed
          
        } else if(diffSerie === true){
          
         console.log(`Playing sound ${j} : ${shuffledSounds[k-1][j-1]}`)
         soundPlayed = shuffledSounds[k-1][j-1]
         audio = new Audio(shuffledSounds[k-1][j-1]);
         audio.loop = false;
         audio.play()
         console.log(soundPlayed)
         return soundPlayed
         
        }
      },
      on_finish: function(){
        arrayRep = []
        console.log('RESET ARRAY REP')
      },
      choices: "NO_KEYS",
      trial_duration: 2000,
      post_trial_gap: 0,
      
    };
    
 
 var test = []; 
 
 var displayItem = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function(){
        stimDisplayed = shuffledNumbers[i-1]
        console.log(`Stim is ${stimDisplayed}`)
        stimTotalDisplayed = stimTotalDisplayed.concat(stimDisplayed)
        console.log(stimTotalDisplayed)
        return `<p style="font-size: 70px"><b>${shuffledNumbers[i-1]}</b></p>`
      },
      on_start: function(){
      },
      on_finish: function(){
      },
      choices: "NO_KEYS",
      trial_duration: lengthItem,
      post_trial_gap: 0,
      
    };
    
  var displayItemMask = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: "",
      on_start: function(){
      },
      on_finish: function(){
      },
      choices: "NO_KEYS",
      trial_duration: function(){
        if(lengthItem === 1000){
          return 0
        } else {
          return 1000-lengthItem
          
        }
      },
      post_trial_gap: 0,
      
    };
    
  var displayItemMaskCond = {
    timeline: [displayItemMask],
    conditional_function: function(){
      if(lengthItem === 1000){
          return false
        } else {
          return true
        }
    }
  };
    
  var displayBlank = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function(){
        return `<p style="font-size: 70px"><b>+</b></p>`
      },
      on_start: function(){
        audio.pause()
         },
      choices: "NO_KEYS",
      trial_duration: timePause,
      post_trial_gap: 0,
      
    };
    
  var failed = false;
  
  var repLength;
  var arrayRep = [];
  var htmlRep = [
    'black',
    'black',
    'black',
    'black',
    'black',
    'black',
    'black',
    'black',
    'black',
  ];

/*    
  var surveyWordA = { 
  type: jsPsychSurveyText,
  button_label: "Valider",
  questions: [
    {prompt: `
      <p>Ecrivez les chiffres dans l'ordre d'apparition</p>
      <p>Renseignez "<b>x</b>" à la place des chiffres oubliés.</p>`, required: true},
  ],
  on_finish: function(){
       //jsPsych.data.getLastTrialData())
       stimRem = jsPsych.data.getLastTrialData().trials[0].response.Q0.split(',')
       console.log(stimRem)
       
       rtResponseSurvey = jsPsych.data.getLastTrialData().trials[0].rt
       console.log(rtResponseSurvey)
       
       arrayRep.push(rtResponseSurvey)
       arrayRep.push(stimRem)
       console.log(arrayRep)
       
       return arrayRep//return stimRem
  },
      randomize_order: false, 
};

var rappelConsi = ""; */

var rtResponseSurvey; 

var goodLength;
var repDetail = [];
var vv = true;

var htmlPrompt = `<p></p><p><i>Renseignez "<b>x</b>" à la place des chiffres oubliés.</i></p>
  <input name="rep1" id="focus" min="1" max="2" type="text" required="true" style="font-size:25px; display:inline; border-style:solid; width:35px;"/>
  <input name="rep2" min="1" max="2" type="text" required="true" style="font-size:25px; display:inline; border-style:solid; width:35px;"/>
  <input name="rep3" type="text" required="true" style="font-size:25px; display:inline; border-style:solid; width:35px;"/>
  <input name="rep4" type="text" required="true" style="font-size:25px; display:inline; border-style:solid; width:35px;"/>
  <input name="rep5" type="text" required="true" style="font-size:25px; display:inline; border-style:solid; width:35px;"/>
  <input name="rep6" type="text" required="true" style="font-size:25px; display:inline; border-style:solid; width:35px;"/>
  <input name="rep7" type="text" required="true" style="font-size:25px; display:inline; border-style:solid; width:35px;"/>
  <input name="rep8" type="text" required="true" style="font-size:25px; display:inline; border-style:solid; width:35px;"/>
  <input name="rep9" type="text" required="true" style="font-size:25px; display:inline; border-style:solid; width:35px;"/>
  <p></p>`;
  
var funcHtml = {
    type: jsPsychCallFunction,
    func: function(){
      
      console.log(`FuncHTML working!`)
      
      if(failed === false){
        
         htmlPrompt = `<p></p><p><i>Renseignez "<b>x</b>" à la place des chiffres oubliés.</i></p>
  <div class="form-wrap">
  <input name="rep1" id="focus" min="1" max="2" type="text" required="true" maxlength="1" style="font-size:25px; display:inline; border-style:solid; width:35px; text-align: center;"/>
  <input name="rep2" min="1" max="2" type="text" required="true" maxlength="1" style="font-size:25px; display:inline; border-style:solid; width:35px; text-align: center;"/>
  <input name="rep3" type="text" required="true" maxlength="1" style="font-size:25px; display:inline; border-style:solid; width:35px; text-align: center;"/>
  <input name="rep4" type="text" required="true" maxlength="1" style="font-size:25px; display:inline; border-style:solid; width:35px; text-align: center;"/>
  <input name="rep5" type="text" required="true" maxlength="1" style="font-size:25px; display:inline; border-style:solid; width:35px; text-align: center;"/>
  <input name="rep6" type="text" required="true" maxlength="1" style="font-size:25px; display:inline; border-style:solid; width:35px; text-align: center;"/>
  <input name="rep7" type="text" required="true" maxlength="1" style="font-size:25px; display:inline; border-style:solid; width:35px; text-align: center;"/>
  <input name="rep8" type="text" required="true" maxlength="1" style="font-size:25px; display:inline; border-style:solid; width:35px; text-align: center;"/>
  <input name="rep9" type="text" required="true" maxlength="1" style="font-size:25px; display:inline; border-style:solid; width:35px; text-align: center;"/>
  </div>
  <p></p>
   <p style="font-size: 22px; color: white;"><b>Vous devez inscrire 9 items !</b></p>
   `
  
       return htmlPrompt
        
      } else if(failed === true){
        
      htmlPrompt = `<p></p><p><i>Renseignez "<b>x</b>" à la place des chiffres oubliés.</i></p>
  <div class="form-wrap">
  <input name="rep1" id="focus" min="1" max="2" type="text" required="true" placeholder="${arrayRep[1][0]}" maxlength="1" style="font-size:25px; display:inline; border-style:solid; border-color:${arrayRep[3][0]}; width:35px; text-align: center;"/>
  <input name="rep2" min="1" max="2" type="text" required="true" placeholder="${arrayRep[1][1]}" maxlength="1" style="font-size:25px; display:inline; border-style:solid; border-color:${arrayRep[3][1]};  width:35px; text-align: center;"/>
  <input name="rep3" type="text" required="true" placeholder="${arrayRep[1][2]}" maxlength="1" style="font-size:25px; display:inline; border-style:solid; border-color:${arrayRep[3][2]}; width:35px; text-align: center;"/>
  <input name="rep4" type="text" required="true" placeholder="${arrayRep[1][3]}" maxlength="1" style="font-size:25px; display:inline; border-style:solid; border-color:${arrayRep[3][3]}; width:35px; text-align: center;"/>
  <input name="rep5" type="text" required="true" placeholder="${arrayRep[1][4]}" maxlength="1" style="font-size:25px; display:inline; border-style:solid; border-color:${arrayRep[3][4]}; width:35px; text-align: center;"/>
  <input name="rep6" type="text" required="true" placeholder="${arrayRep[1][5]}" maxlength="1" style="font-size:25px; display:inline; border-style:solid; border-color:${arrayRep[3][5]}; width:35px; text-align: center;"/>
  <input name="rep7" type="text" required="true" placeholder="${arrayRep[1][6]}" maxlength="1" style="font-size:25px; display:inline; border-style:solid; border-color:${arrayRep[3][6]}; width:35px; text-align: center;"/>
  <input name="rep8" type="text" required="true" placeholder="${arrayRep[1][7]}" maxlength="1" style="font-size:25px; display:inline; border-style:solid; border-color:${arrayRep[3][7]}; width:35px; text-align: center;"/>
  <input name="rep9" type="text" required="true" placeholder="${arrayRep[1][8]}" maxlength="1" style="font-size:25px; display:inline; border-style:solid; border-color:${arrayRep[3][8]}; width:35px; text-align: center;"/>
  </div>
  <p></p>
  
  
  <p style="font-size: 22px;"><b>Vous devez inscrire 9 items !</b></p>
  
  <script>
  var container = document.getElementsByClassName("form-wrap")[0];
  container.onkeyup = function(e) {
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
}
  </script>
  `;

      return htmlPrompt }
      
      
    },
    on_finish: function(){
      arrayRep = []
      failed = false
    },
}

var surveyWordA = {
  type: jsPsychSurveyHtmlForm2,
  preamble: `<p style="font-size: 22px;">Ecrivez les chiffres dans l'ordre d'apparition</p><hr>`,
  html: function(){ 
  
  return htmlPrompt

  },
  button_label: ['Continuer'],
  autofocus:'focus',
  on_finish: function(){
    
    //console.log(jsPsych.data.getLastTrialData().trials[0].response)
    
    goodLength = jsPsych.data.getLastTrialData().trials[0].response.rep1.length
             + jsPsych.data.getLastTrialData().trials[0].response.rep2.length
             + jsPsych.data.getLastTrialData().trials[0].response.rep3.length
             + jsPsych.data.getLastTrialData().trials[0].response.rep4.length
             + jsPsych.data.getLastTrialData().trials[0].response.rep5.length
             + jsPsych.data.getLastTrialData().trials[0].response.rep6.length
             + jsPsych.data.getLastTrialData().trials[0].response.rep7.length
             + jsPsych.data.getLastTrialData().trials[0].response.rep8.length
             + jsPsych.data.getLastTrialData().trials[0].response.rep9.length
    console.log(`Length is ${goodLength}`)
    
    rtResponseSurvey = jsPsych.data.getLastTrialData().trials[0].rt
    console.log(`rt is ${rtResponseSurvey}`)
    
    stimRem.push(
      jsPsych.data.getLastTrialData().trials[0].response.rep1,
      jsPsych.data.getLastTrialData().trials[0].response.rep2,
      jsPsych.data.getLastTrialData().trials[0].response.rep3,
      jsPsych.data.getLastTrialData().trials[0].response.rep4,
      jsPsych.data.getLastTrialData().trials[0].response.rep5,
      jsPsych.data.getLastTrialData().trials[0].response.rep6,
      jsPsych.data.getLastTrialData().trials[0].response.rep7,
      jsPsych.data.getLastTrialData().trials[0].response.rep8,
      jsPsych.data.getLastTrialData().trials[0].response.rep9,
      )  
      
    arrayRep.push(rtResponseSurvey)
    arrayRep.push(stimRem)
    arrayRep.push(goodLength)
    
    
    repDetail.push(
      jsPsych.data.getLastTrialData().trials[0].response.rep1.length,
      jsPsych.data.getLastTrialData().trials[0].response.rep2.length,
      jsPsych.data.getLastTrialData().trials[0].response.rep3.length,
      jsPsych.data.getLastTrialData().trials[0].response.rep4.length,
      jsPsych.data.getLastTrialData().trials[0].response.rep5.length,
      jsPsych.data.getLastTrialData().trials[0].response.rep6.length,
      jsPsych.data.getLastTrialData().trials[0].response.rep7.length,
      jsPsych.data.getLastTrialData().trials[0].response.rep8.length,
      jsPsych.data.getLastTrialData().trials[0].response.rep9.length,
      )   
      
    console.log(repDetail)
    
    var funcRep = function(x){
      if(x != 1){
        return 'red'
      } else {
        return 'black'
      }
    }
    
    htmlRep = repDetail.map(funcRep)
    console.log(htmlRep)
    
    arrayRep.push(htmlRep)
    
    htmlRep = [
    'black',
    'black',
    'black',
    'black',
    'black',
    'black',
    'black',
    'black',
    'black',
  ];
    repDetail = []
    stimRem = []
    console.log(arrayRep)
       
       return arrayRep//return stimRem
    

  },
};


var surveyWord = {
  timeline: [funcHtml, surveyWordA],
  loop_function: function(){
    console.log(arrayRep[2])
    if(arrayRep[2] === 9){ // repLength === 9
      console.log("GOOD")
      failed = false
      return false
    } else {
      console.log("BAD")
     // alert("Vous devez inscrire 9 items !")
      failed = true
      //arrayRep = []
      return failed
    }
  },
  on_finish: function(){
  },
  
};


  var displayBlank2 = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function(){
        return `<p style="font-size: 50px"><b> </b></p>`
      },
      choices: "NO_KEYS",
      trial_duration: 2000,
      post_trial_gap: 0,
      data: function(){ 
          console.log(stimRem)
           return {
          task: 'REPONSE SUJET',
          id: uniqueID,
          date: Date(Date.now()).toLocaleString().split(',')[0],
          numSerie: `${k}`,
          numTrial: `${j}`,
          stimPresented: `${stimTotalDisplayed.slice(0,9)}`, //shuffledNumbers
          rtResponse: `${arrayRep[0]}`,
          responseStim: `${arrayRep[1]}`, //`${stimRem}`,
          audioPlayed: `${soundPlayed}`,
          age: `${age}`,
          sex: `${sex}`,
          soundSystem: `${soundSystem1}`,
          training: `${training}`,
          preExp: `${successPreExp}`,
          memorisation: `Yes`,
          evalSlider: `No`,
          remarque: `No`,
         }
          
      }
      
    };
  
  var loopTask = {
      timeline: [displayItem, displayItemMaskCond],
      loop_function: function(){
        if(i < numbItem){
          i++
          console.log(`Item ${i}`)
          return true
        } else {
          i = 1
          console.log("loopisover")
          return false
        }
      }, 

      on_start: function(){
        console.log(shuffledLetters)
        shuffledLetters = jsPsych.randomization.shuffle(letters)
      },
      on_finish: function(){
      },
      data: {
       // stimulus_showed: shuffledLetters.slice(0,8),
      },
      randomize_order: false, 
    }; 
    
    
  var loopProcedure = {
    
      timeline: [
        preloadTask,
        displayCross, 
        loopTask, 
        displayBlank, 
        surveyWord, 
        displayBlank2
                 ],
                 
      loop_function: function(){
        if(j < numbTrials){
          j++
          console.log(`Loop ${j}`)
          shuffledNumbers = jsPsych.randomization.shuffle(numbers)
          stimTotalDisplayed = []
          return true
        } else {
          j = 1
          return false
        }
      }, 

      on_start: function(){
      },
      randomize_order: false, 
    }; 
    
//  timeline.push(loopProcedure);

var pause2 = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:25px; color:black;">Fin de la série</p><hr>
                 <p>Prenez le temps de faire une petite pause.</p>
                 <p>Lorsque vous êtes prêts, cliquez sur <strong>continuer</strong> pour relancer une série.</p><p></p>`,
      choices: ['Nouvelle série'],
    };
    

  
  var displayTraining = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: function(){
        return `<p style="font-size: 25px">
        <b>Entrainement</b></p>
        <hr>
        <p>Commençons par un court entrainement.</p>
        `
      },
      on_start: function(){
         },
      choices: ["Commencer l'entraînement"],
      post_trial_gap: 0,
      
    };
    
timeline.push(displayTraining); 
    
    var displayTraining1 = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: function(){
        return `<p style="font-size: 30px">
        <b>Entrainement</b></p>
        <hr>
        <p>On recommence, cette fois ci avec le son.</p>
        `
      },
      on_start: function(){
         },
      choices: ['Continuer'],
      post_trial_gap: 0,
      
    };
    
    var displayTraining2 = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: function(){
        return `<p style="font-size: 30px">
        <b>Fin de l'entraînement</b></p>
        <hr>
        <p>Le test va maintenant débuter.</p>
        <p>Bon courage !</p>
        `
      },
      on_start: function(){
        training = "no"
         },
      choices: ['Commencer le test'],
      post_trial_gap: 0,
      
    };
    
    var displayCrossTraining = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function(){
        return `<p style="font-size: 70px"><b>+</b></p>`
      },
      on_start: function(){
         soundPlayed = soundTraining
         audio = new Audio(soundTraining);
         audio.loop = false;
         audio.play()
         return soundPlayed
      },
      on_finish: function(){
        arrayRep = []
        console.log('RESET ARRAY REP')
      },
      choices: "NO_KEYS",
      trial_duration: 2000,
      post_trial_gap: 0,
      
    };
    
    var displayBlankTraining = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function(){
        return `<p style="font-size: 70px"><b>+</b></p>`
      },
      on_start: function(){
        audio.pause()
         },
      choices: "NO_KEYS",
      trial_duration: timePause,
      post_trial_gap: 0,
      
    };
    
    var preloadTaskTraining = {
      
      type: jsPsychPreload,
      audio: function(){
        console.log("CHARGEMENT SON")
        return soundTraining
      },
      on_start: function(){
        stimTotalDisplayed = []
        shuffledNumbers = jsPsych.randomization.shuffle(numbers)
      },
      
    };
 
 
  
  var y = 1;
  
  

  var loopTraining = {
    timeline: [
        preloadTaskTraining,
        displayCrossTraining, 
        loopTask, 
    //    displayItem,
        displayBlankTraining, 
        surveyWord, 
        displayBlank2,
        
      ], 
      
    loop_function: function(){
      if(y < numbTrialTraining){
          console.log(`TRAINING`)
          y ++
          return true
        } else {
          console.log('fin TRAINING')
          y = 1
          return false
        }
      
    },
    
    on_start: function(){
      
    },
  };
  
  timeline.push(loopTraining);
  
  timeline.push(displayTraining2); 
  
   var startTask22 = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: ``,
      choices: ["C'est parti"],
    };
    
   // timeline.push(startTask22);
  
  var condPause = {
    timeline: [pause2, startTask22],
     conditional_function: function(){
       if(k === numbLoop){
         console.log("PAS PAUSE")
         return false
       } else {
         console.log("PAUSE")
         return true
       }
     },
  };
  
    var loopProcedureGlobal = {
    
      timeline: [
        loopProcedure, condPause//pause2, startTask22
                 ],
                 
      loop_function: function(){
        if(k < numbLoop){
          k++
          console.log(`Global ${k}`)
          
          if(diffSerie === false){
            
          shuffledSounds = jsPsych.randomization.shuffle(sounds)
          return true
          
          } else if(diffSerie === true){
            
          shuffledSounds = []
          shuffledSounds.push(
            jsPsych.randomization.shuffle(sounds1),
            jsPsych.randomization.shuffle(sounds2),
            jsPsych.randomization.shuffle(sounds3),
            jsPsych.randomization.shuffle(sounds4),
            jsPsych.randomization.shuffle(sounds5),
          )
          
          return true
          
          }
          
          
        } else {
          k = 1
          console.log('fin procédure')
          return false
        }
      }, 

      on_start: function(){
      },
      randomize_order: false, 
    }; 
    
  timeline.push(loopProcedureGlobal);
  
 /* _______________________________________________________________________________________
Questionnaire sur les sons */
  
  var q = 1;
  
  var keyPress1;
  var rtKey1;
  var rtArray1 = [];
  
  var endTask = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: function(){
        return `<p style="font-size: 30px">
        <b>Fin des séries</b></p>
        <hr>
        <p></p>
        `
      },
      on_start: function(){
         },
      choices: ['Continuer'],
      post_trial_gap: 0,
      
    };
    
  timeline.push(endTask);
  
  var instructionsD = {
    type: jsPsychInstructions,
    pages: [
    `<p style="font-size:30px; color:black;"><b>Pour conclure</b></p><hr>
     <p><i>Une dernière évaluation.</i></p>`,
    `<p style="font-size:30px; color:black;"><b>Pour conclure</b></p><hr><p><i>Des sons vont vous être présentés. Veuillez évaluer le sentiment de désagrément qu'ils suscitent chez vous.</i><p>`
    ],
    button_label_next: "Continuer",
    button_label_previous: "Retour",
    show_clickable_nav: true
}

// timeline.push(instructionsD);

  var soundListened = false;
  var resultSlider;
  
  var sliderSoundEval = {
    type: jsPsychHtmlSliderResponse, //jsPsychAudioSliderResponse,
    stimulus: `<i><p>Veuillez appuyer sur</i> 
      <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">Barre espace</span>,
     <i>pour écouter le son.</p></i><hr><p style="color: white; font-size:30px">WWW</p>`,//soundEval[q],
    labels: ['0', '25', '50', '75', '100'],
    button_label: ['Continuer'],
    prompt: `
    <p>A quel point le son est <b>désagréable</b> ?</p>
    `,
  //  response_allowed_while_playing: true,
    require_movement: true,
    slider_start: function(){
      return Math.floor(Math.random()*100)
    },
    on_start: function(){
      
        keyPress1 = null
        rtKey1 = null
        soundListened = false
        
        var press1 = function(info){
        audio.pause()
        console.log("Touche 1 pressée à " + info.rt +  " ms")
        keyPress1 = true
        rtArray1.push(info.rt)
        rtKey1 = info.rt
        audio = new Audio(soundEval[q]);
        audio.loop = false;
        audio.play()
        soundListened = true
        }
        
        var keyboard1 = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: press1,
          valid_responses: [' '],
          rt_method: 'performance',
          persist: true,
          allow_held_key: true,
        })
      
    },
    
    on_finish: function(){
      audio.pause()
      console.log(jsPsych.data.getLastTrialData().trials[0].response)
      resultSlider = jsPsych.data.getLastTrialData().trials[0].response
      return resultSlider
    },
};


 var dataSlider = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: " ",
      on_start: function(){
        
      },
      
      on_finish: function(){
      },
      
      data: function(){ 
        return {
        task: 'REPONSE SUJET',
        id: uniqueID,
        date: Date(Date.now()).toLocaleString().split(',')[0],
        age: `${age}`,
        sex: `${sex}`,
        evalResult: `${resultSlider}`,
        training: `${training}`,
        memorisation: `No`,
        evalSlider: `Yes`,
        remarque: `No`,
       }
      },
      
      choices: "NO_KEYS",
      trial_duration: 10,
      post_trial_gap: 0,
      
    };
    


var sliderSound = {
  timeline: [sliderSoundEval, dataSlider],
  loop_function: function(){
    if(soundListened === true){
      console.log("GOOD")
      return false
    } else {
      console.log("BAD")
      alert("Vous devez écouter le son avant de répondre")
    }
  },
  on_finish: function(){
    soundListened = false
    return soundListened
  },
  
};

  var loopSlider = {
    timeline: [sliderSound],
    loop_function: function(){
      if(q < numbSoundsEval){
        q++
        return true
      } else {
        return false 
       }
      },
    on_start: function(){
      
     },
  };
  
 // timeline.push(loopSlider);
 
    var finexp1 = {
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:22px; color:black;">Fin de l'évaluation</p><hr>
                `,
      choices: ["Continuer"],
    };
    
//timeline.push(finexp1);
  
  var condEval = {
    timeline: [instructionsD, loopSlider, finexp1],
     conditional_function: function(){
       if(evalEnd === false){
         console.log("pas eval")
         return false
       } else {
         console.log("eval")
         return true
       }
     },
  };

timeline.push(condEval);

 /* _______________________________________________________________________________________
Questionnaire informations participant */



 /* _______________________________________________________________________________________
Sortie experience */

var resultRemarque

var freeText = {
  type: jsPsychSurveyText,
  questions: [
    {prompt: "Avez-vous une remarque concernant l'expérience ? Un souci rencontré ? Une suggestion ?", required: false, rows: 5}
  ],
  on_finish: function(){
    console.log(jsPsych.data.getLastTrialData().trials[0].response)
    resultRemarque = jsPsych.data.getLastTrialData().trials[0].response.Q0
    return resultRemarque
    
  },
}

timeline.push(freeText);

var dataFreeText = {
      
      type: jsPsychHtmlKeyboardResponse,
      stimulus: " ",
      on_start: function(){
      },
      on_finish: function(){
      },
      data: function(){ 
        return {
        task: 'REPONSE SUJET',
        id: uniqueID,
        date: Date(Date.now()).toLocaleString().split(',')[0],
        age: `${age}`,
        sex: `${sex}`,
        training: `${training}`,
        memorisation: `No`,
        evalSlider: `Yes`,
        remarque: `Yes`,
        resultRemarque: `${resultRemarque}`,
       }
      },
      
      choices: "NO_KEYS",
      trial_duration: 10,
      post_trial_gap: 0,
      
    };
    
timeline.push(dataFreeText);

    var finexp2 = {
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:22px; color:black;">Contact :</p><hr>
                <p>Si besoin vous pouvez contacter l'expérimentateur à l'adresse <b>${email}</b></p>`,
      choices: ["Continuer"],
    };
    
timeline.push(finexp2);

    var finexp = {
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:22px; color:black;">Merci d'avoir participé !</p><hr>
                `,
      choices: ["Terminer"],
    };
    
timeline.push(finexp);
    
 /* _______________________________________________________________________________________
DATA PART */


/* start the experiment */
jsPsych.run(timeline);