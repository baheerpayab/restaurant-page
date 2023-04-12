import curveBg from './assets/curve-bg.svg';
import logoBlackSvg from './assets/logo-black.svg';
import loadHome from './home';

import contactBg from './assets/contact-bg.png';

const setBackground = () => {
  document.body.style.background = '';

  const main = document.getElementById('main');

  const curveDiv = document.createElement('div');
  curveDiv.classList.add('curve-bg');

  const curveImg = document.createElement('img');
  curveImg.src = curveBg;
  curveImg.classList.add('curve-bg-img');

  const backgroundImgDiv = document.createElement('div');
  backgroundImgDiv.classList.add('background-img-div');

  const backgroundImg = document.createElement('img');
  backgroundImg.id = 'contact-img';
  backgroundImg.src = contactBg;
  backgroundImg.classList.add('background-img');

  backgroundImgDiv.appendChild(backgroundImg);
  curveDiv.appendChild(curveImg);
  main.appendChild(curveDiv);
  main.appendChild(backgroundImgDiv);
};

const setNav = () => {
  if (!document.getElementById('corner-logo')) {
    const header = document.getElementById('header');
    header.style.justifyContent = 'space-between';
    const logo = document.createElement('img');
    logo.src = logoBlackSvg;
    logo.id = 'corner-logo';

    logo.addEventListener('click', loadHome);

    header.appendChild(logo);
  }

  const contactBtn = document.getElementById('contact-btn');
  const menuBtn = document.getElementById('menu-btn');
  menuBtn.classList.remove('active');
  menuBtn.classList.remove('home');
  contactBtn.classList.remove('home');
};

const createInfo = () => {
  const infoParentDiv = document.createElement('div');
  infoParentDiv.id = 'info-parent-div';

  const infoDiv = document.createElement('div');
  infoDiv.id = 'info-div';

  const createAddressDiv = () => {
    const div = document.createElement('div');
    div.classList.add('info-sub-div');
    div.id = 'address-div';

    const heading = document.createElement('div');
    heading.classList.add('contact-heading');
    heading.textContent = 'Address';

    const text = document.createElement('p');
    text.classList.add('contact-text');
    text.id = 'address-div';
    text.textContent = '“refined”\r\n3212 4th av.\r\nNew York City, NY\r\n212 332 2333';

    div.appendChild(heading);
    div.appendChild(text);

    div.classList.add('active');

    return div;
  };

  const createBookingDiv = () => {
    const div = document.createElement('div');
    div.classList.add('info-sub-div');
    div.id = 'booking-div';

    const heading = document.createElement('div');
    heading.classList.add('contact-heading');
    heading.textContent = 'Booking';

    const text = document.createElement('p');
    text.classList.add('contact-text');
    text.id = 'booking-div';
    text.innerHTML = 'To book a reservation, please either call us\r\n<span class="bold">212 332 2333</span>\r\n or click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target=”_blank”><span class="bold">here</span></a> to book online.';

    div.appendChild(heading);
    div.appendChild(text);

    return div;
  };

  const createInquiriesDiv = () => {
    const div = document.createElement('div');
    div.classList.add('info-sub-div');
    div.id = 'inquiries-div';

    const heading = document.createElement('div');
    heading.classList.add('contact-heading');
    heading.textContent = 'Inquiries';

    const text = document.createElement('p');
    text.classList.add('contact-text');
    text.id = 'inquiries-div';
    text.innerHTML = 'For further inquiries, send us an email at\r\n<span id="support-email" class="bold">support@refined.com</span>\r\nResponses can take up to a few hours.\r\nThank you!';

    div.appendChild(heading);
    div.appendChild(text);

    return div;
  };

  const createReviewDiv = () => {
    const div = document.createElement('div');
    div.classList.add('info-sub-div');
    div.id = 'review-div';

    const heading = document.createElement('div');
    heading.classList.add('contact-heading');
    heading.textContent = 'Review';

    const form = document.createElement('form');
    form.id = 'review-form';

    const firstName = document.createElement('input');
    firstName.type = 'text';
    firstName.required = true;
    firstName.placeholder = 'First Name';

    const lastName = document.createElement('input');
    lastName.type = 'text';
    lastName.required = true;
    lastName.placeholder = 'Last Name';

    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Visit Date';

    const date = document.createElement('input');
    date.type = 'date';
    date.required = true;
    date.placeholder = 'Date of Visit';

    const receipt = document.createElement('input');
    receipt.type = 'text';
    receipt.required = true;
    receipt.placeholder = 'Receipt Number e.g. #34D73c';

    const textArea = document.createElement('textarea');
    textArea.required = true;
    textArea.placeholder = 'Write your review here...';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Submit';

    form.appendChild(firstName);
    form.appendChild(lastName);
    form.appendChild(date);
    form.appendChild(receipt);
    form.appendChild(textArea);
    form.appendChild(submitBtn);

    div.appendChild(heading);
    div.appendChild(form);

    return div;
  };

  infoDiv.appendChild(createAddressDiv());
  infoDiv.appendChild(createBookingDiv());
  infoDiv.appendChild(createInquiriesDiv());
  infoDiv.appendChild(createReviewDiv());

  infoParentDiv.appendChild(infoDiv);

  return infoParentDiv;
};

const enableDefaultHover = () => {
  const infoSubDivs = Array.from(document.getElementsByClassName('info-sub-div'));
  infoSubDivs.forEach((e) => {
    e.addEventListener('mouseover', () => {
      document.getElementById('address-div').classList.remove('active');
    });
    e.addEventListener('mouseout', () => {
      document.getElementById('address-div').classList.add('active');
    });
  });

  const url = document.getElementById('support-email');
  url.onclick = function copy() {
    navigator.clipboard.writeText(url.textContent);
    alert('Email copied!');
  };
};

const loadContact = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';

  setBackground();
  setNav();

  main.appendChild(createInfo());
  enableDefaultHover();
};

export default loadContact;
