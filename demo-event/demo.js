window.onload = function () {
    const divParent = document.getElementById('divParent');
    const myLink = document.getElementById('myLink');

    divParent.addEventListener('click', () => {
        console.log('Click Event bubbled');
    });

    myLink.addEventListener('click', (event) => {
        console.log('myLink is clicked #1');

        event.preventDefault();
        event.stopPropagation();
        event.returnValue = false; // = event.preventDefault();
        return false; // does nothing here.
    });

    // myLink.onclick = (event) => {
    //     // event.preventDefault();
    //     // event.stopPropagation();
    //     console.log('myLink is clicked #2');
    //     return false; // = event.preventDefault();
    // };
}