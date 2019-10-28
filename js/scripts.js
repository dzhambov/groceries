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
    words.sort();

    var wordCounts = [1];
    console.log(words);

    for (var index = 0; index < words.length; index += 1) {
      for (var nextIndex = (index + 1); index < words.length; nextIndex += 1) {
        if (words[index] === words[nextIndex]) {
          wordCounts[index] += 1;
          words.splice(nextIndex, 1);
        }
        else if (index < (words.length - 1)) {
          wordCounts.push(1);
          $("ul#word-list").append("<li>" + words[index] + ": " + wordCounts[index] + "</li>");
          break;
        } else {
          $("ul#word-list").append("<li>" + words[index] + ": " + wordCounts[index] + "</li>");
          break;
        }
      }
    }
    console.log(words);
    console.log(wordCounts);






    // var sentence = $("#quote").val().split(" ");
    // var newSentence = sentence.filter(function (word) {
    //   return word.length > 2;
    // });
    // console.log(newSentence);
    //
    // newSentence.reverse().join(" ");
    // console.log(newSentence);
    //

    });
});
