/*!
* Start Bootstrap - Business Frontpage v5.0.9 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



// https://www.youtube.com/watch?v=tmWvwp3rpso
document.addEventListener("click",function (e){
	if(e.target.classList.contains("gallery-item")){
		const src = e.target.getAttribute("src");
		document.querySelector(".modal-img").src = src;
		const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
		myModal.show();
	}
	})  

	function mailSubmit() {
		const contactForm = document.getElementById('contactForm');
		const name = contactForm.name.value;
		const email = contactForm.email.value;
		const phone = contactForm.phone.value;
		const message = contactForm.message.value;
	
		if (!name || !email || !phone || !message) {
			alert('Input all information');
		} else if (!/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(email)) {
			alert('Input valid email address');
		} else {
			contactForm.submit();
			alert('submit successfully!');
		}
	}
	