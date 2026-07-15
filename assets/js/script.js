//DOCUMENT OBJECT MODEL(DO,)
const mobileMenu = document.getElementById('mobile-menu');
const desktopMenu = document.getElementById('desktop-menu');
//MAKE OUR MOBILE MENU SENSITIVE TO CLICK EVENTS
mobileMenu.addEventListener('click', () =>{
mobileMenu.classList.toggle('active');
desktopMenu.classList.toggle('active');
})
