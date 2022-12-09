var uniqueID; 

    var randomGen = {
      
      type: jsPsychCallFunction,
      func: function(){
        var IDLetter = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Y', 'Z']
        var IDLetterChoose = jsPsych.randomization.shuffle(IDLetter).slice(0, 3).join('')
        var randomNumberID = `${Math.floor((Math.random()*1000))}`
        uniqueID = `${Math.floor((Math.random()*100))}`+`-${IDLetterChoose}`+`-${Math.floor(Date.now()-1000000000000)}`; 
        console.log(uniqueID)
        jsPsych.data.addProperties({subject: uniqueID});
        console.log(Date(Date.now()).toLocaleString().split(',')[0])
        return uniqueID
      },
    };
    
    timeline.push(randomGen);
    
    var displayGen = {
      type: jsPsychHtmlButtonResponse,
      stimulus: function(){
        return `<p>Example of subject number:</p><p style="font-size: 30px">${uniqueID}</p><hr>`
      },
      choices: ['Continue']
    };

    timeline.push(displayGen);
