const personForm = document.querySelector('#personForm');

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const heading = document.querySelector('h1');
    heading.textContent = form.personName.value;
}

personForm.addEventListener('submit',handleSubmit);