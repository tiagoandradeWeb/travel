// search
function search(){
	const btn = document.querySelector('.btn-search');
	const searchBox = document.querySelector(".search");
	const btnClose  = document.querySelector(".btn-close");
	
	btn.addEventListener("click", function(){
		searchBox.style.top= 2 + "px";
	});
	btnClose.addEventListener("click", function(){
		searchBox.style.top= "-" + 200 + "%";
	});
	
}

// Login
function login(){
	const btnLogin = document.querySelector('.user');
	const loginBox = document.querySelector(".login");
	const btnClose = document.querySelector(".login-btn-close");
	
	btnLogin.addEventListener("click", function(){
		loginBox.style.top= 0 + "px";
		loginBox.style.display="block";
	});
	btnClose.addEventListener("click", function(){
		loginBox.style.top= "-" + 200 + "%";
	});
}

// Menu mobile
function menuMobile(){
	const btnMobile = document.querySelector(".mobile-menu");
	const menuBox = document.querySelector(".nav-main");
	const menuClose = document.querySelector(".mobile-close") 
	
	btnMobile.addEventListener("click", function(){
		menuBox.style.left=0;
		btnMobile.style.display="none";
		menuClose.style.display="block";
	});
	
	menuClose.addEventListener("click", function(){
		menuBox.style.left="-" + 200 + "%";
		menuClose.style.display="none";
		btnMobile.style.display="block";
	});
}

search();
login();
menuMobile();