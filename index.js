function appendImageELem(keyword, index) {
    const imgElm = document.createElement('img');
    // imgElm.src = 'https://sourve.unsplah/400x225/?' + keyword + '&sig=' + index;

    // ES6
    imgElm.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imgElm);
}
function removePhotos() {
    const galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML = '';
}

function searchPhotos(event) {
    const keyword = event.target.value;

    if (event.key === 'Enter' && keyword) { //keyword !== ''
        removePhotos();

        for (let i = 1; i <= 9; i++) {
            appendImageELem(keyword, i);
        }
    }
}


function run() {

    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown', searchPhotos);
}

run();