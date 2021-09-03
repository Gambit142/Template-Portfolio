// // Create object to store data needed for the this branch feature
const projects = [
  {
    name: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts
          or sign-ups required. has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a
          standard dummy text.`,
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
  },
  {
    name: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts
          or sign-ups required. has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a
          standard dummy text.`,
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
  },
  {
    name: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts
          or sign-ups required. has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a
          standard dummy text.`,
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
  },
  {
    name: 'Multi-Post Stories',
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
  <article class="cards-container display-flex">
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
const workArea = document.querySelector('.container');
const projectButtons = document.querySelectorAll('.see-project');
projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    workArea.style.display = 'block';
  });
});

const closingButtons = document.querySelector('.closing-button');
closingButtons.addEventListener('click', () => {
  workArea.style.display = 'none';
});
