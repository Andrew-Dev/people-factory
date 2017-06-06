const personForm = document.querySelector('#personForm');

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const heading = document.querySelector('h1');
    const fullName = form.firstName.value + " " + form.lastName.value;
    heading.textContent = fullName;
}

personForm.addEventListener('submit',handleSubmit);