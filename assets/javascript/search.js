var searchTerm = $("#searchTermText").val().trim();
var apiKey = "12a836ed9e574203bfb9d14a3e19a280";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"+ apiKey + "?q=" + searchTerm;
