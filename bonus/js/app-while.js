const listWrapperEl = document.querySelector('.list-wrapper');
listWrapperEl.innerHTML = '';

const shoppingList = [
    'biscotti x2',
    'acqua x6',
    'pasta x2',
    'carne',
    'uova',
    'formaggio',
    'pizza x2'
];

let i = 0;

while (i < shoppingList.length) {
    const listItem = shoppingList[i];
    listWrapperEl.innerHTML += `<li>${listItem}</li>`;

    i++;
}