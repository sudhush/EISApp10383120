
// DEVELOPER

// SUDHANVA HUKKERI ===== 10383120


$(function(){

	// Getting Details of the Book chosen by the User from the Local Storage
	var book_JSON = localStorage.getItem("BookJSON");
	
	var b_s = JSON.parse(book_JSON);
	

	console.log(b_s);

	
	console.log( b_s.volumeInfo.title); 

	var book_ISBN10 = b_s.volumeInfo.industryIdentifiers[1].identifier;
	
	$('#BookSelected1').append('<div class="p-4 col-md-6 bg-primary text-center"> ' +
								'<h2 class="mb-1 text-center">'+b_s.volumeInfo.title+'</h2> ' +
								'<i class="fa d-inline-block mx-1 text-white text-center">('+ b_s.volumeInfo.industryIdentifiers[1].identifier +')</i>' +
								'<p class="my-4 text-center">'+ "categories: |" + '<b>'+ b_s.volumeInfo.categories + '</b>' +"|"+ '</p>' +
								'<p class="my-4 text-center"><b>'+ "Author: " + '</b><u>' + b_s.volumeInfo.authors + '</u>' + '</p>' +
								'<p class="my-4 text-center"><b>'+ "Published on :  " + '</b>' + b_s.volumeInfo.publishedDate +
								'<p class="my-4 text-center">'+ " ~Description~ "+ '<p><b>' + b_s.volumeInfo.description + '</p>' +
								
								'</div>' + '<div class="">' + '<img class="img-fluid" src=' + b_s.volumeInfo.imageLinks.smallThumbnail + '" width="300"></div>');


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


	 $.ajax({
	
		  url: 'https://openlibrary.org/api/books?bibkeys=ISBN:' + book_ISBN10  +'&jscmd=data&format=json',
		  dataType: "json",
  
				success: function (result) 
				{ 
				  console.log(result);
				 // console.log(result["ISBN:"+book_ISBN10].publish_date );
		
				  $('#BookSelected2').append('<div class="p-4 col-md-6 bg-primary text-center"> ' +
								'<h2 class="mb-1 text-center">'+result["ISBN:"+book_ISBN10].title+'</h2> ' +
								'<i class="fa d-inline-block mx-1 text-white text-center">('+ book_ISBN10+')</i>' +
								'<p class="my-4 text-center">'+ "categories: <p>|" + '<b>'+ result["ISBN:"+book_ISBN10].subjects[0].name + '</b></p>' + 
								'<b><p>'+ result["ISBN:"+book_ISBN10].subjects[1].name + '</p></b>' +
								'<b><p>'+ result["ISBN:"+book_ISBN10].subjects[2].name + '</p></b>' +
								'<b><p>'+ result["ISBN:"+book_ISBN10].subjects[3].name + '</p></b>' +
								'<p><b>'+ result["ISBN:"+book_ISBN10].subjects[4].name + '</b>' + "|"+ '</p></p>' +
								'<p class="my-4 text-center"><b>'+ "Author: " + '</b><u>' + result["ISBN:"+book_ISBN10].authors[0].name + '</u>' + '</p>' +
								'<p class="my-4 text-center"><b>'+ "Published on :  " + '</b>' + result["ISBN:"+book_ISBN10].publish_date +
								'<p class="my-4 text-center">'+ " ~Description~ "+ '<p><b>' + result["ISBN:"+book_ISBN10].description + '</p>' +
								'</div>' + '<div class="">' + '<img class="img-fluid" src=http://covers.openlibrary.org/b/isbn/'+book_ISBN10+'-L.jpg" width="300"></div>');
					
  
		  },
			type: 'GET'
	  });
  
	  book_ISBN10.value = '';

	
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////				
			
});






	

