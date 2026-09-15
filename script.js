document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('apply-form');
const successBox = document.getElementById('form-success');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // NOTE: This form currently does not send data anywhere.
  // Connect it to a real backend by either:
  //  1. Using a form service (Formspree, Netlify Forms, Getform, etc.)
  //     and setting form.action to their endpoint, then removing
  //     e.preventDefault() above (or handling their fetch response), or
  //  2. Sending the data yourself via fetch() to your own API endpoint.

  form.hidden = true;
  successBox.hidden = false;
  successBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
