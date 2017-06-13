document.addEventListener("DOMContentLoaded", function() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://talaikis.com/api/quotes/random/', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText);
    }
  };
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();

  document.getElementById('newQuote').onclick = function newQuote () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://quotesondesign.com/wp-json/filter[id]=1111', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        console.log(xhr.responseText);
      }
    };
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();
  };
});
