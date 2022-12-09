var audioTestStereo = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'audio/test_stereo2.mp3',
    choices: ['Continue'],
    response_allowed_while_playing: false,
    prompt: "<p>Check that your headphones are correctly positioned.</p><p>You should hear the number <strong>1</strong> in your left ear.<p><p>You should hear the number <strong>2</strong> in your right ear.<p> "

};

timeline.push(audioTestStereo);
