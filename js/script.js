const hamburger = document.querySelector('.hamburger')
const offcanvas = document.querySelector('.offcanvas')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('is-active') // klasa biblioteki hamburgers — animuje krzyżyk
	offcanvas.classList.toggle('offcanvas--active')
})
