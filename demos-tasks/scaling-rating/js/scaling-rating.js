var sounds = [
   'audio/400.wav',
   'audio/800.wav',
   'audio/1400.wav',
   'audio/3000.wav',
   'audio/6000.wav',
  ];
	

	var single_feature_trial = {
    type: jsPsychAudioTokens,
    ratingtype: 'features',
    stimuli: sounds,
    label: ['Feature 1', 'Feature 2', 'Feature 3'],
    anchors: [['low', '', 'high'],
              ['low', '', 'high'],
              ['low', '', 'high']],
    force_listen: false,
    loop: true,
    prompt: '<p>Please evaluate those sounds on each descriptors.</p>'
}

timeline.push(single_feature_trial);