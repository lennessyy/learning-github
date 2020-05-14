const memeDiv = document.querySelector('#memes');

document.querySelector('button').addEventListener('click', (event) => {
	event.preventDefault();
	const imageUrl = document.querySelector('#image').value,
		topTextValue = document.querySelector('#top-text').value,
		bottomTextValue = document.querySelector('#bottom-text').value;
	const meme = document.createElement('div');
	meme.classList.add('relative');
	const image = document.createElement('img'),
		topText = document.createElement('div'),
		bottomText = document.createElement('div');
	topText.innerHTML = topTextValue;
	bottomText.innerHTML = bottomTextValue;
	topText.classList.add('top');
	bottomText.classList.add('bottom');
	image.setAttribute('src', imageUrl);
	meme.appendChild(image);
	meme.appendChild(topText);
	meme.appendChild(bottomText);
	memeDiv.appendChild(meme);
});

memeDiv.addEventListener('click', (event) => {
	console.log(event.target.tagName);
	if (event.target.tagName === 'IMG') {
		event.target.parentElement.remove();
	}
});
