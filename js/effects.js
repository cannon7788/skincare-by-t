//Links at top
var servicesLink     = document.getElementById('services-link');
var testimonialsLink = document.getElementById('testimonials-link');
var aboutTLink       = document.getElementById('about-t-link');
var contactLink      = document.getElementById('contact-link');

//Section headers
var services     = document.getElementById('services');
var testimonials = document.getElementById('testimonials');
var aboutT       = document.getElementById('about-t');
var contact      = document.getElementById('contact');

//Smooth scroll behavior on links
servicesLink.onclick = function(){
    services.scrollIntoView({behavior: "smooth"});
    return false;
}
testimonialsLink.onclick = function(){
    testimonials.scrollIntoView({behavior: "smooth"});
    return false;
}
aboutTLink.onclick = function(){
    aboutT.scrollIntoView({behavior: "smooth"});
    return false;
}
contactLink.onclick = function(){
    contact.scrollIntoView({behavior: "smooth"});
    return false;
}