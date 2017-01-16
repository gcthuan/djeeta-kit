$(document).ready(function() {

	// run checker every 200ms to replace the home image then stop
	var myInterval = setInterval(Checker, 200);
	var myPageButton = $("div.btn-pc-footer-mypage");
	var folder = "img/src/";

	// rerun if My Page button is clicked
	myPageButton.click(function() {
		myInterval = setInterval(Checker, 200);
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
		myImage.attr("src", "https://i.imgur.com/ug3qRe7.png");
	}

	function StopInterval(myInterval) {
		clearInterval(myInterval);
	}

	// chrome.runtime.onMessage.addListener(
	// 	function(request, sender, sendResponse) {
	// 	    console.log(sender.tab ?
	// 	                "from a content script:" + sender.tab.url :
	// 	                "from the extension");
	// 	    if (request.greeting == "hello")
	// 	      sendResponse({farewell: "goodbye"});
	// });
});


