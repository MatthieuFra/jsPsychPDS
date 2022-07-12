<!DOCTYPE html>
<html>
  <head>
    <title>My experiment</title>
    <script src="https://unpkg.com/jspsych@7.0.0"></script>
    <script src="https://unpkg.com/@jspsych/plugin-html-keyboard-response@1.0.0"></script>
    <script src="https://unpkg.com/@jspsych/plugin-image-keyboard-response@1.0.0"></script>
    <script src="https://unpkg.com/@jspsych/plugin-preload@1.0.0"></script>
    <link href="https://unpkg.com/jspsych@7.0.0/css/jspsych.css" rel="stylesheet" type="text/css" />
  </head>
  <body></body>
  <script>

var  test_stimuli ="stimuli.js"

var jsPsych = initJsPsych({
    show_progress_bar: true
});

  var timeline = [];
 
     var welcome = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "Welcome to the experiment. Press any key to begin."
};
timeline.push(welcome);


var instructions = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <p>In this experiment, a sentence will appear in the center 
    of the screen.</p><p>Select the correct continuation by selecting 
	"f" for "is" or "j" for "are"</p>
    <div style='width: 700px;'>
    </div>
    <p>Press any key to begin.</p>
  `,
  post_trial_gap: 2000
};
timeline.push(instructions);

var fixation = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<div style="font-size:60px;">+</div>',
  choices: "NO_KEYS",
  trial_duration: 500,
};

var first = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function(){
	return `<p style="font-size: 48px; font-family: monospace;">${jsPsych.timelineVariable('first', true)}</p>`
  },
  choices: jsPsych.NO_KEYS,
  trial_duration: 800,
  post_trial_gap: 100,
  data: {
	task: 'first'
  }
}

var second = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function(){
	return `<p style="font-size: 48px; font-family: monospace;">${jsPsych.timelineVariable('second', true)}</p>`
  },
  choices: ['f','j'],
  data: {
	task: 'second'
  }
}

var test = {
  timeline: [fixation,first, second],
  timeline_variables: test_stimuli,
  data: {
	'test_part': 'test'
  }
}


timeline.push(test);


/* start the experiment */
jsPsych.run(timeline);