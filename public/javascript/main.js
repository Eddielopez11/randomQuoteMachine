document.addEventListener("DOMContentLoaded", function() {
  var currentQuote;
  var quoteEl = document.querySelector("[data-js='quote']");
  var authorEl = document.querySelector("[data-js='author']");

  function getNewQuote() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://quotes.stormconsultancy.co.uk/random.json', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        currentQuote = JSON.parse(xhr.responseText);
        quoteEl.innerHTML = currentQuote.quote;
        authorEl.innerHTML = currentQuote.author;
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
