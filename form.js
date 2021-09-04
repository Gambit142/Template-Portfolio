const emailAddress = document.getElementById('user_email');
const fullName = document.getElementById('user_name');
const textMessage = document.getElementById('user_message');
const templateForm = document.getElementById('form');
const validatorMessage = document.getElementById('validator-message');
templateForm.addEventListener('submit', (e) => {
  if (emailAddress.value !== emailAddress.value.toLowerCase()) {
    e.preventDefault();
    validatorMessage.textContent = 'Kindly input email in lowercase';
  } else {
    validatorMessage.textContent = '';
  }
});



