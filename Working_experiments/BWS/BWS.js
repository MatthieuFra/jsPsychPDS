/* _______________________________________________________________________________________
ON LANCE jsPsych 


   /* Initialiser jsPsych */
    
    var jsPsych = initJsPsych({
       show_progress_bar: true,
       on_finish: function() {
         jsPsych.data.displayData();
       }
    });


    /* création timeline */
    
    var timeline = [];
    
    /* Preload stimuli */
        
    var preload = {
      
      type: jsPsychPreload,
      audio: [
        
    "n_Va-ord-C6-pp.wav",
    "n_ClBb-flatt-C5-ff.wav",
    "n_AFL_flatter_p_C4.wav",
    "n_KFA-L_nA_sus_mf_C2.wav",
    "n_Hp-ord-C4-pp.wav",
    "n_Fl-flatt-C6-mf.wav",
    "n_ClBb-ord-C5-ff.wav",
    "n_Tbn-ord-C4-mf.wav",
    "n_Va-nonvib-C5-ff.wav",
    "n_KFA_Flatter_f_C3.wav",
    "n_BKL_stac_mf1_C3.wav",
    "n_Vn-pizz_lv-C5-pp.wav",
    "n_Va-pont-C3-mf.wav",
    "n_Tbn-flatt-C3-pp.wav",
    "n_Bn-ord-C5-mf.wav",
    "n_Vn-ord-C4-ff.wav",
    "n_Gtr-pont-C4-mf-2c.wav",
    "n_Fl-ord-C7-pp.wav",
    "n_Vc-nonvib-C4-pp.wav",
    
      ]
    };
    
    
    timeline.push(preload);
    
    /* Import du fichier de la séquence lorsque ça marchera */
    var  test_stimuli ="seq_test.json"

   /* var trial = {
     type: jsPsychBrowserCheck
    }; */

    
/* _______________________________________________________________________________________
ACCUEIL EXPERIENCE */

  /*var maxdiff_page = {
    type: jsPsychMaxdiff,
    alternatives: ['Son <strong>1</strong>', 'Son <strong>2</strong>', 'Son <strong>3</strong>', 'Son <strong>4</strong>'],
    labels: ['Meilleur', 'Pire'],
    preamble: '<p>Quel est le son le <b>plus</b> amical ?</p><p>Quel est le son le <b>moins</b> amical ?</p>'
};
    timeline.push(maxdiff_page);  */


    var welcome = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: "<p>Bienvenue dans cet exemple de BWS</p><p></p>",
      choices: ['Continuer']
    };
    
    timeline.push(welcome);
 /*   
    var enter_fullscreen = {
      type: jsPsychFullscreen,
      prompt: "Vous allez entrer en plein écran",
      fullscreen_mode: true

      } 

timeline.push(enter_fullscreen) */

var instructions = {
    type: jsPsychInstructions,
    pages: [
    "<p>Bienvenue dans la page d'instructions.</p><p>Veuillez lire pour continuer.</p>",
    "<p>Cette expérience est un exemple de BWS.</p>",
    "<p>Vous allez pouvoir écouter <strong>4</strong> sons différents, autant de fois que vous le souhaitez.</p>",
    "<p>Vous devrez ensuite dire lequel est le <strong>meilleur</strong> et lequel est le <strong>pire</strong>, pour un descripteur particulier.</p>",
    ],
    button_label_next: "Continuer",
    button_label_previous: "Retour",
    show_clickable_nav: true
}

 timeline.push(instructions); 
 
     var start = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: "<p>Veuillez cliquer sur <strong>continuer</strong> pour débuter.</p><p></p>",
      choices: ['Continuer']
    };
    
    timeline.push(start);
 
  /* _______________________________________________________________________________________
Consentement  */

 /* _______________________________________________________________________________________
BWS procédure */

      /* Cette étape sera inutile lorsque l'import de la séquence marchera */
     var test_stimuli = [
       
       { sound: "n_Acc-ord-C2-ff.wav", id: "1"},
       { sound: "n_Acc-ord-C2-pp.wav", id: "2"},
       { sound: "n_Acc-ord-C3-ff.wav", id: "3"},
       { sound: "n_Acc-ord-C3-pp.wav", id: "4"},
    ];

     //Deux variables que j'ai besoin de déclarer 
     var machin 
     var machin2
     var machin3
     var firstEcoute1 = 0
     var firstEcoute2 = 0
     var firstEcoute3 = 0
     var firstEcoute4 = 0
     
     // Ici je récupère l'attribut évalué par la BWS
     var attribute = "rond"
     
    /* Menu de choix d'écoute entre les 4 son du premier groupe*/
     var ecoute1 = {
       
      type: jsPsychHtmlButtonResponse,
      stimulus: `
        <p>Ecoutez ces quatres sons.</p>
      `,
      choices: ['Son 1', 'Son 2', 'Son 3', 'Son 4', '<strong>Continuer</strong>'],
     /* data: {
        response: 'choix'
      } */
      prompt: function(){
        if(bla+machin == 5){
          return "<p>Veuillez écouter <b>tous</b> les sons avant de continuer !</p><p></p>"
        }
      }, 
      on_finish: function(data){
        if(data.response == '4') {
          machin = 4,
          bla = 1
        };
        if(data.response == '3'){
          machin2 = '<strong>4</strong>'
          machin3 = 'n_Acc-ord-C2-ff.wav'
          firstEcoute4 = firstEcoute4+1
          console.log(machin2)
        };
        if(data.response == '2'){
          machin2 = '<strong>3</strong>'
          machin3 = 'n_Acc-ord-C2-pp.wav'
          firstEcoute3 = firstEcoute3+1
          console.log(machin2)
        };
        if(data.response == '1'){
          machin2 = '<strong>2</strong>'
          machin3 = 'n_Acc-ord-C3-ff.wav'
          firstEcoute2 = firstEcoute2+1
          console.log(machin2)
        };
        if(data.response == '0'){
          machin2 = '<strong>1</strong>'
          machin3 = 'n_Acc-ord-C3-pp.wav'
          firstEcoute1 = firstEcoute1+1
          console.log(machin2)
        };
       //data.skipLoop = jsPsych.pluginAPI.compareKeys(data.response, '4');
       console.log(machin);
      },
      after_trial: function(data){
        
        
      },
    };
    
//timeline.push(ecoute1);

    /*Suite de lecture en fonction du choix effectué*/ 
    var play1 = {
  
    type: jsPsychAudioKeyboardResponse,
    stimulus: function(){
       
      //return jsPsych.timelineVariable('sound')
      return machin3
    },
    choices: ['backspace'],
    prompt: function(){
      return  '<p>Lecture son '+ machin2 +'<p>Appuyez sur <strong>BACKSPACE</strong> pour interrompre la lecture.</p>'
    },
    trial_ends_after_audio: false,
    response_allowed_while_playing: true,
    on_finish: function(){
      machin3 = null
    },
    };


//timeline.push(play1)

var sonChoisi = jsPsych.data.getLastTrialData()[0];
var compteur

var pass_ecoute = {
    timeline: [play1],
    conditional_function: function(){
        if(machin == 4){
            return false;
        } else {
            return true;
        }
    }
}

    var bla = []
    
var loop1 = {
    timeline: [ecoute1, pass_ecoute],
    timeline_variables: test_stimuli,
    prompt: function() {
    },
    sample: {
        type: 'with-replacement',
        size: 1
    },
    on_trial: function() {
    },
    loop_function: function(){
        if(firstEcoute1 == 0){
          return true,
          bla = 1
        };
        if(firstEcoute2 == 0){
          return true,
          bla = 1
        };
        if(firstEcoute3 == 0){
          return true,
          bla = 1
        };
        if(firstEcoute4 == 0){
          return true,
          bla = 1
        };
        if(machin == 4){
           return false;
        } else {
          return true;
        }
    },
}
//timeline.push(loop1)

    //Pour vérifier que ce soit pas le même son.
    var testSameResponse = true
    var dataSurvey1
    var dataSurvey2
    
    /*Questionnaire BWS*/
    var survey1 = {
      
    type: jsPsychSurveyMultiChoice,
    questions: [
     {
        prompt: function(){
          return  'Quel est le <strong>plus</strong> '+ attribute
           },
        name: 'Q1', 
        options: ['Son 1', 'Son 2', 'Son 3', 'Son 4'], 
        required: true
      }, 
    {
        prompt: function(){
          return  'Quel est le <strong>moins</strong> '+ attribute
           },
        name: 'Q2', 
        options: ['Son 1', 'Son 2', 'Son 3', 'Son 4'], 
        required: true
      },
    ],
    on_finish: function(){
   machin3 = null
   machin2 = null
   
  // console.log(jsPsych.data.getLastTimelineData())
   dataSurvey1 = jsPsych.data.getLastTimelineData()
   dataSurvey2 = jsPsych.data.getLastTimelineData()
   dataSurvey1 = dataSurvey1.trials[0].response['Q1']
   dataSurvey2 = dataSurvey2.trials[0].response['Q2']
   
   console.log(dataSurvey1)
   console.log(dataSurvey2)
   
    if(dataSurvey1 === dataSurvey2){
      testSameResponse = false
      console.log(testSameResponse)
    } else { 
      testSameResponse = true
    };
    
   },
    //J'essaye de vérifier qu'on réponse pas le même truc
    after_trial: function(){
      testSameResponse = null
    },
      data: {
      attribute: attribute,
    },
  };
//timeline.push(survey1)

/* Ici c'est une conditional_function pour vérifier le choix*/
    var errorSurvey = {
      
      type: jsPsychHtmlButtonResponse,
      stimulus: "<p>Vous ne pouvez pas sélectionner le même son</p><p> comme étant le <strong>meilleur</strong> et le <strong>pire</strong>.<p>",
      choices: ['Continuer'],
      on_finish: function(){
      },
    };
    
//   timeline.push(errorSurvey);


    var pass_survey = {
        timeline: [errorSurvey],
       conditional_function: function(){
           if(testSameResponse == false){
                return true;
            } else {
               return false;
        }
    }
}

    var loopError = {
        timeline: [survey1, pass_survey],
       timeline_variables: test_stimuli,
       sample: {
           type: 'with-replacement',
           size: 1
        },
        loop_function: function(){
            if(testSameResponse == true){
               return false;
            } else {
              return true;
            }
        },
    }
    
//timeline.push(loopError)

    var loopMaster = {
    timeline: [loop1, loopError],
    repetitions: 2,
    randomize_order: false, 
    on_start: function(){
      machin = null
      machin2 = null
      machin3 = null
    },
    }; 
    
    timeline.push(loopMaster)
  
    
var sequence = 
{
  "1": [
    "n_Va-ord-C6-pp.wav",
    "n_ClBb-flatt-C5-ff.wav",
    "n_AFL_flatter_p_C4.wav",
    "n_KFA-L_nA_sus_mf_C2.wav"
  ],
  "2": [
    "n_Hp-ord-C4-pp.wav",
    "n_Fl-flatt-C6-mf.wav",
    "n_ClBb-ord-C5-ff.wav",
    "n_Tbn-ord-C4-mf.wav"
  ],
  "3": [
    "n_Fl-mul-G5_F4_C#6-mf.wav",
    "n_Va-nonvib-C5-ff.wav",
    "n_KFA_Flatter_f_C3.wav",
    "n_BKL_stac_mf1_C3.wav"
  ],
  "4": [
    "n_Vn-pizz_lv-C5-pp.wav",
    "n_Va-pont-C3-mf.wav",
    "n_Tbn-flatt-C3-pp.wav",
    "n_Bn-ord-C5-mf.wav"
  ],
  "5": [
    "n_Vn-ord-C4-ff.wav",
    "n_Gtr-pont-C4-mf-2c.wav",
    "n_Fl-ord-C7-pp.wav",
    "n_Vc-nonvib-C4-pp.wav"
  ]
}

 /* _______________________________________________________________________________________
Questionnaire informations participant */

 /* _______________________________________________________________________________________
Sortie experience */


    var finexp = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <p>Merci d'avoir participé à cette étude.</p>
        <p>Vous pouvez quitter la page.</p>
      `,
      choices: jsPsych.NO_KEYS,
    };
    
timeline.push(finexp);
    
 /* _______________________________________________________________________________________
DATA PART */


/* start the experiment */
jsPsych.run(timeline);

/*_______________________________________________________________________________________
 NOTES : 
 
20211214
Pour la suite, il faut maintenant que ça suive une séquence
importée en .json et que ça exporte les données utiles.



*/
