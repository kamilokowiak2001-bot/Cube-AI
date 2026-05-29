const hamburger = document.querySelector('.hamburger')
const offcanvas = document.querySelector('.offcanvas')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('is-active')
	offcanvas.classList.toggle('offcanvas--active')
	document.body.classList.toggle('no-scroll')
})
