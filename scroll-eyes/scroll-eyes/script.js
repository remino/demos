const scrollBackToTopIfAtBottom = () => {
	if (window.scrollY >= document.body.offsetHeight - window.innerHeight) {
		window.scrollTo(0, 0);
	}
}

const main = () => {
	window.addEventListener('scroll', scrollBackToTopIfAtBottom)
	window.addEventListener('resize', scrollBackToTopIfAtBottom)
}

if (document.readyState === 'interactive') {
	main()
} else {
	document.addEventListener('DOMContentLoaded', main)
}
