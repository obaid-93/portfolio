/*------JS-Code For BACK-To-Top Button------*/
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.querySelector("#back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            backToTopButton.classList.add("active");
            backToTopButton.addEventListener("click", function () {
                scrollTo({
                    top: 0,
                    behavior: "smooth" // This adds smooth scrolling
                });
            });
        } else {
            backToTopButton.classList.remove("active");
        }
    });
});


import Typewriter from 'typewriter-effect/dist/core';
document.addEventListener("DOMContentLoaded", function () {
    var typewriter = new Typewriter('#typewriter-text-id', {
        loop: true, // Keeps repeating
        delay: 170, // Typing speed
        deleteSpeed: 50, // Deleting speed
        autoStart: true, // Starts automatically
    });

    typewriter
        .typeString('Webflow Developer | Shopify Developer | Front-End Developer')
        .pauseFor(1000)
        .deleteAll()
        .start();
});


document.addEventListener("DOMContentLoaded", function () {
    var typewriter = new Typewriter('#typewriter-text-id-contact', {
        loop: true, // Keeps repeating
        delay: 170, // Typing speed
        deleteSpeed: 50, // Deleting speed
        autoStart: true, // Starts automatically
    });

    typewriter
        .typeString('Lets talk about your goals')
        .pauseFor(1000)
        .deleteAll()
        .start();
});


/*---Form Validation Starts Here---*/
document.addEventListener("DOMContentLoaded", function () {
    let contactForm = document.querySelector(".contact-form");
    let firstName = document.querySelector("#firstName");
    let lastName = document.querySelector("#lastName");
    let emailAddress = document.querySelector("#emailAddress");
    let phoneNumber = document.querySelector("#phoneNumber");


    // Apply real-time validation as user types
    firstName.addEventListener("input", () => validateInput(firstName, "First name cannot be blank"));
    lastName.addEventListener("input", () => validateInput(lastName, "Last name cannot be blank"));
    emailAddress.addEventListener("input", () => validateEmail(emailAddress));
    phoneNumber.addEventListener("input", () => validatePhone(phoneNumber));

    function handleInput() {
        validateInput(firstName, "First name cannot be blank");
        validateInput(lastName, "Last name cannot be blank");
        validateEmail(emailAddress);
        validatePhone(phoneNumber);
    }

    function validateInput(input, errorMessage) {
        let value = input.value.trim();
        if (value === "") {
            setErrorFor(input, errorMessage);
        } else {
            setSuccessFor(input);
        }
    }

    function validateEmail(input) {
        let value = input.value.trim();
        if (value === "") {
            setErrorFor(input, "Email cannot be blank");
        } else if (!isEmail(value)) {
            setErrorFor(input, "Email is not valid");
        } else {
            setSuccessFor(input);
        }
    }

    function validatePhone(input) {
        let value = input.value.trim();
        if (value === "") {
            setErrorFor(input, "Phone number cannot be blank");
        } else if (!isPhoneNumber(value)) {
            setErrorFor(input, "Phone number is not valid");
        } else {
            setSuccessFor(input);
        }
    }

    function setErrorFor(input, message) {
        let formGroup = input.parentElement;
        formGroup.classList.remove("input-success");
        formGroup.classList.add("input-error");
        let small = formGroup.querySelector("small");
        small.innerText = message;
        input.style.border = "2px solid red";
    }

    function setSuccessFor(input) {
        let formGroup = input.parentElement;
        formGroup.classList.remove("input-error");
        formGroup.classList.add("input-success");
        let small = formGroup.querySelector("small");
        small.innerText = "";
        input.style.border = "2px solid green";
    }

    function isEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    function isPhoneNumber(number) {
        return /^[0-9]{10,15}$/.test(number);
    }
});
