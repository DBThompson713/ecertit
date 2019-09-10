//jQuery Smooth auto-scroll

$(".navbar li a").click(function(event) {
  var target;
  var navOffset = 60;
  target = this.hash;
  event.preventDefault();
  return $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top - navOffset
    },
    500,
    function() {
      return window.history.pushState(null, null, target);
    }
  );
});
