// $(window).on('load', function (e) {
// 	setTimeout(function() {
// 		ConsoleLog();
// 	}, 500)
	
// 	// console.log("hi");
// 	// $("img.img-myimage").attr("src", "http://imgur.com/lYb6d6J");
	
// });

// $(document).ready(function() {
// 	ConsoleLog();
// });


$(document).ready(function() {
	var myInterval = setInterval(Checker, 300);
	var myPageButton = $("div.btn-pc-footer-mypage");

	myPageButton.click(function() {
		myInterval = setInterval(Checker, 300);
	});

	function Checker() {
		console.log("checking");
		var myImage = $("img.img-myimage");
		if (myImage.attr("src") !== undefined) {
			if (myImage.attr("src").includes("granbluefantasy")) {
				ReplaceImage(myImage);
				StopInterval(myInterval);
			}
		}
	}

	function ReplaceImage(myImage) {
		myImage.attr("src", "http://i.imgur.com/lYb6d6J.png");
	}

	function StopInterval(myInterval) {
		clearInterval(myInterval);
	}
});



