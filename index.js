const personForm = document.querySelector('#personForm');

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const heading = document.querySelector('h1');
    
    const details = document.querySelector('#details');

    const fullName = form.firstName.value + ' ' + form.lastName.value;

    // const boldedName = document.createElement('strong');
    // boldedName.textContent = fullName;

    // details.appendChild(boldedName);

    const favCol = form.favoriteColor.value;
    const comCol = form.secondFavoriteColor.value;
    
    heading.style.color = favCol;
    document.body.style.color = comCol;

    heading.textContent = fullName;

    const favFood = form.favoriteFood.value;
    const introText = document.querySelector('#introText');

    const age = form.age.value;


    const detailList = document.createElement('ul');

    const colorDiv = document.createElement('div');
    colorDiv.setAttribute('style',`background-color: ${favCol}; width: 100px; height: 50px;`);

    function createDetailItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        detailList.appendChild(li);
        return li;
    }

    introText.textContent = `Hello, I am ${age} years old, I like to eat ${favFood} and my favorite colors are shown on this page.`;

    createDetailItem(`Name: ${fullName}`);
    const colorLi = createDetailItem(`Favorite Color:`);
    colorLi.appendChild(colorDiv);
    createDetailItem(`Age: ${age}`);
    createDetailItem(`Favorite Food: ${favFood}`);

    details.innerHTML = "";
    details.appendChild(detailList);

}

personForm.addEventListener('submit',handleSubmit);