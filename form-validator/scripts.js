let form = document.getElementsByTagName('form')[0];
let username = document.getElementsByName('username')[0];
let email = document.getElementsByName('email')[0];
let password = document.getElementsByName('password')[0];
let passwordConfirm = document.getElementsByName('confirm')[0];

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
 * @param {string} message 
 */
function activateError(target, message) {
  let parentEl = target.parentElement;
  parentEl.classList.add('error');
  let messageEl = parentEl.getElementsByClassName('error-message')[0];
  messageEl.textContent = message;
}

/**
 * 
 * @param {HTMLElement} target 
 * @returns {boolean}
 */
function checkRequired(target) {
  if (!target.value) {
    let name = target.getAttribute('name');
    let message = `${capitalize(name)} is required.`;
    activateError(target, message)
    return false;
  }
  return true;
}

/**
 * 
 * @param {HTMLElement} target 
 * @param {number} min 
 * @param {number} max 
 * @returns {boolean}
 */
function checkLength(target, min, max) {
  let name = target.getAttribute('name');
  if (min && target.value.length < min) {
    activateError(
      target,
      `${capitalize(name)} must be at least ${min} characters.`,
    );
    return false;
  } 
  if (max && target.value.length > max) {
    activateError(
      target,
      `${capitalize(name)} must be less than ${max} characters.`,
    );
    return false;
  }
  return true;
}

/**
 * 
 * @param {HTMLElement} target 
 * @returns {boolean} 
 */
function checkEmail(target) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let result = re.test(target.value);
  if (!result) {
    activateError(target, 'Email is not valid.');
  }
  return result;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let valid = true;
  valid = checkLength(username, 3, 15) || valid;
  valid = checkRequired(email) && checkEmail(email) || valid;
  valid = checkRequired(password) && checkLength(password, 6, 25) || valid;
  valid = checkPasswordConfirm(password, passwordConfirm) || valid;
  if (valid) {
    // TODO: register user
  }
});

/**
 * 
 * @param {HTMLElement} password
 * @param {HTMLElement} passwordConfirm
 * @returns 
 */
function checkPasswordConfirm(password, passwordConfirm) {
  let result = password.value === passwordConfirm.value;
  if (!result) {
    activateError(target, `Password do not match.`);
  }
  return result;
}

function resetError() {
  let parent = this.parentElement;
  parent.classList.remove('error');
  let message = parent.getElementsByClassName('error-message')[0];
  message.textContent = '';
}

username.addEventListener('input', resetError);
email.addEventListener('input', resetError);
password.addEventListener('input', resetError);
passwordConfirm.addEventListener('input', resetError);

