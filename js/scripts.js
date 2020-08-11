 $(document).ready(function() {
   $(".clickable").click(function() {
     $("#walrus-showing").toggle();
     $("#walrus-hidden").toggle();
   });
 });

$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#pig-fade-in").fadeIn ({duration: "slow", queue: false});
    $("#pig-fade-out").fadeOut ({duration: "slow", queue: true});
  });
});

 $(document).ready(function() {
   $(".clickable2").click(function() {
     $("#rhino-slideUp").slideDown ({duration: "slow", queue: false});
     $("#rhino-slideDown").slideUp({duration: "slow", queue: false});
   });
 });