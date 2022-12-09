var demographics = {
  type: jsPsychSurveyHtmlForm,
  preamble: `
      <p style="font-size: 20px"><b>Information survey</b></p><hr>
      <p><i>First of all, we need some basic information.</i></p>
  `,
  html: `
  <p>What is your <b>age</b>?</p>
  <p><input name="first" type="number" size="30" required="true"/></p>
  <p><label for="sex">What is your <b>sex</b>?</label></p>
<p><select id="sex" name="sex" size="1" required="true">
  <option value="M">M</option>
  <option value="F">F</option>
</select></p>
  
  `,
  on_finish: function(){
    console.log(jsPsych.data.getLastTrialData().trials[0].response.first)
    console.log(jsPsych.data.getLastTrialData().trials[0].response.sex)
    age = jsPsych.data.getLastTrialData().trials[0].response.first
    sex = jsPsych.data.getLastTrialData().trials[0].response.sex
  },
};

timeline.push(demographics); 