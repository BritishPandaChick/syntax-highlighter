$(document).ready(function(){
  var c = $("#highlight").val(); //raw code
  //regex time
  //highlighting special characters /, *, + are escaped using a blackslash
  //'g' = global modifier = to replace all occurances of the match
  //$1 = backreference to the part of the match inside the brackets (...)
  c = c.replace(/(=|%|\/|\*|-|,|;|\+|<|>)/g, "<span class=\"sc\">$1</span>");

  //strings - text inside single quotes and backticks
  c = c.replace(/(['`].*?['`])/g, "<span class=\"string\">$1</span>");

  //numbers - same color as strings
  c = c.replace(/(\d+)/g, "<span class=\"string\">$1</span>");

  //functions - any string followed by an '('
  c = c.replace(/(\w*?)\(/g, "<span class=\"function\">$1</span>(");

  //brackets - say as special chars
  c = c.replace(/([\(\)])/g, "<span class=\"sc\">$1</span>");

  //reserved mysql keywords

  $("#layer").html(c); //injecting the code into the pre tag
});
