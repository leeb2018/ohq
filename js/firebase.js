require(['https://cdn.firebase.com/js/client/2.4.2/firebase.js'], function (firebase) {});

var temp = rootRef.child("filler");

$(document).ready(function () {
	temp.set({title: "", text: ""});
	console.log("temp set");
});



var func = function (snapshot) {
  var data = snapshot.val();
  var name = data.studentname;
  var issue = data.issue;
  var time = Math.floor((Date.now() - data.timestamp) / 60000);
  var category = data.category;
  var rowElem = $("<tr>");
  var nameElem = $("<td>");
  var categoryElem = $("<td>");
  var issueElem = $("<td>");
  var timeElem = $("<td>");
  var doneButton = $("<button type=\"button\" class=\"btn btn-default\">");
  doneButton.append("<img src=img/DoneOff.PNG width=\"20px\"/>");
  doneButton.click(function(e) {
    rootRef.child(name).remove();
  });
  var helpButton = $("<button type=\"button\" class=\"btn btn-default\">");
  helpButton.append("<img src=img/HelpOff.PNG width=\"20px\"/>");
  nameElem.text(name);
  categoryElem.text(category);
  issueElem.text(issue);
  timeElem.text(time + " minutes");
  rowElem.append(nameElem);
  rowElem.append(categoryElem);
  rowElem.append(issueElem);
  rowElem.append(timeElem);
  rowElem.append(helpButton);
  rowElem.append(doneButton);
  if (time) {
    $("#queueElem").last().append(rowElem);
  }
};

rootRef.limitToLast(50).on("child_added", func);

rootRef.limitToLast(50).on("value", func);

// rootRef.limitToLast(50).on("child_removed", func);


var nameField = $("#nameInput");
var issueField = $("#issueInput");
var otherDescrip = $("#otherDescrip");

$("#issueForm").on("submit", function (e) {
  var name = nameField.val();
  var issue = issueField.val();
  var category = otherDescrip.val();
  rootRef.child(name).set({studentname: name, issue: issue, category: category, timestamp: Date.now()});
  nameField.val('');
  issueField.val('');
  otherDescrip.val('');
  technical.prop('checked', false);
  conceptual.prop('checked', false);
  other.prop('checked', false);
  e.preventDefault();
});


<<<<<<< HEAD
 $("#button").click(function() {
      $("#issueForm").submit();
=======
$("#button").click(function() {
  $("#issueForm").submit();
});
>>>>>>> origin/master


 $("#ohq").click(function(){
  window.location.href="index.html";

 });
<<<<<<< HEAD
=======

$(".btn-primary").mousedown(function(){
  this.css("border", "solid 4px var(--accent-color)");
});

$(".btn-primary").click(function(){
  this.css("border", "solid 4px var(--accent-color)");
});
>>>>>>> origin/master
