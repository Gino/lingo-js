var random  = Math.floor(Math.random() * words.length);
var answer = words[random];
var answerArray = answer.split('');
var rowCount = 0;
console.log(answer)

window.onload = function () {
	init();
}

function init() {
    var res = answer.charAt(0)
	document.getElementById("letter0_0").value = res;
}

function check(){
	var input;
    for(var i = 0 ; i < 5; i++){
        input = document.getElementById('letter'+rowCount+'_'+i);
        console.log(input.value);

   		// Maakt letter geel
   		if (answerArray.includes(input.value)) {
            input.style.backgroundColor = 'yellow';
		}

         // Maakt letter rood
        if (input.value === answerArray[i]){
            input.style.backgroundColor = 'red';
        }
	}

	// Woord goed is
	var correct = true;
	for (var i = 0 ; i < 5; i++){
		input = document.getElementById('letter'+rowCount+'_'+i);
		if (input.value != answerArray[i]){
			correct = false;
		}
	}
	if (correct) {
		document.getElementById("result").innerHTML = "Het woord is goed, je hebt gewonnen!";
	}
	rowCount++;
	if (!correct) {
		document.getElementById('letter'+rowCount+'_0').value = answer[0];
	}
}

function reload(){
	location.reload();
}