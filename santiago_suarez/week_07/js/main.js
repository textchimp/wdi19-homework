$(document).ready(function() {

	$('#searchBtn').on('click', function() {

		makeRequest('GET', 'http://www.omdbapi.com/?s=', $('#searchInput').val(), function() {
			if (this.readyState === XMLHttpRequest.DONE) {
				if (JSON.parse(this.response).Response === "False") {
					populateErrors();
				}
	      if (this.status !== 200) {
	        alert('Something wrong with OMDB servers');
	      } else {
	        console.log(JSON.parse(this.response));
					populateMainContainer(JSON.parse(this.response));
					populateSideBar(JSON.parse(this.response));
	      }
	    }
		})

		$('#leftColumn').affix({
			offset: {
		    top: 0
		  }
		});

		$(document.body).scrollspy({
			target: '#leftColumn',
			offset: 0
		});

	})

	/* smooth scrolling sections NOT WORKING :C */
	$('a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
})

function populateSideBar(json) {
	for (movie in json['Search']) {
		$("#sidebar").append(
			`<li><a href="#${json['Search'][movie]['imdbID']}">${json['Search'][movie]['Title']}</a></li>`
		);
	}
}

function populateErrors() {
	$(".movies").append(`<h1 class="errors">No Movie with that title</h1>`);
}

function populateMainContainer(json) {
	for (movie in json['Search']) {
		$(".movies").append(
			`<div class="well well-lg" id="${json['Search'][movie]['imdbID']}">
	     	 <div class="row">
	         <div class="col-sm-6">
	      	   <img src="${json['Search'][movie]['Poster']}" class="img-responsive">
	      	 </div>
	         <div class="col-sm-6">
	      		 <h1>${json['Search'][movie]['Title']}</h1>
						 <p>${json['Search'][movie]['Year']}</p>
	      	 </div>
	    	 </div>
	  	 </div>
		  `
		);
	}
}

function makeRequest(method, url, params, callback) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open(method, url + params);
  httpRequest.send();
  httpRequest.onreadystatechange = callback;
}
