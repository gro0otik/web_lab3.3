export function createButton() {
    const btn = document.createElement('button');
    btn.textContent = 'Удали меня';
    btn.addEventListener('click', () => {
        btn.remove();
    });
    document.body.appendChild(btn);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');
    arr.forEach(itemText => {
        const li = document.createElement('li');
        li.textContent = itemText;
        li.addEventListener('mouseover', () => {
            li.setAttribute('title', li.textContent);
        });
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';
    let clickCount = 0;  
    a.addEventListener('click', (event) => {
        if (clickCount === 0) {
            event.preventDefault();
            a.textContent += ' ' + a.href;
            clickCount++;
        }
    });
    document.body.appendChild(a);
}

export function createList() {
    const ul = document.createElement('ul');
    const firstLi = document.createElement('li');
    firstLi.textContent = 'Пункт';
    ul.appendChild(firstLi);
    const btn = document.createElement('button');
    btn.textContent = 'Добавить пункт';
    ul.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.textContent += '!';
        }
    });
    btn.addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        ul.appendChild(newLi);
    });
    document.body.appendChild(ul);
    document.body.appendChild(btn);
}
