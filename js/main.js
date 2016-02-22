// var unique = require('uniq');
//
// var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
//
// console.log(unique(data));


(function($){
  var pageHeader = $('.header');

  pageHeader.css({'background-color': '#bbb'});

  $('.header')
  .find('h1').addClass('bold underline')
  .end()
  .css({'border': '3px solid red'})
  .find('h1').removeClass('underline');

  $('.album-tile').not('.first').css({'border': '5px solid #bbb'});
  $('.album-tile').each(function(){
    var link = $(this);
    link.css({'text-align': 'center'});
  });


//photo album

  $('.photo-album').hide();

  $('.album-tile').click(function(event){
    event.preventDefault();

    var title = $(this).find('div').text();
    var newTitle = $('.photo-album h2');
    $newTitle.text(title);

    $('.photo-album').show();
    $('.photo-catalog').hide();

    console.log('link clicked');
  });

//same as click
  $('nav li').on('menu.click', function(event){

  });
  $().trigger('menu.click')


}(jQuery));
