//Get the button:
mybutton = document.getElementById("myBtn");
myclick = document.getElementById("my-click");
Red = document.getElementById("red");
Yellow = document.getElementById("yellow");
Blue = document.getElementById("blue");
html = document.getElementsByTagName("html");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };
// window.onclick = function() { clickFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// function clickFunction() {
//     if (document.body.click = Red){
//         html.style.display =
//     }
// }

