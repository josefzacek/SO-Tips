// declare empty arrays
var firstFour = [];
var secondFour = [];
var thirdFour = [];
// declare imageAlt variable
var imageAlt = ''

// get first carousel as source code shows 3
var firstCarousel = $(".carousel-wrap").first();

// loop through images and store them in arrays by 4
$(firstCarousel).find(".carousel > .carousel-inner > .item > img.img-responsive").each(function(index){
  var imageSource = $(this).attr("src"); // get image source
  imageAlt = $(this).attr("alt"); // get alt text
  if (index < 4){
    firstFour.push(imageSource);
  }
  if (index >= 4 && index < 8) {
    secondFour.push(imageSource);
  }
  if (index >= 8 && index < 12) {
    thirdFour.push(imageSource);  
  }
})

// print arrays
// console.log(firstFour);
// console.log(secondFour);
// console.log(thirdFour);

console.log('---')
$(firstFour).each(function(index, value){
  console.log("<img src='" + value + "' alt='" + imageAlt + "'>")
})

console.log('---')
$(secondFour).each(function(index, value){
  console.log("<img src='" + value + "' alt='" + imageAlt + "'>")
})

console.log('---')
$(thirdFour).each(function(index, value){
  console.log("<img src='" + value + "' alt='" + imageAlt + "'>")
})
