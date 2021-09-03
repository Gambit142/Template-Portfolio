// // Create object to store data needed for the this branch feature
const projects = [
  {
    name: 'Multi-Post Stories',
    number: 1,
    description: `A daily selection of privately personalized reads; no accounts
          or sign-ups required. has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a
          standard dummy text.`,
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
  },
  {
    name: 'Multi-Post Stories',
    number: 2,
    description: `A daily selection of privately personalized reads; no accounts
          or sign-ups required. has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a
          standard dummy text.`,
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
  },
  {
    name: 'Multi-Post Stories',
    number: 3,
    description: `A daily selection of privately personalized reads; no accounts
          or sign-ups required. has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a
          standard dummy text.`,
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
  },
  {
    name: 'Multi-Post Stories',
    number: 4,
    description: `A daily selection of privately personalized reads; no accounts
          or sign-ups required. has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a
          standard dummy text.`,
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
  },
];
// // Create the cards section dynamically using string literals
function createCard1(project) {
  const cardString = `<section class="work-container">
  <article class="cards-container reverse-div${project.number} display-flex">
    <div class="placeholder"></div>
    <div class="details-div display-flex">
      <div class="cards-header display-flex">
        <h3 class="style">${project.name}</h3>
      </div>
      <div class="card-info">
        <p class="style">
        ${project.description}
        </p>
      </div>
      <ul class="languages-div">
        <li class="lang style">${project.technologies[0]}</li>
        <li class="lang style">${project.technologies[1]}</li>
        <li class="lang style">${project.technologies[2]}</li>
        <li class="ruby lang style">${project.technologies[3]}</li>
      </ul>
      <div class="btn-div">
        <button type="button" class="see-project">
          See Project
        </button>
      </div>
    </div>
  </article>
</section>`;
  return cardString;
}
const projectContainer = document.querySelector('main');

projects.forEach((card) => {
  projectContainer.innerHTML += createCard1(card);
});
// Create functions that opens and close the popup window when see-project button is clicked

const modalObject = {
  name: 'Multi-Post Stories',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. 
    Lorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.`,
  featuredImage: {
    image1: './Images/Closing-Icon.png',
    image2: './Images/Snapshoot-Image.png',
    image3: './Images/Snapshoot-Image2.png',
    image4: './Images/Live-Icon.png',
    image5: './Images/Github-Logo.png',
  },
  technologies: ['HTML', 'Ruby on rails', 'CSS', 'Github'],
  links: [' https://gambit142.github.io/Template-Portfolio/', 'https://github.com/Gambit142/Template-Portfolio'],
};

const modalWindow = `<div class="pop-up-container display-flex" id="modal-content">
       <div class="title-container display-flex style">
         <h2>${modalObject.name}</h2>
         <img class="closing-button" src= ${modalObject.featuredImage.image1} alt="Closing Icon">
       </div>
       <div class="image-placeholder display-flex">
         <img class="snapshot1" src= ${modalObject.featuredImage.image2} alt="Snapshot of a card design">
         <img class="snapshot2" src= ${modalObject.featuredImage.image3} alt="Snapshot of a card design">
       </div>
       <div class="card-description display-flex">
         <p class="card-text style">${modalObject.description}</p>
       </div>
       <div class="card-badges display-flex">
         <h4 class="badge html">${modalObject.technologies[0]}</h4>
         <h4 class="badge">${modalObject.technologies[1]}</h4>
         <h4 class="badge">${modalObject.technologies[2]}</h4>
         <h4 class="badge github">${modalObject.technologies[3]}</h4>
       </div>
       <div class="links-div display-flex">
         <a href= ${modalObject.links[0]} class="live-link">
           See Live
           <img class="live-icon" src=${modalObject.featuredImage.image4} alt="Live Icon">
         </a>
         <a href= ${modalObject.links[1]} class="source-link">
           See Source
           <img class="github-icon" src=${modalObject.featuredImage.image5} alt="Github Icon">
         </a>
       </div>
     </div>`;
const workArea = document.getElementById('modal-container');
workArea.innerHTML = modalWindow;

function displayModal() {
  workArea.style.display = 'block';
}

const projectButtons = document.querySelectorAll('.see-project');
projectButtons.forEach((button) => {
  button.addEventListener('click', displayModal);
});

const closingButtons = document.querySelector('.closing-button');
closingButtons.addEventListener('click', () => {
  workArea.style.display = 'none';
});