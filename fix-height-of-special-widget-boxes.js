/* fix height of special widget */
$(document).ajaxSuccess(function(){
  //find max heights
  var titleHeight = 0;
  var imageHeight = 0;
  var descHeight = 0;
  
  $('.special img').load(function() {

    $('.special').each(function(){
      var elem = $(this);
      var elemTitleHeight = elem.find('.title').attr('style','').height();
      var elemImageHeight = elem.find('.image').attr('style','').height();
      var elemDescHeight = elem.find('.description').attr('style','').height();

      if (elemTitleHeight > titleHeight) {
          titleHeight = elemTitleHeight;
      }

      if (elemImageHeight > imageHeight) {
          imageHeight = elemImageHeight;
      }

      if (elemDescHeight > descHeight) {
          descHeight = elemDescHeight;
      }

    });

    //set the heights
    $('.special').each(function(){
      var elem = $(this);
      elem.find('.title').height(titleHeight);
      elem.find('.image').height(imageHeight);
      elem.find('.description').height(descHeight);
    });
  
   });
    
});