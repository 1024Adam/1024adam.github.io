var divs = ["#home", "#about", "#coop", "#coopgoals", "#coopconc", "#uog", "#uoggoals", "#uogconc", "#brock", "#brockgoals", "#brockconc", "#acknowledgments", "#contact"]; 

function showDiv(name)
{
  for (i = 0; i < divs.length; i++) {
    if("#" + name === divs[i])
    {
      $(divs[i]).show("slow");
    }
    else
    { 
      $(divs[i]).hide();
    }
  }
}

$(document).ready(function() {
  showDiv("home");
});

$("#menu-adam").click(function() {
  showDiv("home");
});

$("#menu-home").click(function() {
  showDiv("home");
});

$("#menu-about").click(function() {
  showDiv("about");
});

$("#menu-coop").click(function() {
  showDiv("coop");
});

$("#menu-coopgoals").click(function() {
  showDiv("coopgoals");
});

$("#menu-coopconc").click(function() {
  showDiv("coopconc");
});

$("#menu-uog").click(function() {
  showDiv("uog");
});

$("#menu-uoggoals").click(function() {
  showDiv("uoggoals");
});

$("#menu-uogconc").click(function() {
  showDiv("uogconc");
});

$("#menu-brock").click(function() {
  showDiv("brock");
});

$("#menu-brockgoals").click(function() {
  showDiv("brockgoals");
});

$("#menu-brockconc").click(function() {
  showDiv("brockconc");
});

$("#menu-acknowledgments").click(function() {
  showDiv("acknowledgments");
});

$("#menu-contact").click(function() {
  showDiv("contact");
});
