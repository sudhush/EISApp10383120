
// DEVELOPER

// SUDHANVA HUKKERI ===== 10383120

var button = document.getElementById('button');
var input = document.getElementById('input');
var results = document.getElementById('results');
////////

button.addEventListener("click", function(e) {
	console.log(e.type);
  
	if(input.value ==''){
	  alert('There is no value');
	} else{
	  //console.log('This function works');
	  //console.log(input.value);
	  $.ajax({
	
		  url: 'https://www.googleapis.com/books/v1/volumes?q=' + input.value,
		  dataType: "json",
  
				success: function (result) 
				{ 
					console.log(result.items.length);
					console.log("Working"+result.items.length);
			  for(var i = 0; i < result.items.length; i++)
			  {
				var bktitle1 = result.items[i].title;;
				var bTitle = (i) + '-' + result.items[i].title;
				console.log("Working"+result.items.length);
				  console.log( (i+1) + "  " +  result.items[i].volumeInfo.title);
				  
				  //var isbn10 = result.items[i].volumeInfo.industryIdentifiers[0].identifier;
  
				  $('#BookTitles').append('<div class="col-6 mask col-lg-4 bg-dark animate-in-down">'+
								  '<img src=' + result.items[i].volumeInfo.imageLinks.smallThumbnail + '" class="center-block img-fluid my-3" width="300">'+
								  '<a id = "'+ bTitle +'" class = "book_ids" href=""><h3 class="mb-0" id = ""><b>' + result.items[i].volumeInfo.title + '</b></h3>'+
								  '</a><p class=""> BY '+ result.items[i].volumeInfo.authors+' </p></div>');
				  
				  console.log( "/n" + bTitle);
			  }
				console.log("Working");
  
			  $('body').on('click','.book_ids', function(e){
				  //$('.book_ids').click(function() {
						console.log("Working");
					  e.preventDefault();
					  var book_id = $(this).attr('id');
					  book_id = book_id.split("-");
					
					var x = book_id[0];
					var book_name = book_id[1];
					var book_details = result.items[x];
				
					console.log(book_id +"/n"+ x + book_name);
					
					console.log(book_details);
					console.log(book_details.volumeInfo.description);
					//console.log(book_isbn10);
					  
					  BookJSON = JSON.stringify(book_details);
					console.log(BookJSON);
					  localStorage.setItem("BookJSON", BookJSON);
					  window.location.href = 'Book-Data.html';
			  });
		  },
			type: 'GET'
	  });
  
	  input.value = '';
	  }
  });

///////

// input.addEventListener("keyup", function(e) {
// e.preventDefault();	
	
//   if (e.keyCode === 13) {
//     //console.log('Enter pressed');
// 	//document.getElementById('button').click();
// 	if(input.value ==''){
// 		alert('There is no value');
// 	  } else{
// 		//console.log('This function works');
// 		//console.log(input.value);
// 		$.ajax({
	  
// 			url: 'https://www.googleapis.com/books/v1/volumes?q=' + input.value,
// 			dataType: "json",
	
// 			success: function (result) 
// 			{ 
// 			  console.log(result.items.length);
// 		  for(var i = 0; i < result.items.length; i++)
// 		  {
// 			var bktitle1 = result.items[i].title;;
// 			var bTitle = (i) + '-' + result.items[i].title;

// 			  console.log( (i+1) + "  " +  result.items[i].volumeInfo.title);
			  
// 			  //var isbn10 = result.items[i].volumeInfo.industryIdentifiers[0].identifier;

// 			  $('#BookTitles').append('<div class="col-6 mask col-lg-4 bg-dark animate-in-down">'+
// 							  '<img src=' + result.items[i].volumeInfo.imageLinks.thumbnail + '" class="center-block img-fluid my-3" width="300">'+
// 							  '<a id = "'+ bTitle +'" class = "book_ids" href=""><h3 class="mb-0" id = ""><b>' + result.items[i].volumeInfo.title + '</b></h3>'+
// 							  '</a><p class=""> BY '+ result.items[i].volumeInfo.authors+' </p></div>');
			  
// 			  console.log( "/n" + bTitle);
// 		  }


// 		  $('body').on('click','.book_ids', function(e){
// 			  //$('.book_ids').click(function() {
// 				  e.preventDefault();
// 				  var book_id = $(this).attr('id');
// 				  book_id = book_id.split("-");
				
// 				var x = book_id[0];
// 				var book_name = book_id[1];
// 				var book_details = result.items[x];
			
// 				console.log(book_id +"/n"+ x + book_name);
				
// 				console.log(book_details);
// 				//console.log(book_isbn10);
				  
// 				  BookJSON = JSON.stringify(book_details);

// 				  localStorage.setItem("BookJSON", BookJSON);
// 				 window.location.href = 'Book-Data.html';
// 				});
// 			},
// 			  type: 'GET'
// 		});
	
// 		input.value = '';
// 	}
// 	}

// });









