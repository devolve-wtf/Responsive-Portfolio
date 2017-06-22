/**
*** Add current year to footer
**/
var date = new Date();
var year = date.getFullYear();

function currentYear(year) {
	var el = document.getElementById('Year');
	el.innerHTML = year;
}

/**
*** Handle contact form submission
**/
function Contact(name, email, message) {
	this.name = name;
	this.email = email;
	this.message = message;
}

var contact = new Contact();

function notifyContact() {
	contact.name = document.getElementById('ContactName').value;
	contact.email = document.getElementById('ContactEmail').value;
	contact.message = document.getElementById('ContactMessage').value;

	var successMessage = "Hello " + contact.name + ", \n\nif this was a real and functioning form, the following message:\n\n\"" + contact.message + "\"\n\nwould have been submitted to either a database or an email, and you would get a response at " + contact.email + ". \n\nIt's not real though, so, cheers! "; 

	alert(successMessage);
}

/**
*** Portfolio Modal
**/
var modal = document.getElementById('Modal');
var closeButton = document.getElementById('CloseModal');
var modalImage = document.getElementById('ModalImage');
var thumbnails = document.getElementsByClassName('thumbnail');
var projectLink = document.getElementById('ProjectLink');
var main = document.getElementById('Main');

function closeModal() {
	closeButton.addEventListener('click', function() {
		main.classList.remove('faded');
		modal.className = 'display-none';
	});
}

function openModal() {

	var y = 0;

	window.onscroll = function(e) {
		if(window.scrollY > 50) {
			y = window.scrollY - 50 + 'px';
		}else{
			y = 0;
		}
	};

	for(var i = 0; i < thumbnails.length; i++) {
		thumbnails[i].addEventListener('click', function() {
			var imageSrc = this.getAttribute('src');
			var link = this.getAttribute('data');
			modalImage.setAttribute('src', imageSrc);
			projectLink.setAttribute('href', link);
			modal.style.marginTop = y;
			main.className = 'wrapper faded';
			modal.classList.remove('display-none');
			console.log(y);
		});
	}
}

/**
*** Invoke functions after DOM is done loading
**/
document.addEventListener("DOMContentLoaded", function(event) {
	currentYear(year);
	closeModal();
	openModal();
});