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
    name: 'Seafood Restaurant',
    number: 3,
    description: `This is a Seafood Restaurant's website that showcases different seafood meals to users,
           users can like the meals, book their reservations and add comments to each meal. 
           Meals are fetched from themealdb API and comments and reservations are fetched from an Involvement API`,
    description2: `This is a Seafood Restaurant's website that showcases different seafood meals to users,
    users can like the meals, book their reservations and add comments to each meal. 
    Meals are fetched from themealdb API and comments and reservations are fetched from an Involvement API`,
    technologies: ['javascript', 'css', 'html', 'webpack'],
    image: {
      imageUrl: './Images/Seafood-Restaurant.png',
      imageUrl2: './Images/Seafood-Restaurant.png',
      imageAltText: 'project 3 placeholder image',
    },
    links: ['https://ahmed-al-farouq.github.io/Seafood-Restaurant/', 'https://github.com/ahmed-al-farouq/Seafood-Restaurant'],
  },
  {
    name: 'Math Magicians',
    number: 4,
    description: `This is a Single Page App (SPA) that allows lovers of Mathematics make simple calculations.
          The app has thre pages; 'The Home', 'Calculator' and 'Quotes' pages. 
          On the calculator page, the user can perform addition, subtraction, division and multiplication of numbers.
          The quotes pages displays random mathematical quotes by great historians.`,
    description2: `This is a Single Page App (SPA) that allows lovers of Mathematics make simple calculations.
    The app has thre pages; 'The Home', 'Calculator' and 'Quotes' pages. 
    On the calculator page, the user can perform addition, subtraction, division and multiplication of numbers.
    The quotes pages displays random mathematical quotes by great historians.`,
    technologies: ['reactjs', 'css', 'webpack', 'babel'],
    image: {
      imageUrl: './Images/Math-Magicians.png',
      imageUrl2: './Images/Math-Magicians.png',
      imageAltText: 'project 4 placeholder image',
    },
    links: ['https://gambit142.github.io/Math-Magicians/', 'https://github.com/Gambit142/Math-Magicians'],
  },
];

// Create the cards section dynamically using string literals
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
    <img class="closing-button" src="./Images/Closing-Icon.png" alt="Closing Icon">
      <div class="modal-window modal${project.number}">
        <div class="title-container display-flex style">
          <h2>${project.name}</h2>
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
    const modalWindows = document.querySelectorAll('.modal-window');
    currentModal.classList.add('active');
    modalWindows.forEach((window) => {
      window.classList.remove('remove-zoom');
      window.classList.add('add-zoom');
    });
    currentModal.style.display = 'flex';
  });
});

const closingButtons = document.querySelectorAll('.closing-button');

closingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentModal = document.querySelector('.active');
    const modalWindows = document.querySelectorAll('.modal-window');
    modalWindows.forEach((window) => {
      window.classList.remove('add-zoom');
      window.classList.add('remove-zoom');
    });
    setTimeout(() => {
      currentModal.classList.remove('active');
      currentModal.style.display = 'none';
    }, 1000);
  });
});
