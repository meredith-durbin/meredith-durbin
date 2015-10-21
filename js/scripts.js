$(document).ready(function() {
  $('nav a[href^="#"]').click(function(e) { 
    e.preventDefault();
    var el = $( e.target.getAttribute('href') );
    var hash = this.hash;
    var navHeight = $('nav').height();
    var elOffset = el.offset().top;
    var elHeight = el.height();
    var windowHeight = $(window).height();
    var offset;

    if (elHeight < windowHeight) {
      offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
    }
    else {
      offset = elOffset - navHeight;
    }
    var speed = 700;
    $('html, body').animate({scrollTop:offset}, speed, function (){
              location.hash = hash;
          });
    return false;
  });
});

// Cache selectors
var lastId,
    topMenu = $(".navbar-nav"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    }),
    noScrollAction = false;

$(document).ready(function () {
    var hash = location.hash;
    if (hash !== '') {
        $(window).trigger('hashchange');
    }
    else {
      $("a[href='#home']").parent().addClass("active");
    }
});

$(window).on('hashchange', function() {
    var hash = window.location.hash;
    $('.navbar-nav li').removeClass("active");
    $("a[href='" + hash + "']").parent().addClass("active");
});

// Highlight each nav item as you scroll past
$(window).scroll(function(){
  if(!noScrollAction){
    var windowHeight = $(window).height();
    var navHeight = $('nav').height();
    var fromTop = $(this).scrollTop() + windowHeight / 1.75;
    var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop - $(this).outerHeight() / 2.)
       return this;
    });
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
     }
   }    
});

function setToggle() {
  $("#portfolio-click").click(function() {
    if ($("#portfolio-click").text() == "Show portfolio") {
      $("#portfolio-click").text("Hide portfolio");
      $("#portfolio").show();
    }
    else {
      $("#portfolio-click").text("Show portfolio");
      $("#portfolio").hide();   
    }
  });
};

function evalToggle() {
    if ($(window).width() < 480) {
        setToggle(); }
    else {
        $("#portfolio").show(); }
};
$(window).resize(evalToggle);
evalToggle();
