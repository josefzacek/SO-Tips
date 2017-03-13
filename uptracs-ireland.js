// to be open in Firefox incognito window

function run(){

  var url = [
    // Colton Motors mazda
//    "http://www.coltonmazda.ie/contentv3/",
//    "http://www.coltonmazda.ie/dealers/index.cfm?fuseaction=mazdadealer.map",
//    "http://www.coltonmazda.ie/web/book-service",
//    "http://www.coltonmazda.ie/web/test-drive",
//    "http://www.coltonmazda.ie/web/request-callback",
    
    // Coltons Motors
//    "http://www.coltonmotorsford.ie/",
//    "http://www.coltonmotorsford.ie/BranchLocation/1031/contact-your-local-ford-dealer-colton-motors-in-the-midlands?of=/Contact/BookTestDrive",
    
    // Colton Seat
//    "http://www.colton-seat.ie/",
//    "http://www.seat.ie/webform/test-drive.html",
//    "http://www.seat.ie/webform/contact-us.html",
//    "http://www.seat.ie/shopping-tools/finance-calculator.html",

    // Frank Keane
    "http://www.frankkeane.ie/contentv3/",
    "http://www.frankkeane.ie/contentv3/index.cfm?fuseaction=page&pageID=23216",
    "http://www.frankkeane.ie/contentv3/index.cfm?fuseaction=page&pageID=23240&parentID=23238",
    "http://www.frankkeane.ie/contentv3/index.cfm?fuseaction=page&pageID=23237&parentID=23216",
    "http://www.frankkeane.ie/contentv3/index.cfm?fuseaction=page&pageID=23239&parentID=23238",

    // Frank Keane - Blackrock BMW
    "http://blackrock.frankkeanebmw.ie/contentv3/",
    "http://blackrock.frankkeanebmw.ie/web/contact-us/",
    "http://blackrock.frankkeanebmw.ie/web/request-a-service/",
    "http://blackrock.frankkeanebmw.ie/web/order-bmw-parts-/",
    "http://blackrock.frankkeanebmw.ie/web/contact-us/",

    // Frank Keane - Naas Road BMW
    "http://naasroad.frankkeanebmw.ie/web/contact-us/",

    // Kearys - BMW
    "http://www.kearysbmw.ie/contentv3/",
    "http://www.kearysbmw.ie/web/contact-us/",
    "http://www.kearysbmw.ie/index.cfm?fuseaction=serviceform",

    // Kearys 
    "http://www.kearys.ie/",
    "http://www.kearys.ie/web/contact/",
    "http://www.kearys.ie/web/book-a-service",
    "http://www.kearys.ie/web/bmw-service",
    "http://www.kearys.ie/web/dacia-service",
    "http://www.kearys.ie/web/hyundai-service",
    "http://www.kearys.ie/web/mini-service",
    "http://www.kearys.ie/web/motorrad-service",
    "http://www.kearys.ie/web/renault-service",
    "http://www.kearys.ie/web/nissan-service",
    "http://www.kearys.ie/web/lexus-service",
    "http://www.kearys.ie/web/toyota-service",
    "http://www.kearys.ie/finance/",
    "http://www.kearys.ie/web/pcp-car-finance/",
    "http://www.kearys.ie/web/BMW-Corporate-Sales",
    "http://www.kearys.ie/usedcars/",
    "http://www.kearys.ie/web/electric-vehicles",
    "http://www.kearys.ie/web/bmw-finance",
    "http://www.kearys.ie/web/bmw-finance",
    "http://www.kearys.ie/web/dacia-finance",
    "http://www.kearys.ie/web/hyundai-finance",
    "http://www.kearys.ie/web/mini-service",
    "http://www.kearys.ie/web/motorrad-finance",
    "http://www.kearys.ie/web/renault-finance",
    "http://www.kearys.ie/web/nissan-finance",
    "http://www.kearys.ie/web/business-centre",
    "http://www.kearys.ie/new-cars",
    "http://www.kearys.ie/usedcars/index.cfm?fuseaction=search&categoryID=2",
    "http://www.kearys.ie/web/dealerships/",

    // SearchOptics - Ireland
    "http://en.searchoptics.com/contact",
    
    // hello.yuko.ie
    "http://hello.yuko.ie/50drivingcredit/",
    "http://hello.yuko.ie/thankyou/",
    
  ];

  var index = 0;

  function nextTab() {
    window.open(url[index]);
    index = (index + 1) % url.length;
  }

  nextTab();

  window.setInterval(nextTab, 10000);

};

run()



