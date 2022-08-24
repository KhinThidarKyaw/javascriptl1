var getprogressbar = document.getElementById("progress-bar");

window.onscroll =function(){
	scrollpoint();
};

function scrollpoint(){
	// console.log("i am working");

	var getscrolltop = document.documentElement.scrollTop;
	// console.log(getscrolltop);
	var getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrollheight);
	var getclientheight = document.documentElement.clientHeight;
	// console.log(getclientheight);

	var getcalcheight = getscrollheight-getclientheight;

	var final = Math.round((getscrolltop * 100) / getcalcheight);
	// console.log(final);

	getprogressbar.style.width = `${final}%`;
}

function printme(){
	window.print();
}