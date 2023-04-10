import homeBg from './assets/home-bg.png';
import logoSvg from './assets/logo.svg';
import starsPng from './assets/michelin-stars.png';

function setBackground() {
  document.body.style.background = `url(${homeBg})`;
}

function setNav() {
  const header = document.getElementById('header');
  header.style.justifyContent = 'center';

  if (document.getElementById('corner-logo')) {
    const cornerLogo = document.getElementById('corner-logo');
    cornerLogo.remove();
  }

  const menuBtn = document.getElementById('menu-btn');
  const contactBtn = document.getElementById('contact-btn');
  menuBtn.classList.remove('active');
  contactBtn.classList.remove('active');
}

function createGallery() {
  const gallery = document.createElement('div');
  gallery.classList.add('gallery');
  gallery.id = 'gallery';

  const logoDiv = () => {
    const div = document.createElement('div');
    div.id = 'logo-div';
    div.classList.add('gallery-div');

    const logo = document.createElement('img');
    logo.src = logoSvg;
    logo.id = 'home-logo';

    const slogan = document.createElement('p');
    slogan.id = 'slogan';
    slogan.innerHTML = '<span class="underline">It\'s not</span> <span class="line-through">just food</span>. It\'s <span class="bold">art</span>.';

    div.appendChild(logo);
    div.appendChild(slogan);

    return div;
  };

  const michelinDiv = () => {
    const div = document.createElement('div');
    div.id = 'michelin-div';
    div.classList.add('gallery-div');

    const stars = document.createElement('img');
    stars.src = starsPng;
    stars.id = 'stars';

    const text = document.createElement('p');
    text.innerHTML = 'Book an opportunity to dine in the world\'s <span class="bold">first</span> 3 Michelin Star restaurant.';
    text.id = 'stars-text';

    div.appendChild(stars);
    div.appendChild(text);

    return div;
  };

  const reviewDiv = () => {
    const div = document.createElement('div');
    div.id = 'review-div';
    div.classList.add('gallery-div');

    const review = document.createElement('h2');
    review.textContent = '"I couldn\'t believe it. It was magic. Out of this world. This experience is mandatory."';
    review.id = 'review';

    const name = document.createElement('p');
    name.textContent = '- Gordon Ramsey -';
    name.id = 'review-name';

    div.appendChild(review);
    div.appendChild(name);

    return div;
  };

  gallery.appendChild(logoDiv());
  gallery.appendChild(michelinDiv());
  gallery.appendChild(reviewDiv());

  return gallery;
}

function loadHome() {
  const main = document.getElementById('main');
  main.innerHTML = '';

  setBackground();
  setNav();

  main.appendChild(createGallery());

  const enableSlides = () => {
    const gallery = document.getElementById('gallery');
    const galleryDivs = Array.from(document.getElementsByClassName('gallery-div'));
    setInterval(() => {
      galleryDivs.forEach((x) => {
        if (x.offsetLeft < 0) {
          x.animate({
            left: '150%',
          }, { duration: 0, fill: 'forwards' });
        } else if (x.offsetLeft > gallery.offsetWidth) {
          x.animate({
            left: '50%',
          }, { duration: 1000, fill: 'forwards', easing: 'ease-in-out' });
        } else {
          x.animate({
            left: '-150%',
          }, { duration: 1000, fill: 'forwards', easing: 'ease-in-out' });
        }
      });
    }, 4000);
  };

  enableSlides();
}

export default loadHome;

/* galleryDivs.forEach((e) => {
  console.log('adding');
  e.addEventListener('click', () => {
    galleryDivs.forEach((x) => {
      console.log(x.offsetLeft);
      if (x.offsetLeft < 0) {
        console.log('setting to 150%');
        console.log(x);
        x.animate({
          left: '150%',
        }, { duration: 0, fill: 'forwards' });
        console.log(x.style.left);
      } else if (x.offsetLeft > gallery.offsetWidth) {
        console.log('adding');
        console.log(x);
        x.animate({
          left: '50%',
        }, { duration: 500, fill: 'forwards' });
      } else {
        console.log('removing');
        console.log(x);
        x.animate({
          left: '-150%',
        }, { duration: 500, fill: 'forwards' });
      }
    });
  });
}); */
