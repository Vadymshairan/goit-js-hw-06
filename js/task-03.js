const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

const galleryMarkupEl = images
  .map(
    image =>
      `<li><img
  src=${image.url}
  alt=${image.alt}
  width="480"
  height="240"
/></li>`
  )
  .join('');

galleryEl.innerHTML = galleryMarkupEl;

galleryEl.style.display = 'flex';
galleryEl.style.justifyContent = 'space-between';
galleryEl.style.backgroundColor = '#999fdd';
const itemsEl = galleryEl.querySelectorAll('li');
itemsEl.forEach(item => (item.style.listStyle = 'none'));
