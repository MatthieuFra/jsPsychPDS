var audioTestLoudness = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'audio/bruitrose.wav',
    choices: ['Continuer'],
    response_allowed_while_playing: true,
    prompt: ` <p>Réglez le volume de votre casque de façon confortable.<p>
<p>Vous devez entendre clairement le son, et il ne doit être ni trop <strong>fort</strong> ni trop <strong>faible</strong>.</p>
<p>Une fois le niveau réglé, veuillez ne plus le modifier jusqu'à la fin de l'expérience.</p>
`
};

timeline.push(audioTestLoudness);
