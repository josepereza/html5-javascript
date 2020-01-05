function fadeIn(el){
  el.classList.add('show');
  el.classList.remove('hide');  
}

function fadeOut(el){
  el.classList.add('hide');
  el.classList.remove('show');
}

var btn = document.getElementById('btnFade'),
    img = document.getElementById('imgFade');

btn.addEventListener('click', function(){
  if (img.className.indexOf('hide') !== -1) {
    fadeIn(img);
    this.innerHTML = 'Fade Out';
  }
  else {
    fadeOut(img);
    this.innerHTML = 'Fade In';
  }
});