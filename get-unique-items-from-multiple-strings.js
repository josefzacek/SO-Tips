// http://bpweb.searchoptics.com/movidaseminovos.com.br/seminovos/estoque-opcionais.html

var arrayOfItems = [];                                                                                                                  // declare arrayOfItems array variable
$("#panel-custom_field_3 .option .text-wrap").each(function(){                                                                          // loop through items
  string = $(this).text().replace(/\(.*?\)/, "").replace("n/a", "").replace("N / a", "").replace("Mais...", "").replace("n / a","");    // replace things such as (50), n/a, N / a, Mais..., n / a
  fullArray = string.split(',');                                                                                                        // split items by comma and store it in fullArray variable
  $.each(fullArray, function(index, value) {                                                                                            // loop through fullArray variable
    element = $.trim(value);                                                                                                            // remove empty sdtapecs before and after element
    arrayOfItems.push(element);                                                                                                         // push element to arrayOfItems array
  });
});

var uniqueItems = [];                                                                                                                   // declare uniqueItems array    
$.each(arrayOfItems, function(index, value){                                                                                            // loop through arrayOfItems variable
  if($.inArray(value, uniqueItems) === -1) {                                                                                            // if value is not in uniqueItems array
    uniqueItems.push(value);                                                                                                            // add value to uniqueItems array
  }   
});

var itemToRemove = '';                                                                                                                  // delare item to be removed
result = $.grep(uniqueItems, function(index, value) {                                                                                   // grep(search) uniqueItems array 
  return value != itemToRemove;                                                                                                         // return only values that are not matching itemToRemove
});
