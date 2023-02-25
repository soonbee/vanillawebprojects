let form = document.getElementsByTagName('form')[0];
let username = document.getElementsByName('username')[0];
let email = document.getElementsByName('email')[0];
let password = document.getElementsByName('password')[0];
let confirmPassword = document.getElementsByName('confirm')[0];

/**
 * 
 * @param {string} value 
 * @returns {string}
 */
function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * 
 * @param {HTMLElement} target 
 * @returns {boolean}
 */
function checkRequired(target) {
  if (!target.value) {
    let parent = target.parentElement;
    parent.classList.add('error');

    let name = target.getAttribute('name');
    let message = parent.getElementsByClassName('error-message')[0];
    message.textContent = `${capitalize(name)} is required.`;
    return false;
  }
  return true;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let valid = true;
  valid = checkRequired(username) || valid;
  valid = checkRequired(email) || valid;
  valid = checkRequired(password) || valid;
  valid = checkRequired(confirmPassword) || valid;
  if (valid) {
    // TODO: register user
  }
});

function resetError() {
  let parent = this.parentElement;
  parent.classList.remove('error');
  let message = parent.getElementsByClassName('error-message')[0];
  message.textContent = '';
}

username.addEventListener('input', resetError);
email.addEventListener('input', resetError);
password.addEventListener('input', resetError);
confirmPassword.addEventListener('input', resetError);

