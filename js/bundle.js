(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

    $('.photo-album').show();
    $('.photo-catalog').hide();

    console.log('link clicked');
  });

}(jQuery));

},{}]},{},[1]);
