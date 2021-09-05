var slideIndex = 1;
showSlidesas(slideIndex);
showSlidesyt(slideIndex);
showSlidespn(slideIndex);
showSlidesgt(slideIndex);

function plusSlides(n) {
  showSlidesas(slideIndex += n);
  showSlidesyt(slideIndex += n);
  showSlidespn(slideIndex += n);
  showSlidesgt(slideIndex += n);
}

function currentSlide(n) {
  showSlidesas(slideIndex = n);
  showSlidesyt(slideIndex = n);
  showSlidespn(slideIndex = n);
  showSlidesgt(slideIndex = n);
}

////////////////////////////////////artist statement

function showSlidesas(n) {
  var i;
  var slidesas = document.getElementsByClassName("mySlidesas");
  if (n > slidesas.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slidesas.length}
  for (i = 0; i < slidesas.length; i++) {
      slidesas[i].style.display = "none";
  }
  slidesas[slideIndex-1].style.display = "block";
}

//////////////////////////////////////yamaori taniori

function showSlidesyt(n) {
  var i;
  var slidesyt = document.getElementsByClassName("mySlidesyt");
  if (n > slidesyt.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slidesyt.length}
  for (i = 0; i < slidesyt.length; i++) {
      slidesyt[i].style.display = "none";
  }
  slidesyt[slideIndex-1].style.display = "block";
}

////////////////////////////////////phone number
function showSlidespn(n) {
  var i;
  var slidespn = document.getElementsByClassName("mySlidespn");
  if (n > slidespn.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slidespn.length}
  for (i = 0; i < slidespn.length; i++) {
      slidespn[i].style.display = "none";
  }
  slidespn[slideIndex-1].style.display = "block";
}

////////////////////////////////////greeking tree
function showSlidesgt(n) {
  var i;
  var slidesgt = document.getElementsByClassName("mySlidesgt");
  if (n > slidesgt.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slidesgt.length}
  for (i = 0; i < slidesgt.length; i++) {
      slidesgt[i].style.display = "none";
  }
  slidesgt[slideIndex-1].style.display = "block";
}
