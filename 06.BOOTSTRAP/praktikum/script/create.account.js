(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault()
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

document.getElementById('createAccountForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const genderElement = document.querySelector('input[name="flexRadioDefault"]:checked');
  const gender = genderElement ? genderElement.value : null;
  const address = document.getElementById('address').value.trim();
  const nationality = document.getElementById('nationality').value.trim();
  const languageElements = document.querySelectorAll('input[id="language"]:checked');
  const language = Array.from(languageElements).map(element => element.value).join(', ');

  console.log("firstName: " + firstName);
  console.log("lastName: " + lastName);
  console.log("username: " + username);
  console.log("email: " + email);
  console.log("gender: " + gender);
  console.log("address: " + address);
  console.log("nationality: " + nationality);
  console.log("language: " + language);

  if (!firstName || !lastName || !username || !email || !gender || !address || !nationality || !language) {
    const alertContainer = document.getElementById('alertContainer');
    alertContainer.innerHTML = `
      <div class="col-lg-7 col pt-5 mt-5 mx-auto">
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Something went wrong!</strong> Please fill out all required fields.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    `;
    alertContainer.classList.remove('d-none');
    } else {
    alertContainer.innerHTML = `
    <div class="col-lg-7 col pt-5 mt-5 mx-auto">
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Your form has been submitted successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
    `;
    alertContainer.classList.remove('d-none');
    }
});