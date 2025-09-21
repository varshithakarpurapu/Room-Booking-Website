const images = ["assets/header.jpg", "assets/ayodhya.webp","assets/baranti.webp","assets/bg5.jpg"];
let i = 0;

function home() {
    const homeBody = document.getElementById("home-body");
    homeBody.style.backgroundImage = `url(${images[i]})`;
    i = (i + 1) % images.length; // Cycle through the images
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(home, 2500); // Change image every 1.5 seconds
    home(); // Initial call to set the first image
});


const sr = ScrollReveal({
    distance:'80px',
    duartion:3000,
    delay:800,
    reset:true
})

sr.reveal('.para1', { 
    delay: 200, 
    origin: 'top' 
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.innerWidth < 760) {
        document.getElementById("mynav").style.background = "none";
        document.querySelectorAll(".nav-data").forEach(el => el.style.color = "white");
    } else {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            document.getElementById("mynav").style.background = "white";
            document.querySelectorAll(".nav-data").forEach(el => el.style.color = "black");
        } else {
            document.getElementById("mynav").style.background = "none";
            document.querySelectorAll(".nav-data").forEach(el => el.style.color = "white");
        }
    }
}

// Trigger the function to set the initial state
scrollFunction();




  // Function to handle WhatsApp redirection
  function redirectToWhatsApp(phoneNumber, message) {
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.location.href = whatsappUrl;
  }

  // Add event listeners to all buttons with the class 'whatsappButton'
  var buttons = document.querySelectorAll('#whatsappButton');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var phoneNumber = "9007062180"; // Add the full phone number with country code
        var message = "Hello, I'd like to chat!";
        redirectToWhatsApp(phoneNumber, message);
    });
  });
sr.reveal('.home-para h1',{delay:400,origin:'bottom',easing:'ease'});
sr.reveal('.home-para button',{delay:600,origin:'bottom',easing:'ease'});
sr.reveal('.about-img',{delay:200,origin:'left',easing:'ease'});
sr.reveal('.about-head',{delay:400,origin:'right',easing:'ease'});
sr.reveal('.holiday',{delay:600,origin:'bottom',easing:'ease'});
sr.reveal('.about-para p',{delay:800,origin:'bottom',easing:'ease'});
sr.reveal('.card1',{delay:200,origin:'bottom',easing:'ease'});
sr.reveal('.card2',{delay:400,origin:'bottom',easing:'ease'});
sr.reveal('.card3',{delay:600,origin:'bottom',easing:'ease'});
sr.reveal('#icon1',{delay:200,origin:'right',easing:'ease'});
sr.reveal('#icon2',{delay:400,origin:'right',easing:'ease'});
sr.reveal('#icon3',{delay:600,origin:'right',easing:'ease'});
sr.reveal('#icon4',{delay:800,origin:'right',easing:'ease'});
sr.reveal('#icon5',{delay:200,origin:'left',easing:'ease'});
sr.reveal('#icon6',{delay:400,origin:'left',easing:'ease'});
sr.reveal('#icon7',{delay:600,origin:'left',easing:'ease'});
sr.reveal('#icon8',{delay:800,origin:'left',easing:'ease'});
sr.reveal('.contact-info',{delay:200,origin:'left',easing:'ease'});
sr.reveal('.contact-form',{delay:200,origin:'right',easing:'ease'});
sr.reveal('.about-address',{delay:900,origin:'right',easing:'ease'});
