$(document).ready(function() {
	const path = "data.json";
	LoadCollection(path);

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  		chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    	console.log(response);
  	});
});


	// get images collection from data.json and show in popup
	function LoadCollection(path) {
		$.ajax({
		    url : path,
		    success: function (responseData) {
		    	const parsedData = JSON.parse(responseData);
		    	charList = parsedData.characters
		    	for (let key in charList) {
		    		const imagesArr = charList[key].images;
		    		for (let key in imagesArr) {
		    			console.log(imagesArr[key]);
		    			const html = '<div class="col-xs-4"><img class="img-col" src='
		    			+ imagesArr[key] + "></div>";
		    			$(".row").append(html);
		    		}
		    	}
		    }
		});
	}
});