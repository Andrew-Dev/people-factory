const personForm = document.querySelector('#personForm');

function renderColor(color) {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = color;
    colorDiv.style.width = '100px'
    colorDiv.style.height = '50px'
    return colorDiv;
}

function renderListItem(label,value) {
    const li = document.createElement('li');
    li.innerHTML = `${label}: ${value}`;
    return li;
}
function renderList(personData) {
    const list = document.createElement('ul');
    Object.keys(personData).map(function(label) {
        const item = renderListItem(label, personData[label]);
        list.appendChild(item);
    });
    return list;
}

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const heading = document.querySelector('h1');
    
    const details = document.querySelector('#details');

    const fullName = form.firstName.value + ' ' + form.lastName.value;

    const person = {
        name: form.firstName.value + ' ' + form.lastName.value,
        favoriteColor: renderColor(form.favoriteColor.value).outerHTML,
        secondFavoriteColor: renderColor(form.secondFavoriteColor.value).outerHTML,
        favoriteFood: form.favoriteFood.value,
        age: form.age.value,
    }

    details.appendChild(renderList(person))

}

personForm.addEventListener('submit',handleSubmit);