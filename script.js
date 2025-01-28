const list = document.querySelector('ul');
const input = document.querySelector('input');

function addItem() {
    const item = document.createElement('li');
    item.textContent = input.value;
    list.appendChild(item);
    input.value = '';
}