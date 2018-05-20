

var apiKey = "12a836ed9e574203bfb9d14a3e19a280";
//var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"+ apiKey + "&q=" + searchTerm;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=12a836ed9e574203bfb9d14a3e19a280&q=Tesla";
var searchTerm;

$("#search").on("click", function (event) {
    searchTerm = $("#searchTermText").val().trim();
    event.preventDefault();
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
       
        var result = response;

        console.log(response);
        console.log(result);    

        $("#index-id").text(result.status);
        $("#titles").text(result.response.docs[0].headline.main);
        $("#reference").append('<div id="autor">Autor</div>');
        $("#reference").append('<div id="section">section</div>');
        $("#reference").append('<div id="date">date</div>');
        $("#reference").append('<div id="linking-url">url</div>');


    });
    //console.log(searchTerm);

});

