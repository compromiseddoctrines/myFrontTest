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