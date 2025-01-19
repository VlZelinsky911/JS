let count = 0;
let width;
let startX;

const API_URL = "https://api.unsplash.com/photos/?client_id=_BBxbVeJjfHp9lcf4Kr-xwtTEZKWkPsSgxuM21ccMK8";

async function fetchImages(apiUrl) {
	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const data = await response.json();

		return data.map(image => ({
			url: image.urls.regular,
			alt: image.alt_description || "Unsplash Image",
		}));
	} catch (error) {
		console.error("Error fetching images:", error);
		return [];
	}
}

function createSlides(images) {
	const sliderLine = document.querySelector(".slider__line");
	sliderLine.innerHTML = "";

	images.forEach(image => {
		const img = document.createElement("img");
		img.setAttribute("data-src", image.url);
		img.setAttribute("alt", image.alt || "Slide Image");
		sliderLine.appendChild(img);
	});

	const allImage = sliderLine.querySelectorAll("img");
	allImage.forEach(image => observer.observe(image));
}

async function initializeSlider(apiUrl) {
	const images = await fetchImages(apiUrl);
	if (images.length === 0) {
		console.error("No images fetched from API.");
		return;
	}
	createSlides(images);
	init();
}

const lazyLoad = image => {
	const src = image.getAttribute("data-src");
	if (!src) return;

	image.src = src;
	image.onload = () => {
		image.style.opacity = 1;
	};
};

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			lazyLoad(entry.target);
			observer.unobserve(entry.target);
		}
	});
}, { root: null, threshold: 0.1 });

function init() {
	const sliderLine = document.querySelector(".slider__line");
	const allImage = sliderLine.querySelectorAll("img")
	width = document.querySelector(".slider").offsetWidth;

	sliderLine.style.width = width * allImage.length + "px";
	allImage.forEach(item => {
		item.style.width = width + "px";
		item.style.height = "auto";
	});

	rollSlider();
}

function rollSlider() {
	const sliderLine = document.querySelector(".slider__line");
	sliderLine.style.transform = "translate(-" + count * width + "px)";
}

window.addEventListener("resize", init);

document.querySelector(".slider__next").addEventListener("click", () => {
	const sliderLine = document.querySelector(".slider__line");
	const allImages = sliderLine.querySelectorAll("img");
	count++;
	if (count >= allImages.length) {
		count = 0;
	}
	rollSlider();
});

document.querySelector(".slider__prev").addEventListener("click", () => {
	const sliderLine = document.querySelector(".slider__line");
	const allImages = sliderLine.querySelectorAll("img");
	count--;
	if (count < 0) {
		count = allImages.length - 1;
	}
	rollSlider();
});

function handleTouchStart(e) {
	const touchStart = e.touches[0].clientX;
	startX = touchStart;
}

function handleTouchMove(e) {
	if (!startX) return;

	const touchMove = e.touches[0].clientX;
	const diff = touchMove - startX;

	if (Math.abs(diff) > 30) {
		if (diff > 0) {
			moveToPrevSlide();
		} else {
			moveToNextSlide();
		}
		startX = null;  
	}
}

function handleTouchEnd(e) {
	startX = null;  
}

function moveToNextSlide() {
	const sliderLine = document.querySelector(".slider__line");
	const allImages = sliderLine.querySelectorAll("img");
	count++;
	if (count >= allImages.length) {
		count = 0;
	}
	rollSlider();
}

function moveToPrevSlide() {
	const sliderLine = document.querySelector(".slider__line");
	const allImages = sliderLine.querySelectorAll("img");
	count--;
	if (count < 0) {
		count = allImages.length - 1;
	}
	rollSlider();
}

document.querySelector(".slider").addEventListener("touchstart", handleTouchStart);
document.querySelector(".slider").addEventListener("touchmove", handleTouchMove);
document.querySelector(".slider").addEventListener("touchend", handleTouchEnd);

initializeSlider(API_URL);
