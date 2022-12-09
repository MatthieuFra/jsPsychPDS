var audioTestLoudness = {
    type: jsPsychAudioButtonResponse,
    stimulus: 'audio/pinknoise.wav',
    choices: ['Continue'],
    response_allowed_while_playing: true,
    prompt: ` <p>Adjust the volume of your headphones to a comfortable level.<p>
<p>You should hear the sound clearly, and it should not be too <b>loud</b> or too <b>soft</b>.</p>
<p>Once the level is set, please do not change it again until the end of the experiment.</p>
`
};

timeline.push(audioTestLoudness);   