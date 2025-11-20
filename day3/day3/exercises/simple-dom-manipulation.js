//Create an HTML file with:

// A heading (h1)

// A paragraph (p)

// A button (button)

// Write JavaScript to:

// Change the heading text on button click

// Change the paragraph color on hover

// Hide the paragraph when clicked

const btn = document.getElementById("clickMe");
btn.addEventListener("click", () => {
    let title = document.getElementById("title")
    title.textContent = "You clicked me!";
    title.style.color= "red";
    title.style.fontSize= "60px"


 });

 const paragraph = document.getElementById("paragraph");
 paragraph.onmouseover = () => {
    paragraph.style.color = "pink"
 }
 paragraph.onclick = () => {
    paragraph.hidden= true
    paragraph.syle.opacity = 0 //either one works 
 }
