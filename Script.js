$(document).ready(function(){

	$("#prev").hide();
	$("#nextGreyed").hide();
	$("#start").hide();
	$("#welcome").hide();
	//$("#welcome").delay(1000).fadeIn("slow");
	$("#welcome").fadeIn(1200);
	$("#warmWelcome").animate({'font-size': '75px'}, 1200, function(){
		$("#start").show("slide", {direction: "right"}, 1000);
	});



	var previews = [{
		showPic:"",
		text:"Hey there. I'm Jordan. Here are some examples of my work. Much of what's showcased here are projcets I've done for Thinkful (an online mentorship program). I feel that all the work I'm showcasing here adequately displays what I'm capable of. If you want to see some of the work I've done click the next button to check it out.",
		title:"About Me"
	}, {
		showPic: "#comicQuiz",
		text: "This is a project I worked on during my Thinkful course. We were assigned to create a quiz application in which we were creating the content using JavaScript",
		title: "Comic Book Quiz Project"
	}, {
		showPic: "#list",
		text: "The shopping list app I created for my thinkful course. The idea behind the project is that students are to get comfortable using chekckboxes and various jquery selectors.",
		title: "Shopping list app project"
	}, {
		showPic: "#hOrC",
		text: "This is my first JavaScript project. I created this one for Thinkful as well. It uses some simple javascript to pick a number and tell the user if their guesses are hotter or colder than the previous guesses.",
		title: "Hot or Cold project"
	}, {
		showPic: "#api",
		text: "Another Thinkful prject I worked on. This one uses the census API to get data about median anual income. This is definitely the project of which I am most proud, as I really got to take the reigns and build something of my own. I intend to expand this with a map and some more searchable criteria.",
		title: "Api Hack Project"
	}, {
		showPic: "#NFG",
		text: "This is a webpage I'm currently working on for the band Nebula Force, Go! This is the first thing that I've developed independently. It's currently a work in progress, but I feel that it's coming along nicely.",
		title: "Nebula Force, GO! website"
	}];
	
	var i = 0

	console.log(i);

	//next button

	$("body").on('click','#next',function(){
		
		if (i === 4){
			$("#next").hide();
			$("#nextGreyed").show();
		}
		else if (i === 0){
			$("#prev").show();
			$("#prevGreyed").hide();
			$("#welcome").fadeOut(500);
			$("#start").fadeOut(500);

		}

        i++;
        console.log(i);
        $(previews[i-1].showPic).hide("slide", {direction: "left"}, 300);
        $(previews[i].showPic).delay(400).show("slide", {direction: "right"}, 400);
        $("#displayContainer").css("background-size", "contain");
        $("#displayContainer").css("background-repeat", "no-repeat");
        $("#rightText").html(previews[i].text);
        $("#title").html(previews[i].title)
	});

	//previous button

	$("body").on('click','#prev',function(){
		if (i > 4){
			$("#nextGreyed").hide();
			$("#next").show();
			
		}
		else if (i < 2){
			$("#prev").hide();
			$("#prevGreyed").show();
		}
		else if (i === 4){
			//$("#nextGreyed").hide();
		}

        i--;
        console.log(i);

        $(previews[i].showPic).delay(400).show("slide", {direction: "left"}, 400);
        $(previews[i+1].showPic).hide("slide", {direction: "right"}, 300);
        $("#displayContainer").css("background-size", "contain");
        $("#displayContainer").css("background-repeat", "no-repeat");
        $("#rightText").html(previews[i].text);
        $("#title").html(previews[i].title)
	});

});