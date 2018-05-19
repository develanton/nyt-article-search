var apiKey = "12a836ed9e574203bfb9d14a3e19a280";
//var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"+ apiKey + "&q=" + searchTerm;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=12a836ed9e574203bfb9d14a3e19a280&q=Tesla";
var searchTerm;

$("#search").on("click", function(event) {
    searchTerm = $("#searchTermText").val().trim();
    event.preventDefault();
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);

          var searcResult = $("<div>");
          var textInput = $("<p>").text("Author: " + response.byline.original)
          
    
      });
    //console.log(searchTerm);

});

