 var sounds = [
   'audio/400.wav',
   'audio/800.wav',
   'audio/1400.wav',
   'audio/3000.wav',
   'audio/6000.wav',
  ];
	

	var single_feature_trial = {
    type: jsPsychAudioTokens,
    ratingtype: 'categories',
    stimuli: sounds,
    label: ['Low tones sounds', 'Mid-range sounds','High-Pitched sounds'],
    force_listen: false,
    loop: true,
    prompt: '<p>Classify these sounds in the category that seems appropriate to you.</p>'
}

timeline.push(single_feature_trial);