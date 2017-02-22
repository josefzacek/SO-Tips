// to be open in Firefox incognito window

function run(){

  var url = [
    
    // Blackstone Motors
    
    "https://www.blackstonemotors.ie/",
    "https://www.blackstonemotors.ie/contact/",
    "https://www.blackstonemotors.ie/services/book-a-service-online/",
    
    
    // H & H Motors
    "http://www.handhmotors.ie/",
    "http://www.handhmotors.ie/contact-us/",
    "http://www.handhmotors.ie/book-a-test-drive/",
    "http://www.handhmotors.ie/book-a-service/",
    "http://www.handhmotors.ie/request-a-brochure/",

    // JJ Burke Car Sales
    "http://www.jjburkecarsales.com/contentv3/",
    "http://www.jjburkecarsales.com/web/contact-us/",
    "http://www.jjburkecarsales.com/finance/index.cfm?fuseaction=applicationfrm&netamount=0",
    "http://www.jjburkecarsales.com/web/book-a-service/",

    // JJ Burke Car Sales - Dacia
    "http://dacia.jjburkecarsales.com/contentv3/",
    "http://dacia.jjburkecarsales.com/web/about-dacia/",
    "http://dacia.jjburkecarsales.com/web/contact/",

    // Obriens Kilkenny
    "http://obrienskilkenny.ie/",
    "http://obrienskilkenny.ie/contact-us/",
    "http://obrienskilkenny.ie/book-a-test-drive/",
    "http://obrienskilkenny.ie/request-a-brochure/",
    "http://obrienskilkenny.ie/book-a-service/"
    
    // Tullamore motors
    "http://www.tullamoremotors.ie/contentv3/";
    "http://www.tullamoremotors.ie/web/contact/";
    "http://www.tullamoremotors.ie/web/bookservice/";
    "http://www.tullamoremotors.ie/web/car-hire/";
    "http://www.tullamoremotors.ie/finance/";
    "http://www.tullamoremotors.ie/web/service/";
    "http://www.tullamoremotors.ie/web/book-a-test-drive/";
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



