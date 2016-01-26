var swatchColors = [];
var paintColor;


//change color of an object to paintColor var
function changeColor(changeIt) {
  $(changeIt).css("background-color", paintColor);
}


//change color of swatch boxes
function changeSwatch() {
  paintColor = $("#color-field").val();
  if (swatchColors.length===3) {
    swatchColors.pop();
  }
  swatchColors.unshift(paintColor);
  console.log(swatchColors);
  for (i=0; i<=swatchColors.length; i++) {
    var identifier="#swatch-"+i;
    $(identifier).css("background-color", swatchColors[i]);
  }
}



$(document).ready(function() {

  console.log (swatchColors);

  // create paintbox
  for (i=1; i<=8000; i++) {
    $('body').append("<div class='square'></div>");
  }

  //get new color input
  $('#set-color').on('click', function() {
     changeSwatch();
  })
  $('#color-field').on('keypress', function(e){
      if(e.keyCode==13){
          changeSwatch();
      }
  })

  //change paint color from swatch
  $('.brush').on('click', function() {
     paintColor = $(this).css("background-color");
  })

  //paint
  $('.square').on('mouseover', function() {
     changeColor(this);
  })

})
