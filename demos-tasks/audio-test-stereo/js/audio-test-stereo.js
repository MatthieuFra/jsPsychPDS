var audioTestStereo = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'audio/test_stereo2.mp3',
    choices: ['Continuer'],
    response_allowed_while_playing: false,
    prompt: "<p>Vérifiez que votre casque est bien positionné.</p><p>Vous devez entendre le chiffre <strong>1</strong> dans votre oreille gauche.<p><p>Vous devez entendre le chiffre <strong>2</strong> dans votre oreille droite.<p> "

};

timeline.push(audioTestStereo);
