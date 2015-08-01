 
//for smooth scrolling
 $(document).ready(function() {
       $('#scroll').localScroll({duration:1000});
       $(".button-collapse").sideNav();
       $('.parallax').parallax();
       $('.materialboxed').materialbox();



       });

 //initializing navbar
$( "#team" ).click(function() {
  $( "#book" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});