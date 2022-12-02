let nodes = [{ 'russian': 'Привычка - вторая натура', 'latin': 'Consuetudo est altera natura' }, 
{ 'russian': 'Заметьте хорошо!', 'latin': 'Nota bene' }, 
{ 'russian': 'Беда не приходит одна', 'latin': 'Nulla calamitas sola' }, 
{ 'russian': 'Через тернии к звёздам', 'latin': 'Per aspera ad astra' }];

let latin_only = [];
let node_counter = 0;

let button_create = document.querySelector('#create');
let button_fill = document.querySelector('#fill');

let container = document.querySelector('.main-container');

let end = document.querySelector('p#end');

function createNode() {
    if (nodes.length==0) {
        end.textContent = 'Все фразы показаны!';
    } else {
        let random_node = nodes[Math.floor(Math.random() * nodes.length)];

        let node_html = `<div id="${node_counter}" class="node">${random_node.russian}</div>`
        container.insertAdjacentHTML('beforeend', node_html);
        latin_only.push(random_node.latin);
    
        let added_node = container.querySelector('.node:last-child');
        added_node.addEventListener('click', translate);
    
        nodes = nodes.filter((node) => {
            return node.russian!=random_node.russian;
        });
        
        node_counter++;
    }
}

function translate() {
    this.classList.add('translated');
    this.textContent = latin_only[parseInt(this.id)];
}

function fill() {
    let nodes_to_paint = document.querySelectorAll('.node.translated');
    console.log(nodes_to_paint)

    for (let i = 0; i < nodes_to_paint.length; i++) {
        nodes_to_paint[i].style.backgroundColor = 'black';
        nodes_to_paint[i].style.color = 'white';
    }
}

button_create.addEventListener('click', createNode);
button_fill.addEventListener('click', fill);

