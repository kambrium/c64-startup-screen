// typewriter
var $element = $('.typewriter'),
    text = $element.text(),
    timeOut,
    char = 0;

$element.text('');

(function typeIt() {   
    var humanize = Math.round(Math.random() * (200 - 30)) + 30;
    timeOut = setTimeout(function() {
        char++;
        var type = text.substring(0, char);
        $element.text(type);
        typeIt();
    }, humanize);
}());

// blinking cursor
$(document).ready(function()
  {
    $('.blink').blink(delay=100);
  });