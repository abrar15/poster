var btnHome=document.getElementById('btnHome')
var btnMeettheauthors=document.getElementById('btnnMeettheauthors')
var btnAbout=document.getElementById('btnAbout')
var btncontact=document.getElementById('btncontact')



var homeHome =document.getElementById("home-Home")
var homeMeettheauthors =document.getElementById("home-Meettheauthors")
var homeAbout =document.getElementById("home-About")
var homecontact =document.getElementById("home-contact")


function displayHome(){
    homeHome.style.transform="translateX(0)";
    homeMeettheauthor.sstyle.transform="translateX(100%)";
    homeAbout.style.transform="translateX(100%)";
    homecontact.style.transform="translateX(100%)";


btnHome.style.color="#ff7846";
btnMeettheauthor.style.color="#000";
btnAbout.style.color="#000";
btncontact.style.color="#000";

Home.style.transitionDelay="0.5s";
Meettheauthor.style.transitionDelay="0s";
About.style.transitionDelay="0s";
contact.style.transitionDelay="0s";
}

function displayMeettheauthor(){
    homeHome.style.transform="translateX(100%)";
    homeMeettheauthor.style.transform="translateX(0)";
    homeAbout.style.transform="translateX(100%)";
    homecontact.style.transform="translateX(100%)";

btnHome.style.color="#000";
btnMeettheauthor.style.color="##ff7846";
btnAbout.style.color="#000";
btncontact.style.color="#000";

Home.style.transitionDelay="0s";
Meettheauthor.style.transitionDelay="0.5s";
About.style.transitionDelay="0s";
contact.style.transitionDelay="0s";

}

function displayAbout(){
    homeaHome.style.transform="translateX(100%)";
    homeMeettheauthor.style.transform="translateX(100%)";
    homeAbout.style.transform="translateX(0)";
    homecontact.style.transform="translateX(100%)";
    

btnHome.style.color="#000";
btnMeettheauthor.style.color="#000";
btnAbout.style.color="#ff7846";
btncontact.style.color="#000";


Home.style.transitionDelay="0s";
Meettheauthor.style.transitionDelay="0s";
About.style.transitionDelay="0.5s";
contact.style.transitionDelay="0s";

}

function displaycontact(){
    homeHome.style.transform="translateX(100%)";
    homeMeettheauthor.style.transform="translateX(100%)";
    homeAbout.style.transform="translateX(100%)";
    homecontact.style.transform="translateX(0)";
    

btnHome.style.color="#000";
btnMeettheauthor.style.color="#000";
btnAbout.style.color="#000";
btncontact.style.color="#ff7846";


Home.style.transitionDelay="0s";
Meettheauthor.style.transitionDelay="0s";
About.style.transitionDelay="0s";
contact.style.transitionDelay="0.8s";

}