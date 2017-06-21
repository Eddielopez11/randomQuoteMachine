document.addEventListener("DOMContentLoaded", function() {
  var quoteEl = document.querySelector("[data-js='quote']");
  var authorEl = document.querySelector("[data-js='author']");
  var a = document.querySelector("[data-js='tweetLink']");
  var currentQuote;
  var quote;
  var author;

  function getNewQuote() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://quotes.stormconsultancy.co.uk/random.json', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        currentQuote = JSON.parse(xhr.responseText);
        quote = currentQuote.quote;
        author = currentQuote.author;
        quoteEl.innerHTML = quote;
        authorEl.innerHTML = author;

        function URLified() {
          var twitterLink = "https://twitter.com/intent/tweet?text=";

          var quoteURL = quote.split(" ").join("%20") + "%20-%20" + author.split(" ").join("%20");

          var tweetPopulate = twitterLink + quoteURL;

          return tweetPopulate;
        };
        a.href = URLified();

      }
    };
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();


  };

  window.onload = function() {
    getNewQuote();
  };

  document.getElementById('newQuote').onclick = function newQuote () {
    getNewQuote();
  };

});
