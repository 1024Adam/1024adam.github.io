function showDiv(name)
{
  var divs = ["home", "about", "coop", "coopgoals", "coopconc", "uog", "uoggoals", "uogconc", "brock", "brockgoals", "brockconc", "acknowledgments", "contact"]; 
 
  for (var i = 0; i < divs.length; i++) {
    if(name === divs[i])
    {
      $("#" + divs[i]).fadeIn();
      if(i >=2 && i <= 4)
      {
        $("#list-" + divs[2]).addClass("active");
      }
      else if(i >= 5 && i <= 7)
      {
        $("#list-" + divs[5]).addClass("active");
      }
      else if(i >= 8 && i <= 10)
      {
        $("#list-" + divs[8]).addClass("active");
      }
      else
      {
        $("#list-" + divs[i]).addClass("active");
      }
    }
    else
    { 
      $("#" + divs[i]).hide();
      $("#list-" + divs[i]).removeClass("active");
    }
  }
}

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
