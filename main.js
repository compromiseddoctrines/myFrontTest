// Function to search with 00000

function onCitySelect() {

    var myUL = document.getElementById("city-zip-hidden");
    myUL.style.display = "block";
    
    if(document.getElementById("zip-code-input").value.length == 0)
    {
        myUL.style.display = "none";
    }
    
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("zip-code-input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("city-zip-hidden");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {

        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Get the value of city input and display

function getCity(clicked_id){
    var myUL = document.getElementById("city-zip-hidden");
    myUL.style.display = "none";

    var displayInput = document.getElementById("zip-code-input");
    displayInput.value = clicked_id;
}

// Global Modal Functionality

(function() {

    function openModal() {

        var modalTrigger = document.getElementsByClassName('jsModalTrigger');
  
        for(var i = 0; i < modalTrigger.length; i++) {
            modalTrigger[i].onclick = function() {
              var target = this.getAttribute('href').substr(1);
              var modalWindow = document.getElementById(target);
  
              modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open'; 
            }
        }   
    }
  
    function closeModal(){

      var closeButton = document.getElementsByClassName('jsModalClose');
      var closeOverlay = document.getElementsByClassName('jsOverlay');
  
        for(var i = 0; i < closeButton.length; i++) {
          closeButton[i].onclick = function() {
            var modalWindow = this.parentNode.parentNode;
  
            modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
          }
        }   
  
        for(var i = 0; i < closeOverlay.length; i++) {
          closeOverlay[i].onclick = function() {
            var modalWindow = this.parentNode;
  
            modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
          }
        }  
  
    }
  
    function ready(fn) {
      if (document.readyState != 'loading'){
        fn();
      } else {
        document.addEventListener('DOMContentLoaded', fn);
      }
    }
  
    ready(openModal);
    ready(closeModal);
  }());