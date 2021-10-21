 

// from
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, ' Required');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form_control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form_control success';
}
	


// video-carousel

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
var slideNav = function (manual){
    btns.forEach((btn)=>{
btn.classList.remove("active");
    });
    slides.forEach((slide)=>{
        slide.classList.remove("active");
            });
    btns[manual].classList.add("active")
    slides[manual].classList.add("active")
}
btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
slideNav(i);
    });
})


window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// nav-bar
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigations");
menuBtn.addEventListener("click" , () =>{
	menuBtn.classList.toggle("active");
	navigation.classList.toggle("active");
});
