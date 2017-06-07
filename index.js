const peopleFactory = {

    init: function(formSelector) {
        const form = document.querySelector(formSelector);
        form.addEventListener('submit',this.handleSubmit.bind(this));
    },

    renderColor: function(color) {
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = color;
        colorDiv.style.width = '100px'
        colorDiv.style.height = '50px'
        return colorDiv;
    },

    renderListItem: function(label,value) {
        const li = document.createElement('li');
        li.innerHTML = `${label}: ${value}`;
        return li;
    },

    renderList: function(personData) {
        const list = document.createElement('ul');
        Object.keys(personData).map((label) => {
            const item = this.renderListItem(label, personData[label]);
            list.appendChild(item);
        });
        return list;
    },

    handleSubmit: function(event) {
        event.preventDefault();
        const form = event.target;
        const heading = document.querySelector('h1');
        
        const details = document.querySelector('#details');

        const fullName = form.firstName.value + ' ' + form.lastName.value;

        const person = {
            name: form.firstName.value + ' ' + form.lastName.value,
            favoriteColor: this.renderColor(form.favoriteColor.value).outerHTML,
            secondFavoriteColor: this.renderColor(form.secondFavoriteColor.value).outerHTML,
            favoriteFood: form.favoriteFood.value,
            age: form.age.value,
        }

        details.appendChild(this.renderList(person))

    },
    
}

peopleFactory.init('#personForm');
//IIFE Immediately invoked function expression