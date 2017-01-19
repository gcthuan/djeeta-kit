$(document).ready(function() {
	const path = "data.json";
	LoadCollection(path);
	

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
		    		$(".img-col").click(function(v) {
		    			SaveCurrentCharacterUrl(v.target.src);
		    		});
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

	function SaveCurrentCharacterUrl(url) {
		chrome.storage.sync.set({'charUrl': url}, function() {
			console.log("url is set!");
		});
	}

	function test() {
		console.log("test");
	}
});