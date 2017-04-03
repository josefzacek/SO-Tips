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
    "http://obrienskilkenny.ie/book-a-service/",
    
    // Tullamore motors
    "http://www.tullamoremotors.ie/contentv3/",
    "http://www.tullamoremotors.ie/web/contact/",
    "http://www.tullamoremotors.ie/web/bookservice/",
    "http://www.tullamoremotors.ie/web/car-hire/",
    "http://www.tullamoremotors.ie/finance/",
    "http://www.tullamoremotors.ie/web/service/",
    "http://www.tullamoremotors.ie/web/book-a-test-drive/",
    
    // Bradley renault
    "http://www.bradleyrenault.ie/",
    "http://www.bradleyrenault.ie/contactus.php",
    "http://www.bradleyrenault.ie/finance.php",
    "http://www.bradleyrenault.ie/servicing.php",
    "http://www.bradleyrenault.ie/promotions.php",
    "http://www.bradleydacia.ie/",
    
    // Pobrien
    "http://www.pobrien.ie/contentv3/",
    "http://www.pobrien.ie/web/contact/",
    "http://www.pobrien.ie/finance/",
    "http://www.pobrien.ie/web/service/",
    "http://www.pobrien.ie/web/car-hire/",
    "http://www.pobrien.ie/web/request-call-back/",
    "http://www.pobrien.ie/web/bookservice/",
    "http://www.pobrien.ie/web/book-a-test-drive/",
    "http://www.pobrien.ie/web/trade-in/",
    
    // Dennehy Motors
    "http://www.dennehymotors.ie/contentv3/",
    "http://www.dennehymotors.ie/web/contact-us/",
    "http://www.dennehymotors.ie/web/financeapplication/",
    "http://www.dennehymotors.ie/web/bookservice/",
    "http://www.dennehymotors.ie/web/book-adoetestcvrt/",
    "http://www.dennehymotors.ie/web/winter-service-offer/",
    "http://www.dennehymotors.ie/web/request-brochure/",
    "http://www.dennehymotors.ie/web/book-testdrive/",
    "http://www.dennehymotors.ie/web/requestparts",
    
    // Hogan Motors Ennis
    "http://www.hoganmotorsennis.ie/contentv3/",
    "http://www.hoganmotorsennis.ie/web/contact-us/",
    "http://www.hoganmotorsennis.ie/web/new-cars/",
    "http://www.hoganmotorsennis.ie/usedcars/",
    "http://www.hoganmotorsennis.ie/finance/",
    "http://www.hoganmotorsennis.ie/web/service-and-parts/",
    "http://www.hoganmotorsennis.ie/web/request-a-brochure",
    "http://www.hoganmotorsennis.ie/web/test-drive",
    "http://www.hoganmotorsennis.ie/web/request-a-service",
    "http://www.hoganmotorsennis.ie/web/request-call-back",
    "http://www.hoganmotorsennis.ie/contentv3/index.cfm?fuseaction=page&pageID=35603",
    
    // Joe Mallon Portaloise
    "http://www.joemallonportlaoise.ie/contentv3/",
    "http://www.joemallonportlaoise.ie/web/contact/",
    "http://www.joemallonportlaoise.ie/web/request-call-back/",
    "http://www.joemallonportlaoise.ie/web/book-a-test-drive/",
    "http://www.joemallonportlaoise.ie/web/bookservice/",
    "http://www.joemallonportlaoise.ie/finance/index.cfm?fuseaction=applicationfrm&NetAmount=0",
    "http://www.joemallonportlaoise.ie/web/brochure/",
    "http://www.joemallonportlaoise.ie/web/trade-in/",
    
    // Clearymotors
    "http://clearymotors.ie/",
    "http://clearymotors.ie/book-a-test-drive/",
    "http://clearymotors.ie/request-a-brochure/",
    "http://clearymotors.ie/book-a-service/",
    "http://clearymotors.ie/contact-us/",
    
    // Donagh Hickey Motors
    "http://donaghhickeymotors.com/",
    "http://donaghhickeymotors.com/contact-us/",
    "http://donaghhickeymotors.com/book-a-test-drive/",
    "http://donaghhickeymotors.com/book-a-service/",
    "http://donaghhickeymotors.com/request-a-brochure/",
    
    // P & H Doyle
    "http://phdoyle.com/",
    "http://phdoyle.com/contact-us/",
    "http://phdoyle.com/book-a-test-drive/",
    "http://phdoyle.com/book-a-service/",
    "http://phdoyle.com/request-a-brochure/",
    
    // Sean White Car Sales
    "http://www.seanwhitecarsales.ie/",
    "http://www.seanwhitecarsales.ie/contactus.php",
    "http://www.seanwhitecarsales.ie/parts.php",
    "https://www.dacia.ie/vehicles/dacia-range.html",
    "https://www.renault.ie/vehicles/new-vehicles.html",
    
    // Joe Mallon Motors
    "http://www.joemallonmotors.ie/contentv3/",
    "http://www.joemallonmotors.ie/web/contact/",
    "http://www.joemallonmotors.ie/web/request-call-back/",
    "http://www.joemallonmotors.ie/web/book-a-test-drive/",
    "http://www.joemallonmotors.ie/web/bookservice/",
    "http://www.joemallonmotors.ie/web/trade-in/",
    "http://www.joemallonmotors.ie/web/brochure/",
    "http://www.joemallonmotors.ie/finance/index.cfm?fuseaction=applicationfrm&NetAmount=0",
    "http://www.joemallonmotors.ie/web/service/",
    
    // Highland Motors
    "http://www.highlandrenault.com/home/",
    "http://www.highlandrenault.com/contact-us/",
    "http://www.highlandrenault.com/home/",
    "http://www.highlandrenault.com/home/",
    "http://dacia.highlandmotors.ie/",
    "http://www.highlandrenault.com/home/",
  ];

  var index = 0;

  function nextTab() {
    window.open(url[index]);
    index = (index + 1) % url.length;
    console.info(url[index]);
  }

  nextTab();

  window.setInterval(nextTab, 10000);

};

run();



