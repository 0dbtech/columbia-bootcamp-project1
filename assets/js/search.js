$(document).ready(function() {
  //get video id from search
  console.log("inside search.js");

 

  var ytVideoIdArray = [];
  
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  
  //grab text input from search box
  var search = "florida"
  var ytAPIkey = "AIzaSyBW3X4R4Eke37gYShO54y5WtSR9LtvhLL0"
  
  function searchYT () {
  
    // selectedTopic = global var
    // console.log('selectedTopic var is ' + selectedTopic);
  
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q="+search+"&type=video&videoDefinition=high&videoEmbeddable=true&videoSyndicated=true&key="+ytAPIkey;
    // brian API key
    //limit return to 10 items
    console.log(queryURL);
  
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
        
          //grab youtube object
          results = response.items;
  
          //check object format
          console.log(results.length);

          for (i=0; i<results.length; i++){

            // looping through videoIDs
            console.log("item is vidId is " + results[i].id.videoId);
            ytVideoIdArray.push(results[i].id.videoId);
           

            //looping through descriptions
            console.log("item description is " + results[i].snippet.description);
  
          //NO RETURN FN - stops for loop
          }
  
          
      return;
      //END callback function
      });
  
    
     
    //END load video
    }
  
  
  function loadVid () {

    console.log("array of vid ids " + ytVideoIdArray);

    selectedVideoId = ytVideoIdArray[2]

    console.log("selectedVideoId is " + selectedVideoId);

    loadPlayer();
    return;
  }
  

  

 ////PLAYER   



function loadPlayer() {

  $('#player').empty();

  //choose vid id from array


  $("#player").append('<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/"' + selectedVideoId + 'frameborder="0" allowfullscreen></iframe>');

return;
}

//load video to selected
// loadVid()


//Load functions
// loadPlayer();

    //TEST QUERY
    searchYT();

    console.log(ytVideoIdArray);
   

    // loadVid();
  //document ready END
  });