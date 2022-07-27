const listWrapperEl = document.querySelector('.list-wrapper');
listWrapperEl.innerHTML = '';

const forShoppingList = [
    'carne',
    'uova',
    'formaggio',
    'pizza x2'
];

const whileShoppingList = [
    'biscotti x2',
    'acqua x6',
    'pasta x2'
];

const forButton = document.querySelector('input[value="ciclo for"]')
forButton.addEventListener('click', function () {
    for (let i = 0; i < forShoppingList.length; i++) {
        const listItem = forShoppingList[i];
        listWrapperEl.innerHTML += `<li>${listItem}</li>`;
    }
});

const whileButton = document.querySelector('input[value="ciclo while"]')
whileButton.addEventListener('click', function () {
    let i = 0;

    while (i < whileShoppingList.length) {
        const listItem = whileShoppingList[i];
        listWrapperEl.innerHTML += `<li>${listItem}</li>`;
    
        i++;
    }
});