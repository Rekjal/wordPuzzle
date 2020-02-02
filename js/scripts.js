$(document).ready(function(){
  $('#formOne').submit(function(){
    const arr = $('#userString').val().split("");
    //console.log(arr);
    event.preventDefault();

    var finalArray = [];
arr.forEach(function(letter){
const vowels = ['a','e','i','o','u'];
  if($.inArray(letter, vowels) !== -1){
    console.log("am I here" + " " + letter);
    finalArray.push("-");
  } else{
    finalArray.push(letter);
    
  }
  
})
  console.log(finalArray);

  })




});