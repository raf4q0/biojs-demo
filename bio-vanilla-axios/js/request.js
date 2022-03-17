(function() {
  
  'use strict';
    
  // find the desired selectors
  var btn = document.getElementById('request');
  var bio = document.getElementById('bio');
  
  // set up a request
  var getBio = function() {
    axios.get('https://bucket-demo-raf4q0.s3.amazonaws.com/bio.txt')
      .then(function(response) {        
        bio.style.border = '1px solid #e8e8e8';
        bio.innerHTML = response.data;
      })
      .catch(function(error) {
        console.log(error);
        bio.innerHTML = 'An error occurred during your request: ' +  response.status + ' ' + request.statusText;
      });
  };

  // register an event
  btn.addEventListener('click', function() {
    // hide the button
    this.style.display = 'none';
    // send the request
   getBio();
  });
  
})();