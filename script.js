// create modals for images on artwork page
document.addEventListener("DOMContentLoaded", function(){
    const images = document.querySelectorAll(".card img");

    images.forEach((img, index) => {
        // create image modal container
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.setAttribute("id", `modal-${index}`);

        // create modal content
        modal.innerHTML = `
            <div class="image-modals">
                <span class="close" onclick="closeModal('modal-${index}')"><i class='bx bx-x'></i></span>
                <img src="${img.src}" alt="${img.alt}">
                <h2>${img.previousElementSibling.innerText}</h2>
            </div>
        `

        document.body.appendChild(modal);

        // add click event to open modal
        img.addEventListener("click", function() {
            document.getElementById(`modal-${index}`).style.display = "block";
        })
    })

    // function to close modals when clicking outside
    window.onclick = function (event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    }

});


// function to close modals on artwork page when clicking the close button
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}


// code for scroll up feature on artwork page
const scrollUp = document.querySelector('.scrollUp'); //add event listener to window object to listen from scroll event

window.addEventListener("scroll", () => {   
    if (window.scrollY > 100) { // if user scrolls down more than 60px, the scroll up icon appears
        scrollUp.classList.add("active");   // changes opacity of scroll up icon to 1 after 100px
    } else {
        scrollUp.classList.remove("active");  // changes opacity of scroll up icon to 0 after 100px
    }
})



// contact form
const contactButton = document.getElementById("contact-button");
const contactForm = document.getElementById("contact-form");
const contactClose = document.getElementById("contact-close");

// function to open the pop up
function openContact() {
    contactForm.style.display = "flex";
}

// function to close the pop up
function closeContact() {
    contactForm.style.display = "none";
}

// event listeners
contactButton.addEventListener('click', openContact);
contactClose.addEventListener('click', closeContact);

function submitAlert() {
    alert("Your message has been sent!")
}