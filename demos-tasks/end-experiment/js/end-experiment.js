const email = "example@ircam.fr";



  /* _______________________________________________________________________________________
Sortie experience */

    var finexp1 = {
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:22px; color:black;">Fin de l'évaluation.</p><hr>
                `,
      choices: ["Continuer"],
    };
    
timeline.push(finexp1);


var freeText = {
  type: jsPsychSurveyText,
  questions: [
    {prompt: "Avez-vous une remarque concernant l'expérience ? Un souci rencontré ? Une suggestion ?", required: false, rows: 5}
  ],
};

timeline.push(freeText);

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