 var keyPress1;
    var rtKey1;
    var rtArray1 = [];
    
    var keyPress2;
    var rtKey2;
    var rtArray2 = [];
    
    var keyPress3;
    var rtKey3;
    var rtArray3 = [];
    
    var keyPress4;
    var rtKey4;
    var rtArray4 = [];


    var soundBWS = [
      'Son <b>1</b>',
      'Son <b>2</b>',
      'Son <b>3</b>',
      'Son <b>4</b>'
      ];

    var maxdiff_page = {
    type: jsPsychMaxdiff,
    alternatives: soundBWS,
    labels: ['<p style="font-size: 30px">-</p>', '<p style="font-size: 30px">+</p>'],
    preamble: `
      <i><p>Veuillez appuyer sur</i> 
      <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">1</span>,
       <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">2</span>,
       <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">3</span>
       <i>et</i>
       <span style="font-size:15px;border: 1px solid #ccc; line-height: 1.4;color: #333;padding: 7.5px 12px; font-family: sans-serif; background-color: white; margin: 5px; border-radius: 5px;">4</span>
      </p>
      <p><i>pour écouter les différents sons.</p></i><hr>
      <p style="font-size: 20px">Quel est le son le <b>plus</b> amical?</p>
      <p style="font-size: 20px">Quel est le son le <b>moins</b> amical?</p>
      <hr>
  `,
     required: true,
     randomize_alternative_order: true,
     button_label: 'Continuer',
     post_trial_gap: 500,
     on_start: function() {
       
        keyPress1 = null
        rtKey1 = null
        var press1 = function(info){
        console.log("Touche 1 pressée à " + info.rt +  " ms")
        keyPress1 = true
        rtArray1.push(info.rt)
        rtKey1 = info.rt
        audio = new Audio('audio/400.wav');
        audio.loop = false;
        audio.play()
        }
        
        keyPress2 = null
        rtKey2 = null
        var press2 = function(info){
        console.log("Touche 2 pressée à " + info.rt +  " ms")
        keyPress2 = true
        rtArray2.push(info.rt)
        rtKey2 = info.rt
        audio = new Audio('audio/800.wav');
        audio.loop = false;
        audio.play()
        }
        
        keyPress3 = null
        rtKey3 = null
        var press3 = function(info){
        console.log("Touche 3 pressée à " + info.rt +  " ms")
        keyPress3 = true
        rtArray3.push(info.rt)
        rtKey3 = info.rt
        audio = new Audio('audio/1400.wav');
        audio.loop = false;
        audio.play()
        }
        
        keyPress4 = null
        rtKey4 = null
        var press4 = function(info){
        console.log("Touche 4 pressée à " + info.rt +  " ms")
        keyPress4 = true
        rtArray4.push(info.rt)
        rtKey4 = info.rt
        audio = new Audio('audio/3000.wav');
        audio.loop = false;
        audio.play()
        }
        
        var keyboard1 = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: press1,
          valid_responses: ['1','&'],
          rt_method: 'performance',
          persist: true,
          allow_held_key: true,
        })
        
        var keyboard2 = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: press2,
          valid_responses: ['2','é'],
          rt_method: 'performance',
          persist: true,
          allow_held_key: true,
        })
        
        var keyboard3 = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: press3,
          valid_responses: ['3','"'],
          rt_method: 'performance',
          persist: true,
          allow_held_key: true,
        })
        
        var keyboard4 = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: press4,
          valid_responses: ['4',"'"],
          rt_method: 'performance',
          persist: true,
          allow_held_key: true,
        })
        
       //console.log('Pouf');
  },
};


var loopTaskBWS = {
      timeline: [maxdiff_page],
     // loop_function: function(){
     // }, 

      on_start: function(){
      },
      repetitions: 2,
      randomize_order: false, 
    }; 

timeline.push(loopTaskBWS);
