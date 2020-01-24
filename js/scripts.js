

//Front-end Logic

var vowels = ("a","e","i","o","u")
var consonants = ("b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z")
var arr1 = []

//Back-end

$(document).ready(function() {
  $("form#pigLatinForm").submit(function (event) {
    event.preventDefault();
    sentence = ($("input#pigLatin").val()).split(" ");
    for (i=0; arr1.length -1; i++)
      if (i = vowels){
        $("#result").append("way")
      }
    console.log("works");
    console.log(sentence);
  }); 
});
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