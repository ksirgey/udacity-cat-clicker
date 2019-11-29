var elem = document.getElementById('img');
elem.addEventListener('click', function(){
  var x = parseInt(document.getElementById("clicked").innerHTML);
  x++;
  document.getElementById("clicked").innerHTML = x;
});
