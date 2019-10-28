$(document).ready(function() {
  $("form#userGroceries").submit(function(event) {
    event.preventDefault();
    var items = $("#groceryList").val().split(", ");
    items.sort();
    items.forEach(function(item) {
      $("ul").append("<li>" + item.toUpperCase() + "</li>");

    });
  });
  $("form#sentence").submit(function(event){
    event.preventDefault();
    var input = $("#quote").val().split(" ");
    var words = input.map(function(word) {
      return word.toLowerCase();
    });

    var wordlist = {};

    words.forEach(function(word) {
      if (wordlist[word] == null) {
        wordlist[word] = 1;
      } else {
        wordlist[word] += 1;
      }
    });

    console.log(wordlist);
    });
});
