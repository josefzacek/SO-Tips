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
