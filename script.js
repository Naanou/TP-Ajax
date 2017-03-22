window.addEventListener("load",function(){
	//window.location.hash = "1";

	window.addEventListener.('hashchange',function(){
		var split = window.location.hash.substring(1,1);
		chapterShifting(split);
	});
});


function chapterShifting(nb){
	var req = new XMLHttpRequest();
	req.open("GET","json/chapter"+nb+".json");

	req.onerror = function() {
	    console.log("Échec de chargement "+url);
	};

	req.onload = function() {
	    if (req.status === 200) {
	      var data = JSON.parse(req.responseText);
		  document.getElementById('story').textContent = data.txt;

		  var liens = document.getElementById('choices');
	      data.links.forEach(function(tmp){
	      	var lien = document.createElement('a');
	      	lien.href = tmp.link;
	      	lien.textContent = tmp.txt
	      	liens.appendChild(lien);
	      })
	    } else {
	      console.log("Erreur " + req.status);
	    }
	};

	req.send();
}

/*

window.addEventListener('hashchange',function(){
	var req = new XMLHttpRequest();
	var split = window.location.hash.split('#');
	changedhash = "json/chapter"+split[1]+".json";
	console.log(changedhash);

	req.open("GET",changedhash);

	req.onerror = function() {
	    console.log("Échec de chargement "+url);
	};

	req.onload = function() {
	    if (req.status === 200) {
	      var data = JSON.parse(req.responseText);
		  document.getElementById('story').textContent = data.txt;

		  var liens = document.getElementById('choices');
	      data.links.forEach(function(tmp){
	      	var lien = document.createElement('a');
	      	lien.href = tmp.link;
	      	lien.textContent = tmp.txt
	      	liens.appendChild(lien);
	      })
	    } else {
	      console.log("Erreur " + req.status);
	    }
	};

	req.send();
})
*/