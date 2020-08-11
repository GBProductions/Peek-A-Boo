 $(document).ready(function() {
   $(".clickable").click(function() {
     $("#walrus-showing").toggle();
     $("#walrus-hidden").toggle();
   });
 });

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#pig-fade-in").fadeIn ({duration: "slow", queue: false});
    $("#pig-fade-out").fadeOut ({duration: "slow", queue: false});
  });
});

 $(document).ready(function() {
   $(".clickable").click(function() {
     $("#rhino-slideUp").toggle(duration: "fast");
     $("#rhino-slideDown").toggle(duration:"fast");
   });
 });