const mobileMenuDiv = document.querySelector('#mobile-menu');
mobileMenuDiv.className = 'mobile-menu-hidden';
// Create closing icon and attach to div
const closingIcondiv = document.createElement('div');
closingIcondiv.className = 'menu-item';
closingIcondiv.className = 'closing-icon-item';
let anchorTag = document.createElement('a');
anchorTag.setAttribute('href', '#');
const closingIcon = document.createElement('IMG');
closingIcon.setAttribute('src', 'Images/closing-icon.png');
closingIcon.setAttribute('alt', 'Icon image');
closingIcon.id = 'close-button';
anchorTag.appendChild(closingIcon);
closingIcondiv.appendChild(anchorTag);
mobileMenuDiv.appendChild(closingIcondiv);
// Create portfolio link item and attach to the mobile menu div
const portfolioLinkDiv = document.createElement('div');
portfolioLinkDiv.className = 'menu-item';
anchorTag = document.createElement('a');
anchorTag.className = 'nav-menu-link';
anchorTag.textContent = 'Portfolio';
anchorTag.setAttribute('href', '#cards-section');
portfolioLinkDiv.appendChild(anchorTag);
mobileMenuDiv.appendChild(portfolioLinkDiv);
// Create about link section and attach to the mobile menu div
const aboutDiv = document.createElement('div');
aboutDiv.className = 'menu-item';
anchorTag = document.createElement('a');
anchorTag.className = 'nav-menu-link';
anchorTag.textContent = 'About';
anchorTag.setAttribute('href', '#about');
aboutDiv.appendChild(anchorTag);
mobileMenuDiv.appendChild(aboutDiv);
// Create contact link section and attach to the mobile menu div
const contactDiv = document.createElement('div');
contactDiv.className = 'menu-item';
anchorTag = document.createElement('a');
anchorTag.className = 'nav-menu-link';
anchorTag.textContent = 'Contact';
anchorTag.setAttribute('href', '#contacts');
contactDiv.appendChild(anchorTag);
mobileMenuDiv.appendChild(contactDiv);
const menuButton = document.querySelector('#menu-button');

function display() {
  const targetedDiv = document.querySelector('.mobile-menu-hidden');
  targetedDiv.classList.add('show');
  menuButton.style.display = 'none';
}

menuButton.addEventListener('click', display);
const closeButton = document.querySelector('#close-button');
function closePop() {
  const targetedDiv2 = document.querySelector('.mobile-menu-hidden');
  targetedDiv2.classList.remove('show');
  menuButton.style.display = 'block';
}

closeButton.addEventListener('click', closePop);
const anchorTagLinks = document.querySelectorAll('.nav-menu-link');
anchorTagLinks.forEach((link) => {
  link.addEventListener('click', closePop);
});