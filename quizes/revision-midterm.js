window.onload = function () {
    const form = document.querySelector('form');
    const button = document.querySelector('button');
    form.addEventListener('submit', (e) => {
        console.log('event 1');
        // e.returnValue = false;
        return false;
    });

    button.addEventListener('click', (e) => {
        e.preventDefault();
        // e.stopPropagation();
        console.log('event 2');
        // e.returnValue = false;
    });
}