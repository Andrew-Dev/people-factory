const personForm = document.querySelector('#personForm');

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const heading = document.querySelector('h1');
    
    const details = document.querySelector('#details');

    const fullName = form.firstName.value + ' ' + form.lastName.value;

    details.innerHTML = `<strong>${fullName}</strong>`;

    const favCol = form.favoriteColor.value;
    const comCol = form.secondFavoriteColor.value;
    
    document.body.style.backgroundColor = favCol;
    document.body.style.color = comCol;

    heading.textContent = fullName;

    const favFood = form.favoriteFood.value;
    const introText = document.querySelector('#introText');
    introText.textContent = 'Hello, I like ' + favFood + ' and my favorite colors are shown on this page.';
}

personForm.addEventListener('submit',handleSubmit);