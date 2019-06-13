var array = [];
var row;
var column;
var result = "";
var creatArray = function(string) {
  string = string.split(" ");
  string = string.join('');
  string = string.split("");
  var stringLength = string.length;

  var size = Math.round(Math.sqrt(stringLength));
  if (size * size < stringLength) {
    row = size + 1;
    column = size;
  } else {
    row = size;
    column = size;
  }

  var indx = 0;
  for (var i = 0; i < row; i++) {
    tempArray = [];
    for (var j = 0; j < column; j++) {
      // var character = string[indx];
      tempArray.push(string[indx]);
      indx++;
    }
    array.push(tempArray);
  }

  return array;
}


var convertArray = function(array) {
  var stringResult;
  var countChar = 0;
  for (var indxCol = 0; indxCol < column; indxCol++) {
    for (var indxRow = 0; indxRow < row; indxRow++) {
      if (countChar < 5 && indxRow === row) {
        indxRow = 0;
        indxCol = indxCol + 1;
      } else if (countChar === 5) {
        result += " ";
        countChar = 0;
        indxRow = indxRow - 1;
      } else {
        countChar++;
        result += array[indxRow][indxCol];
      }
    }

  }
  return result;
}







$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    // debugger;
    var result1;
    var initString = $("input#numberInput").val();
    var firstArray = creatArray(initString);
    result1 = convertArray(firstArray);
    alert(result1);

    $("#outputA").text(initString);
    $("#outputB").text(result1);
    $("#output").show();

  });

});
