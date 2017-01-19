$(document).ready(function() {



	// run checker every 200ms to replace the home image then stop
	let myInterval = setInterval(Checker, 200);
	const myPageButton = $("div.btn-pc-footer-mypage");

	// rerun if My Page button is clicked
	myPageButton.click(function() {
		myInterval = setInterval(Checker, 200);
	});

	chrome.storage.onChanged.addListener(function(changes, sync) {
		console.log(changes.charUrl.newValue, changes.charUrl.newValue);
		const myImage = $("img.img-myimage");
		ReplaceImage(myImage);
	});

	function Checker() {
		console.log("checking");
		const myImage = $("img.img-myimage");
		if (myImage.attr("src") !== undefined) {
			if (myImage.attr("src").includes("granbluefantasy")) {
				ReplaceImage(myImage);
				StopInterval(myInterval);
			}
		}
	}

	function ReplaceImage(myImage) {
		console.log("hi");
		chrome.storage.sync.get('charUrl', function(result){
			console.log("run");
			myImage.attr("src", result.charUrl);
			console.log("done");
		});
	}

	function StopInterval(myInterval) {
		clearInterval(myInterval);
	}

});


