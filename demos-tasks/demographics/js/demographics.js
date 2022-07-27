var demographics = {
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
  on_finish: function(){
    console.log(jsPsych.data.getLastTrialData().trials[0].response.first)
    console.log(jsPsych.data.getLastTrialData().trials[0].response.sexe)
    age = jsPsych.data.getLastTrialData().trials[0].response.first
    sex = jsPsych.data.getLastTrialData().trials[0].response.sexe
  },
};

timeline.push(demographics); 
