document.querySelectorAll('.img-conteiner img').forEach(img =>{
		img.onclick = () =>{
			document.querySelector('.pop-up').style.display = 'block';
			document.querySelector('.pop-up img').src = img.getAttribute('src');
		}
});

document.querySelector('.pop-up span').addEventListener('click', () =>{
	document.querySelector('.pop-up').style.display = 'none';
});