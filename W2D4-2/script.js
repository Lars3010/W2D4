const bigFiveButtons = document.querySelectorAll('.big-five-button');
const spottedAnimalList = document.getElementById('spotted-animals-list');
const removeFirstButton = document.getElementById('remove-first-item-button');
const removeAllButton = document.getElementById('remove-all-button');

const createNewListElement = (list, animal) => {
    const newListItem = document.createElement('li');
    const textNode = document.createTextNode(animal);
    newListItem.classList.add('spotted-animals-list-item');
    newListItem.appendChild(textNode);
    list.appendChild(newListItem);
}

const removeFirstItem = () => {
    spottedAnimalList.firstElementChild.remove();
}

const removeAllItems = () => {
    spottedAnimalList.querySelectorAll('*').forEach(item => item.remove());
}
    
const bigFiveClick = (event) => {
    const pressedButton = event.target.value;
    createNewListElement(spottedAnimalList, pressedButton);
}

bigFiveButtons.forEach(button => {
    button.addEventListener('click', () => bigFiveClick(event));
});

removeFirstButton.addEventListener('click', removeFirstItem);
removeAllButton.addEventListener('click', removeAllItems);