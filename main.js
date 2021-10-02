// // Create object to store data needed for the this branch feature
const projects = [
  {
    name: 'HTML-CSS CAPSTONE',
    number: 1,
    description: ` 
    The project seeks to test my knowledge of Html5, Css3, and Javascript. 
    In the project, I created two pages for a soccer tournament, a mobile menu for the mobile version, 
    and dynamically displayed the main players of the tournament using javascript.`,
    description2: `This capstone project was assigned to me as a Microverse student. 
    The project seeks to test my knowledge of Html5, Css3, and Javascript. 
    In the project, I created two pages for a soccer tournament, a mobile menu for the mobile version, 
    and dynamically displayed the main players of the tournament using javascript.`,
    technologies: ['css', 'html', 'bootstrap', 'JS'],
    image: {
      imageUrl: './Images/HTML-CAPSTONE.png',
      imageUrl2: './Images/HTML-CAPSTONE.png',
      imageAltText: 'HTML-CSS Capstone Project',
    },
    links: ['https://gambit142.github.io/Html-Css-javaScript-Capstone/', 'https://github.com/Gambit142/Html-Css-javaScript-Capstone'],
  },
  {
    name: 'Todo-List',
    number: 2,
    description: `The to-do list project is an web interface that allows users to successfully organize their day 
    by inputting prioritized tasks. The project also allows users to carry out the CRUD operations for 
    add, edit and delete. Two special features of the app are that it saves tasks in the local storage 
    of the user's browser, and it allows users to prioritize their tasks by dragging up and down the list section.`,
    description2: `The to-do list project is an app that allows users to successfully organize their day 
    by inputting prioritized tasks. The project also allows users to carry out the CRUD operations for 
    add, edit and delete. Two special features of the web interface are that it saves tasks in the local storage 
    of the user's browser, and it allows users to prioritize their tasks by dragging up and down the list section.`,
    technologies: ['css', 'html', 'bootstrap', 'JS'],
    image: {
      imageUrl: './Images/To-Do-List-Project.png',
      imageUrl2: './Images/To-Do-List-Project.png',
      imageAltText: 'To-do List project',
    },
    links: [' https://gambit142.github.io/To-Do-List-Project/', 'https://github.com/Gambit142/To-Do-List-Project'],
  },
  {
    name: 'Multi-Post Stories 3',
    number: 3,
    description: `A daily selection of privately personalized reads; no accounts
          or sign-ups required. has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a
          standard dummy text.`,
    description2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. 
          Lorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.`,
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    image: {
      imageUrl: './Images/Snapshoot-Image.png',
      imageUrl2: './Images/Snapshoot-Image2.png',
      imageAltText: 'project 3 placeholder image',
    },
    links: [' https://gambit142.github.io/Template-Portfolio/', 'https://github.com/Gambit142/Template-Portfolio'],
  },
  {
    name: 'Multi-Post Stories 4',
    number: 4,
    description: `A daily selection of privately personalized reads; no accounts
    or sign-ups required. has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a
          standard dummy text.`,
    description2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea. 
          Lorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.`,
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    image: {
      imageUrl: './Images/Snapshoot-Image.png',
      imageUrl2: './Images/Snapshoot-Image2.png',
      imageAltText: 'project 4 placeholder image',
    },
    links: [' https://gambit142.github.io/Template-Portfolio/', 'https://github.com/Gambit142/Template-Portfolio'],
  },
];

// // Create the cards section dynamically using string literals
function createCard1(project) {
  const cardString = `<section class="work-container">
  <article class="cards-container reverse-div${project.number} display-flex">
    <div class="placeholder">
    <img class="project-snapshot1" src="${project.image.imageUrl}" alt="${project.image.imageAltText}"/>
    </div>
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
        <button data-target="modal${project.number}" type="button" class="see-project">
          See Project
        </button>
      </div>
    </div>
  </article>
</section>`;
  return cardString;
}

function createModal(project) {
  const modalInner = `
<div class="pop-up-container display-flex" id="modal${project.number}">
<div class="title-container display-flex style">
  <h2>${project.name}</h2>
  <img class="closing-button" src="./Images/Closing-Icon.png" alt="Closing Icon">
</div>
<div class="image-placeholder display-flex">
  <img class="snapshot1" src="${project.image.imageUrl}" alt="${project.image.imageAltText}">
  <img class="snapshot2" src= "${project.image.imageUrl2}" alt="${project.image.imageAltText}">
</div>
<div class="card-description display-flex">
  <p class="card-text style">${project.description2}</p>
</div>
<div class="card-badges display-flex">
  <h4 class="badge html">${project.technologies[0]}</h4>
  <h4 class="badge">${project.technologies[1]}</h4>
  <h4 class="badge">${project.technologies[2]}</h4>
  <h4 class="badge github">${project.technologies[3]}</h4>
</div>
<div class="links-div display-flex">
  <a href= ${project.links[0]} class="live-link">
    See Live
    <img class="live-icon" src="./Images/Live-Icon.png" alt="Live Icon">
  </a>
  <a href= ${project.links[1]} class="source-link">See Source
    <img class="github-icon" src="./Images/Github-Logo.png" alt="Github Icon">
  </a>
</div>
</div>`;
  return modalInner;
}

const projectContainer = document.querySelector('main');

projects.forEach((card) => {
  projectContainer.innerHTML += createCard1(card);
});

const modalContainer = document.getElementById('modal-container');

projects.forEach((modal) => {
  modalContainer.innerHTML += createModal(modal);
});

// Create functions that opens and close the popup window when see-project button is clicked
const projectButtons = document.querySelectorAll('.see-project');

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentModal = document.getElementById(button.dataset.target);
    currentModal.classList.add('active');
  });
});

const closingButtons = document.querySelectorAll('.closing-button');

closingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentModal = document.querySelector('.active');
    currentModal.classList.remove('active');
  });
});
