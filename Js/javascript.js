const txtElement = ['Mahasiswa Binus university', 'Jurusan Sistem Informasi'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){
    if(count == txtElement.length){
      count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.typed-auto').textContent = words;

    if(words.length == currentTxt.length){
      count ++;
      txtIndex = 0;
    }

    setTimeout(ngetik, 500);

})();

 const backToTopButton = document.querySelector("#backToTop");

 window.addEventListener("scroll", scrollFunction);

 function scrollFunction(){
   if(window.pageYOffset > 300){
     backToTopButton.style.display ="block";
   }
   else {
     backToTopButton.style.display ="none";
   }
 }

 backToTopButton.addEventListener("click", backToTop);

 function backToTop(){
   window.scroll(0,0);
 }

