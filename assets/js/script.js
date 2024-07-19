 // navbar scroll
 $(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".navbar-scroll").addClass("bg-scroll");
        } else {
            $(".navbar-scroll").removeClass("bg-scroll");
        }
    });
});
// tiny slide
var slider = tns({
    container: '.my-slider',
    items: 4,
    gutter: 30,
    speed: 1000,
    slideBy: 1,
    loop: false,
    autoplay: false,
    mouseDrag: true,
    autoplayButtonOutput: false,
    controlsContainer: "#custom-control",
    controlsPosition: "bottom",
    controls: true,
    nav: false,
    responsive: {
    0: {
        items: 1.5
    },
    768: {
        items: 3
    },
    1440: {
        items: 4
    }
}
});
// count product
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");
const quantityInput = document.querySelector("#quantity");

incrementButton.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});
decrementButton.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) - 1;
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
'use strict'

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')
    }, false)
})
})()