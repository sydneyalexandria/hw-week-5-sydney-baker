$( document ).ready(function() {
  // Great job using $(document).ready!

  $('.readmore').click(function() {
    if ( $( '#show-this-on-click' ).is( ":hidden" ) ) {
      // Whoa--you're already trying if/else statements! AWESOME!! I love it. You probably don't even need them in this case, since you have two different elements that you're selecting and they're each doing different things, you can have the .readmore click event perform the slideDown, hide and show.  You don't even need the else statement in this case!

      $( '#show-this-on-click' ).slideDown( "slow" );
      $('.readmore').hide();
      $('.readless').show();
    } else {
      $( '#show-this-on-click' ).hide();
    }

    event.preventDefault();
  });

  // The reason your page goes to the top when you click on any of the links is because the default action for a link is to return to the top of the page (or go to another page). To prevent this from happening, just add the line event.preventDefault() and it will prevent that from happening! I added it in for you.

  $('.readless').click(function() {
    if ( $( '#show-this-on-click' ).is( ":visible" ) ) {
      $( '#show-this-on-click' ).slideUp( 'slow' );
      $('.readless').delay(500).hide(0);
      $('.readmore').delay(500).show(0);
    } else {
      $( '#show-this-on-click' ).show();
    }

    event.preventDefault();
  });

  $('.learnmore').click(function() {
    if ( $( '#learnmoretext' ).is( ":hidden" ) ) {
      $( '#learnmoretext' ).slideDown( 'slow' );
      $('.learnmore').hide();
    } else {
      $( '#learnmoretext' ).hide();
    }

    event.preventDefault();
  });

  // Next time, maybe give named functions and callback a shot! I personally prefer them; I think it keeps your code a bit cleaner and gives you the ability to reuse functions in other places on your page.

});
