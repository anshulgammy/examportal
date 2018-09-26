var questions = null;
var numOfQuestions = null;

function loadQuestions() {
	$.ajax({
		type: "Get",
		// This is the path to my .json file in my server.
		url: "http://localhost:9999/questions.json",
		dataType: "json",
		success: function(data) {
			questions = data;
			numOfQuestions = Object.keys(questions.questions).length;
			alert('All the best');
			console.log(numOfQuestions);
			populateQuestionButtons();
		},
		error: function(){
			console.log("json not found");
		}
	});
}

function populateWidgets() {

}

function populateQuestionButtons() {
	for(var i = 1; i<= numOfQuestions; i++) {
		$('#questionButtons').append("<span class='questionButtonItem'>" + i + "<span>");
	}
}
