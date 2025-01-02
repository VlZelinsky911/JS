const content = document.getElementById('content');

window.onload = () =>{
	const savedContent = localStorage.getItem('content');
	if (savedContent) {
			content.innerHTML = savedContent;
	}
}

function addBlock(tag){
const newBlock = document.createElement(tag);
newBlock.textContent =`New ${tag} block`;
newBlock.contenteditable = 'true';
content.appendChild(newBlock);
}

function toggleStyle(style){
	document.execCommand(style);
}

function saveContent(){
const localContend = content.textContent;
localStorage.setItem('content', localContend);
alert('Content saved!')
}

function clearContend(){
	if(confirm('Are you sure you want to clear all contend?')){
		content.textContent = '';
		localStorage.removeItem('contend')
	}
}
document.getElementById('addParagraph').addEventListener('click', () => addBlock('p'));
document.getElementById('addH1').addEventListener('click', () => addBlock('h1'));
document.getElementById('addH2').addEventListener('click',() => addBlock('h2'));
document.getElementById('italic').addEventListener('click',() => toggleStyle('Italic'));
document.getElementById('bold').addEventListener('click',() => toggleStyle('bold'));
document.getElementById('saveContent').addEventListener('click', () => saveContent());
document.getElementById('clearContent').addEventListener('click', () => clearContend());
