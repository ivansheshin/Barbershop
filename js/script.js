var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");

var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");
var isStorageSupport = true;

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage) {
		login.value = storage;
		password.focus();
	} else{
		login.focus();
	}
 });

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-err");
});

var mlink = document.querySelector(".conbutmap");
var mpopup = document.querySelector(".modal-map");
var mclose = mpopup.querySelector(".modal-close");

mlink.addEventListener("click", function(evt) {
	evt.preventDefault();
	mpopup.classList.add("modal-show");
 });

mclose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mpopup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt){
	if (!login.value|| !password.value) {
		evt.preventDefault();
		popup.classList.add("modal-err");
	} else{
		if (isStorageSupport) {
			localStorage.setItem("login", login.value);
		}
	}
});

 try {
    storage = localStorage.getItem("login");
    } catch (err) {
        isStorageSupport = false;
    }
window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
		}
	}
});