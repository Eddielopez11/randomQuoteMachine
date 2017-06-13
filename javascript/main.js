document.addEventListener("DOMContentLoaded", function() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText);
    }
  };
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();
});
