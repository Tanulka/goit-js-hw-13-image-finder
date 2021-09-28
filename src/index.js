import './sass/base.scss';
import './sass/main.scss';
import refs from './js/refs';
import imageCard from './templates/imageCard.hbs';
import { fetchFindPictures } from './js/apiService';

const { searchForm, galleryList, btnLoadMore } = refs;

searchForm.addEventListener('submit', onSearch);
btnLoadMore.addEventListener('click', loadMore);

let pictures = [];
let query = '';
let page = 1;

async function onSearch(e) {
  e.preventDefault();
  pictures = [];
  query = e.currentTarget.elements.query.value;
  page = 1;
  loadPictures();
}

function loadMore() {
  page++;
  const lastPicture = pictures[pictures.length - 1];
  loadPictures();
  setTimeout(() => scrollToPicture(lastPicture.id), 500);
}

function picCard(pictures) {
  let markup = imageCard(pictures);
  galleryList.innerHTML = markup;
}

async function loadPictures() {
  btnLoadMore.disabled = true;
  const pics = await fetchFindPictures(query, page);
  pictures.push(...pics);

  picCard(pictures);

  if (pics.length === 12) {
    btnLoadMore.classList.remove('hidden');
    btnLoadMore.disabled = false;
  } else {
    btnLoadMore.classList.add('hidden');
  }
}

function scrollToPicture(lastPictureId) {
  const lastPicture = document.getElementById(`picture-${lastPictureId}`);
  const nextPicture = lastPicture.nextElementSibling;
  if (nextPicture) {
    nextPicture.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
