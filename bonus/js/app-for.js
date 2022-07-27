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

for (let i = 0; i < shoppingList.length; i++) {
    const listItem = shoppingList[i];
    listWrapperEl.innerHTML += `<li>${listItem}</li>`;
}