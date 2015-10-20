function derp() {
  var windowHeight = $(window).height();
  $('.section-container.transparent').each( function() {
    var sectHeight = $(this).children("section").outerHeight();
    var sectTop = $(this).find("section").position().top;
    if (sectHeight < windowHeight) {
      $(this).css('margin-top', -1.0 * sectTop - 2.);
      $(this).css('margin-bottom', -1.0 * sectTop - 2.);
    }
    else {
      $(this).css('height', 'auto');
      $(this).css('overflow', 'visible');
      $(this).css('margin-bottom', 1.0 * sectTop - 2.);
    };
  });
};

derp();

$(window).resize(function() {
  derp();
});

$(window).on('hashchange', function() {
    var hash = window.location.hash;
    $('.navbar-nav li').removeClass("active");
    $("a[href='" + hash + "']").parent().addClass("active");
});

$(document).ready(function () {
    var hash = location.hash;
    if (hash !== '') {
        $(window).trigger('hashchange');
    }
    else {
      $("a[href='#home']").parent().addClass("active");
    }
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

// foofy scrolling
var $root = $('html, body');
$('a[href*=#]').click(function(e) {
    e.preventDefault();
    var windowHeight = $(window).height();
    var href = $.attr(this, 'href');
    var elHeight = $(href).outerHeight();
    $root.animate({
        scrollTop: $(href).offset().top + elHeight / 2. - windowHeight / 2.
    }, 500, function () {
        window.location.hash = href;
    });
});

// Highlight each nav item as you scroll past
$(window).scroll(function(){
   if(!noScrollAction){
       var windowHeight = $(window).height();
       var fromTop = $(this).scrollTop() + windowHeight / 2. + 55;
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
