console.log('Hello World')

const myElements = document.querySelectorAll('.myClass');
myElements.forEach(element => {element.addEventListener('click', run);});

function run() {
    console.log('Hello Again')
}

