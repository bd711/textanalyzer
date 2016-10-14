
$(document).ready(function() {
	$('form').submit(function(event) {
		event.preventDefault();
		var userInput = $("#user-text").val();
		$(".hidden").removeClass("hidden");
		var userText = tokenize(userInput);
		averageCharactersPerWord(userText);
		distinctWords(userText);
		wordsPerSentence(userInput,userText);
	});
});

function tokenize (longString) {
	var longString1 = longString.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
	var longString1 = longString1.toLowerCase();
	var userText = longString1.split(" ");
	$(".js-word-count").text(userText.length);
	return userText;
}


function averageCharactersPerWord (userText) {
	var total = 0;
	for (var counter = 0; counter < userText.length; counter++) {
    	total +=userText[counter].length;
    }
	var avgWord = (total/(userText.length));
	$(".js-average-word-length").text(avgWord);
}


function distinctWords (userText) {
	var userText2 = [];
		for (var i = 0; i < userText.length; i++) {
    		if (userText2.indexOf(userText[i])=== -1) {
    			userText2.push(userText[i]);
    		}
		} 
	$(".js-unique-word-count").text(userText2.length);
};
	
function wordsPerSentence (longString,userText) {
	var numberofSentences = longString.split(/[!.?]+/).length -1;
	$(".js-average-sentence-length").text(userText.length/numberofSentences);
};






