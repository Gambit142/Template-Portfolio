// // Create object to store data needed for the this branch feature
const projects = [
  {
    name: 'Book-A-Book',
    number: 1,
    description: `The application enables users to rent a book. 
    The rentals are accomplished when a user makes reservations for a specific book. 
    reservation requires the user to pick a date in the future for renting that particular book 
    as well as indicating the city they live.
    `,
    technologies: ['ROR', 'ReactJS', 'Redux', 'JS'],
    image: {
      imageUrl: './Images/book-a-book.png',
      imageAltText: 'Book-A-Book Screenshot',
    },
    links: ['https://book-a-book-frontend.herokuapp.com/', 'https://github.com/MrBrN197/book-a-book-frontend'],
  },
  {
    name: 'Budget App',
    number: 2,
    description: `The Budget App is a mobile web application where you can manage your budget. 
    In the app, you have a list of transactions associated with a category/categories, 
    so that you can see how much money you spent and on what.`,
    technologies: ['ROR', 'Ruby', 'CanCanCan', 'Devise'],
    image: {
      imageUrl: './Images/budget-app.png',
      imageAltText: 'Budget App Screenshot',
    },
    links: ['https://gambit142-budget-app.herokuapp.com', 'https://github.com/Gambit142/Budget-App'],
  },
  {
    name: 'AirPollution-Report-Centre',
    number: 3,
    description: `This project is a mobile web application that checks a list of air pollutant metrics 
    (numeric values) in Africa. 
    The data used for this project was gotten from https://openweathermap.org/api/air-pollution`,
    technologies: ['ReactJS', 'Redux', 'Webpack', 'Babel'],
    image: {
      imageUrl: './Images/air-pollution-centre.png',
      imageAltText: 'Air Pollution Centre Screenshot',
    },
    links: ['https://air-pollution-centre.herokuapp.com/', 'https://github.com/Gambit142/AirPollution-Report-Centre/'],
  },
  {
    name: 'Seafood Restaurant',
    number: 4,
    description: `This is a Seafood Restaurant's website that showcases different seafood meals to users,
           users can like the meals, book their reservations and add comments to each meal. 
           Meals are fetched from themealdb API and comments and reservations are fetched from an Involvement API`,
    description2: `This is a Seafood Restaurant's website that showcases different seafood meals to users,
    users can like the meals, book their reservations and add comments to each meal. 
    Meals are fetched from themealdb API and comments and reservations are fetched from an Involvement API`,
    technologies: ['Javascript', 'CSS', 'HTML', 'Webpack'],
    image: {
      imageUrl: './Images/Seafood-Restaurant.png',
      imageAltText: 'project 3 placeholder image',
    },
    links: ['https://ahmed-al-farouq.github.io/Seafood-Restaurant/', 'https://github.com/ahmed-al-farouq/Seafood-Restaurant'],
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
          <img class="snapshot2" src= "${project.image.imageUrl}" alt="${project.image.imageAltText}">
        </div>
        <div class="card-description display-flex">
          <p class="card-text style">${project.description}</p>
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
