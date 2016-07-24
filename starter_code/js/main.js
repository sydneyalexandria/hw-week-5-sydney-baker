$( document ).ready(function() {

  $('.readmore').click(function() {
    if ( $( '#show-this-on-click' ).is( ":hidden" ) ) {
      $( '#show-this-on-click' ).slideDown( "slow" );
      $('.readmore').hide();
      $('.readless').show();
    } else {
      $( '#show-this-on-click' ).hide();
    }
  });

  $('.readless').click(function() {
    if ( $( '#show-this-on-click' ).is( ":visible" ) ) {
      $( '#show-this-on-click' ).slideUp( 'slow' );
      $('.readless').delay(500).hide(0);
      $('.readmore').delay(500).show(0);
    } else {
      $( '#show-this-on-click' ).show();
    }
  });

  $('.learnmore').click(function() {
    if ( $( '#learnmoretext' ).is( ":hidden" ) ) {
      $( '#learnmoretext' ).slideDown( 'slow' );
      $('.learnmore').hide();
    } else {
      $( '#learnmoretext' ).hide();
    }
  });

   });
