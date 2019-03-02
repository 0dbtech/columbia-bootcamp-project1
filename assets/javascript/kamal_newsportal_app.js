  
  function runSearch() {
    // this API is for "I want to search across every news article that mentions a specific topic or keyword (limited to the last 6 months)."
    var searchTerm = $("#searchTerm").val().trim();
    console.log( searchTerm);

    for (var j = 1; j < 6; j++) {
      var queryURL =
        "https://newsapi.org/v2/everything?q=" + searchTerm + "&from=2019-03-01&sortBy=popularity?sources=cnn&apiKey=1f24541f63fa4ac79c46c7df37094bed&pageSize=100&page=" +
        j.toString().trim();

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        for (var i = 0; i < 99; i++) {
          // make sure the media source we are looking for
          var sourceName = response.articles[i].source.name.toUpperCase();

          if ((sourceName === "CNN") || (sourceName === "FOX NEWS") || (sourceName === "THE WASHINGTON POST") ||
            (
              sourceName === "NATIONAL REVIEW") || (sourceName === "MSNBC") || (sourceName === "BREITBART NEWS")) {
            // Create a new table row element
            if (sourceName === "THE WASHINGTON POST") {
              sourceName1 = "THE-WASHINGTON-POST";
            } else {
              sourceName1 = sourceName.replace(" ", "-");
            }

            var tRow = $("<tr class='" + sourceName1 + "'>");
            var sourceID = $("<td>").html('<a href="' + response.articles[i].url + '" target="_blank">' + response.articles[i].source.name + '</a></td></tr>');
            var summary = $("<td>").text(response.articles[i].description);

            //var imgLink = $("<td>").html('<a href="' + response.articles[i].url  + '" target="_blank">'+ '<img src="' + response.articles[i].urlToImage + '"></a></td></tr>');
            // var pageLink = $("<td>").html('<a href="' + response.articles[i].url + '" target="_blank">' + response.articles[i].title + '</a></td></tr>');

            // Append the newly created table data to the table row
            tRow.append(sourceID, summary);
            // Append the table row to the table body
            $(".table > tbody").append(tRow);
          }
        }
      });
    }
  }
  // CNN Ends Here

  // run search
  
  $("#add-search-btn").on("click", function () {
    runSearch();
  })

  //  news hide when based on button clicked
  // liberal media
  $("#add-liberal-btn").on("click", function () {
    $(".THE-WASHINGTON-POST, .MSNBC, .CNN").show();
    $(".BREITBART-NEWS, .FOX-NEWS ,.NATIONAL-REVIEW").hide();
  })
  $("#add-msnbc-btn").on("click", function () {
    $(".MSNBC").show();
    $(".THE-WASHINGTON-POST, .NATIONAL-REVIEW, .BREITBART-NEWS, .CNN, .FOX-NEWS").hide();
  })
  $("#add-cnn-btn").on("click", function () {
    $(".CNN").show();
    $(".MSNBC, .THE-WASHINGTON-POST, .NATIONAL-REVIEW, .BREITBART-NEWS, .FOX-NEWS").hide();
  })
  $("#add-washington-btn").on("click", function () {
    $(".THE-WASHINGTON-POST").show();
    $(".MSNBC, .NATIONAL-REVIEW, .BREITBART-NEWS, .CNN, .FOX-NEWS").hide();
  })

  // consevative media    
  $("#add-conservative-btn").on("click", function () {
    $(".BREITBART-NEWS, .FOX-NEWS, .NATIONAL-REVIEW").show();
    $(".THE-WASHINGTON-POST, .MSNBC, .CNN").hide();
  })
  $("#add-foxnews-btn").on("click", function () {
    $(".FOX-NEWS").show();
    $(".MSNBC, .THE-WASHINGTON-POST, .NATIONAL-REVIEW, .CNN, .BREITBART-NEWS").hide();
  })
  $("#add-national-btn").on("click", function () {
    $(".NATIONAL-REVIEW").show();
    $(".MSNBC, .THE-WASHINGTON-POST, .BREITBART-NEWS, .CNN, .FOX-NEWS").hide();
  })
  $("#add-breitbart-btn").on("click", function () {
    $(".BREITBART-NEWS").show();
    $(".MSNBC, .THE-WASHINGTON-POST, .NATIONAL-REVIEW, .CNN, .FOX-NEWS").hide();
  })