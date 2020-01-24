

//Front-end Logic

var vowel = function(sentence) {
  if ((sentence.charAt(0) === "a") || (sentence.charAt(0) === "e") || (sentence.charAt(0) === "i") || (sentence.charAt(0) === "o") || (sentence.charAt(0) === "u")) {
    alert("yay")
}

//Back-end

$(document).ready(function() {
  $("form#pigLatinForm").submit(function (event) {
    event.preventDefault();
    sentence = ($("input#pigLatin").val()).split;
    console.log("works");
  }); 
});
};
  //     var firstCharacter = sentence.charAt(0);
  //     var lastCharacter = sentence[sentence.length-1];
  //     alert(firstCharacter.toUpperCase() + lastCharacter.toUpperCase());
  //     var sum1 = firstCharacter.toUpperCase() + lastCharacter.toUpperCase();
  //     function reverseString(str) {
  //     return str.split("").reverse("").join("");
  // }
  // var sum2 = reverseString(sum1);
  // alert(sum2)

  // var sum3 = sentence + sum2
  // alert(sum3)
  // var sum4 = sentence.charAt(sentence.length/2);
  // var sum5 = sum4 + sum3
  // alert(sum5)
  // function reverseString(str) {
  //     return str.split("").reverse("").join("");
  // }
  // alert(reverseString(sum5))

  // $("#readout").html(reverseString(sum5))