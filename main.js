// Create object to store data needed for the this branch feature
const projects = {
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
// Create the modal section using string literals
const cards = `<div class="pop-up-container display-flex" id="modal-content">
    <div class="title-container display-flex style">
      <h2>${projects.name}</h2>
      <img id="closing-button" src= ${projects.featuredImage.image1} alt="Closing Icon">
    </div>
    <div class="image-placeholder display-flex">
      <img class="snapshot1" src= ${projects.featuredImage.image2} alt="Snapshot of a card design">
      <img class="snapshot2" src= ${projects.featuredImage.image3} alt="Snapshot of a card design">
    </div>
    <div class="card-description display-flex">
      <p class="card-text style">${projects.description}</p>
    </div>
    <div class="card-badges display-flex">
      <h4 class="badge html">${projects.technologies[0]}</h4>
      <h4 class="badge">${projects.technologies[1]}</h4>
      <h4 class="badge">${projects.technologies[2]}</h4>
      <h4 class="badge github">${projects.technologies[3]}</h4>
    </div>
    <div class="links-div display-flex">
      <a href= ${projects.links[0]} class="live-link">
        See Live
        <img class="live-icon" src=${projects.featuredImage.image4} alt="Live Icon">
      </a>
      <a href= ${projects.links[1]} class="source-link">
        See Source
        <img class="github-icon" src=${projects.featuredImage.image5} alt="Github Icon">
      </a>
    </div>
  </div>`;
// Create functions that opens and close the popup window when see-project button is clicked
const workArea = document.getElementById('modal-container');
workArea.innerHTML = cards;
function displayModal() {
  workArea.style.display = 'block';
}
const projectButtons = document.querySelectorAll('.see-project');
projectButtons.forEach((button) => {
  button.addEventListener('click', displayModal);
});
const closingButton = document.getElementById('closing-button');
function closeModal() {
  workArea.style.display = 'none';
}
closingButton.addEventListener('click', closeModal);