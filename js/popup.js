$(document).ready(function() {
	const path = "data.json";
	LoadCollection(path);

	$("li").click(function(v) {
		alert("hi");
		console.log(v.target.innerText);
	});

	// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
 //  		chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
 //    		console.log(response);
 //  		});
	// });

	

	// get images collection from data.json and show in popup
	function LoadCollection(path) {
		$.ajax({
		    url : path,
		    success: function (responseData) {
		    	const parsedData = JSON.parse(responseData);
		    	const charList = parsedData.characters_list;
		    	const characters = parsedData.characters;
		    	for (let key in charList) {
		    		// const imagesArr = charList[key].images;
		    		const dropdownHtml = '<li><a href="#">' + charList[key] + '</a></li>'
		    		$(".dropdown-menu").append(dropdownHtml);
		    	}
		    	$("li").click(function(v) {
		    		$("#button-value")[0].innerText = v.target.innerText + " ";
		    		$("#collection").empty();
		    		LoadCharacter(characters, v.target.innerText);
		    	})
		    }
		});
	}

	function LoadCharacter(characters, name) {
		const charImages = FindCharacter(characters, name)[0].images;
		for (let key in charImages) {
			const collectionHtml = '<div class="col-xs-4"><img class="img-col" src=' + charImages[key] + '></div>';
			$("#collection").append(collectionHtml);
		}
	}

	function FindCharacter(characters, name) {
		return characters.filter(function(data) {
			return data.name == name;
		})
	}
});