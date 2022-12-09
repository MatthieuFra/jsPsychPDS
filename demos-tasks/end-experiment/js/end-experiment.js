const email = "example@ircam.fr";



  /* _______________________________________________________________________________________
Sortie experience */

    var finexp1 = {
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:22px; color:black;">End of the experiment.</p><hr>
                `,
      choices: ["Continue"],
    };
    
timeline.push(finexp1);


var freeText = {
  type: jsPsychSurveyText,
  questions: [
    {prompt: "Do you have any comments about the experience? A problem you encountered? A suggestion?", required: false, rows: 5}
  ],
};

timeline.push(freeText);

    var finexp2 = {
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:22px; color:black;">Contact :</p><hr>
                <p>If necessary you can contact the experimenter at <b>${email}</b></p>`,
      choices: ["Continue"],
    };
    
timeline.push(finexp2);

    var finexp = {
      type: jsPsychHtmlButtonResponse,
      stimulus: `<p style="font-size:22px; color:black;">Thanks for your participation!</p><hr>
                `,
      choices: ["End the experiment"],
    };
    
timeline.push(finexp);