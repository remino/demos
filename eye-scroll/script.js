let cancelNextOnScroll = false;

const scrollBackIfAtEdge = () => {
	if (cancelNextOnScroll) {
		cancelNextOnScroll = false;
		return;
	}

	if (window.scrollY <= 0) {
		cancelNextOnScroll = true;
		window.scrollTo(0, document.body.offsetHeight - window.innerHeight);
		return;
	}

	if (window.scrollY >= document.body.offsetHeight - window.innerHeight) {
		cancelNextOnScroll = true;
		window.scrollTo(0, 0);
	}
};

const main = () => {
	window.addEventListener("scroll", scrollBackIfAtEdge);
	window.addEventListener("resize", scrollBackIfAtEdge);
};

if (document.readyState === "interactive") {
	main();
} else {
	document.addEventListener("DOMContentLoaded", main);
}
