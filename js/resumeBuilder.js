//$("#main").append("Pratik Ranjan");

/* var awesomeThoughts = "I am Prat and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts);

$("#main").append(funThoughts);
*/

/*
var formattedName = HTMLheaderName.replace("%data%", "Prat Ran");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Dev");

$("#header").prepend(formattedName);
$("#header").append(formattedRole);
*/
/*
var nstr = "audacity";
console.log(nstr.slice(1,2).toUpperCase()+nstr.slice(2));
*/
var bio = {
			"name" : "Prat Ran",
			"role" : "Web Dev",
			"contactinfo" : {
					"contact" : "Res App, New World, PIN - 1232321",
					"mobile" : "9080706050",
					"email" : "prat.ran@gmail.com",
					"twitter" : "@pratran",
					"github" : "pratran-resume",
					"blog" : "pratran.com/blog",
					"location" : "Ranchi"
			},
			"bioPic" : "images/fry.jpg",
			"welcomeMsg" : "Hello Devs",
			"skills" : ["Espana", "Web Tech", "Chem", "Guit"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var education = {
	"schools" : [
		{
			"name": "MKDAV",
			"location": "Daltonganj",
			"major": "High school",
			"degree": "SSEC",
			"dates": "2001"
		},
		{
			"name": "FIITJEE",
			"location": "Delhi",
			"major": "IIT JEE",
			"degree": "IIT Aspirant",
			"dates": "2001"
		},
		{
			"name": "SVNIT",
			"location": "Surat",
			"major": "Chemical Engineering",
			"degree": "BTECH",
			"dates": "2007"
		}
	],
	"onlineCourses" :[
		{
			"title": "Introduction to Game Design",
			"school": "MITx",
			"dates":"Oct 22, 2014",
			"url":"https://courses.edx.org/courses/MITx/11.126x/3T2014/info"
		},
		{
			"title": "Introduction to Computational Thinking and Data Science",
			"school": "MITx",
			"dates":"May 09, 2014",
			"url":"https://courses.edx.org/courses/MITx/6.00.2x/1T2014/info"
		},
		{
			"title": "Introduction to Computer Science and Programming Using Python",
			"school": "MITx",
			"dates":"Apr 25, 2014",
			"url":"https://courses.edx.org/courses/MITx/6.00.1-x/1T2014/info"
		}
	]
};

var work = {
	"jobs" : [{
	"workEmployer" : "Company One",
	"workTitle" : "Software Consultant",
    "workDates" : "2007 - 2010",
    "workLocation" : "Ahmedabad",
    "workDescription" : "Software Development and Consultancy"},
	{
	"workEmployer" : "Company Two",
	"workTitle" : "Software Developer",
    "workDates" : "2010 - 2013",
    "workLocation" : "Pune",
    "workDescription" : "Software Development and Implementation"},
	{
	"workEmployer" : "Company Three",
	"workTitle" : "Environment Engineer",
    "workDates" : "2013 - 2015",
    "workLocation" : "Bangalore",
    "workDescription" : "Software Development and Product division environment administration"}]
};

var projects = {
	"projectsDtl" : [{
	"projectTitle" : "RA",
	"projectDates" : "2007 - 2010",
	"projectDescription" : "Revenue Assurance",
	"projectImage" : "images/RA.jpg"
	},{
	"projectTitle" : "nPario",
	"projectDates" : "2010 - 2013",
	"projectDescription" : "nPario DB Testing",
	"projectImage" : "images/Dbtesting.jpg"
	},{
	"projectTitle" : "BI",
	"projectDates" : "2013 - 2015",
	"projectDescription" : "Business Intelligence Administration",
	"projectImage" : "images/BI.jpg"	
	}
	]
};

if(bio["skills"] !== undefined && bio["skills"].length !== 0)
{
	$("#header").append(HTMLskillsStart);
	for(var i in bio["skills"]){
		var skills = bio["skills"][i];
		var formattedSkills = HTMLskills.replace("%data%", bio["skills"][i]);
		$("#skills").append(formattedSkills);
	}
}

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#topContacts").after(formattedBioPic);
$("#topContacts").after(formattedWelcomeMsg);

bio.contactinfo.display = function() {
	var contacts = bio.contactinfo;
	var formattedContactGeneric = HTMLcontactGeneric.replace('%contact%','Contact Me').replace('%data%',contacts.contact);
	$('#topContacts').append(formattedContactGeneric);
	var formattedMobile = HTMLmobile.replace('%data%',contacts.mobile);
	$('#topContacts').append(formattedMobile);
	$('#footerContacts').append(formattedMobile);
	var formattedEmail = HTMLemail.replace('%data%',contacts.email);
	$('#topContacts').append(formattedEmail);
	$('#footerContacts').append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace('%data%',contacts.twitter);
	$('#topContacts').append(formattedTwitter);
	$('#footerContacts').append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace('%data%',contacts.github);
	$('#topContacts').append(formattedGithub);
	$('#footerContacts').append(formattedGithub);
	var formattedBlog = HTMLblog.replace('%data%',contacts.blog);
	$('#topContacts').append(formattedBlog);
	var formattedLocation = HTMLlocation.replace('%data%',contacts.location);
	$('#topContacts').append(formattedLocation);
	$('#footerContacts').append(formattedLocation);
}

bio.contactinfo.display();

function displayWork(){
	for(var ind in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);
		formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[ind].workEmployer);
		//$(".work-entry:last").append(formattedWorkEmployer);
		//console.log(formattedWorkEmployer);
		formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[ind].workTitle);
		formattedWorkEmployerTitle = formattedWorkEmployer.concat(formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkEmployerTitle);
		//console.log(formattedWorkTitle);
		formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[ind].workDates);
		$(".work-entry:last").append(formattedWorkDates);
		formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[ind].workLocation);
		$(".work-entry:last").append(formattedWorkLocation);
		formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[ind].workDescription);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}
displayWork();

//$("#main").append(internationalizeButton);


var inName = function(local_name){
	var iName = local_name.split(' ');
	iName[0] = iName[0][0].toUpperCase()+iName[0].slice(1).toLowerCase();
	iName[1] = iName[1].toUpperCase();
	return iName.join(' ');
}

projects.display = function(){
	    var projectsDtl = projects.projectsDtl;
		for(var p in projectsDtl)
		{
			$('#projects').append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace('%data%',projectsDtl[p].projectTitle);
			$('.project-entry:last').append(formattedProjectTitle);
			var formattedProjectDates = HTMLprojectDates.replace('%data%',projectsDtl[p].projectDates);
			$('.project-entry:last').append(formattedProjectDates);
			var formattedProjectDescription = HTMLprojectDescription.replace('%data%',projectsDtl[p].projectDescription);
			$('.project-entry:last').append(formattedProjectDescription);
			var formattedProjectImage = HTMLprojectImage.replace('%data%',projectsDtl[p].projectImage);
			$('.project-entry:last').append(formattedProjectImage);
		}
}
projects.display();

education.display = function(){
	var school = education.schools;
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(HTMLschools);
	for(i in school) {		
		var formattedSchoolName = HTMLschoolName.replace("%data%", school[i].name);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", school[i].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school[i].location);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school[i].degree);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last a").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolLocation).append(formattedSchoolDates);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school[i].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
	if (education.onlineCourses.length > 0) {
		$(".education-entry:last").append(HTMLonlineClasses);
		var course = education.onlineCourses;
		for(i in course) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course[i].title).replace('#', course[i].url);;
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course[i].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", course[i].dates);
			$(".education-entry:last")
			.append(formattedOnlineTitle + formattedOnlineSchool)
			.append(formattedOnlineDates)
			.append('<br>');
		}
	}
}

education.display();

$("#mapDiv").append(googleMap);