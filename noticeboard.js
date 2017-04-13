var postMessage = document.getElementById("msg");
var audience	= document.getElementById("audience");
var form 	= document.getElementById("myForm");
var announcementArea = document.getElementById("announcementArea");

var announcements = [];
var audie =[]




form.addEventListener("submit",function(event){
	announcements.push(postMessage.value)
	audie.push(audience.value);
	announcementArea.innerHTML = displayAnnouncement();
	event.preventDefault()
});

function displayAnnouncement(){
	var listOfAnnouncement="<ul>";

	for(var i=0;i<announcements.length;i++){
		listOfAnnouncement += "<li>";
		listOfAnnouncement += audie[i]+": ";
		listOfAnnouncement += announcements[i];
		listOfAnnouncement += "</li>";
	}
	listOfAnnouncement +="<ul>";
	return listOfAnnouncement;
}