// to be open in Firefox incognito window

function run(){

  var url = [
    // JKB BMW
    "http://www.jkcbmw.co.uk/",
    "https://jkc.bmwretailerforms.co.uk/contact-us-form/?referrer=http://www.jkcbmw.co.uk/contact-us-form/",
    "https://jkc.bmwretailerforms.co.uk/book-a-test-drive",

    // JKC MINI
    "http://www.jkcmini.co.uk/",
    "http://www.jkcmini.co.uk/book-a-test-drive/",

    // Montys of Sheffield
    "http://www.montysofsheffield.com/",
    "http://www.montysofsheffield.com/dealer-info/about-us.html#contact-us",
    "http://www.montysofsheffield.com/dealer-info/about-us.html#contactus",
    "http://www.montysofsheffield.com/service-mot.html",
    
    // Sportif Motor Group
    "http://www.sportifcars.co.uk/",
    "http://www.sportifcars.co.uk/new/request-a-test-drive.html",
    "http://www.sportifcars.co.uk/service-and-parts/schedule-a-service.html",
    "http://www.sportifcars.co.uk/service-and-parts/order-parts.html",
    "http://www.sportifcars.co.uk/shopping-tools/trade-in-value.html",
    
    // Sportif Motor Group - Citroen
    "http://www.sportifcars.co.uk/citroen/",
    "http://www.sportifcars.co.uk/citroen/about-us/aylesbury.html",
    "http://www.sportifcars.co.uk/citroen/offers/offer-enquiry.html",
    "http://www.sportifcars.co.uk/citroen/about-us/request-a-brochure.html",
    
    // Sportif Motor Group - Suzuki
    "http://www.sportifcars.co.uk/suzuki/",
    "http://www.sportifcars.co.uk/suzuki/about-us/about-sportif.html#contactus",
    "http://www.sportifcars.co.uk/suzuki/shopping-tools/trade-in-value.html",
    "http://www.sportifcars.co.uk/suzuki/service-and-parts/schedule-service.html",
    "http://www.sportifcars.co.uk/suzuki/new/request-a-brochure.html",
    "http://www.sportifcars.co.uk/suzuki/used/request-a-test-drive.html",
    
    // UK hair Transplant clinic
    "http://ukhairtransplantclinics.co.uk/",
    "http://ukhairtransplantclinics.co.uk/london-hair-transplants/",
    
    // SearchOptics - UK
    "http://en.searchoptics.com/",
    "http://en.searchoptics.com/contact",
  ];

  var index = 0;

  function nextTab() {
    window.open(url[index]);
    index = (index + 1) % url.length;
  }

  nextTab();

  window.setInterval(nextTab, 10000);

};

run();