let slideIndex = 1;
show(slideIndex);

function slideShow(n){
  show(slideIndex += n);
}

function goOn(n) {
  show(slideIndex =n);
}

function show(n){ 
  let i;
  let slides = document.getElementsByClassName("blocks");
  let dots = document.getElementsByClassName("demo")
  if (n> slides.length){slideIndex = 1}
  if(n < 1) {slideIndex = slides.length}
  for (i=0; i < slides.length; i++){slides[i].style.display ="none"}

for (i = 0; i < dots.length; i++){
  dots[i].className = dots[i].className.replace("active", "")
  slides[slideIndex - 1].style.display ="block";
  dots[slideIndex-1].className += "active";
}
}